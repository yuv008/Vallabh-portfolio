"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <div className="accent-line" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center">
            Education
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <AnimateIn key={edu.school} delay={i * 0.15}>
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-accent/30 card-glow transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">
                    {edu.date}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-1">
                  {edu.degree} in {edu.field}
                </h3>

                {edu.stem && (
                  <span className="inline-block text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded mb-3">
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
                  <p className="text-sm text-[var(--text-secondary)] mt-4 pt-4 border-t border-[var(--border-color)]">
                    GPA: <span className="font-semibold text-accent">{edu.gpa}</span>
                  </p>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
