import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Info",
  description:
    "About Rashi Singhal — a visual designer working across brand identity, creative direction, and visual storytelling.",
};

export default function InfoPage() {
  return (
    <section className="px-6 pb-12 pt-36 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] font-light leading-[0.9] tracking-tight">
            Info
          </h1>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Bio */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="space-y-6 text-balance text-xl leading-relaxed text-ink md:text-2xl">
                {site.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Services + details */}
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                Services
              </h2>
              <ul className="mt-5 space-y-2">
                {site.services.map((s) => (
                  <li
                    key={s}
                    className="border-b border-line pb-2 font-display text-lg tracking-tight"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-12 font-mono text-xs uppercase tracking-widest text-muted">
                Elsewhere
              </h2>
              <ul className="mt-5 space-y-2">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor
                      className="flex items-center justify-between border-b border-line pb-2 transition-opacity hover:opacity-60"
                    >
                      <span className="font-display text-lg tracking-tight">
                        {s.label}
                      </span>
                      <span className="font-mono text-xs text-muted">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
