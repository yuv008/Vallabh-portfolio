"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, Target } from "lucide-react";
import { aboutBio, quickFacts } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-accent/30">
                <Image
                  src="/profile.jpg"
                  alt="Vallabh Wattamwar"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
                {aboutBio}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8"
          >
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-6 text-accent">
              Quick Facts
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Current Role
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    {quickFacts.currentRole}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Education
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    {quickFacts.education}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Focus Areas
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    {quickFacts.focusAreas}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
