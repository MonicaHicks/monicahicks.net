type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  subtitle?: string;
  /** Appended to width utilities; include `mb-0` when the heading sits in a grid beside other content. */
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={
        className !== undefined
          ? `max-w-2xl ${className}`
          : "mb-8 max-w-2xl md:mb-10"
      }
    >
      {eyebrow ? (
        <p className="mb-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-[1.65rem] font-semibold leading-snug tracking-tight text-ink md:text-[2.05rem]"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2.5 font-sans text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
