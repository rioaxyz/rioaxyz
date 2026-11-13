import type { Metadata, Viewport } from "next";
import { Lilita_One, Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SPLAT } from "./site";

const lilita = Lilita_One({ subsets: ["latin"], weight: "400", variable: "--font-splat-display" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-splat-sans" });

export const metadata: Metadata = {
  title: `${SPLAT.name} · ${SPLAT.tagline}`,
  description: SPLAT.description,
  openGraph: {
    siteName: SPLAT.name,
    title: SPLAT.name,
    description: SPLAT.description,
    url: "/splat-patrol",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A331F",
};

/// Splat Patrol's pages wear the game's look, not Rioa's: the lawn, the honeycomb badge and the
/// game's own typeface, with Rioa credited in the footer.
export default function SplatPatrolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLink = "text-splat-cream/80 hover:text-white transition";
  return (
    <div
      className={`${lilita.variable} ${nunito.variable} min-h-screen flex flex-col bg-splat-ink text-splat-cream font-splat-sans`}
    >
      <header className="relative z-20 bg-splat-moss border-b-4 border-splat-outline">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <Link href="/splat-patrol" className="flex items-center gap-3" aria-label="Splat Patrol home">
            <Image src="/assets/splat-patrol/logo.png" alt="" width={61} height={56} priority />
            <span className="font-splat-display text-2xl text-white tracking-wide">SPLAT PATROL</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 sm:gap-x-7 gap-y-2 font-splat-display text-base sm:text-lg tracking-wide">
            <Link href="/splat-patrol#bosses" className={navLink}>Bosses</Link>
            <Link href="/splat-patrol#play" className={navLink}>How it plays</Link>
            <Link href="/splat-patrol/support" className={navLink}>Support</Link>
            <Link href="/splat-patrol/privacy" className={navLink}>Privacy</Link>
          </nav>
        </div>
      </header>
      <main className="grow">{children}</main>
      <footer className="splat-comb border-t-4 border-splat-outline">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-[15px] font-semibold text-splat-cream">
          <span>
            Splat Patrol is made by{" "}
            <Link href="/" className="underline decoration-splat-honey underline-offset-4 hover:text-white transition">
              Rioa
            </Link>
          </span>
          <nav className="flex flex-wrap gap-6">
            <Link href="/splat-patrol/support" className="hover:text-white transition">Support</Link>
            <Link href="/splat-patrol/privacy" className="hover:text-white transition">Privacy policy</Link>
            <a href={`mailto:${SPLAT.supportEmail}`} className="hover:text-white transition">{SPLAT.supportEmail}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
