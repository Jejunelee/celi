"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/content";

function isCurrent(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollTimeline = CSS.supports("animation-timeline", "scroll()");
    if (scrollTimeline && !reduceMotion) return;

    const onScroll = () => setCompact(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-40 border-b border-black/10 bg-white ${compact ? "is-compact" : ""}`}
    >
      <div className="site-header-bar page-wrap relative flex items-center justify-between gap-4">
        <Logo />
        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 xl:gap-10 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className={`site-nav-link font-medium uppercase tracking-[0.04em] hover:text-blue ${
                isCurrent(pathname, link.href) ? "text-blue" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#get-involved"
          className="site-nav-cta hidden items-center justify-center bg-blue font-medium uppercase tracking-[0.06em] text-paper hover:bg-[#263a86] lg:inline-flex"
        >
          Get Involved
        </Link>
        <button
          type="button"
          className="site-menu-button inline-flex items-center justify-center border border-ink/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        inert={!open}
        aria-hidden={!open}
        className={`mobile-nav border-black/5 bg-white lg:hidden ${open ? "is-open border-t" : ""}`}
      >
        <div className="mobile-nav-panel">
          <div className="page-wrap flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                className={`px-1 py-3 text-base font-medium uppercase tracking-[0.06em] ${
                  isCurrent(pathname, link.href) ? "text-blue" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/features"
              className="px-1 py-3 text-base font-medium uppercase tracking-[0.06em]"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#get-involved"
              className="mt-2 inline-flex h-12 items-center justify-center bg-blue text-sm font-medium uppercase tracking-[0.08em] text-white"
              onClick={() => setOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
