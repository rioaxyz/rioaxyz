import { mixed } from "./cube";
import { VANISH, WORDMARK_CUBES } from "./site";

/// VANISH's resting strengths. These six numbers are the logo's own and are not the game's curve.
const VANISH_FADE = [1, 0.88, 0.76, 0.64, 0.52, 0.4];

/// The name: one line, never stacked and never with a space, on black. VANISH fades the way the
/// cubes do, and CUBES is five of them lit, each 30% toward white with a tight halo of its pure
/// color. The dimmest letter sits against the brightest. Size it with a text-size class and keep
/// it at 20px or more: below 160px wide the brand asks for a flatter mark.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`vanish-wordmark ${className}`}>
      <span className="sr-only">{VANISH.name}</span>
      <span aria-hidden="true">
        {"VANISH".split("").map((letter, index) => (
          // Faded in its color and not with `opacity`, so the font's kerning holds from letter to letter.
          <span key={index} style={{ color: `rgb(245 243 238 / ${VANISH_FADE[index]})` }}>
            {letter}
          </span>
        ))}
        {"CUBES".split("").map((letter, index) => (
          <span
            key={index}
            style={{
              color: mixed(WORDMARK_CUBES[index], "white", 0.3),
              textShadow: `0 0 0.12em ${WORDMARK_CUBES[index]}`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}

/// "The pattern stays. The cubes don't." The second sentence is always set fainter: the line does
/// its own trick.
export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p className={`vanish-caption text-xs text-vanish-plaster ${className}`}>
      {VANISH.tagline[0]} <span className="text-vanish-plaster/60">{VANISH.tagline[1]}</span>
    </p>
  );
}
