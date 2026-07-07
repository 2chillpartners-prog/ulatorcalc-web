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

const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
const hasSmtp = Boolean(
  process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim()
);

console.log("Feedback email configuration:");
console.log(`  Resend: ${hasResend ? "configured" : "not set"}`);
console.log(`  SMTP:   ${hasSmtp ? "configured" : "not set"}`);

if (!hasResend && !hasSmtp) {
  console.error(
    "\nNo email provider configured. Add RESEND_API_KEY or SMTP_USER + SMTP_PASS to .env.local"
  );
  process.exit(1);
}

if (hasResend) {
  console.log("\nResend is the recommended provider for Vercel.");
  console.log("Verify toolbeltlogic.com in Resend, then add RESEND_API_KEY to Vercel.");
}

if (hasSmtp) {
  console.log("\nTo test SMTP locally, run: npm run test:smtp");
}

console.log("\nReady. Submit a test at http://localhost:3000/feedback");
