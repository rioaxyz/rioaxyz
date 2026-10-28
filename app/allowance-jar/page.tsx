import Image from "next/image";
import Link from "next/link";
import { ALLOWANCE_JAR } from "./site";

const INCLUDED = [
  "One jar per kid: add money, spend it, and watch the thermometer rise toward a goal.",
  "The whole household in sync through iCloud, with every change signed by who made it.",
  "Change alerts when someone else adds or spends.",
  "Siri on iPhone and Apple Watch: add, spend, check totals, and mark chores done by voice.",
  "Weekly allowance on autopilot.",
  "Chores and rewards, with parents approving what kids mark done.",
  "A family total, and archiving finished allowances.",
  "Equity and mixed allowances: a grant that vests on a date.",
  "Home Screen and Lock Screen widgets, and a Watch complication.",
  `In ${ALLOWANCE_JAR.languages}.`,
];

export default function AllowanceJarPage() {
  const { plus } = ALLOWANCE_JAR;
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
        <p className="text-sm text-accent/60 mt-3">
          For iPhone, iPad, and Apple Watch. {plus.trialDays} days free, then one
          subscription for the whole household.
        </p>
        {ALLOWANCE_JAR.appStoreUrl ? (
          <a
            href={ALLOWANCE_JAR.appStoreUrl}
            className="inline-block text-sm font-medium text-base-100 bg-primary px-6 py-3 rounded-lg mt-9 hover:opacity-90 transition"
          >
            Download on the App Store
          </a>
        ) : (
          <p className="inline-block text-sm text-accent/65 border border-accent/15 px-6 py-3 rounded-lg mt-9">
            Coming soon to the App Store
          </p>
        )}
      </section>

      <section className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 pb-24">
        <div className="rounded-xl border border-accent/10 p-6">
          <h2 className="text-xs tracking-[0.16em] text-accent/60 mb-4">
            EVERYTHING INCLUDED
          </h2>
          <ul className="space-y-3 text-sm text-accent/70 leading-relaxed">
            {INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-primary/40 p-6">
          <h2 className="text-xs tracking-[0.16em] text-primary mb-4">
            ONE SUBSCRIPTION
          </h2>
          <ul className="space-y-3 text-sm text-accent/70 leading-relaxed">
            <li>
              Start with {plus.trialDays} days free. Nothing is charged until
              the trial ends, and you can cancel any time before.
            </li>
            <li>
              Then {plus.monthly} or {plus.yearly} in the US; the app shows
              the price for your country.
            </li>
            <li>
              One person subscribes. Everyone sharing the household uses the
              app on their own devices with nothing to buy.
            </li>
            <li>
              If the subscription ends, every jar and its history stays
              visible. Subscribing again picks up where you left off.
            </li>
          </ul>
          <p className="text-xs text-accent/60 mt-5 leading-relaxed">
            Allowance Jar Plus renews automatically through your Apple Account
            unless cancelled at least 24 hours before the end of the period.
            Manage or cancel it in your App Store settings.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center text-sm text-accent/65 pb-24">
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
