import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  if (variant === "footer") {
    return (
      <Link href="/" className="inline-flex shrink-0" aria-label="Culinary Eco-Life, Inc. home">
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={1040}
          height={1521}
          className="h-[108px] w-auto"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Culinary Eco-Life, Inc. home">
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={1040}
        height={1521}
        priority
        className="site-logo-mark"
      />
      <Image
        src="/images/logo-word.png"
        alt=""
        width={1143}
        height={620}
        priority
        className="site-logo-word hidden sm:block"
      />
    </Link>
  );
}
