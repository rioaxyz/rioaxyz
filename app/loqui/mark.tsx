/// Loqui's Cursor Wave: four Spectrum bars stepping up into a text cursor.
/// `scale` 1 is the header size; the hero draws it larger.
const BARS = [
  { color: "bg-loqui-coral", height: 0.36 },
  { color: "bg-loqui-amber", height: 0.68 },
  { color: "bg-loqui-mint", height: 1 },
  { color: "bg-loqui-sky", height: 0.58 },
];

export function LoquiMark({ size = 24, cursor = false }: { size?: number; cursor?: boolean }) {
  const bar = Math.max(4, Math.round(size / 7));
  return (
    <span aria-hidden="true" className="inline-flex items-center" style={{ height: size, gap: bar * 0.65 }}>
      {BARS.map((b) => (
        <span
          key={b.color}
          className={`${b.color} rounded-full`}
          style={{ width: bar, height: Math.round(size * b.height) }}
        />
      ))}
      {cursor && (
        <span className="flex flex-col items-center" style={{ height: size, marginLeft: bar * 1.6 }}>
          <span className="bg-white rounded-full" style={{ width: bar * 2.4, height: bar * 0.65 }} />
          <span className="bg-white grow" style={{ width: bar * 0.65 }} />
          <span className="bg-white rounded-full" style={{ width: bar * 2.4, height: bar * 0.65 }} />
        </span>
      )}
    </span>
  );
}

/// The four Spectrum colors as a strip across the top of every Loqui page.
export function SpectrumStrip() {
  return (
    <div aria-hidden="true" className="grid grid-cols-4 h-1">
      {BARS.map((b) => (
        <span key={b.color} className={b.color} />
      ))}
    </div>
  );
}
