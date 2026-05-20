import { APP_STORE_URL, TAGLINE, TAGLINE_SUB } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 px-4 sm:px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#d97706]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* By framers badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-[#d97706]/15 text-[#F5A623] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#d97706]/30 tracking-wide">
            <span>🔨</span> By framers, for framers
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            {TAGLINE}
          </h1>
          <p className="text-lg sm:text-xl text-[#8B9CB3] leading-relaxed mb-10 max-w-2xl mx-auto">
            {TAGLINE_SUB}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#d97706] hover:bg-[#F5A623] text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-[#d97706]/25 hover:shadow-[#d97706]/40 hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#8B9CB3] hover:text-[#C8D6E5] font-medium text-sm transition-colors"
            >
              See what&apos;s free vs Pro
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mock calculator display */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="bg-[#1B2838] rounded-2xl border border-white/10 overflow-hidden shadow-2xl glow-amber">
              {/* Header bar */}
              <div className="bg-[#243447] px-4 py-3 flex items-center gap-2">
                <span className="text-[#8B9CB3] text-xs font-mono uppercase tracking-widest">Construction Mode</span>
              </div>
              {/* Display */}
              <div className="p-6">
                <div className="text-right mb-2">
                  <span className="text-[#8B9CB3] text-sm font-mono">16 × 7′ - 5 3/16″</span>
                </div>
                <div className="text-right mb-6">
                  <span className="text-[#F5A623] text-4xl font-mono font-bold tracking-tight">118′ - 3″</span>
                </div>
                {/* Keypad preview */}
                <div className="grid grid-cols-4 gap-2">
                  {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "ft", "in", "0", "+"].map((key) => (
                    <div
                      key={key}
                      className={`rounded-lg py-3 text-center text-sm font-mono font-semibold ${
                        ["+", "−", "×", "÷"].includes(key)
                          ? "bg-[#d97706]/20 text-[#F5A623]"
                          : ["ft", "in"].includes(key)
                          ? "bg-[#d97706] text-white"
                          : "bg-[#243447] text-[#C8D6E5]"
                      }`}
                    >
                      {key}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
