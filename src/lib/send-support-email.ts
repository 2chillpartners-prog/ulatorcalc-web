import nodemailer from "nodemailer";
import { SUPPORT_EMAIL } from "@/lib/constants";
import type { FeedbackEntry } from "@/lib/types/feedback";

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

export async function sendFeedbackNotification(entry: FeedbackEntry): Promise<boolean> {
  const smtp = getSmtpConfig();
  if (!smtp) return false;

  const transporter = nodemailer.createTransport(smtp);
  const from = process.env.SMTP_FROM || smtp.auth.user;

  const lines = [
    `New feedback from ${entry.name || "Anonymous"}`,
    "",
    `Trade: ${entry.trade}`,
    `Frustration: ${entry.frustration}`,
    "",
    "Must-have feature:",
    entry.mustHave,
    "",
    entry.email ? `Reply to: ${entry.email}` : "No reply email provided",
    "",
    `Submitted: ${entry.createdAt}`,
    `ID: ${entry.id}`,
  ];

  await transporter.sendMail({
    from,
    to: SUPPORT_EMAIL,
    replyTo: entry.email || undefined,
    subject: `ulator-Calc Feedback — ${entry.trade}`,
    text: lines.join("\n"),
  });

  return true;
}
