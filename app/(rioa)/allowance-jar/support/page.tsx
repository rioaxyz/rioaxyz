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
    q: "Is there a free trial?",
    a: `Yes. A new household starts with ${ALLOWANCE_JAR.plus.trialDays} days free on the monthly plan. Nothing is charged until the trial ends, and cancelling before then costs nothing. The trial is offered once per Apple Account.`,
  },
  {
    q: "What does Allowance Jar Plus include?",
    a: "Everything. The app is sold as one subscription, monthly or yearly: jars, goals, history, household sharing, change alerts, Siri, the Watch app, weekly deposits on autopilot, chores with approval, the family total, archiving, equity and mixed allowances, widgets, and the Watch complication.",
  },
  {
    q: "Does everyone in the household need to subscribe?",
    a: "No. One person subscribes, and everyone who accepted the household invitation uses the app on their own devices with nothing to buy. Their Settings screen says whose subscription covers them. Only the subscriber manages or cancels it.",
  },
  {
    q: "What happens when the subscription ends?",
    a: "The app becomes read-only for the whole household: every jar and its history stays visible, but nothing can be added, spent, or marked done until someone subscribes again. Nothing is deleted, and subscribing again picks up exactly where you left off.",
  },
  {
    q: "How do I cancel or change plans?",
    a: "Open Settings in the app and tap Manage Subscription, or go to iPhone Settings → your name → Subscriptions. Switching between monthly and yearly, and cancelling, both happen there. Apple handles billing and refunds.",
  },
  {
    q: "What can I say to Siri?",
    a: `"How much does Emma have in ${ALLOWANCE_JAR.name}", "Add to Emma in ${ALLOWANCE_JAR.name}" (Siri then asks how much), "Spend from Emma in ${ALLOWANCE_JAR.name}", "Chores in ${ALLOWANCE_JAR.name}", and "Mark dishes done in ${ALLOWANCE_JAR.name}", using your own kids' and chores' names. The Shortcuts app lists every phrase in your language.`,
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
