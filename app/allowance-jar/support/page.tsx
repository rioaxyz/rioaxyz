import type { Metadata } from "next";
import Link from "next/link";
import { ALLOWANCE_JAR } from "../site";

export const metadata: Metadata = {
  title: `${ALLOWANCE_JAR.name} Support · Rioa`,
  description: `Help with ${ALLOWANCE_JAR.name}.`,
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I share the household with my family?",
    a: "On the device that created the household, open Settings and tap Invite to Household. iCloud's sharing sheet sends the invitation; everyone who accepts sees the same allowances and can add and spend.",
  },
  {
    q: "Why don't I see the other person's changes?",
    a: "Both devices need to be signed into iCloud with iCloud Drive on, and the invitation must have been accepted. Give it a minute after a change; opening the app brings in anything waiting.",
  },
  {
    q: "What is Allowance Jar Plus?",
    a: "A subscription that unlocks everything beyond the basic allowance: weekly deposits on autopilot, chores with approval, the family total, archiving, equity and mixed allowances, widgets, and the Watch complication. One subscription covers the whole household: when one person subscribes, everyone sharing the household gets Plus on their own devices, and only the subscriber manages or cancels it in the App Store.",
  },
  {
    q: "Who can approve chores?",
    a: "Approvers. The person who created the household starts as one; everyone who joins starts as a member. Approvers change roles in Settings under Chores roles.",
  },
  {
    q: "How do I delete my data?",
    a: "Delete allowances or chores inside the app, leave or stop sharing the household from Settings, and delete the app. Your iCloud copy can be removed under iPhone Settings → your name → iCloud → Manage Account Storage.",
  },
];

export default function SupportPage() {
  return (
    <article className="max-w-3xl mx-auto pt-16 pb-32">
      <h1 className="text-4xl font-medium text-accent">
        {ALLOWANCE_JAR.name} support
      </h1>
      <p className="text-sm text-accent/70 leading-relaxed mt-6">
        Email {ALLOWANCE_JAR.supportEmail} and say which device and version you
        are on (Settings → About in the app). We read every message.
      </p>

      <h2 className="text-xs tracking-[0.16em] text-accent/60 mt-14 mb-6">
        COMMON QUESTIONS
      </h2>
      <dl className="space-y-8">
        {FAQ.map((item) => (
          <div key={item.q}>
            <dt className="text-base text-accent">{item.q}</dt>
            <dd className="text-sm text-accent/70 leading-relaxed mt-2">{item.a}</dd>
          </div>
        ))}
      </dl>

      <p className="text-sm text-accent/65 mt-16">
        See also the{" "}
        <Link href="/allowance-jar/privacy" className="hover:text-accent transition underline">
          privacy policy
        </Link>
        .
      </p>
    </article>
  );
}
