import { HeroGallery } from "@/components/HeroGallery";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-ink/10 bg-cream"
    >
      <div className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
              {hero.role}
            </p>
            <h1
              id="hero-heading"
              className="font-display text-[2.35rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-[2.85rem]"
            >
              {site.name}
            </h1>
            <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed lg:max-w-none">
              {hero.intro}
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-white/80 px-5 py-2.5 font-sans text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-white"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <HeroGallery />
        </div>
      </div>
    </section>
  );
}
