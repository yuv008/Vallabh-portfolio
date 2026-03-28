"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Experience"
          subtitle="A track record of building systems that automate complexity"
        />

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline line — gold gradient */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimateIn key={`${exp.company}-${exp.period}`} delay={i * 0.08}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot with glow */}
                  <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(197,165,90,0.5)]" />

                  <div className="glass-card p-6 glow-card">
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)]">
                          {exp.company}
                          {exp.division && (
                            <span className="text-[var(--text-muted)] font-normal">
                              {" "}| {exp.division}
                            </span>
                          )}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)] whitespace-nowrap shrink-0">
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-sm text-accent font-medium mb-4">
                        {exp.role} &mdash; {exp.period}
                      </p>

                      <ul className="space-y-2.5">
                        {exp.highlights.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Next page CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagneticButton className="inline-block">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent transition-colors duration-300 group"
            >
              View My Skills
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
