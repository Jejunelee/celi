import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FacebookVideo } from "@/components/facebook-video";
import { StoryTimeline } from "@/components/story-timeline";
import {
  antoninAward,
  award,
  candonDocuments,
  candonRows,
  communities,
  graduateRows,
  homePrograms,
  impactVideos,
  pillars,
  pressClipping,
  pressReleases,
  stats,
  successfulScholars,
} from "@/lib/content";

function monogram(name: string) {
  const words = name.split(/\s+/).filter((word) => /^[A-Za-z]/.test(word) && !["of", "the"].includes(word.toLowerCase()));
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Scholars trained, meals served, and communities reached through Culinary Eco-Life, Inc.",
};

export default function ImpactPage() {
  return (
    <>
      <section className="relative isolate min-h-[560px] overflow-hidden lg:min-h-[700px]">
        <Image
          src="/images/about-kitchen.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#07793d]/78" />
        <div className="page-wrap relative flex min-h-[560px] flex-col justify-center py-16 lg:min-h-[700px]">
          <p className="text-sm font-bold tracking-[0.16em] text-peach uppercase">Our impact</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.7rem,6vw,5.6rem)] leading-[0.96] tracking-[-0.04em] text-cream">
            Education, ecology, and opportunity.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-paper sm:text-xl">
            CELI continues its mission to transform lives through culinary education, promote
            sustainable livelihood, and nurture a deeper care for our planet. Join us in making a
            difference — one life, one community and one greener future at a time.
          </p>
          <Link
            href="/#get-involved"
            className="mt-8 inline-flex h-[50px] w-fit items-center bg-white px-7 text-sm font-medium tracking-[0.08em] text-green uppercase hover:bg-cream"
          >
            Be part of the work
          </Link>
        </div>
      </section>

      <section className="bg-green text-paper" aria-labelledby="numbers-heading">
        <div className="page-wrap py-16 lg:py-24">
          <h2
            id="numbers-heading"
            className="max-w-3xl font-serif text-[clamp(2.1rem,4vw,3.8rem)] leading-[1.02] text-peach"
          >
            What the work has already made possible.
          </h2>
          <dl className="mt-12 grid gap-8 border-y border-white/30 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
            {stats.map((stat) => (
              <div key={stat.label} className="lg:border-l lg:border-white/30 lg:px-6 lg:first:border-0 lg:first:pl-0">
                <dt className="font-serif text-5xl text-cream lg:text-6xl">{stat.value}</dt>
                <dd className="mt-2 text-sm tracking-[0.08em] uppercase sm:text-base">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ecru" aria-labelledby="films-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">On film</p>
          <h2
            id="films-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em]"
          >
            Watch the work take root.
          </h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {impactVideos.map((video) => (
              <article key={video.href}>
                <FacebookVideo
                  href={video.href}
                  title={video.title}
                  width={video.width}
                  height={video.height}
                />
                <p className="mt-5 text-xs font-bold tracking-[0.14em] text-blue uppercase">
                  {video.eyebrow}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">{video.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-stone">{video.body}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                  >
                    Watch on Facebook
                  </a>
                  {video.eyebrow === "24 Oras Weekend" ? (
                    <a
                      href="https://www.facebook.com/hashtag/24orasweekend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                    >
                      #24OrasWeekend
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand" aria-labelledby="scholars-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">Successful scholars</p>
          <h2
            id="scholars-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em]"
          >
            The story of successful scholars.
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {successfulScholars.map((scholar, index) => (
              <li key={scholar.name} className="flex h-full gap-4 border border-line bg-white p-5 sm:gap-5 sm:p-6">
                <div
                  className={`relative shrink-0 bg-sand ${
                    scholar.image ? "h-36 w-24 sm:h-40 sm:w-28" : "size-[4.5rem]"
                  }`}
                >
                  {scholar.image ? (
                    <Image
                      src={scholar.image}
                      alt={scholar.imageAlt}
                      fill
                      sizes="112px"
                      className={
                        "imageFit" in scholar && scholar.imageFit === "cover" ? "object-cover" : "object-contain"
                      }
                      style={
                        "imageFit" in scholar && scholar.imageFit === "cover"
                          ? { objectPosition: "center 18%" }
                          : undefined
                      }
                    />
                  ) : (
                    <span className="flex size-full items-center justify-center font-serif text-xl text-green">
                      {monogram(scholar.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl leading-tight text-ink">{scholar.name}</h3>
                  {scholar.detail ? (
                    <p className="mt-1.5 text-xs font-bold tracking-[0.08em] text-blue uppercase">
                      {scholar.detail}
                    </p>
                  ) : null}
                  {scholar.story ? (
                    <p className="mt-2 text-sm leading-6 text-stone">{scholar.story}</p>
                  ) : null}
                  {"href" in scholar && scholar.href ? (
                    <a
                      href={scholar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                    >
                      {scholar.linkLabel}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="graduates-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">Number of graduates</p>
          <h2
            id="graduates-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em]"
          >
            Every batch, from 2013 to 2026.
          </h2>
          <p className="mt-4 text-sm text-stone sm:hidden">Swipe sideways to read every column.</p>
          <div className="mt-8 overflow-x-auto" tabIndex={0} aria-label="Graduate batches">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Cooking For Life graduates by year, program, and batch. Total 857 scholars.
              </caption>
              <thead>
                <tr className="bg-green text-cream">
                  <th className="px-4 py-3 font-medium">Year</th>
                  <th className="px-4 py-3 font-medium">CLP-Katipunan</th>
                  <th className="px-4 py-3 font-medium">CLP-Candon</th>
                  <th className="px-4 py-3 font-medium">CLP-Rotary</th>
                  <th className="px-4 py-3 text-right font-medium">Scholars</th>
                </tr>
              </thead>
              <tbody>
                {graduateRows.map((row, index) => (
                  <tr key={`${row.year}-${row.katipunan}-${row.candon}-${row.rotary}`} className={index % 2 ? "bg-sand" : "bg-white"}>
                    <th className="px-4 py-3 font-medium text-ink">{row.year}</th>
                    <td className="px-4 py-3 text-stone">{row.katipunan}</td>
                    <td className="px-4 py-3 text-stone">{row.candon}</td>
                    <td className="px-4 py-3 text-stone">{row.rotary}</td>
                    <td className="px-4 py-3 text-right font-medium text-ink">{row.scholars}</td>
                  </tr>
                ))}
                <tr className="bg-green-deep text-cream">
                  <th className="px-4 py-3 font-medium" colSpan={4}>Total</th>
                  <td className="px-4 py-3 text-right font-medium">857</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-14 font-serif text-3xl text-ink">Our longest collaboration with the City Government of Candon</h3>
          <div className="mt-6 max-w-xl overflow-x-auto" tabIndex={0} aria-label="Candon scholarship batches">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <caption className="sr-only">Candon scholarship batches. Total 250 scholars.</caption>
              <thead>
                <tr className="bg-[#314AA2] text-white">
                  <th className="px-4 py-3 font-medium">Year</th>
                  <th className="px-4 py-3 font-medium">Batch</th>
                  <th className="px-4 py-3 text-right font-medium">Scholars</th>
                </tr>
              </thead>
              <tbody>
                {candonRows.map((row, index) => (
                  <tr key={row.year} className={index % 2 ? "bg-sand" : "bg-white"}>
                    <th className="px-4 py-3 font-medium text-ink">{row.year}</th>
                    <td className="px-4 py-3 text-stone">{row.batch}</td>
                    <td className="px-4 py-3 text-right font-medium text-ink">{row.scholars}</td>
                  </tr>
                ))}
                <tr className="bg-[#314AA2] text-white">
                  <th className="px-4 py-3 font-medium" colSpan={2}>Total</th>
                  <td className="px-4 py-3 text-right font-medium">250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-6 flex flex-col gap-3">
            {candonDocuments.map((document) => (
              <li key={document.href}>
                <a
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                >
                  {document.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ecru" aria-labelledby="recognition-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">Awards & recognition</p>
          <h2
            id="recognition-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em]"
          >
            Noted for the work, and in the press.
          </h2>
          <article className="mt-8 flex flex-col gap-4 border border-line bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
            <div>
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">{award.title}</h3>
              <p className="mt-2 text-base leading-7 text-stone">{award.body}</p>
            </div>
            <a
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
            >
              Read the citation
            </a>
          </article>
          <article className="mt-4 grid gap-6 border border-line bg-white p-6 sm:grid-cols-[220px_1fr] sm:items-center sm:p-8">
            <div className="relative aspect-[3/2] bg-sand">
              <Image
                src={antoninAward.image}
                alt={antoninAward.imageAlt}
                fill
                sizes="220px"
                className="object-cover object-[center_30%]"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">{antoninAward.title}</h3>
              <p className="mt-2 text-base leading-7 text-stone">{antoninAward.body}</p>
              <a
                href={antoninAward.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
              >
                {antoninAward.linkLabel}
              </a>
            </div>
          </article>
          <p className="mt-12 text-sm font-bold tracking-[0.12em] text-blue uppercase">Press releases</p>
          <figure className="mt-6 grid items-start gap-6 border border-line bg-white p-6 sm:grid-cols-[minmax(0,280px)_1fr] sm:p-8">
            <div className="relative aspect-[3/4] bg-sand">
              <Image
                src={pressClipping.image}
                alt="Manila Standard clipping, The Wonders of Bokashi, September 6, 2015"
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>
            <figcaption>
              <p className="text-xs font-bold tracking-[0.14em] text-blue uppercase">
                {pressClipping.outlet} · {pressClipping.date}
              </p>
              <p className="mt-2 font-serif text-2xl text-ink">{pressClipping.title}</p>
              <a
                href={pressClipping.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
              >
                2015 press compilation
              </a>
            </figcaption>
          </figure>
          <ol className="mt-4 grid md:grid-cols-2 md:gap-x-12">
            {pressReleases.map((item, index) => (
              <li key={item.title} className="border-t border-line py-4">
                <p className="text-xs font-bold tracking-[0.14em] text-blue">
                  {String(index + 1).padStart(2, "0")} · {item.outlet}
                </p>
                <p className="mt-1 font-serif text-xl leading-snug text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-stone">{item.date}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="places-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">Where we work</p>
          <h2
            id="places-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em]"
          >
            Sustainable communities, built with the people who live there.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone">
            Susana Guerrero’s work has taken root in communities across the Philippines, linking
            culinary training with livelihood and care for the land.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {communities.map((place, index) => (
              <li key={place} className="border border-line bg-sand px-5 py-8">
                <p className="text-xs font-bold tracking-[0.16em] text-blue">0{index + 1}</p>
                <p className="mt-3 font-serif text-3xl text-ink">{place}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-blue text-paper" aria-labelledby="paths-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] uppercase">How the mission takes shape</p>
          <h2 id="paths-heading" className="mt-3 max-w-xl font-serif text-[clamp(2.1rem,4vw,3.6rem)] text-cream">
            Three paths, one table.
          </h2>
          <ol className="mt-10 grid gap-8 border-t border-white/30 pt-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.index}>
                <p className="text-sm font-bold tracking-[0.12em] uppercase">{pillar.index}</p>
                <h3 className="mt-2 font-serif text-3xl text-cream">{pillar.title}</h3>
                <p className="mt-3 text-base leading-7">{pillar.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="program-impact-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">Programs</p>
          <h2
            id="program-impact-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02]"
          >
            Programs built around people, food, and the planet.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {homePrograms.map((program) => (
              <article key={program.id} className="grid overflow-hidden bg-sand sm:grid-cols-[180px_1fr]">
                <div className="relative min-h-40">
                  <Image
                    src={program.image}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover"
                    style={{ objectPosition: program.position }}
                  />
                </div>
                <div className="px-5 py-6">
                  <p className="text-xs font-bold tracking-[0.14em] text-blue uppercase">
                    {program.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{program.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone">{program.body}</p>
                  <Link
                    href={program.href}
                    className="mt-4 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                  >
                    {program.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-deep text-paper">
        <div className="page-wrap py-16 lg:py-24">
          <h2 className="font-serif text-[clamp(2.1rem,4vw,3.8rem)] text-cream">
            From one vision to a growing network.
          </h2>
          <StoryTimeline tone="deep" idPrefix="impact" />
          <Link
            href="/about#work"
            className="mt-12 inline-flex h-[50px] items-center border border-white px-7 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white hover:text-green-deep"
          >
            Explore our work
          </Link>
        </div>
      </section>
    </>
  );
}
