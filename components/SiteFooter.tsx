import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-cream-muted/30">
      <div className="mx-auto max-w-content px-5 py-6 font-sans text-sm text-ink-muted md:px-8">
        <p className="font-medium text-ink">
          {site.name}
          <span className="text-ink-faint"> · </span>
          <span className="font-normal text-ink-muted">{year}</span>
        </p>
      </div>
    </footer>
  );
}
