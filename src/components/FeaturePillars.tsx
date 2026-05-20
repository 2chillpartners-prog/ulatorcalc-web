const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Exact trade math",
    description:
      "Enter 7′-5 3/16″ and get 7′-5 3/16″ back. No decimal rounding that costs you material. Every fraction stays a fraction.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Purpose-built modes",
    description:
      "Construction and Plain modes today — with more trades coming. Each mode surfaces the right formulas and units for the way you actually work.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "AI that knows your trade",
    description:
      "Ask it \"How many studs for a 14-foot wall on 16-inch centers?\" and get a step-by-step breakdown — not a generic search result. Pro feature.",
  },
];

export function FeaturePillars() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built different. Built right.
          </h2>
          <p className="text-[#8B9CB3] text-lg max-w-xl mx-auto">
            Every professional deserves digital tools that actually match the way they work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#1B2838] rounded-2xl border border-white/10 p-8 hover:border-[#d97706]/40 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#d97706]/15 text-[#d97706] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#d97706]/25 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-[#8B9CB3] leading-relaxed text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
