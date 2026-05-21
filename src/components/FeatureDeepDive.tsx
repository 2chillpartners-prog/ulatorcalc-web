const features = [
  {
    eyebrow: "50+ Construction Formulas",
    title: "Every formula you'd reach for on the job site.",
    body: "Whether you're framing or pouring — stud counts, rafter lengths, concrete volume, footing sizes — built in and ready instantly, with visible calculations and history for reference.",
    detail: ["Stud / joist / rafter spacing", "Stair rise & run", "Rafter length & pitch", "Rake walls", "Concrete volume & slabs", "Footing & column sizing"],
    flip: false,
  },
  {
    eyebrow: "Running Tape & History",
    title: "Never lose a number mid-job.",
    body: "Every calculation goes on the tape. Scroll back, reuse values, and share your full work — not just the answer. Built like a paper tape but smarter.",
    detail: ["Scrollable calculation history", "Tap any past result to reuse it", "Share full tape as text", "Undo / redo at any point"],
    flip: true,
  },
  {
    eyebrow: "Deep-Link Sharing",
    title: "Share any calculation, not just a screenshot.",
    body: "Send a link that opens the exact calculation in the app. Your foreman opens it and sees the same numbers. No re-entry, no miscommunication on site.",
    detail: ["One tap to share", "Recipient sees full inputs + result", "Works across iOS devices", "No account required"],
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

            {/* Visual card */}
            <div className="flex-1 w-full">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
