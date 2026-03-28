"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Projects"
          subtitle="Entrepreneurial ventures and data-driven solutions"
        />

        <div className="space-y-8 mb-20">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.1}>
              <div className="glass-card p-6 sm:p-10 glow-card">
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold gradient-text">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)] whitespace-nowrap shrink-0 mt-1">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-sm text-accent font-medium mb-5">
                    {project.role}
                  </p>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-lg border border-rose-gold/20 text-rose-gold bg-rose-gold/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <MagneticButton className="inline-block">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors group"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </MagneticButton>
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
              href="/education"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent transition-colors duration-300 group"
            >
              View Education
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
