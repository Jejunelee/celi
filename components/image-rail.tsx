import Image from "next/image";
import { MediaRail } from "@/components/media-rail";
import type { GalleryImage } from "@/lib/content";

export function ImageRail({
  images,
  label,
  onDark = false,
}: {
  images: readonly GalleryImage[];
  label: string;
  onDark?: boolean;
}) {
  return (
    <MediaRail label={label} itemName="photo" count={images.length} onDark={onDark}>
      {images.map((image) => (
        <div
          key={image.src + image.alt}
          data-slide
          className={`relative h-[320px] shrink-0 snap-start bg-sand sm:h-[420px] lg:h-[460px] ${
            images.length === 1 ? "w-full" : "w-[84%] lg:w-[78%]"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 540px, 84vw"
            className={image.fit === "contain" ? "object-contain p-10 sm:p-14" : "object-cover"}
            style={{ objectPosition: image.position ?? "center" }}
          />
        </div>
      ))}
    </MediaRail>
  );
}
