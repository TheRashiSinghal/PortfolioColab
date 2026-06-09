"use client";

import { motion } from "motion/react";

/**
 * Continuously scrolling row. Content is duplicated so the loop is seamless;
 * the track translates -50% (one copy width) on repeat.
 */
export function Marquee({
  items,
  duration = 28,
}: {
  items: string[];
  duration?: number;
}) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-6">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl tracking-tight text-muted md:text-3xl"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
