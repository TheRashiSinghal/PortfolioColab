"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/**
 * Subtle total-visit counter pinned to the corner. Hits /api/views which
 * increments once per session (guarded client-side below) and returns the
 * running total. Until the API route exists it fails silently and renders
 * nothing — so it's safe to ship before Upstash is wired.
 */
export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Count a visit at most once per browser session.
    const counted = sessionStorage.getItem("rs_counted") === "1";
    const method = counted ? "GET" : "POST";

    fetch("/api/views", { method })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data || typeof data.count !== "number") return;
        if (!counted) sessionStorage.setItem("rs_counted", "1");
        setCount(data.count);
      })
      .catch(() => {
        /* API not available yet — stay hidden */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="pointer-events-none fixed bottom-4 left-4 z-40 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:flex"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {count.toLocaleString()} visits
    </motion.div>
  );
}
