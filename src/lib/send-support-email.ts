import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { SUPPORT_EMAIL } from "@/lib/constants";
import type { FeedbackInput } from "@/lib/types/feedback";

type SmtpOptions = SMTPTransport.Options;

const M365_HOST = "smtp.office365.com";
const GODADDY_HOST = "smtpout.secureserver.net";
const DEFAULT_HOST = M365_HOST;
const DEFAULT_PORT = 587;

function env(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

function buildTransportOptions(host: string, port: number): SmtpOptions | null {
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  if (!user || !pass) return null;

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

function getConfiguredHost(): string {
  return env("SMTP_HOST") || DEFAULT_HOST;
}

function getConfiguredPort(): number {
  const port = Number(env("SMTP_PORT") || DEFAULT_PORT);
  return Number.isFinite(port) ? port : DEFAULT_PORT;
}

export function isSupportEmailConfigured(): boolean {
  return buildTransportOptions(getConfiguredHost(), getConfiguredPort()) !== null;
}

function getHostAttempts(): string[] {
  const configured = getConfiguredHost();
  const hosts = [configured];

  if (configured === GODADDY_HOST) hosts.push(M365_HOST);
  if (configured === M365_HOST) hosts.push(GODADDY_HOST);

  return [...new Set(hosts)];
}

function getPortAttempts(host: string, primaryPort: number): number[] {
  if (host === M365_HOST) return [587];

  if (primaryPort === 587 || primaryPort === 465) {
    return primaryPort === 587 ? [587, 465] : [465, 587];
  }

  return [587, 465];
}

function getTransportAttempts(): SmtpOptions[] {
  const primaryPort = getConfiguredPort();
  const attempts: SmtpOptions[] = [];

  for (const host of getHostAttempts()) {
    for (const port of getPortAttempts(host, primaryPort)) {
      const options = buildTransportOptions(host, port);
      if (!options) continue;

      const duplicate = attempts.some(
        (existing) => existing.host === options.host && existing.port === options.port
      );
      if (!duplicate) attempts.push(options);
    }
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
  const from = `TB Logic Website <${fromAddress}>`;

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
    subject: `TB Logic Feedback — ${trade}`,
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
