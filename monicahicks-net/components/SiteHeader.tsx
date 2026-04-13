"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { site } from "@/content/site";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-3 md:px-8 md:py-3.5">
        <a
          href="#top"
          className="font-sans text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent md:text-xl"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-ink/10 bg-white/70 p-2 text-ink shadow-sm transition hover:border-ink/20 hover:bg-white md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex h-5 w-5 flex-col justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        aria-hidden={!open}
        className={`md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} border-t border-ink/10 bg-cream/95 transition-opacity duration-200`}
        hidden={!open}
      >
        <nav className="mx-auto flex max-w-content flex-col gap-0.5 px-5 py-3" aria-label="Primary mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 font-sans text-[15px] font-medium text-ink-muted transition-colors hover:bg-cream-muted hover:text-accent"
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
