import Image from "next/image";
import Link from "next/link";
import PORTFOLIO from "../models/portfolio";

const ARROW = (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>
);

const CATEGORIES = [
  { id: "mobile", label: "Mobile", note: "iPhone, iPad and Apple Watch" },
  { id: "desktop", label: "Desktop", note: "Native apps for the Mac" },
  { id: "web", label: "Web", note: "Tools that run in the browser" },
  { id: "oss", label: "Open source", note: "Libraries for other builders" },
];

function ProductLink({ url, cta }: { url: string; cta: string }) {
  const className = "inline-flex items-center gap-1.5 min-h-[44px] font-medium text-deep hover:text-night transition";
  if (!url) return null;
  if (url.startsWith("/")) {
    return (
      <Link href={url} className={className}>
        {cta}
        {ARROW}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {cta}
      {ARROW}
    </a>
  );
}

export const ProductIndex = () => {
  const th = "px-5 py-3.5 font-medium border-b border-line";
  const td = "px-5 py-4 border-b border-line-soft";
  return (
    <>
      <section id="products" className="max-w-6xl mx-auto px-6 pt-24 pb-16 scroll-mt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-7">
          <h2 className="text-4xl font-medium tracking-tight">Product index</h2>
          <p className="font-mono text-[13px] text-ink-subtle">
            {PORTFOLIO.length} entries · updated as things ship
          </p>
        </div>
        <div className="overflow-x-auto bg-white border border-line-strong rounded-2xl">
          <table className="w-full min-w-[760px] border-collapse text-[15px]">
            <thead>
              <tr className="text-left font-mono text-xs text-ink-subtle">
                <th scope="col" className={th}>PRODUCT</th>
                <th scope="col" className={th}>KIND</th>
                <th scope="col" className={th}>PLATFORMS</th>
                <th scope="col" className={th}>STATUS</th>
                <th scope="col" className={`${th} text-right`}>
                  <span className="sr-only">Link</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {PORTFOLIO.map((item) => (
                <tr key={item.title}>
                  <td className={td}>
                    <div className="flex items-center gap-3.5 min-w-[280px]">
                      <Image
                        src={item.image}
                        alt=""
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-[10px] object-cover bg-night"
                      />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-base">{item.title}</span>
                        <span className="text-sm text-ink-subtle">{item.description}</span>
                      </div>
                    </div>
                  </td>
                  <td className={`${td} whitespace-nowrap`}>{item.kind}</td>
                  <td className={`${td} whitespace-nowrap font-mono text-[13px]`}>{item.platforms}</td>
                  <td className={`${td} whitespace-nowrap`}>
                    <span className="inline-flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.status === "live" ? "bg-live" : "bg-soon"}`} />
                      {item.statusLabel}
                    </span>
                  </td>
                  <td className={`${td} text-right`}>
                    <ProductLink url={item.url} cta={item.cta} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((c) => (
          <div key={c.id} className="p-6 rounded-2xl bg-white border border-line-strong flex flex-col gap-2">
            <span className="font-mono text-[13px] text-ink-subtle">{c.label.toUpperCase()}</span>
            <span className="text-4xl font-medium">
              {PORTFOLIO.filter((p) => p.category === c.id).length}
            </span>
            <span className="text-[15px] text-ink-muted">{c.note}</span>
          </div>
        ))}
      </section>
    </>
  );
};
