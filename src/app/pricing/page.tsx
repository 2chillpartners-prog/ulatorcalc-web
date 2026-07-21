import type { Metadata } from "next";
import { APP_STORE_URL, PLAY_STORE_URL, WEB_APP_URL, PRO_MONTHLY, PRO_YEARLY, PRO_YEARLY_SAVINGS_PERCENT, FREE_TRIAL_DAYS, LANGUAGE_COUNT, SUBSCRIPTION_TRIAL_NOTE, SUBSCRIPTION_CANCEL_SUMMARY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Plain calculator free forever. Pro unlocks Construction mode, 50+ formulas, and AI. Simple.",
};

const comparison = [
  { feature: "Plain calculator mode", free: true, pro: true },
  { feature: "Running tape & calculation history", free: true, pro: true },
  { feature: "Deep-link sharing", free: true, pro: true },
  { feature: `${LANGUAGE_COUNT} languages — full app interface`, free: true, pro: true },
  { feature: "Exact feet-inch-fraction math", free: false, pro: true },
  { feature: "Construction mode (framing + concrete)", free: false, pro: true },
  { feature: "50+ construction formulas", free: false, pro: true },
  { feature: "AI assistant (construction-aware)", free: false, pro: true },
  { feature: "Voice input (Deepgram)", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
];

function Check({ filled }: { filled: boolean }) {
  if (!filled) {
    return <span className="text-[#8B9CB3]">—</span>;
  }
  return (
    <svg className="w-5 h-5 text-[#d97706] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">
          Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Simple. Honest. No tricks.
        </h1>
        <p className="text-[#8B9CB3] text-lg max-w-xl mx-auto">
          Plain calculator is free forever. Pro unlocks Construction mode, 50+ trade formulas, and an AI assistant that knows the job site.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Free */}
        <div className="bg-[#1B2838] border border-white/10 rounded-2xl p-8">
          <h2 className="text-[#8B9CB3] text-sm font-semibold uppercase tracking-widest mb-4">Free</h2>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$0</span>
            <span className="text-[#8B9CB3] ml-2">forever</span>
          </div>
          <p className="text-[#8B9CB3] text-sm mb-8">
            A powerful plain calculator with exact feet-inch-fraction math, running tape, and sharing. No account needed.
          </p>
          <div className="flex flex-col gap-2">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#243447] hover:bg-[#2d3f52] text-[#C8D6E5] font-semibold py-3.5 rounded-xl transition-colors">
              App Store
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#243447] hover:bg-[#2d3f52] text-[#C8D6E5] font-semibold py-3.5 rounded-xl transition-colors">
              Google Play
            </a>
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#243447] hover:bg-[#2d3f52] text-[#C8D6E5] font-semibold py-3.5 rounded-xl transition-colors">
              Use on Web
            </a>
          </div>
        </div>

        {/* Pro */}
        <div className="bg-[#d97706]/10 border border-[#d97706]/50 rounded-2xl p-8 relative overflow-hidden glow-amber">
          <div className="absolute top-0 right-0 bg-[#d97706] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
            MOST POPULAR
          </div>
          <h2 className="text-[#F5A623] text-sm font-semibold uppercase tracking-widest mb-4">Pro</h2>
          <div className="mb-1">
            <span className="text-5xl font-bold text-white">{PRO_MONTHLY}</span>
            <span className="text-[#8B9CB3] ml-2">/month</span>
          </div>
          <p className="text-[#8B9CB3] text-sm mb-1">or {PRO_YEARLY}/year — save {PRO_YEARLY_SAVINGS_PERCENT}%</p>
          <p className="text-[#d97706] text-sm font-semibold mb-8">
            {SUBSCRIPTION_TRIAL_NOTE}
          </p>
          <div className="flex flex-col gap-2">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#d97706] hover:bg-[#F5A623] text-white font-bold py-3.5 rounded-xl transition-colors">
              App Store — {FREE_TRIAL_DAYS}-Day Free Trial
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#d97706]/80 hover:bg-[#d97706] text-white font-bold py-3.5 rounded-xl transition-colors">
              Google Play — {FREE_TRIAL_DAYS}-Day Free Trial
            </a>
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#d97706]/80 hover:bg-[#d97706] text-white font-bold py-3.5 rounded-xl transition-colors">
              Use on Web
            </a>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <h2 className="text-2xl font-bold text-white mb-6">What&apos;s included</h2>
      <div className="bg-[#1B2838] border border-white/10 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-3 bg-[#243447] px-6 py-3">
          <span className="text-[#8B9CB3] text-xs font-semibold uppercase tracking-widest">Feature</span>
          <span className="text-[#8B9CB3] text-xs font-semibold uppercase tracking-widest text-center">Free</span>
          <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-widest text-center">Pro</span>
        </div>
        {comparison.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-3 px-6 py-4 items-center ${
              i !== comparison.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <span className="text-sm text-[#C8D6E5]">{row.feature}</span>
            <div className="text-center"><Check filled={row.free} /></div>
            <div className="text-center"><Check filled={row.pro} /></div>
          </div>
        ))}
      </div>

      <p className="text-center text-[#8B9CB3] text-sm mt-8 max-w-2xl mx-auto">
        {SUBSCRIPTION_CANCEL_SUMMARY}
      </p>
    </div>
  );
}
