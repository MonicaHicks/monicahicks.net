import type { ReactNode } from "react";
import { contact } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

function ContactTile({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["rounded-card border border-ink/10 bg-white/80 p-4 shadow-card md:p-4", className]
        .filter(Boolean)
        .join(" ")}
    >
      <dt className="font-sans text-[11px] font-semibold uppercase tracking-wide text-ink-faint">{label}</dt>
      <dd className="mt-1.5 text-center font-sans">{children}</dd>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-content px-5 py-section md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0 max-w-xl lg:max-w-none">
            <SectionHeading
              eyebrow="Contact"
              titleId="contact-heading"
              title="I'd love to hear from you"
              className="mb-0"
            />
            <div className="mt-5 space-y-1.5 font-sans text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
              {contact.invitation.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <dl className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2.5">
            <ContactTile label="Email" className="sm:col-span-2">
              <a
                href={contact.email.href}
                className="break-words text-sm font-semibold text-accent underline-offset-4 transition hover:underline md:text-base"
              >
                {contact.email.label}
              </a>
            </ContactTile>
            <ContactTile label="LinkedIn">
              <a
                href={contact.linkedin.href}
                className="text-sm font-semibold text-ink underline-offset-4 transition hover:text-accent hover:underline md:text-base"
                rel="noreferrer noopener"
                target="_blank"
              >
                {contact.linkedin.label}
              </a>
            </ContactTile>
            <ContactTile label="GitHub">
              <a
                href={contact.github.href}
                className="text-sm font-semibold text-ink underline-offset-4 transition hover:text-accent hover:underline md:text-base"
                rel="noreferrer noopener"
                target="_blank"
              >
                {contact.github.label}
              </a>
            </ContactTile>
          </dl>
        </div>
      </div>
    </section>
  );
}
