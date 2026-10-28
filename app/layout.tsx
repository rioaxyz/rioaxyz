import "./globals.css";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import Footer from "./sections/footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rioa.xyz"),
  title: "Rioa, LLC",
  description: "We build from the block up.",
  openGraph: {
    siteName: "Rioa",
    title: "Rioa, LLC",
    description: "We build from the block up.",
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${plexMono.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
