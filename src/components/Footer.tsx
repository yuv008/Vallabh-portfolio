"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-sm font-bold gradient-text"
        >
          Vallabh Wattamwar
        </Link>

        <p className="text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} &middot; Built with Next.js &amp;
          Tailwind
        </p>
      </div>
    </footer>
  );
}
