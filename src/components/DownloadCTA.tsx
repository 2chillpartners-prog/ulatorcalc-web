import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export function DownloadCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d97706]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to work smarter<br />on your next job?
        </h2>
        <p className="text-[#8B9CB3] text-lg mb-10">
          Download free. No account needed. Start calculating in under 30 seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#C8D6E5] text-[#0D1B2A] font-bold px-7 py-4 rounded-xl text-base transition-all shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#C8D6E5] text-[#0D1B2A] font-bold px-7 py-4 rounded-xl text-base transition-all shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.65.19.97.07l.1-.06 11.02-6.36-2.39-2.4-9.7 8.75zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.51 1.56l.08.08 10.12-10.12v-.24L.58 1.32.5 1.4zM20.13 10.4l-2.55-1.47-2.69 2.69 2.69 2.69 2.56-1.48c.73-.42.73-1.1 0-1.52l-.01.09zM4.15.24L15.17 6.6l-2.39 2.4L3.08.23l.1-.06c.3-.11.64-.1.97.07z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
