"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: title drifts up and fades as the hero scrolls away.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const reveal = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20"
    >
      <motion.div style={{ y, opacity }}>
        <motion.p
          {...reveal}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-mono text-xs uppercase tracking-widest text-muted"
        >
          {site.role} — {site.location}
        </motion.p>

        <h1 className="font-display font-light leading-[0.86] tracking-tight">
          <motion.span
            {...reveal}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3rem,15vw,13rem)]"
          >
            Rashi
          </motion.span>
          <motion.span
            {...reveal}
            transition={{ duration: 0.9, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3rem,15vw,13rem)] italic"
          >
            Singhal
          </motion.span>
        </h1>

        <motion.p
          {...reveal}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-balance text-lg text-muted md:text-xl"
        >
          A visual designer focused on minimal, concept-driven digital
          aesthetics.
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted md:right-10 md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
