import Link from "next/link";
import { APP_STORE_URL, PRO_MONTHLY, PRO_YEARLY, FREE_TRIAL_DAYS } from "@/lib/constants";

const freeTier = [
  "Exact feet-inch-fraction math",
  "All 11 trade modes",
  "50+ professional formulas",
  "Running tape & calculation history",
  "Deep-link sharing",
];

const proTier = [
  "Everything in Free",
  "AI assistant with trade knowledge",
  "Voice input (Deepgram)",
  "Priority support",
  `${FREE_TRIAL_DAYS}-day free trial — no commitment`,
];

export function PricingTeaser() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#1B2838]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful for free. Unstoppable with Pro.
          </h2>
          <p className="text-[#8B9CB3] text-lg max-w-xl mx-auto">
            The core calculator is free — no tricks. Pro adds the AI assistant for when you need an expert to think it through with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="bg-[#1B2838] border border-white/10 rounded-2xl p-8">
            <div className="mb-6">
              <span className="text-[#8B9CB3] text-sm font-semibold uppercase tracking-widest block mb-2">Free</span>
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-[#8B9CB3] text-sm ml-1">forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              {freeTier.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#C8D6E5]">
                  <svg className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#243447] hover:bg-[#2d3f52] text-[#C8D6E5] font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              Download Free
            </a>
          </div>

          {/* Pro */}
          <div className="bg-[#d97706]/10 border border-[#d97706]/40 rounded-2xl p-8 relative overflow-hidden glow-amber">
            <div className="absolute top-0 right-0 bg-[#d97706] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
              BEST VALUE
            </div>
            <div className="mb-6">
              <span className="text-[#F5A623] text-sm font-semibold uppercase tracking-widest block mb-2">Pro</span>
              <span className="text-4xl font-bold text-white">{PRO_MONTHLY}</span>
              <span className="text-[#8B9CB3] text-sm ml-1">/month</span>
              <div className="text-[#8B9CB3] text-sm mt-1">or {PRO_YEARLY}/year (save 17%)</div>
            </div>
            <ul className="space-y-3 mb-8">
              {proTier.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#C8D6E5]">
                  <svg className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#d97706] hover:bg-[#F5A623] text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/pricing" className="text-[#8B9CB3] hover:text-[#d97706] text-sm transition-colors">
            Full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}
