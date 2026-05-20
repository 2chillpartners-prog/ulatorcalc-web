import Link from "next/link";

export function FeedbackSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-4 block">
          Built for your trade
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Tell us what you need.
        </h2>
        <p className="text-[#8B9CB3] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          ulator-Calc was built by framers. If there&apos;s a formula or feature that would
          save you time on the job — we want to hear it.
        </p>

        <div className="bg-[#1B2838] border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-[#d97706]/30 transition-colors text-left">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d97706]/15 text-[#d97706] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <span className="text-[#C8D6E5] font-semibold text-sm">What do you frame?</span>
              </div>
              <p className="text-[#8B9CB3] text-sm pl-11 leading-relaxed">
                Residential, commercial, metal stud — tell us what you&apos;re working on.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d97706]/15 text-[#d97706] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <span className="text-[#C8D6E5] font-semibold text-sm">What&apos;s missing?</span>
              </div>
              <p className="text-[#8B9CB3] text-sm pl-11 leading-relaxed">
                A formula you can&apos;t find anywhere else. A unit conversion you do every day. Tell us.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d97706]/15 text-[#d97706] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <span className="text-[#C8D6E5] font-semibold text-sm">What would make it a must-have?</span>
              </div>
              <p className="text-[#8B9CB3] text-sm pl-11 leading-relaxed">
                We&apos;re building toward one tool that every framer actually keeps on their phone.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d97706]/15 text-[#d97706] flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <span className="text-[#C8D6E5] font-semibold text-sm">Optional: your email</span>
              </div>
              <p className="text-[#8B9CB3] text-sm pl-11 leading-relaxed">
                If you want us to follow up when your feature ships, leave your email. No spam, ever.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/feedback"
              className="inline-flex items-center gap-3 bg-[#d97706] hover:bg-[#F5A623] text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-[#d97706]/25 hover:shadow-[#d97706]/40 hover:-translate-y-0.5"
            >
              Share Your Feedback
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
