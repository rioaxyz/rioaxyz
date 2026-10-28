import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-6 text-sm">
        <Link href="/" aria-label="Rioa home">
          <Image src="/brand/rioa-logo-on-light.svg" alt="Rioa" width={91} height={28} />
        </Link>
        <nav className="flex flex-wrap gap-6 text-deep">
          <Link href="/#products" className="hover:text-night transition">Products</Link>
          <Link href="/#changelog" className="hover:text-night transition">Changelog</Link>
          <Link href="/#open-source" className="hover:text-night transition">Open source</Link>
          <a href="mailto:hello@rioa.xyz" className="hover:text-night transition">hello@rioa.xyz</a>
        </nav>
        <span className="text-ink-subtle">© 2026 Rioa, LLC</span>
      </div>
    </footer>
  );
};

export default Footer;
