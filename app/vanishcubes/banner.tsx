import { Cube } from "./cube";
import { VANISH, VANISH_CURVE, WORDMARK_CUBES } from "./site";

/// The game in one line: a cube as it stands in rounds 1 to 5, a fifth fainter each time, and then
/// the round where nothing is drawn at all. Purely decorative.
function VanishStrip({ className = "" }: { className?: string }) {
  return (
    // Pulled left by the margin a cube keeps inside its cell, so the first one lines up with the type.
    <div aria-hidden="true" className={`flex -ml-1 sm:-ml-[5.5px] ${className}`}>
      {VANISH_CURVE.map((opacity, index) => (
        // On the narrowest phones the cells give a little, and the last label, which is wider
        // than its cell, is left out.
        <div key={index} className="w-12 max-[374px]:w-10 sm:w-16 shrink-0">
          <Cube
            color={WORDMARK_CUBES[index % WORDMARK_CUBES.length]}
            opacity={opacity}
            className="w-12 h-12 max-[374px]:w-10 max-[374px]:h-10 sm:w-16 sm:h-16"
          />
          <span
            className={`vanish-caption block mt-1.5 pl-1 sm:pl-[5.5px] text-[11px] whitespace-nowrap text-vanish-secondary ${
              opacity > 0 ? "" : "max-[374px]:hidden"
            }`}
          >
            {opacity > 0 ? String(index + 1).padStart(2, "0") : "Lights out"}
          </span>
        </div>
      ))}
    </div>
  );
}

/// The strip of black across the top of the support and privacy pages: the page's name, and under
/// it the cubes going out.
export function PageBanner({ title, note }: { title: string; note?: string }) {
  return (
    <div className="border-b border-vanish-plaster/10">
      <div className="max-w-[39rem] mx-auto px-6 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <h1 className="vanish-title text-balance text-[clamp(32px,8vw,52px)] leading-[1.05]">
          <span className="sr-only">{VANISH.name} </span>
          {title}
        </h1>
        {note ? <p className="vanish-caption mt-4 text-[13px] text-vanish-secondary">{note}</p> : null}
        <VanishStrip className="mt-9" />
      </div>
    </div>
  );
}
