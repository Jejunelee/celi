"use client";

import { useEffect, useState } from "react";

export function BookReader({ total }: { total: number }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") setPage((current) => Math.min(total, current + 1));
      if (event.key === "ArrowLeft") setPage((current) => Math.max(1, current - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const src = `/books/greenchef/${String(page).padStart(3, "0")}.jpg`;

  return (
    <div className="mt-8">
      <figure className="mx-auto max-w-3xl bg-white p-3 shadow-sm sm:p-5">
        <img
          src={src}
          alt={`Page ${page} of An A–Z Guide for a Greenchef`}
          width={815}
          height={1186}
          className="mx-auto h-auto max-h-[78vh] w-auto"
        />
      </figure>
      <div className="mx-auto mt-5 flex max-w-3xl items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1}
          className="h-11 px-4 text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4 disabled:text-stone disabled:no-underline"
        >
          Previous
        </button>
        <p className="text-sm text-stone">
          {page} of {total}
        </p>
        <button
          type="button"
          onClick={() => setPage((current) => Math.min(total, current + 1))}
          disabled={page === total}
          className="h-11 px-4 text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4 disabled:text-stone disabled:no-underline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
