import Image from "next/image";
import Link from "next/link";
import { ALLOWANCE_JAR } from "./site";

const FREE = [
  "One jar per kid: add money, spend it, and watch the thermometer rise toward a goal.",
  "The whole household in sync through iCloud, with every change signed by who made it.",
  "Change alerts when someone else adds or spends.",
  "Siri on iPhone and Apple Watch: add, spend, and check totals by voice.",
];

const PLUS = [
  "Weekly allowance on autopilot.",
  "Chores and rewards, with parents approving what kids mark done.",
  "A family total, and archiving finished allowances.",
  "Equity and mixed allowances: a grant that vests on a date.",
  "Home Screen widgets and a Watch complication.",
];

export default function AllowanceJarPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto text-center pt-20 pb-16">
        <Image
          src="/assets/allowance-jar.png"
          alt={`${ALLOWANCE_JAR.name} app icon`}
          width={128}
          height={128}
          className="mx-auto rounded-[28px] shadow-lg"
          priority
        />
        <h1 className="text-5xl md:text-6xl font-medium leading-[1.15] text-accent mt-8">
          {ALLOWANCE_JAR.name}
        </h1>
        <p className="text-lg text-accent/60 mt-4">{ALLOWANCE_JAR.tagline}</p>
        <p className="text-sm text-accent/45 mt-3">
          For iPhone, iPad, and Apple Watch.
        </p>
        {ALLOWANCE_JAR.appStoreUrl ? (
          <a
            href={ALLOWANCE_JAR.appStoreUrl}
            className="inline-block text-sm font-medium text-base-100 bg-primary px-6 py-3 rounded-lg mt-9 hover:opacity-90 transition"
          >
            Download on the App Store
          </a>
        ) : (
          <p className="inline-block text-sm text-accent/50 border border-accent/15 px-6 py-3 rounded-lg mt-9">
            Coming soon to the App Store
          </p>
        )}
      </section>

      <section className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 pb-24">
        <div className="rounded-xl border border-accent/10 p-6">
          <h2 className="text-xs tracking-[0.16em] text-accent/40 mb-4">FREE</h2>
          <ul className="space-y-3 text-sm text-accent/70 leading-relaxed">
            {FREE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-primary/40 p-6">
          <h2 className="text-xs tracking-[0.16em] text-primary mb-4">
            ALLOWANCE JAR PLUS
          </h2>
          <ul className="space-y-3 text-sm text-accent/70 leading-relaxed">
            {PLUS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-xs text-accent/40 mt-5 leading-relaxed">
            A monthly or yearly subscription for the whole household, with
            Family Sharing. Prices are shown in the app.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center text-sm text-accent/50 pb-24">
        <Link href="/allowance-jar/support" className="hover:text-accent transition">
          Support
        </Link>
        <span className="mx-3">·</span>
        <Link href="/allowance-jar/privacy" className="hover:text-accent transition">
          Privacy Policy
        </Link>
        <span className="mx-3">·</span>
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          className="hover:text-accent transition"
        >
          Terms of Use
        </a>
      </section>
    </>
  );
}
