import type { Metadata } from "next";
import { ALLOWANCE_JAR } from "../site";

export const metadata: Metadata = {
  title: `${ALLOWANCE_JAR.name} Privacy Policy · Rioa`,
  description: `How ${ALLOWANCE_JAR.name} handles your information.`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-medium text-accent">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-accent/70 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto pt-16 pb-32">
      <h1 className="text-4xl font-medium text-accent">
        {ALLOWANCE_JAR.name} privacy policy
      </h1>
      <p className="text-sm text-accent/45 mt-3">
        Effective {ALLOWANCE_JAR.privacyEffectiveDate}
      </p>
      <p className="text-sm text-accent/70 leading-relaxed mt-6">
        {ALLOWANCE_JAR.name} is a family allowance tracker for iPhone, iPad, and
        Apple Watch, made by Rioa, LLC. This policy explains what the app does
        with your information. The short version: your data stays in your Apple
        account, we run no servers, and we collect nothing.
      </p>

      <Section title="What the app stores">
        <p>
          The household name, each person&apos;s name and allowance (icon,
          goal, mode, weekly deposit), every add and spend with its note, the
          display name you choose for yourself, chores and their completions,
          household members&apos; roles, and your settings. All of it is entered
          by you or by the people you share the household with.
        </p>
      </Section>

      <Section title="Where it lives">
        <ul className="list-disc pl-5 space-y-2">
          <li>On your device, in the app&apos;s own storage.</li>
          <li>
            In your iCloud account, through Apple&apos;s CloudKit, so your own
            devices stay in sync.
          </li>
          <li>
            When you share the household, in the shared iCloud database that
            the invited people can also see. The owner of the household
            decides who is invited and can stop sharing at any time.
          </li>
        </ul>
        <p>
          We never see this data. There is no {ALLOWANCE_JAR.name} server, no
          account with us, and no analytics or crash reporting that leaves
          your device.
        </p>
      </Section>

      <Section title="Children">
        <p>
          {ALLOWANCE_JAR.name} is meant for parents and guardians. Names and
          allowances of children are entered by adults into their own iCloud
          account and shared only with the people they invite. The app does
          not ask children for personal information and does not target them
          with advertising. There is no advertising at all.
        </p>
      </Section>

      <Section title="Purchases">
        <p>
          {ALLOWANCE_JAR.name} Plus is an auto-renewing subscription sold
          through Apple&apos;s App Store. Apple handles payment, billing, Family
          Sharing, and refunds. We receive no payment details. Your
          subscription status is checked on your device through Apple&apos;s
          StoreKit and cached there.
        </p>
      </Section>

      <Section title="Notifications">
        <p>
          Change alerts are local notifications built on your device from data
          that arrived through iCloud. No notification content is sent to us or
          to any third party.
        </p>
      </Section>

      <Section title="Siri and widgets">
        <p>
          Siri requests are handled on your device by Apple&apos;s App Intents.
          Widgets and the Watch complication read a copy of your totals kept
          in the app&apos;s shared container on your device.
        </p>
      </Section>

      <Section title="What we don't do">
        <p>
          We do not collect, sell, or share personal information. We do not
          track you across apps or websites. The app contains no third-party
          SDKs for advertising or analytics.
        </p>
      </Section>

      <Section title="Deleting your data">
        <p>
          Delete an allowance or a chore inside the app to remove it and its
          history for everyone in the household. Leave or stop sharing a
          household from Settings. Deleting the app removes its local data;
          the copy in your iCloud account can be removed from iPhone Settings
          → your name → iCloud → Manage Account Storage → {ALLOWANCE_JAR.name}.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If this policy changes, the new version is published at this address
          with a new effective date.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about privacy: {ALLOWANCE_JAR.supportEmail}
        </p>
      </Section>
    </article>
  );
}
