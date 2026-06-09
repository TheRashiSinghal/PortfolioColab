import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { FeaturedWorks } from "@/components/featured-works";
import { featuredWorks } from "@/data/works";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro / about teaser */}
      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="max-w-4xl text-balance font-display text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.1] tracking-tight">
              I help brands and studios shape identities and campaigns that feel
              intentional — from the first sketch to the final print.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/info"
              data-cursor
              className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              More about me
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee items={[...site.services]} />

      {/* Featured work */}
      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-14 flex items-end justify-between">
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light tracking-tight">
                Selected Work
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {String(featuredWorks.length).padStart(2, "0")} projects
              </span>
            </div>
          </Reveal>
          <FeaturedWorks works={featuredWorks} />
        </div>
      </section>
    </>
  );
}
