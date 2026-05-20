import Link from "next/link";

export function AITransparencyStrip() {
  return (
    <div className="bg-[#243447] border-y border-white/10 py-5 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left text-sm text-[#8B9CB3]">
        <svg className="w-4 h-4 text-[#d97706] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>
          <strong className="text-[#C8D6E5]">AI features powered by OpenAI &amp; Deepgram.</strong>{" "}
          You control what data is shared.{" "}
          <Link href="/privacy" className="text-[#d97706] hover:underline">
            See our privacy policy →
          </Link>
        </span>
      </div>
    </div>
  );
}
