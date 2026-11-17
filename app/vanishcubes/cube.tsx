import { useId } from "react";

/// A color part of the way to white or to black, channel by channel in sRGB, as the game mixes a
/// cube's lighter and darker faces and the letters of its wordmark.
export function mixed(hex: string, toward: "white" | "black", amount: number): string {
  const target = toward === "white" ? 255 : 0;
  const channels = [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16));
  return `#${channels
    .map((value) => Math.round(value + (target - value) * amount).toString(16).padStart(2, "0"))
    .join("")}`;
}

// The cube's proportions in a cell 100 units wide, from the game's CubeGeometry: a square front
// face with a top and a right face running back from it at 45 degrees.
const FACE = 72;
const DEPTH = 11;
const CORNER = 5.5;
const GLINT = 1.2;
const LEFT = (100 - FACE - DEPTH) / 2;
const TOP = LEFT + DEPTH;
const RIGHT = LEFT + FACE;
const BOTTOM = TOP + FACE;

/// A closed outline through `points`, clockwise, with every corner rounded to `radius`.
function rounded(points: number[][], radius: number): string {
  const steps = points.map(([x, y], index) => {
    const [px, py] = points[(index + points.length - 1) % points.length];
    const [nx, ny] = points[(index + 1) % points.length];
    const before = Math.hypot(px - x, py - y);
    const after = Math.hypot(nx - x, ny - y);
    const cosine = ((px - x) * (nx - x) + (py - y) * (ny - y)) / (before * after);
    const cut = radius / Math.tan(Math.acos(cosine) / 2);
    const from = [x + ((px - x) / before) * cut, y + ((py - y) / before) * cut];
    const to = [x + ((nx - x) / after) * cut, y + ((ny - y) / after) * cut];
    return `${index === 0 ? "M" : "L"}${from[0].toFixed(2)} ${from[1].toFixed(2)}A${radius} ${radius} 0 0 1 ${to[0].toFixed(2)} ${to[1].toFixed(2)}`;
  });
  return `${steps.join("")}Z`;
}

/// The cube's outline: six corners, rounded. Everything is clipped to it, so the outside is soft
/// and the edges between the faces stay sharp.
const SILHOUETTE = rounded(
  [
    [LEFT, TOP],
    [LEFT + DEPTH, TOP - DEPTH],
    [RIGHT + DEPTH, TOP - DEPTH],
    [RIGHT + DEPTH, BOTTOM - DEPTH],
    [RIGHT, BOTTOM],
    [LEFT, BOTTOM],
  ],
  CORNER,
);
const TOP_FACE = `M${LEFT} ${TOP}H${RIGHT}L${RIGHT + DEPTH} ${TOP - DEPTH}H${LEFT + DEPTH}Z`;
/// The front face's top and right edges, where the light catches.
const EDGES = `M${LEFT} ${TOP}H${RIGHT}V${BOTTOM}`;

/// One cube at rest, drawn as the game's CubeView draws it: the front shades from its color to 16%
/// toward black, the top is 36% toward white and the right side 45% toward black, with a faint
/// glint on the front's top and right edges. A cube at rest has no glow and no shadow, and at an
/// opacity of 0 nothing of it is drawn at all. Purely decorative; size it with `className`.
export function Cube({ color, opacity = 1, className = "" }: { color: string; opacity?: number; className?: string }) {
  const id = useId();
  if (opacity <= 0) return <span aria-hidden="true" className={`block ${className}`} />;
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={`block ${className}`} opacity={opacity}>
      <defs>
        <clipPath id={`${id}-outline`}>
          <path d={SILHOUETTE} />
        </clipPath>
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor={mixed(color, "black", 0.16)} />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${id}-outline)`}>
        <rect width="100" height="100" fill={mixed(color, "black", 0.45)} />
        <path d={TOP_FACE} fill={mixed(color, "white", 0.36)} />
        <rect x={LEFT} y={TOP} width={FACE} height={FACE} fill={`url(#${id}-front)`} />
        <path d={EDGES} fill="none" stroke="#fff" strokeOpacity="0.38" strokeWidth={GLINT} strokeLinecap="round" />
      </g>
    </svg>
  );
}

/// A small board in a mode's own colors, like the ones on the game's title screen.
export function MiniBoard({ side, colors, className = "" }: { side: number; colors: string[]; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`grid aspect-square ${className}`}
      style={{ gridTemplateColumns: `repeat(${side}, minmax(0, 1fr))` }}
    >
      {colors.map((color, index) => (
        <Cube key={index} color={color} />
      ))}
    </div>
  );
}
