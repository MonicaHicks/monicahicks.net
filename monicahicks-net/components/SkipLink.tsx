export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only left-4 top-4 z-[60] rounded-md border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card focus:not-sr-only focus:absolute focus:outline-none"
    >
      Skip to content
    </a>
  );
}
