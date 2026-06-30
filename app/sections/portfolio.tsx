import PORTFOLIO from "../models/portfolio";
import React from "react";

const R = 62;
const H = Math.round((R * Math.sqrt(3)) / 2 * 100) / 100;

const hexPoints = (cx: number, cy: number) =>
  `${cx + R},${cy} ${cx + R / 2},${cy + H} ${cx - R / 2},${cy + H} ${cx - R},${cy} ${cx - R / 2},${cy - H} ${cx + R / 2},${cy - H}`;

const ROW_Y = 180;

const ACTIVE_CELLS = [
  { cx: 124, cy: ROW_Y },
  { cx: 310, cy: ROW_Y },
  { cx: 496, cy: ROW_Y },
];

const DECOR_CELLS = [
  { cx: 217, cy: ROW_Y - H },
  { cx: 403, cy: ROW_Y - H },
  { cx: 124, cy: ROW_Y - 2 * H },
  { cx: 310, cy: ROW_Y - 2 * H },
  { cx: 496, cy: ROW_Y - 2 * H },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-5xl mx-auto pb-28 scroll-mt-10">
      <h2 className="text-xs tracking-[0.16em] text-accent/40 text-center mb-4">
        SELECTED WORK
      </h2>

      <svg
        viewBox="0 0 620 250"
        className="w-full max-w-2xl mx-auto block font-sans"
        role="img"
        aria-label="Portfolio honeycomb"
      >
        <defs>
          {ACTIVE_CELLS.map((c, i) => (
            <clipPath key={i} id={`hexclip-${i}`}>
              <polygon points={hexPoints(c.cx, c.cy)} />
            </clipPath>
          ))}
        </defs>

        {DECOR_CELLS.map((c, i) => (
          <polygon
            key={i}
            points={hexPoints(c.cx, c.cy)}
            fill="none"
            stroke="rgba(252,251,243,0.12)"
            strokeWidth={1.5}
          />
        ))}

        {ACTIVE_CELLS.map((c, i) => {
          const item = PORTFOLIO[i];
          if (!item) {
            return (
              <polygon
                key={i}
                points={hexPoints(c.cx, c.cy)}
                fill="none"
                stroke="rgba(252,251,243,0.12)"
                strokeWidth={1.5}
              />
            );
          }
          const comingSoon = !item.url || item.url === "#";
          const stroke = comingSoon ? "rgba(147,197,253,0.7)" : "#7CB0A1";

          const cell = (
            <g className="hex-link">
              <title>{item.description}</title>
              {comingSoon && (
                <polygon points={hexPoints(c.cx, c.cy)} fill="#FCFBF3" />
              )}
              <image
                href={item.image}
                x={c.cx - (comingSoon ? R * 0.66 : R)}
                y={c.cy - (comingSoon ? H * 0.66 : H)}
                width={(comingSoon ? R * 0.66 : R) * 2}
                height={(comingSoon ? H * 0.66 : H) * 2}
                preserveAspectRatio={
                  comingSoon ? "xMidYMid meet" : "xMidYMid slice"
                }
                clipPath={`url(#hexclip-${i})`}
              />
              <polygon
                className="hex-border"
                points={hexPoints(c.cx, c.cy)}
                fill="none"
                stroke={stroke}
                strokeWidth={2}
              />
            </g>
          );

          return comingSoon ? (
            <g key={i}>{cell}</g>
          ) : (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
              {cell}
            </a>
          );
        })}
      </svg>
    </section>
  );
};
