export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
  "https://apps.apple.com/us/app/tb-logic/id6783934469";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() ||
  "https://play.google.com/store/apps/details?id=com.ulatorcalc.app";
export const SUPPORT_EMAIL = "support@toolbeltlogic.com";
export const SITE_URL = "https://www.toolbeltlogic.com";
export const APP_NAME = "TB Logic";
export const APP_NAME_FULL = "Tool Belt Logic";
export const BRAND_BADGE = "By Construction Pros for Construction Pros";
export const TAGLINE = "Every ToolBelt needs Logic";
export const TAGLINE_SUB =
  "Exact feet, inches, and fractions — built by construction workers for construction workers. Whether you're framing walls or pouring slabs, this is your calculator.";

export const TRADE_MODES = [
  { name: "Construction", icon: "🏗️", slug: "construction" },
  { name: "Plain", icon: "🔢", slug: "plain" },
] as const;

export const PRO_MONTHLY = "$5.99";
export const PRO_YEARLY = "$65.99";
export const PRO_YEARLY_SAVINGS_PERCENT = Math.round(
  (1 - 65.99 / (5.99 * 12)) * 100
);
export const FREE_TRIAL_DAYS = 7;
export const LANGUAGE_COUNT = 8;

export const SUBSCRIPTION_BILLING_SUMMARY = `${APP_NAME} Pro is available on iOS (App Store) and Android (Google Play). Subscriptions are billed through Apple or Google in-app purchases, depending on where you subscribed. We do not receive or store your payment information.`;

export const SUBSCRIPTION_TRIAL_NOTE = `${FREE_TRIAL_DAYS}-day free trial on App Store and Google Play. Cancel anytime through the store where you subscribed.`;

export const SUBSCRIPTION_CANCEL_SUMMARY = `You keep Pro access until the end of your billing period after cancelling. iPhone/iPad: Settings → Apple ID → Subscriptions → ${APP_NAME}. Android: Google Play → Profile → Payments & subscriptions → Subscriptions → ${APP_NAME}.`;
