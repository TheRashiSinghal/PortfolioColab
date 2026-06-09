import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Moodboard",
  description:
    "A visual moodboard — fragments, references, and finished pieces from Rashi Singhal's practice.",
};

export default function MoodboardPage() {
  return (
    <section className="px-6 pb-12 pt-36 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            References & fragments
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,9vw,8rem)] font-light leading-[0.9] tracking-tight">
            Moodboard
          </h1>
        </Reveal>

        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {works.map((work) => (
            <div
              key={work.slug}
              className="break-inside-avoid overflow-hidden rounded-sm bg-surface"
            >
              <Image
                src={work.image.src}
                alt={work.title}
                width={work.image.width}
                height={work.image.height}
                placeholder="blur"
                blurDataURL={work.image.blurDataURL}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
