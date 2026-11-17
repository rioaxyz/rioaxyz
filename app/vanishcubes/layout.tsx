import type { Metadata, Viewport } from "next";
import { Tomorrow } from "next/font/google";
import Link from "next/link";
import { VANISH } from "./site";
import { Tagline, Wordmark } from "./wordmark";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-vanish-display",
});

export const metadata: Metadata = {
  title: `${VANISH.name} · ${VANISH.tagline.join(" ")}`,
  description: VANISH.description,
  openGraph: {
    siteName: VANISH.name,
    title: VANISH.name,
    description: VANISH.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

/// Vanishcubes' pages wear the game's look, not Rioa's: plaster on true black, the game's own
/// typeface and its wordmark, with Rioa credited in the footer. There is no /vanishcubes page yet,
/// so nothing here links to one: the wordmark is not a link.
export default function VanishcubesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLink =
    "vanish-label inline-flex items-center min-h-11 text-xs sm:text-[13px] text-vanish-plaster/80 hover:text-vanish-plaster transition-colors";
  const footLink = "inline-flex items-center min-h-11 hover:text-vanish-plaster transition-colors";
  return (
    <div
      className={`vanish-page ${tomorrow.variable} min-h-screen flex flex-col bg-vanish-black text-vanish-plaster font-vanish-sans`}
    >
      <header className="border-b border-vanish-plaster/10">
        <div className="max-w-[39rem] mx-auto px-6 pt-4 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <Wordmark className="text-xl sm:text-[26px]" />
            <nav aria-label={VANISH.name} className="flex items-center gap-x-4 sm:gap-x-7">
              <Link href="/vanishcubes/support" className={navLink}>Support</Link>
              <Link href="/vanishcubes/privacy" className={navLink}>Privacy</Link>
            </nav>
          </div>
          <Tagline className="mt-1.5" />
        </div>
      </header>
      <main className="grow">{children}</main>
      <footer className="border-t border-vanish-plaster/10">
        <div className="max-w-[39rem] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-1 text-base text-vanish-plaster/80">
          <span>
            {VANISH.name} is made by{" "}
            <Link href="/" className="vanish-link">
              Rioa
            </Link>
          </span>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
            <Link href="/vanishcubes/support" className={footLink}>Support</Link>
            <Link href="/vanishcubes/privacy" className={footLink}>Privacy policy</Link>
            <a href={`mailto:${VANISH.supportEmail}`} className={footLink}>{VANISH.supportEmail}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
