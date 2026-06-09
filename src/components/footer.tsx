import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-20 md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Have a project in mind?
          </p>
          <Link
            href={`mailto:${site.email}`}
            data-cursor-label="Email"
            className="mt-4 block font-display text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.95] tracking-tight hover:italic"
          >
            Let&apos;s talk
          </Link>
        </Reveal>

        <div className="mt-20 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Email
            </span>
            <Link
              href={`mailto:${site.email}`}
              className="text-ink transition-opacity hover:opacity-60"
              data-cursor
            >
              {site.email}
            </Link>
          </div>

          <div className="flex gap-6">
            {site.socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {s.label} ↗
              </Link>
            ))}
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
