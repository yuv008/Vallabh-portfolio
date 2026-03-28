"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { PipelineAnimation } from "./PipelineAnimation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          {personalInfo.name}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] italic"
        >
          &ldquo;{personalInfo.tagline}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--text-muted)]"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {personalInfo.location}
          </span>
          <span className="hidden sm:inline text-[var(--border-color)]">·</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {personalInfo.email}
          </a>
          <span className="hidden sm:inline text-[var(--border-color)]">·</span>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {personalInfo.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </motion.div>

        <PipelineAnimation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[var(--text-muted)]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
