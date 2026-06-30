import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { resolve } from "path";

function loadEnvLocal() {
  try {
    const raw = readFileSync(resolve(".env.local"), "utf-8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env.local optional for this script
  }
}

loadEnvLocal();

const host = process.env.SMTP_HOST?.trim();
const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS?.trim();
const port = Number(process.env.SMTP_PORT?.trim() || 587);

if (!host || !user || !pass) {
  console.error("Missing SMTP_HOST, SMTP_USER, or SMTP_PASS in .env.local or environment.");
  process.exit(1);
}

async function trySend(testPort: number) {
  const transporter = nodemailer.createTransport({
    host,
    port: testPort,
    secure: testPort === 465,
    requireTLS: testPort === 587,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 15_000,
    tls: { minVersion: "TLSv1.2" },
  });

  console.log(`Testing ${host}:${testPort}...`);
  await transporter.verify();
  console.log(`  verify OK`);

  await transporter.sendMail({
    from: `SMTP Test <${user}>`,
    to: user,
    subject: "ulator-Calc SMTP test",
    text: "If you received this, SMTP is working.",
  });
  console.log(`  send OK`);
}

async function main() {
  const ports = port === 587 || port === 465 ? [port, port === 587 ? 465 : 587] : [587, 465];

  for (const testPort of ports) {
    try {
      await trySend(testPort);
      console.log(`\nSuccess on port ${testPort}. Use SMTP_PORT=${testPort} in Vercel.`);
      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`  failed: ${message}\n`);
    }
  }

  console.error("All SMTP attempts failed. Check password and GoDaddy mailbox type.");
  console.error("GoDaddy Workspace: smtpout.secureserver.net");
  console.error("Microsoft 365 via GoDaddy: smtp.office365.com port 587");
  process.exit(1);
}

main();
