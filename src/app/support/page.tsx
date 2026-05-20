import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL, APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${APP_NAME}. Browse our FAQ or contact us directly at ${SUPPORT_EMAIL}.`,
};

const faqs = [
  {
    q: "Is ulator-Calc free?",
    a: "The core calculator — all 11 trade modes, 50+ formulas, running tape, and sharing — is completely free. Pro adds the AI assistant and voice input for $4.99/month or $49.99/year, with a 7-day free trial.",
  },
  {
    q: "What trade modes are available?",
    a: "Construction and Plain modes are available now. More trade modes are in development — leave your trade on the Feedback page and we'll prioritize accordingly.",
  },
  {
    q: "How does the AI assistant work?",
    a: "The AI assistant is a Pro feature powered by OpenAI. Ask it questions in plain English — like 'How many studs for a 20-foot wall on 16-inch centers?' — and it will walk you through the answer step by step with trade context. Voice input is powered by Deepgram.",
  },
  {
    q: "What data does the AI use?",
    a: "The AI only processes the text or voice you explicitly send to it. We do not share your calculation history or usage data with AI providers. See our Privacy Policy for full details.",
  },
  {
    q: "How do I share a calculation?",
    a: "Tap the share icon on any result. It generates a deep link that opens the exact calculation in ulator-Calc on any iOS device — no account required.",
  },
  {
    q: "How do I cancel my Pro subscription?",
    a: "Subscriptions are managed through Apple. Go to Settings → Apple ID → Subscriptions → ulator-Calc and tap Cancel. You keep Pro access until the end of your billing period.",
  },
  {
    q: "I found a bug or the app crashed. What should I do?",
    a: `Email us at ${SUPPORT_EMAIL} with a description of what happened and your iOS version. We typically respond within one business day.`,
  },
  {
    q: "Is ulator-Calc available on Android?",
    a: "Yes — ulator-Calc is available on both iOS (App Store) and Android (Google Play). Download free on either platform.",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">
          Help Center
        </span>
        <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
        <p className="text-[#8B9CB3] text-lg">
          Have a question? Browse below or reach out directly — we&apos;re real people who know the app.
        </p>
      </div>

      {/* Contact card */}
      <div className="bg-[#1B2838] border border-[#d97706]/40 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold mb-1">Contact us directly</p>
          <p className="text-[#8B9CB3] text-sm">We respond within one business day.</p>
        </div>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#F5A623] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {SUPPORT_EMAIL}
        </a>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.q} className="bg-[#1B2838] border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
            <p className="text-[#8B9CB3] text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-[#8B9CB3] text-sm">
        Still stuck?{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#d97706] hover:underline">
          Email us
        </a>{" "}
        or{" "}
        <Link href="/feedback" className="text-[#d97706] hover:underline">
          leave feedback
        </Link>
        .
      </div>
    </div>
  );
}
