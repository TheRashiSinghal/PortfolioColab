"use client";

import { motion } from "motion/react";

/**
 * `template.tsx` re-mounts on every navigation, so it's the natural place
 * for an enter animation. Each route fades and lifts into place; the accent
 * wipe panel sweeps away to reveal it. Reduced-motion users get an instant
 * cut because the transition durations collapse via the global CSS rule.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9998] origin-top bg-accent"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        style={{ transformOrigin: "bottom" }}
      />
    </>
  );
}
