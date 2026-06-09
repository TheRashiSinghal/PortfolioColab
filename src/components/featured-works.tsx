"use client";

import { useState } from "react";
import Link from "next/link";
import type { Work } from "@/data/works";
import { WorkTile } from "./work-tile";
import { Lightbox } from "./lightbox";

export function FeaturedWorks({ works }: { works: Work[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <WorkTile
            key={work.slug}
            work={work}
            index={i}
            priority={i < 3}
            onOpen={setActive}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/work"
          data-cursor
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
        >
          View all work
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <Lightbox
        works={works}
        activeSlug={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  );
}
