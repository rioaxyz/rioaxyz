import type { Metadata } from "next";
import { PageBanner } from "../banner";
import { VANISH } from "../site";
import { Voiced } from "../voice";

export const metadata: Metadata = {
  title: `${VANISH.name} Privacy Policy`,
  description: `How ${VANISH.name} handles your information.`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="vanish-label text-base text-vanish-plaster">{title}</h2>
      <div className="mt-3 space-y-4 text-[17px] leading-[1.65] text-vanish-plaster/80">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy policy" note={`Effective ${VANISH.privacyEffectiveDate}`} />
      <article className="max-w-[39rem] mx-auto px-6 pt-10 pb-24 sm:pt-12">
        <div className="rounded-[14px] bg-vanish-surface border border-vanish-plaster/10 p-5 sm:p-6">
          <p className="text-lg sm:text-[19px] leading-[1.6] text-vanish-plaster">
            {VANISH.name} is a game for iPhone and iPad, made by Rioa, LLC.
            The short version: there is no account, the game talks to no
            server of ours, and we collect nothing.
          </p>
        </div>

        <Section title="What the game stores">
          <p>
            Your progress and your settings. For each of the three boards:
            your best score, the most rounds you have cleared in one game,
            and how many games you have played. Then your lifetime count of
            cubes remembered, whether Sound, Music and Haptics are on, the
            board you chose last, and whether the two tips for a first game
            have been shown.
          </p>
          <p>
            When a game in which you have remembered at least one cube is
            paused, its board, round and score so far are noted, so that the
            game still counts if it is never finished.
          </p>
          <p>
            If you sign in to Game Center, the game also notes which Game
            Center player the scores belong to, and keeps each player&rsquo;s
            scores apart if more than one signs in on the device. A player is
            noted by the ID Game Center gives this game for them or, when
            Game Center gives no lasting ID, by their Game Center nickname.
          </p>
          <p>
            All of this is kept in the game&rsquo;s own storage on your
            device. It is not sent to us, and deleting the game deletes it.
            If your device makes backups, they can include it.
          </p>
        </Section>

        <Section title="Game Center">
          <p>
            Game Center is Apple&rsquo;s service and is optional. Each time
            the game opens it asks Game Center who, if anyone, is signed in
            on the device. For a signed-in player, Game Center gives the game
            their display name, which the game&rsquo;s <Voiced>SETTINGS</Voiced> screen shows,
            and the ID or nickname described above.
          </p>
          <p>
            While you are signed in, {VANISH.name} sends your scores to Apple
            so that they can appear on the leaderboards: the score of each
            game you finish with at least one cube remembered, your best
            score on each board, and your lifetime count of cubes remembered.
            It asks Apple for your own entries on its four leaderboards, so
            that after a reinstall you start from your real bests. After each
            game it asks for your Game Center friends&rsquo; names and scores
            on that board, so that the results can name the friend just ahead
            of you. Those are used for that one line and are not saved.
          </p>
          <p>
            The leaderboards themselves open in Game Center&rsquo;s own
            screens, which are Apple&rsquo;s. Your Game Center nickname,
            avatar and scores on them can be seen by anyone who uses Game
            Center. What else other players can see of you is set in your
            Game Center settings, and{" "}
            <a href="https://www.apple.com/legal/privacy/data/en/game-center/" className="vanish-link">
              Apple&rsquo;s own privacy policy
            </a>{" "}
            covers what Apple does with it.
          </p>
          <p>
            None of it is sent to us. Like any player we can see the
            leaderboards, and Apple shows a game&rsquo;s developer the top
            100 scores on each and lets us remove one. If you are not signed
            in, no scores are sent.
          </p>
          <p>
            Scores already sent stay on Apple&rsquo;s leaderboards if you
            delete the game; Apple keeps them with your Game Center account.
            To stop sending scores, sign out of Game Center in the Settings
            app. The game plays the same without it.
          </p>
        </Section>

        <Section title="No purchases, no advertising">
          <p>
            There is nothing to buy in {VANISH.name}: no in-app purchases and
            no subscriptions. It shows no advertising.
          </p>
        </Section>

        <Section title="Children">
          <p>
            {VANISH.name} does not ask anyone for personal information, shows
            no advertising, has no chat, and has nothing to buy. There is
            nowhere in the game to type anything. The only names the
            game&rsquo;s own screens show come from Game Center: the
            signed-in player&rsquo;s own, and on the results a Game Center
            friend&rsquo;s. The leaderboards it opens are Apple&rsquo;s and
            list other players&rsquo; nicknames and scores.
          </p>
        </Section>

        <Section title="What we don’t do">
          <p>
            We do not collect, sell or share personal information. We do not
            track you across apps or websites. The game is built only on
            Apple&rsquo;s own frameworks: it contains no advertising,
            analytics or crash-reporting code, and no third-party code of
            any kind.
          </p>
          <p>
            It never asks for the camera, the microphone, your location, your
            contacts or your photos, and it sends no notifications.
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
            <a href={`mailto:${VANISH.supportEmail}`} className="vanish-link">
              {VANISH.supportEmail}
            </a>
            . If you write to us we get your email address and what you tell
            us, and we use them only to answer you.
          </p>
        </Section>
      </article>
    </>
  );
}
