"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Skills"
          subtitle="The tools and expertise I bring to every project"
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, i) => (
            <AnimateIn key={category.title} delay={i * 0.1}>
              <div className="glass-card p-6 sm:p-8 h-full glow-card">
                <div className="relative z-10">
                  <h3 className="font-[family-name:var(--font-heading)] text-xs font-semibold mb-5 text-accent uppercase tracking-[0.2em]">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-card)] hover:border-accent/40 hover:text-accent hover:bg-[var(--glow)] hover:shadow-[0_0_16px_rgba(197,165,90,0.08)] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent transition-colors duration-300 group"
            >
              See My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
