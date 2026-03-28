"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
                {project.title}
              </h3>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                {project.period}
              </span>
            </div>

            <p className="text-sm text-accent font-medium italic mb-4">
              {project.role}
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg border border-accent/30 text-accent bg-accent/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline transition-colors"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
