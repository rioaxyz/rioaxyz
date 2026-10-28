import Image from "next/image";
import PORTFOLIO from "./models/portfolio";
import { Changelog } from "./sections/changelog";
import { OpenSource } from "./sections/open-source";
import { ProductIndex } from "./sections/product-index";

const SPEC = [
  ["Shipping since", "2023"],
  ["Products", String(PORTFOLIO.length)],
  ["Platforms", "iOS, watchOS, macOS, Web"],
  ["Licenses", "Paid · Free · Open source"],
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-white border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 py-[18px] flex flex-wrap items-center justify-between gap-4">
          <a href="#top" aria-label="Rioa home">
            <Image src="/brand/rioa-logo-on-light.svg" alt="Rioa" width={104} height={32} priority />
          </a>
          <div className="flex flex-wrap items-center gap-7 text-[15px]">
            <a href="#products" className="hover:text-deep transition">Products</a>
            <a href="#changelog" className="hover:text-deep transition">Changelog</a>
            <a href="#open-source" className="hover:text-deep transition">Open source</a>
            <a
              href="mailto:hello@rioa.xyz"
              className="px-[18px] py-2.5 rounded-lg bg-night text-white font-medium hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="grid-bg border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-wrap items-center gap-14">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-6">
            <p className="font-mono text-[13px] text-deep">RIOA, LLC — ENGINEERING STUDIO</p>
            <h1 className="text-[clamp(42px,5.6vw,76px)] leading-[1.04] font-medium tracking-[-0.03em]">
              We design, build and run our own software products.
            </h1>
            <p className="max-w-[560px] text-[19px] leading-relaxed text-ink-muted">
              Apps for iPhone and Apple Watch, tools for the Mac, products on the
              web, and open-source code for other builders.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#products" className="px-[22px] py-3.5 rounded-lg bg-deep text-white font-medium hover:opacity-90 transition">
                See the product index
              </a>
              <a href="#changelog" className="px-[22px] py-3.5 rounded-lg bg-white border border-line-strong font-medium hover:border-deep transition">
                Read the changelog
              </a>
            </div>
          </div>
          <div className="flex-[1_1_340px] bg-white border border-line-strong rounded-2xl overflow-hidden">
            <div className="px-5 py-4 flex items-center gap-3 border-b border-line">
              <Image src="/brand/rioa-mark-on-light.svg" alt="" width={28} height={28} />
              <span className="font-medium">Studio spec</span>
            </div>
            <dl className="px-5 pt-2 pb-4 grid grid-cols-[auto_1fr] text-[15px]">
              {SPEC.map(([term, value], i) => {
                const rule = i < SPEC.length - 1 ? "border-b border-line-soft" : "";
                return (
                  <div key={term} className="contents">
                    <dt className={`py-3 pr-6 font-mono text-[13px] text-ink-subtle ${rule}`}>{term}</dt>
                    <dd className={`py-3 text-right ${rule}`}>{value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      <ProductIndex />
      <Changelog />
      <OpenSource />
    </main>
  );
}
