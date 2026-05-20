"use client";

import Link from "next/link";
import { useState } from "react";
import { APP_STORE_URL, APP_NAME } from "@/lib/constants";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#modes", label: "Trades" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0D1B2A]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="text-[#d97706] font-mono">ulator</span>
          <span className="text-[#C8D6E5]">-Calc</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8B9CB3]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#C8D6E5] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d97706] hover:bg-[#F5A623] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Download Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#8B9CB3] hover:text-[#C8D6E5] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#1B2838] px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-[#C8D6E5] font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#d97706] text-white text-center font-semibold px-4 py-2 rounded-lg mt-2"
          >
            Download Free
          </a>
        </div>
      )}
    </header>
  );
}
