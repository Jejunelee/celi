import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { antoninWriteup } from "@/lib/content";

export const metadata: Metadata = {
  title: "Antonin Careme Society, 2015",
  description:
    "Susana “Annie” Pascual-Guerrero, the first Asian awardee of the Antonin Careme Society.",
};

export default function AntoninCaremePage() {
  return (
    <section className="bg-sand">
      <div className="page-wrap py-16 lg:py-24">
        <Link
          href="/impact#recognition-heading"
          className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
        >
          Awards & recognition
        </Link>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-14">
          <Image
            src={antoninWriteup.image}
            alt={antoninWriteup.imageAlt}
            width={antoninWriteup.imageWidth}
            height={antoninWriteup.imageHeight}
            priority
            className="h-auto w-full bg-white"
            style={{ width: "100%", height: "auto" }}
          />
          <div>
            <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">
              {antoninWriteup.kicker}
            </p>
            <h1 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-ink">
              {antoninWriteup.name}
            </h1>
            <p className="mt-3 font-serif text-xl text-ink">{antoninWriteup.subtitle}</p>
            <div className="mt-6 max-w-3xl space-y-8 text-base leading-7 text-stone">
              {antoninWriteup.sections.map((section) => (
                <section key={section.title || "opening"}>
                  {section.title ? (
                    <h2 className="font-serif text-2xl text-ink">{section.title}</h2>
                  ) : null}
                  <div className={section.title ? "mt-4 space-y-4" : "space-y-4"}>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
              <section>
                <h2 className="font-serif text-2xl text-ink">Publications of Susana P. Guerrero</h2>
                <div className="mt-4 space-y-6">
                  {antoninWriteup.publications.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-sm font-bold tracking-[0.12em] text-blue uppercase">
                        {group.title}
                      </h3>
                      <ol className="mt-2 list-decimal space-y-1 pl-5">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="font-serif text-2xl text-ink">Speaking Engagements</h2>
                <ul className="mt-4 space-y-4">
                  {antoninWriteup.engagements.map((engagement) => (
                    <li key={`${engagement.date}-${engagement.title}`}>
                      <p className="text-xs font-bold tracking-[0.12em] text-blue uppercase">
                        {engagement.date}
                      </p>
                      <p className="mt-1 text-ink">{engagement.title}</p>
                      {engagement.audience ? <p className="mt-1">{engagement.audience}</p> : null}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <a
              href={antoninWriteup.pdf}
              className="mt-8 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
            >
              Antonin Careme write-up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
