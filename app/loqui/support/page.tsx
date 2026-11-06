import type { Metadata } from "next";
import Link from "next/link";
import { LOQUI } from "../site";

export const metadata: Metadata = {
  title: `${LOQUI.name} Support`,
  description: `Help with ${LOQUI.name}.`,
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I install Loqui?",
    a: "Download the zip, open it, and drag Loqui into your Applications folder. The first time you dictate, macOS asks for Microphone access and Accessibility access. Both are needed: one to hear you, the other to type at the cursor.",
  },
  {
    q: "Which Macs does it run on?",
    a: `Any Mac with Apple Silicon running macOS 14 or newer. Intel Macs show a message saying the hardware isn't supported.`,
  },
  {
    q: "How do I dictate?",
    a: "Hold the dictation key (Right Option unless you changed it), wait for the short chime, speak, and release. To dictate hands-free, double-tap the key, speak, then tap it once to stop.",
  },
  {
    q: "How do I change the dictation key?",
    a: "Open Settings from the menu bar icon, click Change next to Push to talk, and press the key you want. Any modifier works, left or right, as do Fn and keys such as F13. If you choose a key that types, such as a letter, Loqui takes it over so holding it doesn't type; with Command, Control, or Option it still works as usual.",
  },
  {
    q: "Nothing appears when I dictate. What should I check?",
    a: "Make sure Loqui is turned on under System Settings → Privacy & Security, in both Microphone and Accessibility. If the recording indicator names the wrong microphone, choose the right one in Loqui's Settings. If no text field has focus, your words show in a card with a Copy button instead.",
  },
  {
    q: "Does Loqui need an internet connection?",
    a: "No. The speech model ships inside the app and runs on your Mac. Loqui makes no network requests.",
  },
  {
    q: "Which languages does it understand?",
    a: "English.",
  },
  {
    q: "How do I update?",
    a: "Loqui doesn't check for updates on its own, since it never connects to the internet. Download the newest version from this site and replace the copy in Applications. Your settings carry over.",
  },
  {
    q: "How do I uninstall it?",
    a: "Quit Loqui from its menu bar icon and move it from Applications to the Trash. You can also turn it off under Privacy & Security in System Settings.",
  },
];

export default function SupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-32">
      <h1 className="text-4xl font-semibold tracking-[-0.02em] text-white">
        {LOQUI.name} support
      </h1>
      <p className="text-sm text-loqui-muted leading-relaxed mt-6">
        Email {LOQUI.supportEmail} or{" "}
        <a href={LOQUI.issuesUrl} className="hover:text-white transition underline text-loqui-sky">
          open an issue on GitHub
        </a>
        , and say which version you&apos;re on (Settings in the app shows it)
        and which Mac you have. We read every message.
      </p>

      <h2 className="font-loqui-mono text-[13px] tracking-[0.08em] text-loqui-mint mt-14 mb-6">
        COMMON QUESTIONS
      </h2>
      <dl className="space-y-8">
        {FAQ.map((item) => (
          <div key={item.q}>
            <dt className="text-base font-medium text-white">{item.q}</dt>
            <dd className="text-sm text-loqui-muted leading-relaxed mt-2">{item.a}</dd>
          </div>
        ))}
      </dl>

      <p className="text-sm text-loqui-subtle mt-16">
        See also the{" "}
        <Link href="/loqui/privacy" className="hover:text-white transition underline text-loqui-sky">
          privacy policy
        </Link>
        .
      </p>
    </article>
  );
}
