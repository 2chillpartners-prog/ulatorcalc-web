import { Resend } from "resend";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { SUPPORT_EMAIL } from "@/lib/constants";
import type { FeedbackInput } from "@/lib/types/feedback";

type SmtpOptions = SMTPTransport.Options;

const M365_HOST = "smtp.office365.com";
const GODADDY_HOST = "smtpout.secureserver.net";
const DEFAULT_SMTP_HOST = M365_HOST;
const DEFAULT_SMTP_PORT = 587;

function env(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

function buildFeedbackEmail(input: FeedbackInput) {
  const name = input.name?.trim() || undefined;
  const trade = input.trade.trim();
  const frustration = input.frustration.trim();
  const mustHave = input.mustHave.trim();
  const email = input.email?.trim() || undefined;

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

  return {
    subject: `TB Logic Feedback — ${trade}`,
    text: lines.join("\n"),
    replyTo: email,
  };
}

function getResendFromAddress(): string {
  return env("RESEND_FROM") || `TB Logic Website <${SUPPORT_EMAIL}>`;
}

export function isResendConfigured(): boolean {
  return Boolean(env("RESEND_API_KEY"));
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

function getConfiguredSmtpHost(): string {
  return env("SMTP_HOST") || DEFAULT_SMTP_HOST;
}

function getConfiguredSmtpPort(): number {
  const port = Number(env("SMTP_PORT") || DEFAULT_SMTP_PORT);
  return Number.isFinite(port) ? port : DEFAULT_SMTP_PORT;
}

export function isSmtpConfigured(): boolean {
  return buildTransportOptions(getConfiguredSmtpHost(), getConfiguredSmtpPort()) !== null;
}

export function isSupportEmailConfigured(): boolean {
  return isResendConfigured() || isSmtpConfigured();
}

function getSmtpTransportAttempts(): SmtpOptions[] {
  const primaryPort = getConfiguredSmtpPort();
  const configuredHost = getConfiguredSmtpHost();
  const hosts =
    configuredHost === GODADDY_HOST
      ? [configuredHost, M365_HOST]
      : configuredHost === M365_HOST
        ? [configuredHost]
        : [configuredHost, M365_HOST, GODADDY_HOST];

  const attempts: SmtpOptions[] = [];

  for (const host of [...new Set(hosts)]) {
    const ports =
      host === M365_HOST
        ? [587]
        : primaryPort === 587 || primaryPort === 465
          ? [primaryPort, primaryPort === 587 ? 465 : 587]
          : [587, 465];

    for (const port of ports) {
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

async function sendViaResend(input: FeedbackInput): Promise<boolean> {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const mail = buildFeedbackEmail(input);

  const { error } = await resend.emails.send({
    from: getResendFromAddress(),
    to: [SUPPORT_EMAIL],
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
  });

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

async function sendViaSmtp(input: FeedbackInput): Promise<boolean> {
  const attempts = getSmtpTransportAttempts();
  if (attempts.length === 0) return false;

  const mail = buildFeedbackEmail(input);
  const fromAddress = env("SMTP_FROM") || env("SMTP_USER")!;
  const from = `TB Logic Website <${fromAddress}>`;

  let lastError: unknown;

  for (const options of attempts) {
    try {
      const transporter = nodemailer.createTransport(options);
      await transporter.sendMail({
        from,
        to: SUPPORT_EMAIL,
        replyTo: mail.replyTo,
        subject: mail.subject,
        text: mail.text,
      });
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

export async function sendFeedbackNotification(input: FeedbackInput): Promise<boolean> {
  const errors: string[] = [];

  if (isResendConfigured()) {
    try {
      return await sendViaResend(input);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`Resend: ${message}`);
      console.error("Resend send failed:", message);
    }
  }

  if (isSmtpConfigured()) {
    try {
      return await sendViaSmtp(input);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`SMTP: ${message}`);
      console.error("SMTP send failed:", message);
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join(" | "));
  }

  return false;
}
