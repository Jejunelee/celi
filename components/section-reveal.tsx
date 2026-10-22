"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SectionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = [...document.querySelectorAll<HTMLElement>("main > section")];
    if (reduce) return;

    const reveal = () => {
      const limit = window.innerHeight * 0.9;
      for (const section of sections) {
        if (!section.classList.contains("reveal") || section.classList.contains("is-revealed")) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top < limit && rect.bottom > 0) section.classList.add("is-revealed");
      }
    };

    const viewHeight = window.innerHeight;
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top < viewHeight * 0.9 && rect.bottom > 0) continue;
      section.classList.add("reveal");
    }

    const hashId = window.location.hash.slice(1);
    if (hashId) {
      document.getElementById(decodeURIComponent(hashId))?.closest("main > section")?.classList.add("is-revealed");
    }

    const onFocusIn = (event: FocusEvent) => {
      const section = (event.target as Element | null)?.closest?.("main > section");
      if (section) section.classList.add("is-revealed");
    };

    reveal();
    const frame = window.requestAnimationFrame(reveal);
    const timers = [120, 450, 900].map((delay) => window.setTimeout(reveal, delay));
    window.addEventListener("scroll", reveal, { passive: true });
    document.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    window.addEventListener("hashchange", reveal);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("scroll", reveal);
      document.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
      window.removeEventListener("hashchange", reveal);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [pathname]);

  return null;
}
