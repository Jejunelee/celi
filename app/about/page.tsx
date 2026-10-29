import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeopleRail } from "@/components/people-rail";
import { events, founderLinks, ourStory, programDocuments, spgBooks } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the people, programs, and practical work behind CELI’s mission.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate min-h-[620px] overflow-hidden lg:min-h-[760px]">
        <Image
          src="/images/hero-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_24%]"
        />
        <div className="absolute inset-0 bg-white/80" />
        <div className="page-wrap relative flex min-h-[620px] flex-col items-center justify-center py-16 text-center lg:min-h-[760px]">
          <p className="text-sm font-medium tracking-[0.14em] text-ink-soft uppercase sm:text-lg">
            Culinary Eco Life Inc.
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-ink">
            Meet the hands that feed the mission.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-ink sm:text-lg lg:text-xl">
            Discover the people, programs, and practical work behind CELI&apos;s mission to create
            opportunity through culinary education, sustainable livelihood, and environmental
            stewardship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#people"
              className="inline-flex h-[50px] min-w-[220px] items-center justify-center bg-blue px-6 text-sm font-medium tracking-[0.08em] text-white uppercase hover:bg-[#263a86] lg:min-w-[250px]"
            >
              Meet the people
            </a>
            <a
              href="#work"
              className="inline-flex h-[50px] min-w-[220px] items-center justify-center border-2 border-black bg-white/70 px-6 text-sm font-medium tracking-[0.08em] uppercase hover:bg-black hover:text-white lg:min-w-[250px]"
            >
              Explore our work
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="quote-heading">
        <div className="page-wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <figure className="relative mx-auto aspect-[598/570] w-full max-w-xl overflow-hidden bg-sage">
            <Image
              src="/images/quote.png"
              alt="Susana Guerrero and colleagues with hands raised during a gathering"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[48%_32%]"
            />
            <div className="absolute inset-0 bg-blue/40 mix-blend-multiply" />
            <span className="pointer-events-none absolute top-2 left-4 font-display text-7xl text-white sm:text-8xl" aria-hidden>
              “
            </span>
            <span className="pointer-events-none absolute right-5 bottom-2 font-display text-7xl text-white sm:text-8xl" aria-hidden>
              ”
            </span>
          </figure>
          <div>
            <p className="text-[13px] font-bold tracking-[0.18em] text-blue uppercase">
              A word from our founder
            </p>
            <blockquote>
              <p
                id="quote-heading"
                className="mt-4 font-display text-[clamp(1.7rem,3.2vw,3.4rem)] leading-[1.12] font-medium tracking-[-0.03em] text-ink italic"
              >
                “I’m ever thankful to our Lord for giving me with overflowing passion for two of my
                greatest crusades in life: the culinary profession and protecting the environment.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="story-heading">
        <div className="page-wrap py-16 text-center lg:py-24">
          <p className="text-[13px] font-bold tracking-[0.18em] text-blue uppercase">Our story</p>
          <h2
            id="story-heading"
            className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-green-deep"
          >
            They all cooked for a cause.
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-8 text-stone sm:text-lg">
            {ourStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="mt-10">
            <Image
              src="/images/mobile-kitchen.jpg"
              alt="The Mobile Kitchen at the Manila Food and Wine Festival"
              width={1600}
              height={762}
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-stone">
              Mobile Kitchen at the Manila Food and Wine Festival.
            </figcaption>
          </figure>
          <ul className="mt-8 flex flex-col items-center gap-3">
            {founderLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="mt-12 font-display text-3xl font-semibold tracking-[-0.03em] text-green-deep">
            SPG Books
          </h3>
          <ul className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {spgBooks.map((book) => {
              const cover = (
                <Image
                  src={book.image}
                  alt={`${book.title}, by ${book.author}`}
                  width={book.width}
                  height={book.height}
                  className="h-64 w-auto border border-line bg-white object-contain"
                  style={{ width: "auto", height: "16rem" }}
                />
              );
              return (
                <li key={book.title}>
                  <figure className="mx-auto w-fit">
                    {cover}
                    <figcaption className="mt-3 max-w-[16rem] text-sm font-medium leading-6 text-ink">
                      {book.title}
                    </figcaption>
                    <p className="text-sm text-stone">{book.author}</p>
                    {"href" in book ? (
                      <a
                        href={book.href}
                        className="mt-2 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                      >
                        Read the e-book
                      </a>
                    ) : null}
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="people" className="scroll-mt-28 bg-sand">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-[13px] font-bold tracking-[0.18em] text-blue uppercase">
            Board of Trustees
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-green-deep">
            Meet the people behind the plate.
          </h2>
          <div className="mt-8">
            <PeopleRail />
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-28 bg-blue text-white">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-[11px] font-bold tracking-[0.18em] text-cream uppercase">
            Our work in action
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(2.6rem,5.4vw,5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
            Programs we are proud of
          </h2>
          <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
            {events.map((event) => (
              <article
                key={event.id}
                id={event.id}
                className={`scroll-mt-28 items-center gap-8 ${
                  event.image ? "grid lg:grid-cols-2 lg:gap-14" : "border-t border-white/25 pt-2"
                }`}
              >
                {"images" in event ? (
                  <div className={`grid gap-3 ${event.flip ? "lg:order-2" : ""}`}>
                    {event.images.map((photo) => (
                      <div key={photo.src} className="relative aspect-[3/2] bg-sand">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover"
                          style={{ objectPosition: photo.position }}
                        />
                      </div>
                    ))}
                  </div>
                ) : event.image ? (
                  <div
                    className={`relative bg-sand ${event.flip ? "lg:order-2" : ""} ${
                      "fit" in event && event.fit === "contain"
                        ? `mx-auto w-full max-w-md ${"frame" in event && event.frame === "3/4" ? "aspect-[3/4]" : "aspect-[2/3]"}`
                        : "aspect-[575/450]"
                    }`}
                  >
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={"fit" in event && event.fit === "contain" ? "object-contain" : "object-cover"}
                      style={{ objectPosition: event.position }}
                    />
                    {"fit" in event && event.fit === "contain" ? null : (
                      <span className="pointer-events-none absolute right-4 bottom-4 size-14 border border-white/55 sm:size-[72px]" aria-hidden />
                    )}
                  </div>
                ) : null}
                <div>
                  <p className="text-[11px] font-bold tracking-[0.16em] text-cream uppercase">
                    {event.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(2rem,3.4vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.03em]">
                    {event.title}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-white sm:text-[15px]">
                    {event.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {"points" in event ? (
                      <ul className="list-disc space-y-2 pl-5">
                        {event.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {"links" in event ? (
                      <ul className="space-y-2">
                        {event.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium tracking-[0.08em] uppercase underline underline-offset-4 hover:text-cream"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <Link
                    href="/#get-involved"
                    className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.16em] uppercase hover:text-cream"
                  >
                    Get involved <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-wrap py-16 lg:py-20">
          <p className="text-[13px] font-bold tracking-[0.18em] text-blue uppercase">Documents</p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-green-deep">
            Read the programs in full.
          </h2>
          <figure className="mt-8 max-w-[16rem]">
            <a href="/images/flyer-celi.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/flyer-celi.jpg"
                alt="CELI flyer with the vision, mission, and Kitchen Scholars cover"
                width={1415}
                height={2000}
                className="h-auto w-full border border-line"
              />
            </a>
          </figure>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {programDocuments.map((document) => (
              <li key={document.href}>
                <a
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-16 items-center border border-line px-5 py-4 text-sm font-medium tracking-[0.06em] text-ink uppercase underline-offset-4 hover:border-blue hover:text-blue"
                >
                  {document.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
