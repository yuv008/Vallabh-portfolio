"use client";

import { Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(197,165,90,0.06) 0%, transparent 70%)",
            animation: "float-1 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(183,110,121,0.04) 0%, transparent 70%)",
            animation: "float-2 30s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionHeader title="Contact" />

        <AnimateIn>
          <div className="text-center mb-12">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
              Ready to collaborate?
            </p>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              Interested in discussing data automation, reporting operations, or
              potential collaborations? I&apos;d love to hear from you.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-[#050505] font-medium text-sm shadow-[0_0_24px_rgba(197,165,90,0.25)] hover:shadow-[0_0_40px_rgba(197,165,90,0.35)] transition-shadow duration-500"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-hover)] text-[var(--text-secondary)] text-sm hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-hover)] text-[var(--text-secondary)] text-sm hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </MagneticButton>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
