"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { PipelineAnimation } from "@/components/PipelineAnimation";

const stats = [
  { value: 180, suffix: "+", label: "Fund Reports Automated" },
  { value: 300, suffix: "+", label: "Hours Saved Annually" },
  { value: 5, suffix: "+", label: "Industries Served" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* ── Animated gradient mesh background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(197,165,90,0.06) 0%, transparent 70%)",
            animation: "float-1 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(183,110,121,0.04) 0%, transparent 70%)",
            animation: "float-2 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(232,228,219,0.03) 0%, transparent 70%)",
            animation: "float-3 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-4xl relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8 px-4 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--glow)] text-accent text-xs font-medium tracking-[0.2em] uppercase"
          >
            Content Automation & Business Intelligence
          </motion.div>

          {/* Name — massive */}
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] leading-[0.9]">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-[var(--text-muted)] text-xs">
              <MapPin className="w-3 h-3 text-accent" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-[var(--text-muted)] text-xs hover:border-accent/20 transition-colors"
            >
              <Mail className="w-3 h-3 text-accent" />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-[var(--text-muted)] text-xs hover:border-accent/20 transition-colors"
            >
              <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </motion.div>

          {/* Pipeline animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <PipelineAnimation />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-[#050505] font-medium text-sm shadow-[0_0_24px_rgba(197,165,90,0.25)] hover:shadow-[0_0_40px_rgba(197,165,90,0.35)] transition-shadow duration-500"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-hover)] text-[var(--text-secondary)] text-sm hover:border-accent/30 hover:text-accent transition-all duration-500"
              >
                Get In Touch
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Section ── */}
      <section className="relative z-10 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center glass-card p-5 sm:p-8 glow-card"
              >
                <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
