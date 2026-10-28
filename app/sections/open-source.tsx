export const OpenSource = () => {
  return (
    <section id="open-source" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-6">
      <div className="bg-night text-mist rounded-3xl p-8 md:p-14 flex flex-wrap items-center gap-12">
        <div className="flex-[1_1_380px] flex flex-col gap-4">
          <p className="font-mono text-[13px] text-gold">OPEN SOURCE · MIT</p>
          <h2 className="text-4xl font-medium tracking-tight">Sonr Chart</h2>
          <p className="text-[17px] leading-relaxed text-mist/75">
            The chart engine from Sonr, published on its own. A themed React
            component for financial candlestick charts, built on KLineChart,
            with indicators, drawing tools and one data-source seam you
            implement.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://www.npmjs.com/package/@rioaxyz/sonrchart"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-harbor text-night font-medium hover:opacity-90 transition"
            >
              View on npm
            </a>
            <a
              href="https://github.com/rioaxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-mist/30 font-medium hover:border-mist/60 transition"
            >
              Rioa on GitHub
            </a>
          </div>
        </div>
        <div className="flex-[1_1_380px] min-w-0 bg-night-raised border border-mist/10 rounded-xl px-6 py-5 font-mono text-sm leading-[1.9]">
          <div className="text-mist/60"># v0.9.0 · React is a peer dependency</div>
          <div className="break-words">
            <span className="text-gold">$</span> npm install @rioaxyz/sonrchart klinecharts react react-dom
          </div>
          <div className="pt-2.5 text-mist/60">{"// you own where the bars come from"}</div>
          <div className="break-words">
            {'<SonrChart symbol="AAPL" interval="1" dataSource={source} />'}
          </div>
        </div>
      </div>
    </section>
  );
};
