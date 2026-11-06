import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALLOWANCE_JAR } from "./site";

export const metadata: Metadata = {
  title: `${ALLOWANCE_JAR.name} · Rioa`,
  description: ALLOWANCE_JAR.tagline,
};

export default function AllowanceJarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6">
      <header className="max-w-3xl mx-auto flex items-center justify-between pt-10 pb-2">
        <Link href="/" aria-label="Rioa home">
          <Image
            src="/brand/rioa-logo-on-light.svg"
            alt="Rioa"
            width={111}
            height={34}
            priority
          />
        </Link>
        <nav className="flex gap-5 text-sm text-accent/60">
          <Link href="/allowance-jar" className="hover:text-accent transition">
            Allowance Jar
          </Link>
          <Link href="/allowance-jar/support" className="hover:text-accent transition">
            Support
          </Link>
          <Link href="/allowance-jar/privacy" className="hover:text-accent transition">
            Privacy
          </Link>
        </nav>
      </header>
      {children}
    </main>
  );
}
