import type { Metadata } from "next";
import { SUPPORT_EMAIL, APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${APP_NAME}.`,
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">Legal</span>
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Use</h1>
        <p className="text-[#8B9CB3] text-sm">Last updated: May 20, 2026</p>
      </div>

      <div className="space-y-8 text-[#8B9CB3] text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Acceptance</h2>
          <p>
            By downloading or using {APP_NAME}, you agree to these Terms of Use. If you do not
            agree, do not use the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Use of the App</h2>
          <p>
            {APP_NAME} is provided as a professional calculation aid. All calculations should be
            verified by a qualified professional before being used in safety-critical applications.
            We are not responsible for errors resulting from the app&apos;s calculations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Subscriptions</h2>
          <p>
            Pro subscriptions are billed through Apple in-app purchases. Subscriptions
            auto-renew unless cancelled at least 24 hours before the renewal date. You can manage
            or cancel your subscription in your iPhone Settings → Apple ID → Subscriptions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">AI Features</h2>
          <p>
            The AI assistant is a Pro feature powered by OpenAI. AI-generated responses are for
            informational purposes only and may not always be accurate. Always verify critical
            calculations with appropriate professional standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Intellectual Property</h2>
          <p>
            All content, design, and code in {APP_NAME} and this website are owned by us. You may
            not reproduce, distribute, or create derivative works without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2>
          <p>
            {APP_NAME} is provided &quot;as is&quot; without warranty of any kind. We are not liable for
            any damages arising from your use of the app, including but not limited to errors in
            calculations used in professional or safety applications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the app after changes are
            posted constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions?{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#d97706] hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
