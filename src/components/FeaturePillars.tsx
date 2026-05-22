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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Visual formula output",
    description:
      "Wall layouts with every stud labeled — kings, trimmers, cripples, and plates color-coded. Add notes and share the diagram with your crew. Not just a number.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "AI that knows construction",
    description:
      "Ask it \"How many studs for a 14-foot wall on 16-inch centers?\" or \"How much concrete for a 12x20 slab at 4 inches?\" and get a step-by-step breakdown. Pro feature.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: "8 languages",
    description:
      "Run the full app in your language — menus, buttons, and labels included. Switch anytime in settings. Built for crews who work in more than one language on site.",
  },
];

export function FeaturePillars() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built Simple, Built Right.
          </h2>
          <p className="text-[#8B9CB3] text-lg max-w-xl mx-auto">
            Every professional deserves digital tools that actually match the way they work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
