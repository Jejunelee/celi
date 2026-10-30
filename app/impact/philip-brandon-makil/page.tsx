import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { philipMakilStory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Philip Brandon Makil",
  description:
    "Philip Brandon Makil on his Cooking for Life journey, from Candon to a kitchen in Gosau.",
};

export default function PhilipMakilPage() {
  return (
    <section className="bg-sand">
      <div className="page-wrap py-16 lg:py-24">
        <Link
          href="/impact#scholars-heading"
          className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
        >
          Successful scholars
        </Link>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-14">
          <Image
            src={philipMakilStory.image}
            alt={philipMakilStory.imageAlt}
            width={1200}
            height={1600}
            priority
            className="h-auto w-full bg-white"
            style={{ width: "100%", height: "auto" }}
          />
          <div>
            <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">CLP Journey 2010</p>
            <h1 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-ink">
              {philipMakilStory.name}
            </h1>
            <p className="mt-2 text-xs font-bold tracking-[0.08em] text-blue uppercase">
              {philipMakilStory.detail}
            </p>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-stone">
              {philipMakilStory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={philipMakilStory.pdf}
              className="mt-8 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
            >
              CLP Journey 2010
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
