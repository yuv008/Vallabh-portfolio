"use client";

import { experiences } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <div className="accent-line" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center">
            Experience
          </h2>
        </AnimateIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-[var(--border-color)] to-[var(--border-color)]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimateIn key={`${exp.company}-${exp.period}`} delay={i * 0.08}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full bg-accent border-2 border-[var(--bg-secondary)] shadow-[0_0_8px_rgba(212,168,83,0.4)]" />

                  <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 hover:border-accent/30 card-glow transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
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

                    <ul className="space-y-2">
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
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
