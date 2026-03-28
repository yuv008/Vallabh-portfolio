"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

export default function EducationPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Education"
          subtitle="Academic foundation in business analytics and international business"
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {education.map((edu, i) => (
            <AnimateIn key={edu.school} delay={i * 0.15}>
              <div className="glass-card p-6 sm:p-8 h-full glow-card">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[var(--glow)] border border-[var(--border-accent)] flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm text-[var(--text-muted)]">
                      {edu.date}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-1 text-[var(--text-primary)]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {edu.field}
                  </p>

                  {edu.stem && (
                    <span className="inline-block text-xs font-mono text-accent bg-[var(--glow)] border border-[var(--border-accent)] px-2.5 py-1 rounded-md mb-4">
                      STEM-Designated
                    </span>
                  )}

                  <p className="text-sm text-[var(--text-secondary)] mt-2">
                    {edu.school}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {edu.location}
                  </p>

                  {edu.gpa && (
                    <div className="mt-5 pt-5 border-t border-[var(--border-color)]">
                      <p className="text-sm text-[var(--text-secondary)]">
                        GPA:{" "}
                        <span className="font-semibold gradient-text">
                          {edu.gpa}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
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
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent transition-colors duration-300 group"
            >
              Let&apos;s Connect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
