import type { Metadata } from "next";
import Link from "next/link";
import { BookReader } from "@/components/book-reader";

export const metadata: Metadata = {
  title: "An A–Z Guide for a Greenchef",
  description: "An A–Z Guide for a Greenchef, by Annie Pascual-Guerrero.",
};

export default function GreenChefBookPage() {
  return (
    <section className="bg-sand">
      <div className="page-wrap py-12 lg:py-16">
        <p className="text-[13px] font-bold tracking-[0.18em] text-blue uppercase">SPG Books</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-green-deep">
          An A–Z Guide for a Greenchef
        </h1>
        <p className="mt-3 text-base text-stone">Annie Pascual-Guerrero</p>
        <BookReader total={116} />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="/documents/a-z-guide-for-a-green-chef.epub"
            download
            className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
          >
            Download the e-book
          </a>
          <Link
            href="/about"
            className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
          >
            Back to About
          </Link>
        </div>
      </div>
    </section>
  );
}
