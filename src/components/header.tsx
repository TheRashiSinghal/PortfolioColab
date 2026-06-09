"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the overlay is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Magnetic>
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight"
            data-cursor
          >
            {site.name}
          </Link>
        </Magnetic>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Magnetic key={item.href} strength={0.2}>
                <Link
                  href={item.href}
                  data-cursor
                  className={cn(
                    "font-mono text-xs uppercase tracking-widest transition-colors",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </Magnetic>
            );
          })}
          <ThemeToggle className="text-muted transition-colors hover:text-ink" />
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-widest md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          data-cursor
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-bg px-6 md:hidden"
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.1 }}
              >
                <Link
                  href={item.href}
                  className="font-display text-5xl tracking-tight"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-10">
              <ThemeToggle className="text-muted" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
