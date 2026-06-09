"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
      data-cursor
    >
      {/* Render a stable label until mounted to avoid hydration mismatch */}
      <span className="font-mono text-xs uppercase tracking-widest">
        {mounted ? (isDark ? "Light" : "Dark") : "Theme"}
      </span>
    </button>
  );
}
