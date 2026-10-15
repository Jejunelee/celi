"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export function MediaRail({
  label,
  itemName,
  count,
  controls = "overlay",
  onDark = false,
  children,
}: {
  label: string;
  itemName: string;
  count: number;
  controls?: "overlay" | "toolbar";
  onDark?: boolean;
  children: ReactNode;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const multiple = count > 1;

  useEffect(() => {
    const node = rail.current;
    if (!node || !multiple) return;

    let frame = 0;
    const sync = () => {
      const slides = [...node.querySelectorAll<HTMLElement>("[data-slide]")];
      const left = node.scrollLeft;
      let nearest = 0;
      let best = Number.POSITIVE_INFINITY;
      slides.forEach((slide, slideIndex) => {
        const distance = Math.abs(slide.offsetLeft - left);
        if (distance < best) {
          best = distance;
          nearest = slideIndex;
        }
      });
      setIndex(nearest);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };

    sync();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("scroll", onScroll);
    };
  }, [multiple, count]);

  function go(next: number) {
    const node = rail.current;
    const slide = node?.querySelectorAll<HTMLElement>("[data-slide]")[next];
    if (!node || !slide) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollTo({ left: slide.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!multiple) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(Math.min(count - 1, index + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(Math.max(0, index - 1));
    }
  }

  const buttons = multiple ? (
    <>
      <RailButton
        direction="previous"
        label={itemName}
        disabled={index === 0}
        onClick={() => go(index - 1)}
        floating={controls === "overlay"}
      />
      <RailButton
        direction="next"
        label={itemName}
        disabled={index === count - 1}
        onClick={() => go(index + 1)}
        floating={controls === "overlay"}
      />
    </>
  ) : null;

  const status = multiple ? (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className={`text-[12px] tracking-[0.08em] uppercase ${onDark ? "text-white/75" : "text-stone"}`}>{label}</p>
      <div className="flex items-center" role="group" aria-label={`${label} slides`}>
        {Array.from({ length: count }, (_, slide) => (
          <button
            key={slide}
            type="button"
            aria-label={`Show ${itemName} ${slide + 1} of ${count}`}
            aria-current={slide === index ? "true" : undefined}
            onClick={() => go(slide)}
            className="inline-flex size-8 items-center justify-center"
          >
            <span
              className={`block size-2 rounded-full ${
                onDark
                  ? slide === index
                    ? "bg-white"
                    : "bg-white/35"
                  : slide === index
                    ? "bg-blue"
                    : "bg-ink/25"
              }`}
            />
          </button>
        ))}
      </div>
      <p
        className={`text-[12px] tracking-[0.08em] uppercase tabular-nums sm:ml-auto ${onDark ? "text-white/75" : "text-stone"}`}
        aria-live="polite"
      >
        {index + 1} of {count}
      </p>
      {controls === "toolbar" ? <div className="flex gap-2">{buttons}</div> : null}
    </div>
  ) : null;

  return (
    <div>
      {controls === "toolbar" ? <div className="mb-4">{status}</div> : null}
      <div className="relative">
        <div
          ref={rail}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={label}
          onKeyDown={onKeyDown}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
        {controls === "overlay" ? buttons : null}
      </div>
      {controls === "overlay" ? <div className="mt-4">{status}</div> : null}
    </div>
  );
}

function RailButton({
  direction,
  label,
  disabled,
  onClick,
  floating,
}: {
  direction: "previous" | "next";
  label: string;
  disabled: boolean;
  onClick: () => void;
  floating: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Show ${direction} ${label}`}
      className={`inline-flex size-11 items-center justify-center border border-ink/15 bg-white text-lg text-ink transition-opacity hover:border-blue hover:text-blue disabled:cursor-default disabled:opacity-40 ${
        floating
          ? `absolute top-1/2 z-10 -translate-y-1/2 bg-white/95 shadow-[0_1px_4px_rgba(23,35,28,0.16)] ${
              direction === "previous" ? "left-3" : "right-3"
            }`
          : ""
      }`}
    >
      <span aria-hidden>{direction === "previous" ? "←" : "→"}</span>
    </button>
  );
}
