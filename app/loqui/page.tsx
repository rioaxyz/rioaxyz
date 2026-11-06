import Link from "next/link";
import { LoquiMark } from "./mark";
import { LOQUI } from "./site";

const FEATURES = [
  {
    bar: "bg-loqui-coral",
    title: "Hold to talk",
    body: "Hold the key, wait for the chime, speak, and release. Right Option by default, or any key you choose.",
  },
  {
    bar: "bg-loqui-amber",
    title: "Hands-free",
    body: "Double-tap the key and keep talking. Tap it once more to stop.",
  },
  {
    bar: "bg-loqui-mint",
    title: "Live drafts",
    body: "Words appear about a second behind your voice, then the final transcript replaces them.",
  },
  {
    bar: "bg-loqui-sky",
    title: "Clean text",
    body: "Punctuation and capitals, “um” and “uh” left out, and a new line when you say “new line”.",
  },
];

const PRIVACY_FACTS = [
  ["network requests", "0"],
  ["recordings kept", "deleted after transcription"],
  ["dictated text logged", "never"],
  ["accounts", "none"],
];

function DownloadButton() {
  return (
    <a
      href={LOQUI.downloadUrl}
      className="px-7 py-4 rounded-xl bg-white text-loqui-ground font-semibold text-[17px] hover:opacity-90 transition"
    >
      Download for Mac
    </a>
  );
}

export default function LoquiPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 flex flex-col items-center text-center gap-7">
        <LoquiMark size={152} cursor />
        <p className="mt-4 font-loqui-mono text-sm tracking-[0.08em] text-loqui-mint">
          PRIVATE, ON-DEVICE DICTATION FOR THE MAC
        </p>
        <h1 className="max-w-[860px] text-balance text-[clamp(44px,7vw,76px)] leading-[1.04] font-semibold tracking-[-0.035em] text-white">
          Hold a key. Speak.{" "}
          <span className="whitespace-nowrap">It&apos;s typed.</span>
        </h1>
        <p className="max-w-[620px] text-xl leading-relaxed text-loqui-muted">
          Your words appear at the cursor in whatever app you&apos;re using.
          Transcription runs on your Mac, so your voice never leaves it.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <DownloadButton />
          <a
            href={LOQUI.sourceUrl}
            className="px-7 py-4 rounded-xl border border-loqui-line font-medium text-[17px] hover:border-loqui-subtle transition"
          >
            Source on GitHub
          </a>
        </div>
        <p className="font-loqui-mono text-[13px] text-loqui-subtle">
          Free · v{LOQUI.version} · macOS 14+ on Apple Silicon · Notarized by Apple
        </p>
      </section>

      <section id="how" className="max-w-6xl mx-auto px-6 pb-28 scroll-mt-6">
        <h2 className="sr-only">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-7 rounded-[20px] bg-loqui-raised border border-loqui-line flex flex-col gap-3.5">
              <span aria-hidden="true" className={`w-10 h-1.5 rounded-full ${f.bar}`} />
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-loqui-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="private" className="max-w-6xl mx-auto px-6 pb-28 scroll-mt-6">
        <div className="p-8 md:p-14 rounded-[28px] bg-loqui-raised border border-loqui-line flex flex-wrap items-center gap-12">
          <div className="flex-[1_1_380px] flex flex-col gap-4">
            <p className="font-loqui-mono text-[13px] tracking-[0.08em] text-loqui-sky">PRIVATE BY DESIGN</p>
            <h2 className="text-[clamp(32px,4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em] text-white">
              Nothing you say leaves your Mac.
            </h2>
            <p className="text-[17px] leading-relaxed text-loqui-muted">
              NVIDIA&apos;s Parakeet speech model ships inside the app and runs
              on Apple Silicon. No account, no servers, no analytics.
            </p>
            <Link href="/loqui/privacy" className="self-start text-loqui-sky hover:text-white transition">
              Read the privacy policy
            </Link>
          </div>
          <dl className="flex-[1_1_380px] font-loqui-mono text-[15px]">
            {PRIVACY_FACTS.map(([term, value], i) => (
              <div
                key={term}
                className={`py-[18px] flex justify-between gap-4 ${i < PRIVACY_FACTS.length - 1 ? "border-b border-loqui-line" : ""}`}
              >
                <dt className="text-loqui-muted">{term}</dt>
                <dd className="text-loqui-mint text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 flex flex-col items-center text-center gap-5">
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-white">Start dictating.</h2>
        <DownloadButton />
        <p className="text-sm text-loqui-subtle">
          About 560 MB, most of it the speech model. Loqui asks for Microphone
          access to hear you and Accessibility access to type at the cursor.
        </p>
      </section>
    </>
  );
}
