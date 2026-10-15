import Image from "next/image";
import { MediaRail } from "@/components/media-rail";
import { people } from "@/lib/content";

export function PeopleRail() {
  return (
    <MediaRail label="People" itemName="person" count={people.length} controls="toolbar">
      {people.map((person) => (
        <article
          key={person.index}
          data-slide
          className="flex w-[min(88%,820px)] shrink-0 snap-start flex-col bg-white sm:flex-row"
        >
          <div className="relative flex h-72 w-full shrink-0 items-end bg-sage sm:h-auto sm:min-h-80 sm:w-[46%]">
            {person.image ? (
              <Image
                src={person.image}
                alt={person.alt}
                fill
                sizes="(min-width: 640px) 380px, 88vw"
                className="object-cover"
                style={{ objectPosition: person.position }}
              />
            ) : (
              <p className="px-6 pb-6 text-sm font-bold tracking-[0.12em] text-stone uppercase">Coming soon</p>
            )}
          </div>
          <div className="flex flex-1 flex-col px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue">{person.index}</p>
            <h3
              className={`mt-8 font-display text-[2.15rem] leading-[1.05] font-bold tracking-[-0.03em] sm:mt-auto sm:text-[2.45rem] ${person.nameClass}`}
            >
              {person.name}
            </h3>
            {person.comingSoon ? (
              <p className="mt-4 text-sm font-bold tracking-[0.12em] text-stone uppercase">Coming soon</p>
            ) : (
              <>
                <p className="mt-4 text-sm font-bold tracking-[0.12em] text-ink uppercase">{person.role}</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-ink">{person.bio}</p>
              </>
            )}
          </div>
        </article>
      ))}
    </MediaRail>
  );
}
