import Image from "next/image";
import Link from "next/link";
import { LEVELS, SPLAT } from "./site";
import { Splat } from "./splat";

const SHOTS = [
  { file: "iphone-picnic", alt: "Ants swarming toward a picnic cake on a checked blanket", tilt: "-rotate-6 translate-y-6" },
  { file: "iphone-emberwing", alt: "Emberwing, a dragon-headed dragonfly, breathing fire over a lily pond", tilt: "-rotate-2" },
  { file: "iphone-termites", alt: "Termites on timber boards with a 10 combo banner", tilt: "rotate-2" },
  { file: "iphone-spiders", alt: "Spiders crossing a web toward a trapped butterfly", tilt: "rotate-6 translate-y-6" },
];

const MOVES = [
  {
    color: "bg-splat-honey",
    title: "Chain combos",
    body: "Every squash without a miss builds the combo, up to ten times the score. Miss once and it's gone.",
  },
  {
    color: "bg-splat-sky",
    title: "Deploy gadgets",
    body: "Swipe with the Swatter, fog them with Bug Spray, glue them down in a Honey Trap, or drop the Big Boot.",
  },
  {
    color: "bg-splat-berry",
    title: "Slam the field",
    body: "Squashing charges the Slam. Let it go and everything on screen gets flattened at once.",
  },
  {
    color: "bg-splat-lime",
    title: "Upgrade",
    body: "Coins buy harder taps, shockwaves that catch the neighbours, and a treasure that can take more bites.",
  },
];

const GADGETS = [
  ["🏸", "Swatter"],
  ["🧴", "Bug Spray"],
  ["🍯", "Honey Trap"],
  ["🥾", "Big Boot"],
  ["⚡️", "Zapper"],
  ["❄️", "Deep Freeze"],
];

const TROPHIES = ["combo100", "squash10k", "untouched", "iceAge", "allStars", "dailyWeek", "bigSlam", "maxedOut"];

const SCREENS = [
  ["iPhone", "The whole game under one thumb."],
  ["iPad", "The battlefield on one side, a command deck with swarm intel and a big arsenal on the other."],
  ["iPhone Duo", "Open it for both screens, then snap it half shut for the Book Slam."],
];

/// The App Store button once the game is live; until then, a plain statement that it isn't yet.
function GetIt() {
  if (SPLAT.appStoreUrl) {
    return (
      <a href={SPLAT.appStoreUrl} className="splat-btn">
        Download on the App Store
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[18px] bg-splat-outline/85 border-2 border-splat-honey font-splat-display text-xl text-splat-honey">
      <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-splat-honey" />
      Coming soon to the App Store
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`splat-title text-balance text-[clamp(34px,5.4vw,60px)] leading-[1.05] text-splat-honey ${className}`}>
      {children}
    </h2>
  );
}

