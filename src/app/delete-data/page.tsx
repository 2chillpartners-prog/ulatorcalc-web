import type { Metadata } from "next";
import { SUPPORT_EMAIL, APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Delete Your Data",
  description: `How to request data deletion for ${APP_NAME}.`,
};

const steps = [
  {
    title: "Calculation history",
    description: `Your calculations are stored only on your device. Open ${APP_NAME} → Settings → Clear History. This permanently removes all local data.`,
  },
  {
    title: "Pro subscription",
    description: `Subscriptions are managed by Apple. Go to iPhone Settings → Apple ID → Subscriptions → ${APP_NAME} → Cancel Subscription. This does not delete your data, just stops billing.`,
  },
  {
    title: "Request full account deletion",
    description: `Email us at ${SUPPORT_EMAIL} with the subject "Data Deletion Request". We will confirm deletion of any server-side data associated with your account within 30 days.`,
  },
];

export default function DeleteDataPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">Legal</span>
        <h1 className="text-4xl font-bold text-white mb-4">Delete Your Data</h1>
        <p className="text-[#8B9CB3] text-lg">
          You own your data. Here&apos;s how to delete it.
        </p>
      </div>

      <div className="space-y-5 mb-12">
        {steps.map((step, i) => (
          <div key={step.title} className="bg-[#1B2838] border border-white/10 rounded-xl p-6 flex gap-5">
            <div className="w-8 h-8 rounded-lg bg-[#d97706]/15 text-[#d97706] text-sm font-bold flex items-center justify-center flex-shrink-0">
              {i + 1}
            </div>
            <div>
              <h2 className="text-white font-semibold mb-1">{step.title}</h2>
              <p className="text-[#8B9CB3] text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1B2838] border border-[#d97706]/40 rounded-xl p-6">
        <p className="text-[#C8D6E5] font-semibold mb-1">Need help?</p>
        <p className="text-[#8B9CB3] text-sm mb-3">
          If you can&apos;t complete deletion yourself, email us and we&apos;ll handle it within 30 days.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=Data Deletion Request`}
          className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#F5A623] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
        >
          Request Data Deletion
        </a>
      </div>

      <p className="text-[#8B9CB3] text-sm mt-8">
        See our{" "}
        <a href="/privacy" className="text-[#d97706] hover:underline">
          Privacy Policy
        </a>{" "}
        to understand what data we hold.
      </p>
    </div>
  );
}
