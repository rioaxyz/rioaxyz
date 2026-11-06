import type { Metadata } from "next";
import { LOQUI } from "../site";

export const metadata: Metadata = {
  title: `${LOQUI.name} Privacy Policy`,
  description: `How ${LOQUI.name} handles your information.`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-loqui-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-32">
      <h1 className="text-4xl font-semibold tracking-[-0.02em] text-white">
        {LOQUI.name} privacy policy
      </h1>
      <p className="text-sm text-loqui-subtle mt-3">
        Effective {LOQUI.privacyEffectiveDate}
      </p>
      <p className="text-sm text-loqui-muted leading-relaxed mt-6">
        {LOQUI.name} is a dictation app for the Mac, made by Rioa, LLC. This
        policy explains what the app does with your information. The short
        version: everything happens on your Mac, we run no servers, and we
        collect nothing.
      </p>

      <Section title="Your voice">
        <p>
          While you hold the dictation key, or while hands-free dictation is
          on, {LOQUI.name} records from the microphone you chose. The
          recording is written to a temporary file on your Mac, transcribed
          there by a speech model that ships inside the app, and deleted once
          it is transcribed. If one is ever left behind, for example after a
          crash, {LOQUI.name} removes it once it is a day old.
        </p>
        <p>
          Audio and transcripts are never sent anywhere. {LOQUI.name} makes
          no network requests, and its speech engine runs with network access
          turned off.
        </p>
      </Section>

      <Section title="Your text">
        <p>
          {LOQUI.name} types the transcript into the app you are using,
          through macOS Accessibility. Where an app can&apos;t receive it
          that way, {LOQUI.name} briefly places the text on the clipboard,
          pastes it, and puts back what was there before. If nothing editable
          has focus, the transcript appears in a card on screen until you
          copy or dismiss it. Transcripts are not saved.
        </p>
      </Section>

      <Section title="Permissions">
        <p>
          Microphone access lets {LOQUI.name} hear you. Accessibility access
          lets it watch for the dictation key and type at the cursor. You can
          turn either off at any time under System Settings → Privacy &amp;
          Security.
        </p>
      </Section>

      <Section title="Settings and logs">
        <p>
          Your choices, such as the dictation key and microphone, are stored
          in the app&apos;s preferences on your Mac. {LOQUI.name} writes
          diagnostic messages to the macOS system log on your Mac; they never
          include what you said.
        </p>
      </Section>

      <Section title="What we don't do">
        <p>
          We do not collect, sell, or share personal information. We do not
          track you across apps or websites. The app contains no advertising,
          analytics, or crash-reporting code.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If this policy changes, the new version is published at this address
          with a new effective date.
        </p>
      </Section>

      <Section title="Contact">
        <p>Questions about privacy: {LOQUI.supportEmail}</p>
      </Section>
    </article>
  );
}
