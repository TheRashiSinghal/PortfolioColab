import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkGallery } from "@/components/work-gallery";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Rashi Singhal — brand identity, visual campaigns, heritage design, and visual storytelling.",
};

export default function WorkPage() {
  return (
    <section className="px-6 pb-12 pt-36 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {String(works.length).padStart(2, "0")} projects
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,9vw,8rem)] font-light leading-[0.9] tracking-tight">
            Work
          </h1>
        </Reveal>

        <div className="mt-16">
          <WorkGallery works={works} />
        </div>
      </div>
    </section>
  );
}
