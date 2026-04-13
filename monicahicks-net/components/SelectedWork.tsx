import { selectedWork } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-20 border-b border-ink/10 bg-cream-muted/50">
      <div className="mx-auto max-w-content px-5 py-section md:px-8">
        <SectionHeading
          eyebrow="Selected work"
          titleId="work-heading"
          title="Highlights from recent roles"
          subtitle="A brief overview of my recent work in software engineering and management."
        />
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {selectedWork.map((item) => (
            <article
              key={`${item.title}-${item.org}`}
              className="flex h-full flex-col rounded-card border border-ink/10 bg-white/80 p-5 shadow-card transition duration-300 hover:border-ink/15 hover:shadow-card-hover md:p-5"
            >
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink md:text-xl">{item.title}</h3>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                  {item.period}
                </p>
              </div>
              <p className="font-sans text-xs font-medium text-accent md:text-sm">{item.org}</p>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                {item.description}
              </p>
              <ul className="mt-4 flex flex-wrap justify-center gap-1.5" aria-label="Skills and technologies">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-flex rounded-full border border-ink/8 bg-cream px-2 py-0.5 font-sans text-[11px] font-medium text-ink-muted">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
