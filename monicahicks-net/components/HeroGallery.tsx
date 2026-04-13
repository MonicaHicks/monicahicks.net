"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { heroGalleryImages } from "@/content/site";

const INTERVAL_MS = 5500;

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-card border border-ink/12 bg-white/90 p-6 text-center shadow-inner"
      role="img"
      aria-label={label}
    >
      <svg
        className="h-16 w-16 text-accent/35"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="8" y="14" width="48" height="38" rx="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 42l12-12 10 10 8-8 18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">
        Photo placeholder
      </p>
    </div>
  );
}

export function HeroGallery() {
  const slides = heroGalleryImages;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const labelId = useId();

  useEffect(() => {
    if (count <= 1) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timerId: number | undefined;

    const stop = () => {
      if (timerId !== undefined) {
        window.clearInterval(timerId);
        timerId = undefined;
      }
    };

    const sync = () => {
      stop();
      if (mq.matches) {
        setIndex(0);
        return;
      }
      timerId = window.setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, INTERVAL_MS) as unknown as number;
    };

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      stop();
    };
  }, [count]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count);
  }, [count]);

  return (
    <div className="flex w-full max-w-md justify-center justify-self-end lg:max-w-none lg:justify-end">
      <div className="flex w-full max-w-[320px] flex-col items-center sm:max-w-[380px] lg:max-w-[420px]">
        <div
          className="relative aspect-[4/5] w-full"
          role="region"
          aria-roledescription="carousel"
          aria-labelledby={labelId}
        >
          <p id={labelId} className="sr-only">
            Rotating gallery, {count} images. Image {index + 1} of {count} is shown.
          </p>
          {slides.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                className={`absolute inset-0 overflow-hidden rounded-card border border-ink/10 bg-white/60 shadow-card transition-opacity duration-700 ease-out ${
                  active ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={!active}
              >
                {slide.src ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 420px"
                    priority={i === 0}
                  />
                ) : (
                  <PhotoPlaceholder label={slide.alt} />
                )}
              </div>
            );
          })}
        </div>
        {count > 1 ? (
          <div
            className="mt-4 flex justify-center gap-2"
            role="tablist"
            aria-label="Gallery slides"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show image ${i + 1} of ${count}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  i === index ? "bg-accent" : "bg-ink/20 hover:bg-ink/35"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
