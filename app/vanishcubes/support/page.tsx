import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "../banner";
import { MiniBoard } from "../cube";
import { BOARDS, VANISH } from "../site";
import { Voiced } from "../voice";

export const metadata: Metadata = {
  title: `${VANISH.name} Support`,
  description: `Help with ${VANISH.name}.`,
};

/// The questions, grouped. An answer is one or more paragraphs. A command is written as the game
/// shows it, in caps, and `Voiced` sets it in the game's type. `boards` draws the three boards
/// under the answer.
const FAQ: { title: string; items: { q: string; a: string[]; boards?: boolean }[] }[] = [
  {
    title: "The game",
    items: [
      {
        q: "How do I play?",
        a: [
          "Choose a board on the title screen and tap PLAY. The cubes light up one at a time, each with its own note: that is the pattern. When the cue above the board changes from WATCH to REPEAT, tap the same cubes in the same order.",
          "Get it right and the next round plays the same pattern with one more cube on the end. The pattern plays a little faster as it grows, though never faster than three cubes a second. A wrong cube ends the game, and so does running out of time. HOW TO PLAY on the title screen shows the idea on three small boards.",
        ],
      },
      {
        q: "Why do the cubes disappear?",
        a: [
          "That is the game, not a fault. The cubes are at full strength in round 1 and lose a fifth of it every round: 80 percent in round 2, then 60, 40 and 20, and from round 6 they are gone. The first time the board goes black, the cue reads LIGHTS OUT.",
          "From then on you see a cube only while the pattern lights it, always at full strength, and you tap where the cubes were. They never change places. The line of text above the board and the line of light below it are each exactly as wide as the board, so you can always find it.",
        ],
      },
      {
        q: "What are the three boards?",
        a: [
          "Four is 2×2, four cubes. Nine is 3×3, nine cubes. Sixteen is 4×4, sixteen cubes. All three are open from the start, each keeps its own best score, and the cubes fade the same way on all of them. The title screen opens on the board you chose last.",
        ],
        boards: true,
      },
      {
        q: "How do the score and the bests work?",
        a: [
          "The score is cubes remembered: one for every correct tap in the game. Clearing round 1 scores 1, round 2 brings it to 3, round 3 to 6, and so on, and correct taps in the round that ends the game still count. There is no time bonus and no multiplier. While you play, it is the number beside CUBES.",
          "Each board keeps your best score. It shows on the board’s card on the title screen and beside BEST while you play, and a game that beats it ends with NEW BEST on the results.",
        ],
      },
    ],
  },
  {
    title: "Taps and time",
    items: [
      {
        q: "How long do I have for each tap?",
        a: [
          "Five seconds. The bar under the board drains as the time goes, and through its last two seconds it pulses with a tick. Every correct tap gives you a fresh five seconds. If the time runs out the game ends, and the results say “Out of time.”",
        ],
      },
      {
        q: "Do I have to hit a cube exactly?",
        a: [
          "No. The game is about memory, not millimeters. A tap that lands just outside the right cube still counts for it, and a tap a little beyond the edge of the board counts for the cube at that edge. A near miss that is let through is answered with two rings instead of one, so you know it was close.",
          "A tap far off the board, or one made while the pattern is still playing, is not judged at all. It gets a gray ring and a dull click, it never ends the game, and it does not restart the timer. A tap made while the pattern is playing also makes WATCH shake: wait for REPEAT.",
        ],
      },
      {
        q: "What happens when I miss?",
        a: [
          "The game ends. A wrong tap leaves a small ✕ where your finger landed, and the cube you should have tapped lights once more with its note, so you can tell a slip of the finger from a wrong memory. Tap to skip ahead to the results. They show your score, how it stands against your best on that board, and why the game ended and where, for example “Wrong cube. Round 8, cube 6 of 8.”",
        ],
      },
    ],
  },
  {
    title: "Pausing",
    items: [
      {
        q: "Can I pause?",
        a: [
          "Yes. Tap the two bars beside the score. The game also pauses by itself when you leave the app, when a call or an alarm takes the sound away, and when the board moves on the screen, as it does when an iPad is turned or its window is resized.",
          "The pause screen is black from edge to edge, so the board cannot be studied while the game waits. It has RESUME, RESTART and QUIT, and nothing resumes by itself. After RESUME the game counts a second and carries on from where it was. A cube that was cut off is shown again in full, and if it was your turn you get at least three seconds for the next tap.",
        ],
      },
      {
        q: "What happens to a game I don’t finish?",
        a: [
          "It still counts for what it had earned. If you leave a paused game with QUIT or RESTART, or the app is closed while the game is paused, and you had remembered at least one cube, it is saved as a game played with that score. It counts toward your best on that board and toward Cubes Remembered. A game cannot be picked up again once the app has been closed.",
        ],
      },
    ],
  },
  {
    title: "Game Center",
    items: [
      {
        q: "How do I get on the leaderboards?",
        a: [
          "Sign in to Game Center in the Settings app on your device. The game has no sign-in screen of its own and never puts one up at launch, though iOS itself may offer its Game Center sign-in when the game opens. The Game Center row on the game’s SETTINGS screen shows who is signed in. When nobody is, it reads SIGN IN: that button, like SCORES on the title screen, opens Apple’s sign-in if iOS offers one and otherwise tells you to do it in the Settings app. Game Center is optional, and the game plays the same without it.",
          "Tap SCORES on the title screen to open the leaderboards, or LEADERBOARD on the results for the board you just played. There are four: one for your best game on each board, and Cubes Remembered, which counts every cube you have remembered on all three. Bests and cubes from games played offline or signed out are sent the next time you are signed in.",
          "If you have Game Center friends on a board’s leaderboard, the results name the friend just ahead of you and by how many cubes, or the friend you just passed.",
        ],
      },
      {
        q: "Two of us use the same device. Whose scores are whose?",
        a: [
          "Scores go with the Game Center account. The first player to sign in on a device keeps what was played there before. When someone else signs in they start from their own scores, and the other player’s are set aside on the device until that player signs in again. Nothing crosses from one account’s leaderboards to another’s. The Sound, Music and Haptics switches belong to the device, not the account.",
        ],
      },
    ],
  },
  {
    title: "Sound and music",
    items: [
      {
        q: "How do I turn off the sound, the music or the haptics?",
        a: [
          "Tap SETTINGS on the title screen. Sound, which is the cubes’ notes and the game’s other sounds, and Music each have a switch. On iPhone so does Haptics; an iPad has no haptics, so the switch is not shown there.",
          "The game can be played with the sound off: the pattern is always shown, and every tap is answered on screen. It is also silent whenever the device is in silent mode.",
        ],
      },
      {
        q: "Why does the music thin out, or not play at all?",
        a: [
          "The music vanishes with the cubes. As they fade the melody goes first, then the drums, then the chords, and in the dark only a bass note and a kick drum are left, like a heartbeat. The music is turned down while the game is paused.",
          "If you have music of your own playing, the game’s music stays silent and the cubes’ notes still play.",
        ],
      },
    ],
  },
  {
    title: "Your device",
    items: [
      {
        q: "Where is my progress kept?",
        a: [
          "On your device: your best score and number of games on each board, your count of cubes remembered, and your settings. The game does not sync them between devices, and deleting the game deletes them. A backup of your device can carry them to a new one. There is no reset in the game.",
          "If you are signed in to Game Center, your best on each board and your Cubes Remembered count are also on Apple’s leaderboards, which deleting the game does not touch. The game takes them back when you sign in, so a reinstall or a new device starts from your real bests. Cubes Remembered is counted on each device: with one account on two devices the leaderboard shows the larger of the two counts, not their sum.",
        ],
      },
      {
        q: "Do I need an account, a connection or a purchase?",
        a: [
          "No. There is no account to make and nothing to buy in the game, and it shows no ads. It plays without a connection: everything you see and hear is made on the device. Only the Game Center leaderboards need a connection, and for those you sign in to Game Center.",
        ],
      },
      {
        q: "Can I play with VoiceOver?",
        a: [
          "Only in part. The menus, the scores and the buttons are labeled for VoiceOver, and taps on the board pass straight through to the game. VoiceOver does not describe the cubes or speak the pattern: the pattern comes as light and as notes, each cube with its own.",
          "The game follows Reduce Motion, and with Increase Contrast the round, the score and the timer stay brighter as the cubes fade.",
        ],
      },
      {
        q: "Which devices does it run on?",
        a: [
          "iPhone and iPad with iOS 26 or iPadOS 26 or later. An iPhone stays upright; an open iPhone Duo can be turned on its side. An iPad can be held any way up, and the game also runs in a resized window. The game is in English.",
        ],
      },
    ],
  },
];

