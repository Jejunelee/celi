import Link from "next/link";
import { partnerLogos } from "@/lib/content";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="logo-set" aria-hidden={hidden || undefined}>
      {partnerLogos.map((logo) => (
        <li key={logo.href}>
          <Link href={logo.href} tabIndex={hidden ? -1 : undefined}>
            <img
              src={logo.src}
              alt={hidden ? "" : logo.alt}
              width={logo.width}
              height={logo.height}
              draggable={false}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <div className="logo-marquee mt-12" role="region" aria-label="Partner organizations">
      <div className="logo-marquee-track">
        <LogoSet />
        <LogoSet hidden />
      </div>
    </div>
  );
}
