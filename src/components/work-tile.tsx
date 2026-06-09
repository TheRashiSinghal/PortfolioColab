"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Work } from "@/data/works";

export function WorkTile({
  work,
  index = 0,
  priority = false,
  onOpen,
}: {
  work: Work;
  index?: number;
  priority?: boolean;
  onOpen?: (slug: string) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen?.(work.slug)}
      aria-label={`View ${work.title}`}
      data-cursor-label="View"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 3) * 0.06,
      }}
      className="group block w-full text-left"
    >
      <div className="relative overflow-hidden rounded-sm bg-surface">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${work.image.width} / ${work.image.height}` }}
        >
          <Image
            src={work.image.src}
            alt={work.title}
            fill
            placeholder="blur"
            blurDataURL={work.image.blurDataURL}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg tracking-tight">{work.title}</h3>
        <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
          {work.year}
        </span>
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        {work.category}
      </p>
    </motion.button>
  );
}
