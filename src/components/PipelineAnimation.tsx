"use client";

import { motion } from "framer-motion";

const stages = ["Data", "Schema", "API", "Report"];

export function PipelineAnimation() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-12">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
            className="px-3 py-1.5 text-xs sm:text-sm font-mono rounded-lg border border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--bg-card)] hover:border-accent/40 hover:text-accent transition-colors duration-300"
          >
            {stage}
          </motion.div>
          {i < stages.length - 1 && (
            <div className="relative w-6 sm:w-10 h-px bg-[var(--border-color)]">
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(212,168,83,0.6)]"
                animate={{ x: [0, 24, 40] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
