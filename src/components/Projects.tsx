"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <div className="accent-line" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center">
            Projects
          </h2>
        </AnimateIn>

        {projects.map((project, i) => (
          <AnimateIn key={project.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-accent/30 card-glow transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold gradient-text">
                  {project.title}
                </h3>
                <span className="text-xs text-[var(--text-muted)] whitespace-nowrap shrink-0">
                  {project.period}
                </span>
              </div>

              <p className="text-sm text-accent font-medium mb-4">
                {project.role}
              </p>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg border border-accent/20 text-accent bg-accent/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