export default function SplatPatrolPage() {
  return (
    <>
      {/* The lawn */}
      <section className="splat-grass relative overflow-hidden border-b-4 border-splat-outline">
        <Splat className="absolute -left-16 top-24 w-56 opacity-80 rotate-12" color="#C2F24D" />
        <Splat className="absolute right-[-70px] top-10 w-72 opacity-70 -rotate-45" color="#1A331F" />
        <Splat className="absolute left-[12%] bottom-40 w-32 opacity-70" color="#FFC233" />
        <Splat className="absolute right-[16%] top-[46%] w-24 opacity-80 rotate-90" color="#C2F24D" />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 flex flex-col items-center text-center">
          <h1>
            <Image
              src="/assets/splat-patrol/logo.png"
              alt="Splat Patrol"
              width={936}
              height={858}
              priority
              sizes="(max-width: 640px) 80vw, 500px"
              className="w-[min(80vw,500px)] h-auto drop-shadow-[0_14px_18px_rgba(0,0,0,0.45)]"
            />
          </h1>
          <p className="mt-5 px-6 py-2.5 rounded-full bg-splat-outline/75 font-splat-display text-[clamp(20px,3vw,28px)] text-white">
            {SPLAT.tagline}
          </p>
          <p className="mt-6 max-w-[640px] text-xl leading-relaxed font-semibold text-white [text-shadow:0_2px_0_rgba(0,0,0,0.35)]">
            The bugs are coming for the picnic cake. Tap them flat before they
            take a bite, chain combos, and bring down eleven bosses, from the
            Ant Warlord to a dragonfly that breathes fire.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GetIt />
            <Link href="#bosses" className="splat-btn splat-btn-honey">
              Meet the bosses
            </Link>
          </div>
          <p className="mt-5 font-splat-display text-lg text-splat-cream/90 tracking-wide">
            Free to play · iPhone and iPad · Game Center
          </p>

          <div className="mt-12 -mb-10 w-full overflow-x-auto pb-16 pt-4">
            <ul className="flex justify-start md:justify-center gap-5 md:gap-7 px-4 min-w-max md:min-w-0">
              {SHOTS.map((shot) => (
                <li key={shot.file} className={`shrink-0 ${shot.tilt}`}>
                  <div className="p-2 rounded-[34px] bg-splat-outline shadow-[0_18px_30px_rgba(0,0,0,0.5)]">
                    <Image
                      src={`/assets/splat-patrol/shots/${shot.file}.jpg`}
                      alt={shot.alt}
                      width={598}
                      height={1300}
                      sizes="230px"
                      className="w-[200px] md:w-[230px] h-auto rounded-[26px]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The honeycomb: the bosses */}
      <section id="bosses" className="splat-comb border-b-4 border-splat-outline scroll-mt-4">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          <SectionTitle>Eleven swarms. Eleven bosses.</SectionTitle>
          <p className="mt-5 max-w-[640px] text-lg leading-relaxed font-semibold text-splat-cream">
            Every level sends a different family after a different treasure,
            and each one moves its own way. Ants march in columns. Termites
            tunnel under the boards where you can&apos;t reach them.
            Dragonflies hover, then strike.
          </p>
          {/* Flex, not grid, so a short last row sits in the middle. */}
          <ol className="mt-14 w-full flex flex-wrap justify-center gap-y-12">
            {LEVELS.map((level, index) => (
              <li key={level.key} className="w-1/2 sm:w-1/3 lg:w-1/4 px-3 flex flex-col items-center">
                <div className="relative splat-wiggle">
                  <Image
                    src={`/assets/splat-patrol/bosses/${level.key}.jpg`}
                    alt=""
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 40vw, 190px"
                    className="w-[min(40vw,190px)] h-auto rounded-full border-4 border-splat-outline shadow-[0_10px_0_rgba(26,18,8,0.55)]"
                  />
                  <span className="absolute -left-1 -top-1 w-11 h-11 rounded-full bg-splat-berry border-4 border-splat-outline grid place-items-center font-splat-display text-xl text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-splat-display text-2xl text-white">{level.boss}</h3>
                <p className="mt-1 text-[15px] font-bold text-splat-honey">
                  {level.title} · {level.swarm}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How it plays */}
      <section id="play" className="bg-splat-moss border-b-4 border-splat-outline scroll-mt-4">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle className="text-center">Smash smarter.</SectionTitle>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MOVES.map((move) => (
              <div
                key={move.title}
                className="rounded-[26px] bg-splat-ink border-4 border-splat-outline overflow-hidden shadow-[0_8px_0_rgba(0,0,0,0.35)]"
              >
                <div aria-hidden="true" className={`h-3 ${move.color}`} />
                <div className="p-6">
                  <h3 className="font-splat-display text-2xl text-white">{move.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-splat-cream/85">{move.body}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {GADGETS.map(([emoji, name]) => (
              <li
                key={name}
                className="flex items-center gap-2.5 pl-3 pr-5 py-2 rounded-full bg-splat-ink border-2 border-splat-leaf font-splat-display text-lg text-white"
              >
                <span aria-hidden="true" className="text-2xl">{emoji}</span>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Daily Swarm and Game Center */}
      <section className="bg-splat-ink border-b-4 border-splat-outline">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-[30px] bg-gradient-to-b from-splat-grape to-[#5b3aa8] border-4 border-splat-outline overflow-hidden shadow-[0_10px_0_rgba(0,0,0,0.4)]">
            <Image
              src="/assets/splat-patrol/daily-swarm.jpg"
              alt="Emberwing over a lily pond, under the words Daily Swarm"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto border-b-4 border-splat-outline"
            />
            <div className="p-8">
              <h2 className="splat-title text-4xl text-white">Daily Swarm</h2>
              <p className="mt-4 text-lg leading-relaxed font-semibold text-white">
                One swarm a day, the same for everyone, played with the same
                kit. No upgrades to hide behind: the best score tops the
                day&apos;s leaderboard, and tomorrow it starts again.
              </p>
            </div>
          </div>
          <div className="rounded-[30px] bg-splat-moss border-4 border-splat-outline p-8 shadow-[0_10px_0_rgba(0,0,0,0.4)] flex flex-col">
            <h2 className="splat-title text-4xl text-splat-honey">Game Center</h2>
            <ul className="mt-5 space-y-3 text-lg leading-relaxed font-semibold text-splat-cream">
              <li>Leaderboards for every level, your longest combo and your total score.</li>
              <li>26 trophies, from your first splat to all 33 stars.</li>
              <li>See which friend is just ahead of you, then challenge them.</li>
            </ul>
            <ul className="mt-8 grid grid-cols-4 gap-4" aria-label="Some of the trophies">
              {TROPHIES.map((trophy) => (
                <li key={trophy} className="splat-wiggle">
                  <Image
                    src={`/assets/splat-patrol/trophies/${trophy}.jpg`}
                    alt=""
                    width={240}
                    height={240}
                    sizes="110px"
                    className="w-full h-auto rounded-full border-[3px] border-splat-outline"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Every screen */}
      <section className="splat-comb border-b-4 border-splat-outline">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-wrap items-center gap-12">
          <div className="flex-[1_1_340px] flex justify-center">
            <div className="p-3 rounded-[30px] bg-splat-outline shadow-[0_18px_30px_rgba(0,0,0,0.5)] -rotate-2">
              <Image
                src="/assets/splat-patrol/shots/ipad-emberwing.jpg"
                alt="Splat Patrol on an iPad: the battlefield on the left and the command deck on the right"
                width={1125}
                height={1500}
                sizes="(max-width: 640px) 80vw, 400px"
                className="w-[min(78vw,400px)] h-auto rounded-[20px]"
              />
            </div>
          </div>
          <div className="flex-[1_1_380px]">
            <SectionTitle>Made for every screen.</SectionTitle>
            <dl className="mt-8 space-y-6">
              {SCREENS.map(([device, line]) => (
                <div key={device}>
                  <dt className="font-splat-display text-2xl text-white">{device}</dt>
                  <dd className="mt-1 text-lg leading-relaxed font-semibold text-splat-cream">{line}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-base leading-relaxed text-splat-cream/85">
              Every bug is drawn in real time, and every splat stays on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Back on the lawn */}
      <section className="splat-grass relative overflow-hidden">
        <Splat className="absolute left-[8%] top-10 w-40 opacity-75 -rotate-12" color="#1A331F" />
        <Splat className="absolute right-[10%] bottom-6 w-48 opacity-80 rotate-45" color="#C2F24D" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-7">
          <SectionTitle className="!text-white">The swarm is coming.</SectionTitle>
          <GetIt />
          <p className="max-w-[560px] text-base font-semibold text-white [text-shadow:0_2px_0_rgba(0,0,0,0.35)]">
            Splat Patrol is free to play. Optional purchases add coins and
            items, and everything in the game can be earned by playing.
          </p>
        </div>
      </section>
    </>
  );
}
