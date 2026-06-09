import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Rashi Singhal — ${site.email}`,
};

export default function ContactPage() {
  return (
    <section className="flex min-h-dvh flex-col justify-center px-6 py-36 md:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(2rem,7vw,6rem)] font-light leading-[0.95] tracking-tight">
            Let&apos;s make something
            <br />
            <span className="italic">worth looking at.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <Link
            href={`mailto:${site.email}`}
            data-cursor-label="Email"
            className="mt-12 inline-block font-display text-[clamp(1.5rem,4vw,3rem)] font-light tracking-tight underline decoration-line decoration-1 underline-offset-8 transition-colors hover:decoration-accent"
          >
            {site.email}
          </Link>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {s.label} — {s.handle} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
