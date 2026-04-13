import { education } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 border-b border-ink/10 bg-cream-muted/40"
    >
      <div className="mx-auto max-w-content px-5 py-section md:px-8">
        <SectionHeading
          eyebrow="Education"
          titleId="education-heading"
          title="Formal training"
          subtitle="Where I built the foundation for how I think about engineering."
        />
        <div className="mx-auto grid max-w-3xl gap-4">
          {education.map((entry) => (
            <article
              key={`${entry.institution}-${entry.degree}`}
              className="rounded-card border border-ink/10 bg-white/80 p-5 shadow-card md:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink md:text-xl">{entry.degree}</h3>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                  {entry.period}
                </p>
              </div>
              <p className="mt-1 font-sans text-xs font-medium text-accent md:text-sm">{entry.institution}</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                {entry.description}
              </p>
              {entry.highlights.length > 0 ? (
                <ul className="mt-4 flex flex-wrap justify-center gap-1.5" aria-label="Focus areas">
                  {entry.highlights.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-full border border-ink/8 bg-cream px-2 py-0.5 font-sans text-[11px] font-medium text-ink-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
