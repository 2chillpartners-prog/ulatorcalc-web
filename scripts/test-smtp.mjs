import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { resolve } from "path";

const M365_HOST = "smtp.office365.com";
const GODADDY_HOST = "smtpout.secureserver.net";

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

const host = process.env.SMTP_HOST?.trim() || M365_HOST;
const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS?.trim();
const port = Number(process.env.SMTP_PORT?.trim() || 587);

if (!user || !pass) {
  console.error("Missing SMTP_USER or SMTP_PASS in .env.local or environment.");
  process.exit(1);
}

async function trySend(testHost, testPort) {
  const transporter = nodemailer.createTransport({
    host: testHost,
    port: testPort,
    secure: testPort === 465,
    requireTLS: testPort === 587,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 15_000,
    tls: { minVersion: "TLSv1.2" },
  });

  console.log(`Testing ${testHost}:${testPort}...`);
  await transporter.verify();
  console.log("  verify OK");

  await transporter.sendMail({
    from: `SMTP Test <${user}>`,
    to: user,
    subject: "ulator-Calc SMTP test",
    text: "If you received this, SMTP is working.",
  });
  console.log("  send OK");
}

async function main() {
  const hosts =
    host === GODADDY_HOST
      ? [host, M365_HOST]
      : host === M365_HOST
        ? [host]
        : [host, M365_HOST, GODADDY_HOST];

  for (const testHost of [...new Set(hosts)]) {
    const ports =
      testHost === M365_HOST
        ? [587]
        : port === 587 || port === 465
          ? [port, port === 587 ? 465 : 587]
          : [587, 465];

    for (const testPort of ports) {
      try {
        await trySend(testHost, testPort);
        console.log(
          `\nSuccess on ${testHost}:${testPort}. Use SMTP_HOST=${testHost} and SMTP_PORT=${testPort} in Vercel.`
        );
        return;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`  failed: ${message}\n`);
      }
    }
  }

  console.error("All SMTP attempts failed.");
  console.error("Microsoft 365: smtp.office365.com port 587");
  console.error("GoDaddy Workspace: smtpout.secureserver.net port 587");
  console.error("If MFA is enabled, create an app password in Microsoft 365.");
  process.exit(1);
}

main();
