import { projects } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-content px-5 py-section md:px-8">
        <SectionHeading
          eyebrow="Projects"
          titleId="projects-heading"
          title="Past and Current Projects"
          subtitle="A sample of past work in research, student-led organizations, and side projects."
        />
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-card border border-ink/10 bg-white/70 p-5 shadow-card transition duration-300 hover:border-ink/20 hover:shadow-card-hover md:p-5"
            >
              <h3 className="font-display text-lg font-semibold leading-snug text-ink md:text-xl">{project.title}</h3>
              <p className="mt-2.5 flex-1 font-sans text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                {project.summary}
              </p>
              <ul className="mt-4 flex flex-wrap justify-center gap-1.5" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex rounded-md bg-accent-soft px-2 py-0.5 font-sans text-[11px] font-medium text-accent">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 font-sans text-sm font-semibold">
                <a
                  href={project.links.github}
                  className="text-accent underline-offset-4 transition hover:underline"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  GitHub
                </a>
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    className="text-ink-muted underline-offset-4 transition hover:text-accent hover:underline"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Publication
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
