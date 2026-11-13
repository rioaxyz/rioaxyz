import type { Metadata } from "next";
import { PageBanner } from "../banner";
import { SPLAT } from "../site";

export const metadata: Metadata = {
  title: `${SPLAT.name} Privacy Policy`,
  description: `How ${SPLAT.name} handles your information.`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-splat-display text-2xl text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-base text-splat-cream/90 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title={`${SPLAT.name} privacy policy`} note={`Effective ${SPLAT.privacyEffectiveDate}`} />
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-28">
        <div className="rounded-[26px] bg-splat-moss border-4 border-splat-outline p-7 shadow-[0_8px_0_rgba(0,0,0,0.35)]">
          <p className="text-lg leading-relaxed font-semibold text-splat-cream">
            {SPLAT.name} is a game for iPhone and iPad, made by Rioa, LLC. The
            short version: there is no account, we run no servers, and we
            collect nothing.
          </p>
        </div>

        <Section title="What the game stores">
          <p>
            Your progress: coins, stars, best scores, upgrades, items,
            trophies and your settings. It is kept in the game&apos;s own
            storage on your device. It is not sent to us, and deleting the
            game deletes it.
          </p>
        </Section>

        <Section title="Game Center">
          <p>
            Game Center is Apple&apos;s service and is optional. If you are
            signed in to it, {SPLAT.name} sends your scores and trophy
            progress to Apple so they can appear on leaderboards and in your
            achievements, and it asks Apple for your Game Center
            friends&apos; scores so it can show you who is just ahead of you.
            Those names and scores are shown on screen and are not kept.
          </p>
          <p>
            What other players can see of you is set in your Game Center
            settings, and Apple&apos;s own privacy policy covers what Apple
            does with it. We do not receive it. If you are not signed in,
            nothing is sent.
          </p>
        </Section>

        <Section title="Purchases">
          <p>
            Optional purchases go through Apple&apos;s App Store. Apple
            handles payment, billing and refunds. We receive no payment
            details and no information that identifies you.
          </p>
        </Section>

        <Section title="Children">
          <p>
            {SPLAT.name} does not ask anyone for personal information, shows
            no advertising, and has no chat. Purchases can be limited with
            Screen Time on the device.
          </p>
        </Section>

        <Section title="What we don't do">
          <p>
            We do not collect, sell, or share personal information. We do not
            track you across apps or websites. The game contains no
            advertising, analytics, or crash-reporting code.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            If this policy changes, the new version is published at this
            address with a new effective date.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about privacy:{" "}
            <a
              href={`mailto:${SPLAT.supportEmail}`}
              className="font-bold text-splat-honey underline underline-offset-4 hover:text-white transition"
            >
              {SPLAT.supportEmail}
            </a>
          </p>
        </Section>
      </article>
    </>
  );
}
