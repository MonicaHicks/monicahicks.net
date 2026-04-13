import { beyondWork } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function BeyondWork() {
  return (
    <section id="beyond" aria-labelledby="beyond-heading" className="scroll-mt-20 border-b border-ink/10 bg-cream-muted/40">
      <div className="mx-auto max-w-content px-5 py-section md:px-8">
        <SectionHeading
          eyebrow="Beyond work"
          titleId="beyond-heading"
          title="Life outside the terminal"
          subtitle="Small things that shape how I show up."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
          {beyondWork.items.map((item) => (
            <li
              key={item.label}
              className="rounded-card border border-ink/10 bg-white/70 p-4 shadow-card transition hover:border-ink/15 hover:shadow-card-hover md:p-5"
            >
              <p className="font-display text-base font-semibold leading-snug text-ink md:text-lg">{item.label}</p>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
