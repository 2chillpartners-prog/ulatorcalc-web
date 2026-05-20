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
            11 dedicated trade modes — each with purpose-built formulas and units.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TRADE_MODES.map((mode, i) => (
            <div
              key={mode.slug}
              className={`relative bg-[#1B2838] border rounded-xl p-5 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-0.5 ${
                i === 0
                  ? "border-[#d97706]/60 bg-[#d97706]/10 glow-amber"
                  : "border-white/10 hover:border-[#d97706]/30"
              }`}
            >
              {i === 0 && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[#d97706] text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                  Featured
                </span>
              )}
              <span className="text-3xl">{mode.icon}</span>
              <span
                className={`text-sm font-semibold ${
                  i === 0 ? "text-[#F5A623]" : "text-[#C8D6E5]"
                }`}
              >
                {mode.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