/// The three boards as the title screen shows them: each in its own cubes, with its name and grid.
function Boards() {
  return (
    <div className="mt-5 flex gap-6 sm:gap-10">
      {BOARDS.map((board) => (
        <div key={board.name} className="w-[4.5rem] sm:w-24">
          <MiniBoard side={board.side} colors={board.colors} />
          <p className="vanish-label mt-2 text-[13px] text-center text-vanish-plaster">{board.name}</p>
          <p className="vanish-caption mt-0.5 text-[11px] text-center text-vanish-secondary">
            {board.side}×{board.side}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function SupportPage() {
  return (
    <>
      <PageBanner title="Support" />
      <article className="max-w-[39rem] mx-auto px-6 pt-10 pb-24 sm:pt-12">
        <div className="rounded-[14px] bg-vanish-surface border border-vanish-plaster/10 p-5 sm:p-6">
          <h2 className="vanish-label text-base text-vanish-plaster">Get in touch</h2>
          <p className="mt-3 text-[17px] leading-[1.65] text-vanish-plaster/80">
            Email{" "}
            <a href={`mailto:${VANISH.supportEmail}`} className="vanish-link">
              {VANISH.supportEmail}
            </a>{" "}
            and say which device you play on, which version of the game you
            have, and what happened. The version is under the switches on the
            game&rsquo;s <Voiced>SETTINGS</Voiced> screen.
          </p>
        </div>

        <h2 className="vanish-title mt-16 text-[28px] leading-tight sm:text-[32px]">Common questions</h2>
        {FAQ.map((group) => (
          <section key={group.title} className="mt-10">
            <h3 className="vanish-caption text-[13px] text-vanish-secondary">{group.title}</h3>
            <dl className="mt-4 space-y-3">
              {group.items.map((item) => (
                <div key={item.q} className="rounded-[14px] bg-vanish-surface border border-vanish-plaster/10 p-5 sm:p-6">
                  <dt className="text-[19px] leading-snug font-semibold text-vanish-plaster">{item.q}</dt>
                  <dd className="mt-3 space-y-3 text-[17px] leading-[1.65] text-vanish-plaster/80">
                    {item.a.map((paragraph) => (
                      <p key={paragraph}>
                        <Voiced>{paragraph}</Voiced>
                      </p>
                    ))}
                    {item.boards ? <Boards /> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        <p className="mt-12 text-[17px] text-vanish-plaster/80">
          See also the{" "}
          <Link href="/vanishcubes/privacy" className="vanish-link">
            privacy policy
          </Link>
          .
        </p>
      </article>
    </>
  );
}
