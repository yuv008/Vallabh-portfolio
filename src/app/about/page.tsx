"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Target, ArrowRight } from "lucide-react";
import { aboutBio, quickFacts } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";

const stats = [
  { value: 180, suffix: "+", label: "Fund Reports Automated" },
  { value: 300, suffix: "+", label: "Hours Saved Annually" },
  { value: 5, suffix: "+", label: "Industries Served" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="About"
          subtitle="Building automation systems that bring order to complexity"
        />

        {/* Photo + Bio */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-20">
          {/* Photo */}
          <AnimateIn direction="right" className="lg:col-span-2 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60 group-hover:opacity-100" />
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden glow-card">
                <Image
                  src="/profile.jpg"
                  alt="Vallabh Wattamwar"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 384px, 320px"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Bio + Quick Facts */}
          <div className="lg:col-span-3 space-y-8">
            <AnimateIn delay={0.1}>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
                {aboutBio}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-xs font-semibold mb-6 text-accent uppercase tracking-[0.2em]">
                  Quick Facts
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Briefcase, label: "Current Role", value: quickFacts.currentRole },
                    { icon: GraduationCap, label: "Education", value: quickFacts.education },
                    { icon: Target, label: "Focus Areas", value: quickFacts.focusAreas },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--glow)] border border-[var(--border-accent)] flex items-center justify-center shrink-0">
                        <fact.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-muted)] mb-0.5 uppercase tracking-wider">
                          {fact.label}
                        </p>
                        <p className="text-sm text-[var(--text-primary)] font-medium">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center glass-card p-6 sm:p-8 glow-card">
                <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
                  {stat.label}
                </p>
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
              href="/experience"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-accent transition-colors duration-300 group"
            >
              See My Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
