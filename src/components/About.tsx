"use client";

import Image from "next/image";
import { Briefcase, GraduationCap, Target, TrendingUp, FileText, Clock } from "lucide-react";
import { aboutBio, quickFacts } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

const stats = [
  { value: "180+", label: "Fund Reports Automated", icon: FileText },
  { value: "300+", label: "Hours Saved Annually", icon: Clock },
  { value: "5+", label: "Industries Served", icon: TrendingUp },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="accent-line" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center">
            About Me
          </h2>
        </AnimateIn>

        {/* Profile + Bio row */}
        <div className="grid lg:grid-cols-3 gap-10 items-start mb-16">
          {/* Photo column */}
          <AnimateIn direction="right" className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-sm group-hover:blur-md transition-all duration-500" />
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-accent/30">
                <Image
                  src="/profile.jpg"
                  alt="Vallabh Wattamwar"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Bio column */}
          <AnimateIn delay={0.1} className="lg:col-span-2">
            <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg mb-8">
              {aboutBio}
            </p>

            {/* Quick Facts */}
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 card-glow transition-shadow duration-500">
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold mb-5 text-accent uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Current Role</p>
                    <p className="text-sm text-[var(--text-primary)] font-medium">
                      {quickFacts.currentRole}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Education</p>
                    <p className="text-sm text-[var(--text-primary)] font-medium">
                      {quickFacts.education}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">Focus Areas</p>
                    <p className="text-sm text-[var(--text-primary)] font-medium">
                      {quickFacts.focusAreas}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 sm:p-6 card-glow transition-shadow duration-500">
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
                <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
