"use client";

import Link from "next/link";
import { personalInfo, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        {/* Top row: logo + nav links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-2xl font-bold gradient-text"
          >
            Vallabh Wattamwar
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-color)] mb-6" />

        {/* Bottom row: contact + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-[var(--text-muted)] hover:text-accent transition-colors duration-300"
            >
              {personalInfo.email}
            </a>
            <span className="w-px h-3 bg-[var(--border-color)]" />
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-xs text-[var(--text-muted)] hover:text-accent transition-colors duration-300"
            >
              {personalInfo.phone}
            </a>
            <span className="w-px h-3 bg-[var(--border-color)]" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-muted)] hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Vallabh Wattamwar. Built with
            Next.js & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
