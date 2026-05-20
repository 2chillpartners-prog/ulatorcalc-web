import { TRADE_MODES } from "@/lib/constants";

export function ModesGrid() {
  return (
    <section id="modes" className="py-20 px-4 sm:px-6 bg-[#1B2838]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your trade. Your calculator.
          </h2>
          <p className="text-[#8B9CB3] text-lg max-w-2xl mx-auto">
            We want to give every professional the digital tools they need.
            Built for the job site — with more trade modes on the way.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto sm:max-w-none sm:grid-cols-2 lg:grid-cols-2">
          {/* Construction — Pro */}
          <div className="relative bg-[#d97706]/10 border border-[#d97706]/60 rounded-xl p-6 flex flex-col items-center text-center gap-3 glow-amber">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[#d97706] text-white px-3 py-0.5 rounded-full whitespace-nowrap">
              Pro
            </span>
            <span className="text-4xl">🏗️</span>
            <span className="text-sm font-semibold text-[#F5A623]">Construction</span>
            <span className="text-xs text-[#8B9CB3]">50+ trade formulas</span>
          </div>
          {/* Plain — Free */}
          <div className="relative bg-[#1B2838] border border-white/10 rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-white/25 transition-colors">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[#243447] text-[#C8D6E5] border border-white/20 px-3 py-0.5 rounded-full whitespace-nowrap">
              Free
            </span>
            <span className="text-4xl">🔢</span>
            <span className="text-sm font-semibold text-[#C8D6E5]">Plain</span>
            <span className="text-xs text-[#8B9CB3]">Exact math, always</span>
          </div>
        </div>
      </div>
    </section>
  );
}
