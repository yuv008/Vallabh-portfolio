"use client";

import { Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <AnimateIn>
          <div className="accent-line" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s Connect
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="text-[var(--text-secondary)] mb-10">
            Interested in discussing data automation, reporting operations, or
            potential collaborations? I&apos;d love to hear from you.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-[#09090B] font-medium text-sm hover:bg-accent-light transition-all duration-300 shadow-[0_0_20px_rgba(212,168,83,0.2)] hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-accent/50 hover:text-accent transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-accent/50 hover:text-accent transition-all duration-300 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[var(--border-color)] text-center relative z-10">
        <p className="text-xs text-[var(--text-muted)]">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </section>
  );
}
