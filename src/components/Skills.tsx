"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-secondary)] hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
