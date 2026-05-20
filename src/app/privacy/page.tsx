import type { Metadata } from "next";
import { SUPPORT_EMAIL, APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${APP_NAME}.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">Legal</span>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-[#8B9CB3] text-sm">Last updated: May 20, 2026</p>
      </div>

      <div className="prose prose-invert prose-sm max-w-none text-[#8B9CB3] space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
          <p>
            {APP_NAME} is a professional calculator app. We collect as little data as possible
            and never sell your information. This policy explains what we collect, why, and how you control it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">What we collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[#C8D6E5] font-semibold mb-1">Analytics</h3>
              <p>
                We use Vercel Analytics on this website — a privacy-friendly tool that does not use
                cookies and does not track individuals. We see aggregate page views only.
              </p>
            </div>
            <div>
              <h3 className="text-[#C8D6E5] font-semibold mb-1">AI features (Pro)</h3>
              <p>
                When you use the AI assistant, the text or voice you send is processed by OpenAI
                (text) and Deepgram (voice). We send only what you explicitly submit — never your
                calculation history or personal data. OpenAI and Deepgram have their own privacy
                policies governing how they handle this data.
              </p>
            </div>
            <div>
              <h3 className="text-[#C8D6E5] font-semibold mb-1">Purchases</h3>
              <p>
                Pro subscriptions are handled entirely by Apple through in-app purchases. We do not
                receive or store your payment information.
              </p>
            </div>
            <div>
              <h3 className="text-[#C8D6E5] font-semibold mb-1">Calculations</h3>
              <p>
                Your calculations are stored locally on your device only. We do not transmit
                calculation data to our servers.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">What we do not do</h2>
          <ul className="space-y-1 list-disc pl-5">
            <li>We do not sell your data to third parties.</li>
            <li>We do not serve advertising or share data with ad networks.</li>
            <li>We do not require an account to use the app.</li>
            <li>We do not track your location.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Your rights</h2>
          <p>
            You may request deletion of any data associated with your account or usage at any time.
            See our{" "}
            <a href="/delete-data" className="text-[#d97706] hover:underline">
              Data Deletion page
            </a>{" "}
            for instructions, or email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#d97706] hover:underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about this policy?{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#d97706] hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
