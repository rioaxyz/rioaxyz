import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { LoquiMark, SpectrumStrip } from "./mark";
import { LOQUI } from "./site";

const inter = Inter({ subsets: ["latin"], variable: "--font-loqui-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-loqui-mono",
});

export const metadata: Metadata = {
  title: `${LOQUI.name} · ${LOQUI.tagline}`,
  description: LOQUI.description,
  openGraph: {
    siteName: LOQUI.name,
    title: LOQUI.name,
    description: LOQUI.description,
    url: "/loqui",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1419",
};

/// Loqui's pages wear Loqui's brand, not Rioa's: the Spectrum colors on the
/// app icon's dark ground, with Rioa credited in the footer.
export default function LoquiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLink = "text-loqui-muted hover:text-white transition";
  return (
    <div
      className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col bg-loqui-ground text-loqui-text font-loqui-sans`}
    >
      <SpectrumStrip />
      <header className="w-full max-w-6xl mx-auto px-6 py-7 flex flex-wrap items-center justify-between gap-4">
        <Link href="/loqui" className="flex items-center gap-3 text-white" aria-label="Loqui home">
          <LoquiMark size={24} />
          <span className="font-loqui-mono font-bold text-[22px] tracking-tight">loqui</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px]">
          <Link href="/loqui#how" className={navLink}>How it works</Link>
          <Link href="/loqui/privacy" className={navLink}>Privacy</Link>
          <Link href="/loqui/support" className={navLink}>Support</Link>
          <a
            href={LOQUI.downloadUrl}
            className="px-[18px] py-2.5 rounded-[10px] bg-white text-loqui-ground font-semibold hover:opacity-90 transition"
          >
            Download
          </a>
        </nav>
      </header>
      <main className="grow">{children}</main>
      <footer className="border-t border-loqui-line">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-wrap items-center justify-between gap-4 text-sm text-loqui-subtle">
          <span>
            loqui is made by{" "}
            <Link href="/" className="text-loqui-text hover:text-white transition">
              Rioa
            </Link>
          </span>
          <nav className="flex flex-wrap gap-6">
            <Link href="/loqui/support" className={navLink}>Support</Link>
            <Link href="/loqui/privacy" className={navLink}>Privacy policy</Link>
            <a href={LOQUI.sourceUrl} className={navLink}>GitHub</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
