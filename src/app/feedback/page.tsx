"use client";

import { useState } from "react";
import { SUPPORT_EMAIL } from "@/lib/constants";

const frustrations = [
  "Can't enter feet and inches natively",
  "Missing the framing formulas I need",
  "Too slow to use on the job site",
  "No calculation history",
  "Can't share calculations with my crew",
  "Other",
];

const constructionTypes = [
  "Residential framing",
  "Commercial framing",
  "Metal stud framing",
  "Roof framing",
  "Concrete / flatwork",
  "Concrete / foundations & footings",
  "General contractor",
  "Other",
];

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    trade: "",
    frustration: "",
    mustHave: "",
    email: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setSubmitError(data.error ?? "Unable to send feedback. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to send feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="text-5xl mb-6">🔨</div>
        <h1 className="text-3xl font-bold text-white mb-4">Thanks — we&apos;re listening.</h1>
        <p className="text-[#8B9CB3] text-lg mb-4">
          Thanks for helping us build a better calculator for the job site.
          If you left your email, we&apos;ll reach out when your feature ships.
        </p>
        <p className="text-[#8B9CB3] text-sm">
          Questions?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#d97706] hover:underline">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d97706] mb-3 block">
          By framers, for framers
        </span>
        <h1 className="text-4xl font-bold text-white mb-4">Tell us what you need.</h1>
        <p className="text-[#8B9CB3] text-lg leading-relaxed">
          We built ulator-Calc on construction job sites — framing crews and concrete workers.
          We want to keep improving it with input from the people who actually use it. No spam, no sales — just real feedback.
        </p>
        <p className="text-[#8B9CB3] text-sm mt-3">
          Prefer email?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#d97706] hover:underline">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-[#C8D6E5] mb-2">
            Your name <span className="text-[#8B9CB3] font-normal">(optional)</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Mike"
            className="w-full bg-[#1B2838] border border-white/10 rounded-xl px-4 py-3 text-[#C8D6E5] placeholder-[#8B9CB3] focus:outline-none focus:border-[#d97706]/60 transition-colors text-sm"
          />
        </div>

        {/* Framing type */}
        <div>
          <label className="block text-sm font-semibold text-[#C8D6E5] mb-2">
            What kind of construction do you do? <span className="text-red-400">*</span>
          </label>
          <select
            name="trade"
            value={form.trade}
            onChange={handleChange}
            required
            className="w-full bg-[#1B2838] border border-white/10 rounded-xl px-4 py-3 text-[#C8D6E5] focus:outline-none focus:border-[#d97706]/60 transition-colors text-sm appearance-none"
          >
            <option value="">Select…</option>
            {constructionTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Frustration */}
        <div>
          <label className="block text-sm font-semibold text-[#C8D6E5] mb-2">
            Biggest frustration with calculator apps <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            {frustrations.map((f) => (
              <label
                key={f}
                className={`flex items-center gap-3 bg-[#1B2838] border rounded-xl px-4 py-3 cursor-pointer text-sm transition-colors ${
                  form.frustration === f
                    ? "border-[#d97706] text-[#F5A623]"
                    : "border-white/10 text-[#C8D6E5] hover:border-white/25"
                }`}
              >
                <input
                  type="radio"
                  name="frustration"
                  value={f}
                  checked={form.frustration === f}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                    form.frustration === f ? "border-[#d97706] bg-[#d97706]" : "border-[#8B9CB3]"
                  }`}
                />
                {f}
              </label>
            ))}
          </div>
        </div>

        {/* Must-have */}
        <div>
          <label className="block text-sm font-semibold text-[#C8D6E5] mb-2">
            What would make ulator-Calc a must-have on your job site?{" "}
            <span className="text-red-400">*</span>
          </label>
          <textarea
            name="mustHave"
            value={form.mustHave}
            onChange={handleChange}
            required
            rows={4}
            placeholder="e.g. Hip rafter calculations, a faster way to enter stud spacing, or a specific formula I use every day…"
            className="w-full bg-[#1B2838] border border-white/10 rounded-xl px-4 py-3 text-[#C8D6E5] placeholder-[#8B9CB3] focus:outline-none focus:border-[#d97706]/60 transition-colors text-sm resize-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-[#C8D6E5] mb-2">
            Your email <span className="text-[#8B9CB3] font-normal">(optional — we&apos;ll notify you when your feature ships)</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-[#1B2838] border border-white/10 rounded-xl px-4 py-3 text-[#C8D6E5] placeholder-[#8B9CB3] focus:outline-none focus:border-[#d97706]/60 transition-colors text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#d97706] hover:bg-[#F5A623] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-[#d97706]/25 hover:shadow-[#d97706]/40 hover:-translate-y-0.5"
        >
          {submitting ? "Sending…" : "Send Feedback"}
        </button>

        {submitError && (
          <p className="text-center text-red-400 text-sm">{submitError}</p>
        )}

        <p className="text-center text-[#8B9CB3] text-xs">
          Your feedback is sent directly to our team. No account needed.
        </p>
      </form>
    </div>
  );
}
