"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-lg font-bold gradient-text"
        >
          VW
        </Link>

        <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-accent transition-colors duration-300"
          >
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Vallabh Wattamwar
        </p>
      </div>
    </footer>
  );
}
