/// A goo splat like the ones the game leaves on the ground: the same outline its trophy badges use.
/// Purely decorative; position it with `className`.
const OUTLINE =
  "M117.2 -0.0 L121.1 -10.6 L113.6 -20.0 L100.6 -27.0 L92.4 -33.6 L92.1 -43.0 L92.5 -53.4 L85.5 -59.9 L71.6 -60.1 L58.3 -58.3 L50.8 -60.6 L47.6 -68.0 L44.6 -77.3 L40.5 -86.8 L36.1 -99.1 L30.6 -114.1 L22.0 -124.9 L10.8 -123.2 L0.0 -109.5 L-8.3 -94.7 L-15.7 -88.8 L-24.3 -90.8 L-33.3 -91.6 L-39.9 -85.5 L-44.0 -76.1 L-49.0 -69.9 L-57.0 -67.9 L-66.2 -66.2 L-74.7 -62.7 L-84.5 -59.2 L-98.6 -56.9 L-113.6 -53.0 L-120.0 -43.7 L-112.1 -30.0 L-95.9 -16.9 L-83.9 -7.3 L-82.8 -0.0 L-87.5 7.7 L-89.7 15.8 L-87.7 23.5 L-86.3 31.4 L-87.6 40.8 L-88.2 50.9 L-84.6 59.2 L-79.0 66.3 L-76.1 76.1 L-75.5 90.0 L-71.5 102.1 L-59.7 103.4 L-43.3 92.8 L-29.0 79.6 L-19.9 74.3 L-13.8 78.4 L-7.5 85.4 L-0.0 90.5 L8.3 95.2 L18.0 101.8 L28.7 107.2 L38.4 105.6 L45.4 97.3 L51.7 89.6 L61.4 87.6 L73.8 87.9 L82.3 82.3 L81.1 68.1 L73.0 51.1 L67.1 38.7 L69.3 32.3 L77.2 28.1 L85.9 23.0 L94.8 16.7 L105.9 9.3Z";
const DROPS = [[124.6, -68.1, 13.0], [-101.8, -93.2, 10.0], [-105.3, 99.7, 12.0], [75.4, 113.2, 9.0]];

export function Splat({ className = "", color = "#40B84D" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden="true" viewBox="-160 -160 320 320" className={className} fill={color}>
      <path d={OUTLINE} />
      {DROPS.map(([cx, cy, r]) => (
        <circle key={`${cx},${cy}`} cx={cx} cy={cy} r={r} />
      ))}
      <ellipse cx="-38" cy="-48" rx="20" ry="13" fill="#fff" opacity="0.35" />
    </svg>
  );
}
