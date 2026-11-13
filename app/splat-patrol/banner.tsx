import { Splat } from "./splat";

/// The strip of lawn across the top of the support and privacy pages.
export function PageBanner({ title, note }: { title: string; note?: string }) {
  return (
    <div className="splat-grass relative overflow-hidden border-b-4 border-splat-outline">
      <Splat className="absolute -left-10 -top-6 w-44 opacity-80 rotate-12" color="#C2F24D" />
      <Splat className="absolute right-[6%] -bottom-10 w-40 opacity-75 -rotate-45" color="#1A331F" />
      <Splat className="absolute right-[30%] top-4 w-16 opacity-80" color="#FFC233" />
      <div className="relative max-w-3xl mx-auto px-6 py-16">
        <h1 className="splat-title text-balance text-[clamp(36px,6vw,60px)] leading-[1.05] text-splat-honey">
          {title}
        </h1>
        {note ? (
          <p className="mt-4 inline-block px-4 py-1.5 rounded-full bg-splat-outline/75 font-splat-display text-lg text-white">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
