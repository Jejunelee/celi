"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { timeline } from "@/lib/content";

const tones = {
  green: {
    year: "text-cream",
    title: "text-cream",
    muted: "text-cream/70",
    line: "bg-cream/45",
    dot: "border-cream bg-green",
    dotOn: "border-cream bg-cream",
    body: "text-white",
    rule: "border-cream/30",
  },
  deep: {
    year: "text-peach",
    title: "text-cream",
    muted: "text-cream/70",
    line: "bg-white/35",
    dot: "border-peach bg-green-deep",
    dotOn: "border-peach bg-peach",
    body: "text-white",
    rule: "border-white/25",
  },
} as const;

export function StoryTimeline({
  tone,
  idPrefix,
}: {
  tone: keyof typeof tones;
  idPrefix: string;
}) {
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ left: false, right: false });
  const railRef = useRef<HTMLDivElement>(null);
  const color = tones[tone];
  const item = timeline[active];
  const last = timeline.length - 1;
  const fade = tone === "green" ? "from-green" : "from-green-deep";

  function syncEdges() {
    const rail = railRef.current;
    if (!rail) return;
    setEdges({
      left: rail.scrollLeft > 4,
      right: rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4,
    });
  }

  useEffect(() => {
    syncEdges();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(syncEdges);
    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  function select(index: number) {
    setActive(index);
    const rail = railRef.current;
    const button = rail?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[index];
    if (!rail || !button) return;
    const left = button.offsetLeft - (rail.clientWidth - button.offsetWidth) / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: "auto" });
    syncEdges();
    button.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight" ? Math.min(last, active + 1) : Math.max(0, active - 1);
    select(next);
  }

  return (
    <div className="mt-8">
      <p className={`text-sm ${color.muted}`}>Follow the years, from 2001 to 2026.</p>
      <div className="relative mt-5">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-3 z-0 h-px ${color.line}`}
        />
        <div
          ref={railRef}
          role="tablist"
          aria-label="Milestones from 2001 to 2026"
          onKeyDown={onKeyDown}
          onScroll={syncEdges}
          className="relative z-10 flex overflow-x-auto focus-visible:outline-offset-4"
        >
          {timeline.map((entry, index) => {
            const selected = index === active;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                id={`${idPrefix}-milestone-${entry.id}`}
                aria-selected={selected}
                aria-controls={`${idPrefix}-milestone-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                className="flex w-40 shrink-0 flex-col text-left sm:w-44"
              >
                <span className={`text-xs font-bold tracking-[0.14em] uppercase ${color.year}`}>
                  {entry.year}
                </span>
                <span
                  className={`mt-2 min-h-10 pr-4 text-sm leading-5 ${selected ? color.title : color.muted}`}
                >
                  {entry.title}
                </span>
                <span className="mt-3 flex h-6 items-center">
                  <span
                    className={`size-3 shrink-0 rounded-full border-2 ${selected ? color.dotOn : color.dot}`}
                    aria-hidden
                  />
                </span>
              </button>
            );
          })}
        </div>
        {edges.left ? (
          <div className={`pointer-events-none absolute top-0 bottom-6 left-0 z-20 w-24 bg-gradient-to-r ${fade} from-40%`} />
        ) : null}
        {edges.right ? (
          <div className={`pointer-events-none absolute top-0 right-0 bottom-6 z-20 w-24 bg-gradient-to-l ${fade} from-40%`} />
        ) : null}
      </div>
      <div
        role="tabpanel"
        id={`${idPrefix}-milestone-panel`}
        aria-labelledby={`${idPrefix}-milestone-${item.id}`}
        className={`mt-6 border-t pt-5 ${color.rule}`}
      >
        <div className="max-w-2xl">
          <h3 className={`font-serif text-3xl ${color.title}`}>{item.title}</h3>
          <p className={`mt-3 text-base leading-7 ${color.body}`}>{item.body}</p>
        </div>
      </div>
    </div>
  );
}
