"use client";

import { AnimateIn } from "./AnimateIn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-16 sm:mb-20">
      <AnimateIn>
        {/* Large outlined text behind */}
        <div className="relative flex justify-center">
          <span
            className="text-outlined font-[family-name:var(--font-heading)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight select-none"
            aria-hidden="true"
          >
            {title}
          </span>
          {/* Main heading */}
          <h1 className="relative font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text text-center pt-4 sm:pt-6">
            {title}
          </h1>
        </div>

        {subtitle && (
          <p className="text-center text-[var(--text-secondary)] text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="accent-line mt-6" />
      </AnimateIn>
    </div>
  );
}
