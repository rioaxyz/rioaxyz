import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Footer from "./sections/footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rioa.xyz"),
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
  themeColor: "#0D1B24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
