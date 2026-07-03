import Link from "next/link";
import { APP_NAME, SUPPORT_EMAIL, BRAND_BADGE } from "@/lib/constants";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/delete-data", label: "Delete Data" },
  { href: "/support", label: "Support" },
  { href: "/feedback", label: "Feedback" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D1B2A] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-1">
              <span className="text-[#d97706] font-mono">TB</span>
              <span className="text-[#C8D6E5]">Logic</span>
            </div>
            <p className="text-[#8B9CB3] text-sm">
              {BRAND_BADGE}.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-[#8B9CB3] text-sm hover:text-[#d97706] transition-colors mt-1 block"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#8B9CB3] text-sm hover:text-[#C8D6E5] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="divider mt-8 pt-6 text-[#8B9CB3] text-xs flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</span>
          <span>Made for the framing crew.</span>
        </div>
      </div>
    </footer>
  );
}
