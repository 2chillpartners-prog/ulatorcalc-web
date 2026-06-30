import nodemailer from "nodemailer";
import { SUPPORT_EMAIL } from "@/lib/constants";
import type { FeedbackInput } from "@/lib/types/feedback";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT || 465);
  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

export function isSupportEmailConfigured(): boolean {
  return getSmtpConfig() !== null;
}

export async function sendFeedbackNotification(input: FeedbackInput): Promise<boolean> {
  const smtp = getSmtpConfig();
  if (!smtp) return false;

  const name = input.name?.trim() || undefined;
  const trade = input.trade.trim();
  const frustration = input.frustration.trim();
  const mustHave = input.mustHave.trim();
  const email = input.email?.trim() || undefined;

  const transporter = nodemailer.createTransport(smtp);
  const from = process.env.SMTP_FROM || smtp.auth.user;

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

  await transporter.sendMail({
    from,
    to: SUPPORT_EMAIL,
    replyTo: email,
    subject: `ulator-Calc Feedback — ${trade}`,
    text: lines.join("\n"),
  });

  return true;
}
