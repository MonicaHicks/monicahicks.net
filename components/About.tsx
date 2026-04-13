import { about } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-content px-5 py-section md:px-8">
        <SectionHeading
          eyebrow="About"
          titleId="about-heading"
          title="A software engineer who loves coding."
          subtitle="A little context on how I work and what matters to me."
        />
        <div className="grid gap-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            {about.paragraphs.slice(0, 2).map((p) => (
              <p key={p.slice(0, 24)} className="mb-4 font-sans text-base leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}
          </div>
          <div className="md:col-span-5">
            <div className="rounded-card border border-ink/10 bg-white/70 p-5 shadow-card md:p-6">
              <p className="font-sans text-base leading-relaxed text-ink-muted md:text-lg">{about.paragraphs[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
