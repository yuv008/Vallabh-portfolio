"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-6"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[var(--text-secondary)] mb-10"
        >
          Interested in discussing data automation, reporting operations, or
          potential collaborations? I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-accent text-accent hover:bg-accent hover:text-navy-950 transition-all duration-300 font-medium text-sm"
          >
            <Mail className="w-4 h-4" />
            {personalInfo.email}
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-accent hover:text-accent transition-all duration-300 text-sm"
          >
            <Phone className="w-4 h-4" />
            {personalInfo.phone}
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-accent hover:text-accent transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[var(--border-color)] text-center">
        <p className="text-xs text-[var(--text-muted)]">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </section>
  );
}
