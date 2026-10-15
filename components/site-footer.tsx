import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-green-deep text-muted">
      <div className="page-wrap flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between md:py-12">
        <div className="flex items-start gap-5">
          <Logo variant="footer" />
          <p className="max-w-md pt-3 text-[15px] leading-7 md:text-lg md:leading-8">
            Empowering communities through culinary education, sustainable livelihood, and
            environmental stewardship.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 md:pt-4 md:justify-end" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.12em] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="page-wrap border-t border-white/15 py-5">
        <p className="text-sm">© 2026 Culinary Eco-Life, Inc.</p>
      </div>
    </footer>
  );
}
