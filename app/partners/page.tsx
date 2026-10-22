import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageRail } from "@/components/image-rail";
import { partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Organizations who share CELI’s commitment to culinary education and environmental stewardship.",
};

const surfaces = {
  "cca-manila": { bg: "bg-[#0A291A]", onDark: true },
  candon: { bg: "bg-[#314AA2]", onDark: true },
  "zero-waste": { bg: "bg-[#FDF8F6]", onDark: false },
  "earth-day": { bg: "bg-[#07793D]", onDark: true },
  msc: { bg: "bg-[#314AA2]", onDark: true },
  rotary: { bg: "bg-[#07793D]", onDark: true },
} as const;

const chips = [
  { href: "#cca-manila", label: "CCA Manila" },
  { href: "#candon", label: "City of Candon" },
  { href: "#zero-waste", label: "Zero Waste Philippines" },
  { href: "#earth-day", label: "Earth Day Network" },
  { href: "#msc", label: "MSC Centre for the Poor" },
  { href: "#rotary", label: "Rotary Club" },
];

export default function PartnersPage() {
  return (
    <>
      <section className="relative isolate min-h-[560px] overflow-hidden lg:min-h-[700px]">
        <Image
          src="/images/partners-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/78" />
        <div className="page-wrap relative flex min-h-[560px] flex-col items-center justify-center py-16 text-center lg:min-h-[700px]">
          <p className="text-sm font-bold tracking-[0.18em] text-green uppercase">Our Partners</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,6.5vw,5.6rem)] leading-[0.95] font-medium tracking-[-0.04em] text-ink">
            Shared <span className="font-bold italic">Table,</span> Shared Mission
          </h1>
          <p className="mt-6 text-sm font-bold tracking-[0.18em] text-green uppercase">
            Allies in self-sufficiency
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-wrap py-16 text-center lg:py-24">
          <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.6rem)] leading-[1.05] font-medium tracking-[-0.035em] text-ink">
            Built on <span className="text-blue">partnership,</span>{" "}
            <span className="whitespace-nowrap">rooted in</span>
            <br />
            <span className="font-bold text-purpose italic">purpose.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-stone">
            To fulfill our commitment of providing culinary education and environmental stewardship,
            we partner with the following organizations.
          </p>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3 border-y border-ink/10 py-8">
            {chips.map((chip) => (
              <li key={chip.href}>
                <Link
                  href={chip.href}
                  className="inline-flex h-12 items-center border border-[#c8cec9] px-5 text-[12px] font-bold tracking-[0.08em] text-[#38423d] uppercase opacity-90 hover:border-blue hover:text-blue"
                >
                  {chip.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-white">
        {partners.map((partner) => {
          const surface = surfaces[partner.id];
          return (
            <article
              key={partner.id}
              id={partner.id}
              className={`scroll-mt-28 ${surface.bg}`}
            >
              <div className="page-wrap grid items-start gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
                <div className={partner.flip ? "lg:order-2" : ""}>
                  <div className="flex flex-wrap items-center gap-4">
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      width={partner.logoWidth}
                      height={partner.logoHeight}
                      className={partner.logoClass}
                    />
                    {"logo2" in partner ? (
                      <img
                        src={partner.logo2}
                        alt={partner.logo2Alt}
                        width={partner.logo2Width}
                        height={partner.logo2Height}
                        className="h-16 w-auto sm:h-20"
                      />
                    ) : null}
                  </div>
                  <h2
                    className={`mt-6 max-w-xl font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] font-medium tracking-[-0.03em] ${
                      surface.onDark ? "text-white" : "text-ink"
                    }`}
                  >
                    {partner.name}
                  </h2>
                  <h3
                    className={`mt-4 max-w-lg text-base font-semibold sm:text-lg ${
                      surface.onDark ? "text-white" : "text-ink"
                    }`}
                  >
                    {partner.headline}
                  </h3>
                  <div
                    className={`mt-4 max-w-xl space-y-4 text-[15px] leading-7 ${
                      surface.onDark ? "text-white" : "text-ink"
                    }`}
                  >
                    {partner.body.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <p
                    className={`mt-6 inline-flex h-9 items-center border px-4 text-[12px] font-bold tracking-[0.08em] uppercase ${
                      surface.onDark ? "border-white/40 text-white" : "border-[#c8cec9] text-ink"
                    }`}
                  >
                    {partner.tag}
                  </p>
                </div>
                <ImageRail
                  images={partner.images}
                  label={`${partner.name} photos`}
                  onDark={surface.onDark}
                />
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
