"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="accent-line" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center">
            Skills
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <AnimateIn key={category.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 h-full card-glow transition-shadow duration-500">
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold mb-4 text-accent uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-secondary)] hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
