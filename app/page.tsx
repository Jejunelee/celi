import Image from "next/image";
import Link from "next/link";
import { InquiryForm, InterestShortcuts } from "@/components/inquiry-form";
import { LogoMarquee } from "@/components/logo-marquee";
import { StoryTimeline } from "@/components/story-timeline";
import {
  email,
  events,
  homePrograms,
  mission,
  phones,
  pillars,
  stats,
  supportOffers,
  vision,
} from "@/lib/content";

function phoneHref(number: string) {
  const digits = number.replaceAll("-", "");
  return digits.startsWith("0") ? `tel:+63${digits.slice(1)}` : `tel:+632${digits}`;
}

const primaryBtn =
  "inline-flex h-[50px] min-w-[220px] items-center justify-center bg-blue px-6 text-[15px] font-medium tracking-[0.06em] text-white uppercase transition-colors hover:bg-[#263a86] lg:min-w-[260px] lg:text-lg";
const ghostBtn =
  "inline-flex h-[50px] min-w-[220px] items-center justify-center border-2 border-black bg-white/70 px-6 text-[15px] font-medium tracking-[0.06em] text-black uppercase transition-colors hover:bg-black hover:text-white lg:min-w-[260px] lg:text-lg";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[640px] overflow-hidden lg:min-h-[780px]">
        <Image
          src="/images/hero-home.png"
          alt="Cooking For Life scholars at their graduation ceremony"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-white/78" />
        <div className="page-wrap relative flex min-h-[640px] flex-col items-center justify-center py-16 text-center lg:min-h-[780px]">
          <p className="text-sm font-medium tracking-[0.14em] text-ink-soft uppercase sm:text-lg">
            Culinary Eco-Life, Inc.
          </p>
          <h1 className="mt-4 max-w-5xl font-serif text-[clamp(2.7rem,6.4vw,6.6rem)] leading-[0.92] tracking-[-0.045em] text-ink-soft">
            Teach them to cook.
            <br />
            Feed them for a lifetime
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-ink sm:text-xl sm:leading-8 lg:text-2xl">
            Empowering underserved Filipinos through culinary education, sustainable livelihood,
            and environmental stewardship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/about#work" className={primaryBtn}>
              Explore our work
            </Link>
            <Link href="/partners" className={ghostBtn}>
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-green text-paper">
        <div className="page-wrap py-16 lg:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">About us</p>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] tracking-[-0.03em] text-peach">
                A future where lives are transformed, communities flourish and people thrive in
                harmony with the planet.
              </h2>
            </div>
            <div className="max-w-3xl space-y-5 text-base leading-8 sm:text-lg sm:leading-8 lg:pt-2">
              <p>
                The Culinary Eco-Life, Inc. (formerly Culinary Education Foundation, Inc.) is a
                non-stock, non-profit organization. It was the vision of our founder, Ms. Susana
                “Annie” Guerrero, a Certified Culinary Professional, to be the lead foundation in
                providing culinary education to deserving individuals to help them succeed in the
                food service industry.
              </p>
              <p>
                In September 2001, with the help and support of individuals who share the same
                aspiration, the organization was finally created.
              </p>
              <p>
                Our logo embodies our objective of providing culinary education to those individuals
                aspiring to build a better future in the culinary industry. We are committed to
                develop and promote world-class Filipino chefs.
              </p>
              <p>
                CELI operates under the philosophy “Teach them to cook. Feed them for a lifetime.”
                It empowers underserved Filipinos, including out-of-school youth and women in
                depressed communities, through free culinary education, green food production
                training, and job placement. Key initiatives include The Super Manang Project,
                Cooking for Life, and eco-friendly technologies such as Bokashi composting, a water
                ozonator, and solar-powered kitchens.
              </p>
              <p>
                We believe that self-sufficiency paves the way for a future filled with opportunities
                and life-long achievements.
              </p>
              <Link
                href="/impact"
                className="mt-8 inline-flex text-base font-medium tracking-[0.08em] uppercase underline decoration-1 underline-offset-4 hover:text-peach sm:text-lg"
              >
                See our impact →
              </Link>
            </div>
          </div>

          <div className="mt-12 grid min-w-0 gap-4 md:grid-cols-[1.35fr_1fr] lg:mt-16">
            <div className="relative aspect-[835/431] min-w-0">
              <Image
                src="/images/about-kitchen.png"
                alt="Scholars preparing food during culinary training"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[601/437] min-w-0">
              <Image
                src="/images/about-produce.png"
                alt="Fresh produce used in CELI’s green food programs"
                fill
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <dl className="mt-12 grid gap-8 border-y border-white/35 py-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:py-10">
            {stats.map((stat) => (
              <div key={stat.label} className="lg:border-l lg:border-white/35 lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                <dt className="font-serif text-5xl text-cream lg:text-6xl">{stat.value}</dt>
                <dd className="mt-2 text-sm tracking-[0.08em] uppercase sm:text-base">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="founder-heading">
        <div className="page-wrap py-16 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,484px)_1fr] lg:gap-16">
            <div className="relative aspect-[484/532] w-full max-w-md">
              <Image
                src="/images/founder.png"
                alt="Susana Annie Guerrero, founding president of Culinary Eco-Life"
                fill
                sizes="(min-width: 1024px) 484px, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase sm:text-lg">
                Founder’s Story
              </p>
              <h2
                id="founder-heading"
                className="mt-3 font-serif text-[clamp(2.1rem,4vw,4.25rem)] leading-none tracking-[-0.03em] text-ink"
              >
                Susana ‘Annie’ Guerrero
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-ink sm:text-lg sm:leading-8 lg:text-xl">
                <p>
                  Susana (Annie) P. Guerrero advocates empowering communities through lifelong
                  learning, green practices, and sustainable livelihood. She has spearheaded the
                  Cooking for Life Program, a culinary training program with over 700 graduates.
                  Ninety percent are now working in the F&amp;B industry.
                </p>
                <p>
                  With the scholars of the program, she has provided more than twenty thousand hot
                  meals to healthcare workers during the pandemic. She has also built sustainable
                  communities in Bulacan, Leyte, Agusan del Sur, and Butuan City in Mindanao.
                </p>
                <p>
                  Her philosophy is that when you give a hungry man a fish, you feed him for a day,
                  but if you teach him how to fish, you feed him for a lifetime.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/images/group-kitchen.jpg"
            alt="CELI scholars and partners gathered together in the kitchen"
            width={1024}
            height={354}
            sizes="(min-width: 1024px) 1493px, 100vw"
            className="mx-auto mt-12 block h-auto w-full max-w-full object-contain lg:mt-16 lg:max-h-[516px]"
          />
        </div>
      </section>

      <section className="bg-blue text-paper" aria-labelledby="vision-heading">
        <div className="page-wrap py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">Our vision</p>
              <h2
                id="vision-heading"
                className="mt-4 max-w-xl font-serif text-[clamp(1.8rem,3.2vw,3.1rem)] leading-[1.15] text-cream"
              >
                {vision}
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">Our mission</p>
              <p className="mt-4 text-base leading-8 sm:text-lg lg:text-xl">{mission}</p>
            </div>
          </div>
          <div className="mt-12 border-t border-white/35 pt-8 lg:mt-16">
            <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
              {pillars.map((pillar) => (
                <li key={pillar.index}>
                  <p className="text-sm font-bold tracking-[0.12em] uppercase">{pillar.index}</p>
                  <h3 className="mt-2 font-serif text-3xl text-cream">{pillar.title}</h3>
                  <p className="mt-3 max-w-sm text-base leading-7 sm:text-lg">{pillar.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="programs" className="scroll-mt-28 bg-white">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase sm:text-lg">
            Programs
          </p>
          <h2 className="mt-3 max-w-5xl font-serif text-[clamp(2.2rem,4.4vw,4.25rem)] leading-[1.02] tracking-[-0.03em]">
            Programs built around people, food, and the planet.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {homePrograms.map((program) => (
              <article key={program.id} className="flex flex-col bg-blue text-paper">
                <div className="relative aspect-[2/1]">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: program.position }}
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7 sm:px-8 sm:py-8">
                  <p className="text-sm font-bold tracking-[0.12em] uppercase">{program.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-3xl text-ecru sm:text-[2.1rem]">{program.title}</h3>
                  <p className="mt-3 text-base leading-7 sm:text-lg">{program.body}</p>
                  <Link
                    href={program.href}
                    className="mt-5 inline-flex text-sm font-medium tracking-[0.08em] uppercase underline underline-offset-4 hover:text-cream sm:text-base"
                  >
                    {program.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {events
            .filter((event) => event.id === "green-tech")
            .map((event) => (
              <article
                key={event.id}
                className="mt-6 border border-line bg-sand px-6 py-8 sm:px-8"
              >
                <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">
                  Green technology
                </p>
                <h3 className="mt-2 font-serif text-3xl text-ink">{event.title}</h3>
                <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-ink">
                  {event.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href="/about#green-tech"
                  className="mt-5 inline-flex text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                >
                  Learn more →
                </Link>
              </article>
            ))}
        </div>
      </section>

      <section className="bg-green text-paper" aria-labelledby="story-heading">
        <div className="page-wrap py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">Our story</p>
            <h2
              id="story-heading"
              className="mt-4 font-serif text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.02] text-cream"
            >
              From one vision to a growing network of communities.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg">
              Approximately 4,000 beneficiaries have come through the CEF/CELI program since
              2001. They Are All Cooked for A Cause!
            </p>
          </div>
          <StoryTimeline tone="green" idPrefix="home" />
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16 lg:py-20" aria-labelledby="partners-heading">
        <div className="page-wrap text-center">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase sm:text-lg">
            Our partners
          </p>
          <h2
            id="partners-heading"
            className="mx-auto mt-3 max-w-4xl font-serif text-[clamp(2.1rem,4vw,4.25rem)] leading-[1.02] tracking-[-0.03em]"
          >
            Working together for greater impact.
          </h2>
        </div>
        <LogoMarquee />
        <div className="page-wrap text-center">
          <Link href="/partners" className="mt-10 inline-flex text-sm font-medium tracking-[0.1em] text-blue uppercase underline underline-offset-4">
            Meet our partners →
          </Link>
        </div>
      </section>

      <section className="bg-blue text-paper" aria-labelledby="sponsors-heading">
        <div className="page-wrap py-16 lg:py-24">
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">Sponsors</p>
              <h2
                id="sponsors-heading"
                className="mt-4 max-w-xl font-serif text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.02] text-cream"
              >
                Support that helps opportunity take root.
              </h2>
            </div>
            <div>
              <p className="max-w-xl text-base leading-8 sm:text-lg">
                Organizations and individuals can support CELI&apos;s programs and scholars. Write to
                us to sponsor the next cohort.
              </p>
              <Link
                href="/#get-involved"
                className="mt-6 inline-flex h-[50px] items-center justify-center bg-white px-8 text-sm font-medium tracking-[0.08em] text-blue uppercase transition-colors hover:bg-cream sm:text-base"
              >
                Become a sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand" aria-labelledby="support-heading">
        <div className="page-wrap py-16 lg:py-24">
          <p className="text-sm font-bold tracking-[0.12em] text-blue uppercase">Support the work</p>
          <h2
            id="support-heading"
            className="mt-3 max-w-3xl font-serif text-[clamp(2.1rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em]"
          >
            Every purchase helps support culinary education and scholarships.
          </h2>
          <div className="mt-10 grid items-start gap-4 lg:grid-cols-2">
            {supportOffers.map((offer) => (
              <article key={offer.title} className="border border-line bg-white px-6 py-8 sm:px-8">
                {"image" in offer ? (
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    width={offer.imageWidth}
                    height={offer.imageHeight}
                    className="mb-6 h-auto w-full"
                    style={{ width: "100%", height: "auto" }}
                  />
                ) : null}
                <h3 className="font-serif text-3xl text-ink">{offer.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone">{offer.body}</p>
                {"prices" in offer ? (
                  <ul className="mt-5 space-y-2 text-base leading-7 text-ink">
                    {offer.prices.map((price) => (
                      <li key={price}>{price}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-5 flex flex-col gap-2">
                  {"href" in offer ? (
                    <a
                      href={offer.href}
                      className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                    >
                      View the e-book
                    </a>
                  ) : (
                    offer.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium tracking-[0.08em] text-blue uppercase underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="get-involved" className="scroll-mt-28 bg-green text-paper">
        <div className="page-wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:py-20">
          <div id="contact" className="scroll-mt-28">
            <h2 className="max-w-xl font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.98] text-[#edf1e9]">
              Be part of a future worth building.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#f5f5f5] sm:text-lg">
              Support a scholar, volunteer, explore a partnership, or connect with CELI to learn
              more about its work.
            </p>
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Telephone</p>
            <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-lg">
              {phones.telephone.map((number) => (
                <a key={number} href={phoneHref(number)} className="underline-offset-4 hover:underline">
                  {number}
                </a>
              ))}
            </p>
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Mobile</p>
            <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-lg">
              {phones.mobile.map((number) => (
                <a key={number} href={phoneHref(number)} className="underline-offset-4 hover:underline">
                  {number}
                </a>
              ))}
            </p>
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Email</p>
            <a href={`mailto:${email}`} className="mt-1 inline-flex text-lg underline-offset-4 hover:underline sm:text-xl">
              {email}
            </a>
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Get involved</p>
            <InterestShortcuts />
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Social</p>
            <a
              href="https://www.facebook.com/CEFPH"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex text-lg underline-offset-4 hover:underline"
            >
              Facebook · Culinary Eco-Life, Inc.
            </a>
          </div>
          <InquiryForm />
    </div>
      </section>
    </>
  );
}
