import Image from "next/image";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  detail: string[];
  flip: boolean;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

const features: Feature[] = [
  {
    eyebrow: "50+ Construction Formulas",
    title: "Every formula you'd reach for on the job site.",
    body: "Whether you're framing or pouring — stud counts, rafter lengths, concrete volume, footing sizes — built in and ready instantly, with visible calculations and history for reference.",
    detail: ["Stud / joist / rafter spacing", "Stair rise & run", "Rafter length & pitch", "Rake walls", "Concrete volume & slabs", "Footing & column sizing"],
    flip: false,
  },
  {
    eyebrow: "Visual Formula Output",
    title: "See the layout — not just a number.",
    body: "Run a wall layout formula and get a full visual diagram: every stud length labeled, kings, trimmers, cripples, and plates color-coded. Pinch to zoom, drag to pan — the kind of output you'd sketch on paper, generated instantly.",
    detail: [
      "Full wall and opening layouts",
      "Every stud length on the diagram",
      "Color-coded kings, trimmers, cripples",
      "Add notes to any formula result",
      "Share the layout with your crew",
    ],
    flip: true,
    image: "/screenshot-formula-output.png",
    imageAlt: "TB Logic wall layout formula showing 43 studs at 16 inch OC with color-coded stud types and labeled lengths",
    imageCaption: "Wall layout — every stud length, opening, and plate labeled",
  },
  {
    eyebrow: "Running Tape & History",
    title: "Never lose a number mid-job.",
    body: "Every calculation is saved as you go. Scroll back, reuse values, and share your full work — not just the answer.",
    detail: ["Scrollable calculation history", "Tap any past result to reuse it", "Share full tape as text", "Undo / redo at any point"],
    flip: false,
  },
  {
    eyebrow: "Notes & Sharing",
    title: "Annotate it. Send it. Done.",
    body: "Add notes to any formula result — job name, wall tag, material callouts, whatever your crew needs. Then share the full layout with one tap. Your foreman opens the same diagram, not a blurry screenshot.",
    detail: ["Add notes to formula results", "Share layouts and calculations", "Recipient sees inputs + visual output", "No account required"],
    flip: true,
  },
  {
    eyebrow: "8 Languages",
    title: "Your crew. Your language.",
    body: "The full app runs in 8 languages — not just numbers, but menus, labels, and the interface your crew actually reads. Switch in settings; no extra download.",
    detail: ["8 languages built in", "Full interface translation", "Switch anytime in settings", "Plain and Construction modes"],
    flip: false,
  },
  {
    eyebrow: "AI Assistant (Pro)",
    title: "An AI that's been on the job site.",
    body: "Ask in plain English. Get a step-by-step construction breakdown — framing counts, concrete volumes, whatever you need. Not a chatbot — construction knowledge, on demand.",
    detail: ["Powered by OpenAI", "Voice input via Deepgram", "Knows framing and concrete math", "Explains the why, not just the answer"],
    flip: true,
  },
];

export function FeatureDeepDive() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {features.map((f) => (
          <div
            key={f.title}
            className={`flex flex-col ${
              f.flip ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12 lg:gap-20 items-center`}
          >
            {/* Text */}
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">
                {f.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {f.title}
              </h2>
              <p className="text-[#8B9CB3] leading-relaxed mb-6">{f.body}</p>
              <ul className="space-y-2">
                {f.detail.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-[#C8D6E5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full">
              {f.image ? (
                <div className="relative">
                  <div
                    className="absolute inset-0 scale-95 bg-[#d97706]/15 rounded-[2rem] blur-2xl"
                    aria-hidden="true"
                  />
                  <Image
                    src={f.image}
                    alt={f.imageAlt ?? f.title}
                    width={360}
                    height={780}
                    className="relative mx-auto rounded-[2rem] shadow-2xl border border-[#d97706]/30 w-full max-w-[320px] h-auto"
                  />
                  {f.imageCaption && (
                    <p className="relative text-center text-[#8B9CB3] text-xs mt-3 tracking-wide">
                      {f.imageCaption}
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-[#1B2838] border border-white/10 rounded-2xl p-8 hover:border-[#d97706]/30 transition-colors">
                  <div className="space-y-3">
                    {f.detail.map((d, i) => (
                      <div
                        key={d}
                        className="flex items-center gap-4 bg-[#243447] rounded-lg px-4 py-3"
                      >
                        <span className="w-7 h-7 rounded-md bg-[#d97706]/15 text-[#d97706] text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="text-sm text-[#C8D6E5] font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
