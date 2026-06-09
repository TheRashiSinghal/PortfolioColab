"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, type Category, type Work } from "@/data/works";
import { WorkTile } from "./work-tile";
import { Lightbox } from "./lightbox";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;
const FILTERS: Filter[] = ["All", ...CATEGORIES];

export function WorkGallery({ works }: { works: Work[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.category === filter)),
    [filter, works],
  );

  return (
    <>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            data-cursor
            className={cn(
              "font-mono text-xs uppercase tracking-widest transition-colors",
              filter === f ? "text-ink" : "text-muted hover:text-ink",
            )}
          >
            {f}
            {f !== "All" && (
              <sup className="ml-1 text-[8px]">
                {works.filter((w) => w.category === f).length}
              </sup>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((work, i) => (
          <WorkTile
            key={work.slug}
            work={work}
            index={i}
            onOpen={setActive}
          />
        ))}
      </div>

      <Lightbox
        works={visible}
        activeSlug={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  );
}
