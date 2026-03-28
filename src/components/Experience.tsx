"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[var(--border-color)]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-[var(--bg-secondary)]" />

                <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                      {exp.company}
                      {exp.division && (
                        <span className="text-[var(--text-muted)] font-normal">
                          {" "}
                          | {exp.division}
                        </span>
                      )}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-accent font-medium italic mb-4">
                    {exp.role} &mdash; {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
