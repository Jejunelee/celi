import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Inter, Playfair_Display } from "next/font/google";
import { HashScroll } from "@/components/hash-scroll";
import { SectionReveal } from "@/components/section-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Culinary Eco-Life, Inc.",
    template: "%s · Culinary Eco-Life, Inc.",
  },
  description:
    "Empowering underserved Filipinos through culinary education, sustainable livelihood, and environmental stewardship.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <a
          href="#content"
          className="absolute top-3 left-3 z-50 -translate-y-[150%] bg-white px-4 py-2 text-sm font-medium text-ink shadow focus:translate-y-0"
        >
          Skip to content
        </a>
        <HashScroll />
        <SectionReveal />
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
