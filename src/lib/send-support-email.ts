import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { SUPPORT_EMAIL } from "@/lib/constants";
import type { FeedbackInput } from "@/lib/types/feedback";

type SmtpOptions = SMTPTransport.Options;

function env(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

function buildTransportOptions(port: number): SmtpOptions | null {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  if (!host || !user || !pass) return null;

  return {
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 15_000,
    tls: { minVersion: "TLSv1.2" },
  };
}

function getConfiguredPort(): number {
  const port = Number(env("SMTP_PORT") || 587);
  return Number.isFinite(port) ? port : 587;
}

export function isSupportEmailConfigured(): boolean {
  return buildTransportOptions(getConfiguredPort()) !== null;
}

function getTransportAttempts(): SmtpOptions[] {
  const primaryPort = getConfiguredPort();
  const attempts: SmtpOptions[] = [];

  const primary = buildTransportOptions(primaryPort);
  if (primary) attempts.push(primary);

  const alternatePort = primaryPort === 465 ? 587 : 465;
  const alternate = buildTransportOptions(alternatePort);
  if (alternate && alternatePort !== primaryPort) {
    const alreadyIncluded = attempts.some(
      (options) => options.port === alternate.port && options.host === alternate.host
    );
    if (!alreadyIncluded) attempts.push(alternate);
  }

  return attempts;
}

export async function sendFeedbackNotification(input: FeedbackInput): Promise<boolean> {
  const attempts = getTransportAttempts();
  if (attempts.length === 0) return false;

  const name = input.name?.trim() || undefined;
  const trade = input.trade.trim();
  const frustration = input.frustration.trim();
  const mustHave = input.mustHave.trim();
  const email = input.email?.trim() || undefined;

  const fromAddress = env("SMTP_FROM") || env("SMTP_USER")!;
  const from = `ulator-Calc Website <${fromAddress}>`;

  const lines = [
    `New feedback from ${name || "Anonymous"}`,
    "",
    `Trade: ${trade}`,
    `Frustration: ${frustration}`,
    "",
    "Must-have feature:",
    mustHave,
    "",
    email ? `Reply to: ${email}` : "No reply email provided",
    "",
    `Submitted: ${new Date().toISOString()}`,
  ];

  const mail = {
    from,
    to: SUPPORT_EMAIL,
    replyTo: email,
    subject: `ulator-Calc Feedback — ${trade}`,
    text: lines.join("\n"),
  };

  let lastError: unknown;

  for (const options of attempts) {
    try {
      const transporter = nodemailer.createTransport(options);
      await transporter.sendMail(mail);
      return true;
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      console.error(
        `SMTP send failed (host=${options.host}, port=${options.port}):`,
        message
      );
    }
  }

  throw lastError;
}
