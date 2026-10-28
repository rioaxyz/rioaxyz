import CHANGELOG from "../models/changelog";

export const Changelog = () => {
  return (
    <section id="changelog" className="bg-white border-y border-line scroll-mt-6">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-wrap gap-14">
        <div className="flex-[1_1_280px] flex flex-col gap-3">
          <h2 className="text-4xl font-medium tracking-tight">Changelog</h2>
          <p className="text-base leading-relaxed text-ink-muted">
            What shipped across the studio, newest first.
          </p>
        </div>
        <ol className="flex-[999_1_560px] min-w-0 border-b border-line-soft">
          {CHANGELOG.map((entry) => (
            <li
              key={entry.title}
              className="flex flex-wrap gap-x-8 gap-y-2 py-5 border-t border-line-soft"
            >
              <span className="basis-[120px] shrink-0 font-mono text-[13px] text-ink-subtle pt-0.5">
                {entry.date.toUpperCase()}
              </span>
              <div className="flex-[1_1_320px] flex flex-col gap-1">
                <span className="font-medium text-[17px]">{entry.title}</span>
                <span className="text-[15px] text-ink-muted">{entry.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
