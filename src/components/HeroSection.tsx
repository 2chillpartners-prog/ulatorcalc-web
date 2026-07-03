import Image from "next/image";
import {
  APP_NAME,
  APP_STORE_URL,
  PLAY_STORE_URL,
  TAGLINE_SUB,
  BRAND_BADGE,
} from "@/lib/constants";
import { BrandLogo } from "@/components/BrandLogo";

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
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <BrandLogo size="hero" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Every{" "}
            <span className="font-display font-bold tracking-wide">
              <span className="text-[#d97706]">T</span>ool
              <span className="text-[#d97706]">B</span>elt
            </span>{" "}
            needs{" "}
            <span className="font-display font-bold text-[#d97706] tracking-wide">
              Logic
            </span>
          </h1>

          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-3 bg-[#d97706]/15 text-[#F5A623] text-base sm:text-lg font-semibold px-5 py-2.5 rounded-full border border-[#d97706]/30 tracking-wide">
              <span>🔨</span> {BRAND_BADGE}
            </span>
          </div>

          <p className="text-lg sm:text-xl text-[#8B9CB3] leading-relaxed mb-10 max-w-2xl mx-auto">
            {TAGLINE_SUB}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#d97706] hover:bg-[#F5A623] text-white font-bold px-7 py-4 rounded-xl text-base transition-all shadow-lg shadow-[#d97706]/25 hover:shadow-[#d97706]/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1B2838] hover:bg-[#243447] border border-white/20 hover:border-white/40 text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.19.97.07l.1-.06 11.02-6.36-2.39-2.4-9.7 8.75zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.51 1.56l.08.08 10.12-10.12v-.24L.58 1.32.5 1.4zM20.13 10.4l-2.55-1.47-2.69 2.69 2.69 2.69 2.56-1.48c.73-.42.73-1.1 0-1.52l-.01.09zM4.15.24L15.17 6.6l-2.39 2.4L3.08.23l.1-.06c.3-.11.64-.1.97.07z" />
              </svg>
              Google Play
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#8B9CB3] hover:text-[#C8D6E5] font-medium text-sm transition-colors"
            >
              Free vs Pro
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* App screenshot */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-[280px] sm:w-[320px]">
            <div className="absolute inset-0 scale-90 bg-[#d97706]/20 rounded-[3rem] blur-2xl" aria-hidden="true" />
            <Image
              src="/app-screenshot.png"
              alt={`${APP_NAME} construction mode showing fractions, running tape, and unit conversions`}
              width={320}
              height={693}
              className="relative rounded-[2.5rem] shadow-2xl border border-white/10 w-full h-auto"
              priority
            />
            <p className="relative text-center text-[#8B9CB3] text-xs mt-3 tracking-wide">
              Exact Math with Instant Conversion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
