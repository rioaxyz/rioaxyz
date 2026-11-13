import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "../banner";
import { SPLAT } from "../site";

export const metadata: Metadata = {
  title: `${SPLAT.name} Support`,
  description: `Help with ${SPLAT.name}.`,
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I play?",
    a: "Bugs come down the screen toward your treasure at the bottom. Tap them before they get there. Small ones take a tap or two, big ones take several, and after the last wave the boss arrives. If the treasure is eaten, the level is lost.",
  },
  {
    q: "How are the stars decided?",
    a: "By how much of the treasure is left when the boss falls: three stars with at least 80 percent, two with at least 40 percent, and one for anything less.",
  },
  {
    q: "How do the items work?",
    a: "Tap an item in the bar to use it. The Swatter, the Zapper and Deep Freeze go off straight away; for eight seconds after you pick the Swatter, swiping squashes everything you touch. Bug Spray, the Honey Trap and the Big Boot wait for one more tap on the battlefield to say where. Bugs sometimes drop items, and the shop sells them for coins.",
  },
  {
    q: "Why can't I hit the termites?",
    a: "Termites tunnel. For part of the way they are under the boards, where you see only a faint outline and taps pass through. Wait for them to come up; they always surface before they reach the treasure. Gadgets and the Slam still reach them underground.",
  },
  {
    q: "What is the Daily Swarm?",
    a: "One level a day, the same for every player, played with the same upgrades and two of each item instead of your own. You can play it as often as you like and your best score of the day counts. A new one starts at midnight UTC.",
  },
  {
    q: "How do I get on the leaderboards?",
    a: "Sign in to Game Center in the Settings app on your device. The game never asks at launch; tap the list button on the title screen to open the leaderboards, or the trophy button for your trophies. Trophies you earn while signed out are sent the next time you are signed in.",
  },
  {
    q: "What can I buy, and how do I restore a purchase?",
    a: "Everything can be earned by playing. The Coin Store at the bottom of the shop sells coin packs, an Arsenal Crate of items, and the Golden Swatter, which doubles the coins you earn for good. Tap Restore Purchases under the Coin Store to get the Golden Swatter back on a new device. Coins and items are used up as you spend them, so they can't be restored.",
  },
  {
    q: "Where is my progress kept?",
    a: "On your device. Coins, stars, upgrades and items are not synced between devices, and deleting the game deletes them. Scores and trophies already sent to Game Center stay there.",
  },
  {
    q: "How do I get the two-pane layout on an iPad?",
    a: "Hold the iPad sideways, or make the window wide. The battlefield takes one side and the command deck the other. To swap sides, tap the gear on the title screen and turn on “Command deck on the left”.",
  },
  {
    q: "How do I turn off the sound or the vibration?",
    a: "Tap the gear on the title screen. Sound effects and haptics each have a switch.",
  },
  {
    q: "Which devices does it run on?",
    a: "iPhone and iPad with iOS 26 or iPadOS 26 or later.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageBanner title={`${SPLAT.name} support`} />
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-28">
        <div className="rounded-[26px] bg-splat-moss border-4 border-splat-outline p-7 shadow-[0_8px_0_rgba(0,0,0,0.35)]">
          <h2 className="font-splat-display text-2xl text-white">Get in touch</h2>
          <p className="mt-3 text-base leading-relaxed text-splat-cream">
            Email{" "}
            <a
              href={`mailto:${SPLAT.supportEmail}`}
              className="font-bold text-splat-honey underline underline-offset-4 hover:text-white transition"
            >
              {SPLAT.supportEmail}
            </a>{" "}
            and say which device you play on and what happened. We read every message.
          </p>
        </div>

        <h2 className="splat-title mt-14 mb-7 text-4xl text-splat-honey">Common questions</h2>
        <dl className="space-y-5">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-[22px] bg-splat-moss/70 border-2 border-splat-leaf/50 p-6">
              <dt className="font-splat-display text-xl text-white">{item.q}</dt>
              <dd className="mt-2.5 text-base leading-relaxed text-splat-cream/90">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 text-base text-splat-cream/80">
          See also the{" "}
          <Link
            href="/splat-patrol/privacy"
            className="font-bold text-splat-honey underline underline-offset-4 hover:text-white transition"
          >
            privacy policy
          </Link>
          .
        </p>
      </article>
    </>
  );
}
