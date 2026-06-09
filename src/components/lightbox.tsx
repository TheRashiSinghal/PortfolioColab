"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Work } from "@/data/works";

export function Lightbox({
  works,
  activeSlug,
  onClose,
  onNavigate,
}: {
  works: Work[];
  activeSlug: string | null;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}) {
  const index = works.findIndex((w) => w.slug === activeSlug);
  const work = index >= 0 ? works[index] : null;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index < 0) return;
      const next = (index + dir + works.length) % works.length;
      onNavigate(works[next].slug);
    },
    [index, works, onNavigate],
  );

  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [work, go, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={work.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9990] flex flex-col bg-bg/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <div>
              <h2 className="font-display text-lg tracking-tight">
                {work.title}
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {work.category} — {work.year}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              data-cursor
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink"
            >
              Close ✕
            </button>
          </div>

          {/* Image */}
          <div
            className="relative flex flex-1 items-center justify-center px-6 pb-6 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              data-cursor
              className="absolute left-2 z-10 px-4 font-mono text-xs uppercase tracking-widest text-muted hover:text-ink md:left-6"
            >
              ←
            </button>

            <motion.div
              key={work.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-full max-w-full"
              style={{
                aspectRatio: `${work.image.width} / ${work.image.height}`,
                width: "min(90vw, 1100px)",
                maxHeight: "82vh",
              }}
            >
              <Image
                src={work.image.src}
                alt={work.title}
                fill
                placeholder="blur"
                blurDataURL={work.image.blurDataURL}
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              data-cursor
              className="absolute right-2 z-10 px-4 font-mono text-xs uppercase tracking-widest text-muted hover:text-ink md:right-6"
            >
              →
            </button>
          </div>

          {/* Caption */}
          <div
            className="px-6 pb-8 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mx-auto max-w-2xl text-center text-sm text-muted">
              {work.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
