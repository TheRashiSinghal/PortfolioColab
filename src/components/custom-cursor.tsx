"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Custom cursor: a precise dot that tracks the pointer exactly, plus a
 * lagging ring that grows over interactive elements. Elements can opt into
 * a label (e.g. "View") via `data-cursor-label="View"`.
 *
 * Only renders on devices with a fine pointer + hover (desktop). On touch
 * devices it renders nothing and the native cursor is untouched.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  // Raw pointer position.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring lags behind with a soft spring.
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  const ringScale = useSpring(1, { stiffness: 300, damping: 24 });
  const dotOpacity = useTransform(ringScale, [1, 2.6], [1, 0]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, textarea, [role='button']",
      ) as HTMLElement | null;
      if (target) {
        setHovering(true);
        ringScale.set(target.dataset.cursorLabel ? 2.6 : 1.8);
        setLabel(target.dataset.cursorLabel ?? null);
      }
    };

    const out = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, textarea, [role='button']",
      );
      if (target) {
        setHovering(false);
        ringScale.set(1);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y, ringScale]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Lagging ring */}
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-ink mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          width: 36,
          height: 36,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {label ? (
          <span className="font-mono text-[6px] uppercase tracking-widest text-ink">
            {label}
          </span>
        ) : null}
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-accent"
        style={{
          x,
          y,
          opacity: hovering ? dotOpacity : 1,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
