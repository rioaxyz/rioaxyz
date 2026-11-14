/// Facts about Splat Patrol the pages share. Edit here, not in the pages.
export const SPLAT = {
  name: "Splat Patrol",
  tagline: "Smash the swarm. Save the snacks.",
  description:
    "A bug-smashing game for iPhone and iPad. Swarms pour down the screen toward your treasure; tap them flat, chain combos, and take down eleven bosses.",
  /// The App Store page. Empty until the game is live, which shows "coming soon" instead of a button.
  appStoreUrl: "",
  supportEmail: "hello@rioa.xyz",
  privacyEffectiveDate: "November 12, 2026",
};

/// The eleven levels, in the order the game plays them. `key` names the boss art in
/// /public/assets/splat-patrol/bosses.
export const LEVELS = [
  { key: "ants", title: "Picnic Panic", swarm: "Ants", boss: "Ant Warlord" },
  { key: "beetles", title: "Beetle Bog", swarm: "Beetles", boss: "Iron Ladybug" },
  { key: "spiders", title: "Web of Doom", swarm: "Spiders", boss: "Broodmother" },
  { key: "mosquitoes", title: "Campfire Night", swarm: "Mosquitoes", boss: "Mosquito Empress" },
  { key: "moths", title: "Porch Light", swarm: "Moths", boss: "Midnight Queen" },
  { key: "roaches", title: "Kitchen Raid", swarm: "Roaches", boss: "Roach King" },
  { key: "wasps", title: "Lemonade Stand", swarm: "Wasps", boss: "Hornet Queen" },
  { key: "dragonflies", title: "Lily Pond", swarm: "Dragonflies", boss: "Emberwing" },
  { key: "locusts", title: "Harvest Swarm", swarm: "Locusts", boss: "Locust Queen" },
  { key: "termites", title: "Timber Trouble", swarm: "Termites", boss: "Timber Queen" },
  { key: "scorpions", title: "Desert Crown", swarm: "Scorpions", boss: "Scorpion King" },
];
