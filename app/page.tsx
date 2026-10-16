import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry-form";
import { LogoMarquee } from "@/components/logo-marquee";
import { email, homePrograms, pillars, stats, timeline } from "@/lib/content";

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
            Culinary Eco Life Inc.
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
              <h2 className="mt-4 max-w-xl font-serif text-[clamp(2.2rem,4.4vw,4.25rem)] leading-[0.98] tracking-[-0.03em] text-peach">
                A future where people and planet can thrive together.
              </h2>
            </div>
            <div className="max-w-3xl text-base leading-8 sm:text-xl sm:leading-9 lg:pt-2 lg:text-2xl lg:leading-9">
              <p>
                The Culinary Eco-Life, Inc. is a non-stock, non-profit organization founded in
                September 2001 from the vision of Susana “Annie” Guerrero, a Certified Culinary
                Professional. CELI was created to provide culinary education to deserving
                individuals and help them succeed in the food service industry.
              </p>
              <p className="mt-5">
                Today, its work connects skills development with green food production, sustainable
                livelihood, and practical environmental technologies.
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
                  Susana Guerrero advocates for community empowerment through lifelong learning,
                  green practices, and sustainable livelihood which she has built sustainable
                  communities in Bulacan, Leyte, Agusan del Sur, and Butuan City (Mindanao).
                </p>
                <p>
                  Culinary Eco-Life Inc is a company she founded as a Culinary Training Program
                  (CTP) with 700+ graduates, 90% employed in F&B. She has coordinated 20,000+ hot
                  meals for healthcare workers during the pandemic. CELI firmly believes that
                  self-sufficiency paves the way for a future filled with opportunities and
                  life-long achievements.
                </p>
                <p>
                  CELI warmly introduces current and future scholars with{" "}
                  <strong>CCA Manila Chefs</strong> who have been training the students to have the
                  passion and learn the techniques and the ways of a Chef under our Cooking for
                  Life Program.
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
                className="mt-4 max-w-xl font-serif text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.02] text-cream"
              >
                A world where people live in harmony with creation.
              </h2>
            </div>
            <div className="max-w-2xl space-y-4 text-base leading-8 sm:text-lg lg:text-xl">
              <p>
                The Culinary Eco-Life, Inc. is a non-stock, non-profit organization founded in
                September 2001 from the vision of Susana “Annie” Guerrero, a Certified Culinary
                Professional. CELI was created to provide culinary education to deserving
                individuals and help them succeed in the food service industry.
              </p>
              <p>
                Today, its work connects skills development with green food production, sustainable
                livelihood, and practical environmental technologies.
              </p>
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
              <article key={program.id} className="flex flex-col bg-blue-soft text-white">
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
        </div>
      </section>

      <section className="bg-green text-paper" aria-labelledby="story-heading">
        <div className="page-wrap py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div className="lg:flex lg:flex-col">
              <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">Our story</p>
              <h2
                id="story-heading"
                className="mt-4 max-w-xl font-serif text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.02] text-cream"
              >
                From one vision to a growing network of communities.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 sm:text-lg lg:mt-auto">
                CELI&apos;s story connects culinary education with environmental stewardship and
                sustainable livelihood.
              </p>
            </div>
            <ol>
              {timeline.map((item, index) => (
                <li key={item.year} className="relative pb-8 pl-10 last:pb-0">
                  {index < timeline.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-3 -bottom-3 left-0 w-0.5 -translate-x-1/2 bg-cream"
                    />
                  ) : null}
                  <span className="absolute top-1 left-0 z-10 size-4 -translate-x-1/2 rounded-full border-2 border-cream bg-green" />
                  <p className="text-sm font-bold tracking-[0.12em] uppercase">{item.year}</p>
                  <h3 className="mt-1 font-serif text-3xl text-cream">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-7 sm:text-lg">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
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
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[0.12em] uppercase sm:text-lg">Sponsors</p>
              <h2
                id="sponsors-heading"
                className="mt-4 max-w-xl font-serif text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.02] text-cream"
              >
                Support that helps opportunity take root.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 sm:text-lg lg:pt-12">
              A dedicated recognition space for organizations and individuals supporting CELI&apos;s
              programs and scholars.
            </p>
          </div>
          <Link
            href="/#get-involved"
            className="mt-8 inline-flex h-[72px] items-center justify-center bg-blue-soft px-8 text-base font-bold tracking-[0.08em] text-white uppercase shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#6d8fbf] sm:text-lg"
          >
            Become a sponsor
          </Link>
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
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Email</p>
            <a href={`mailto:${email}`} className="mt-1 inline-flex text-lg underline-offset-4 hover:underline sm:text-xl">
              {email}
            </a>
            <p className="mt-8 text-sm font-bold tracking-[0.12em] uppercase">Get involved</p>
            <p className="mt-1 text-lg">Donate · Volunteer · Partner With Us</p>
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
