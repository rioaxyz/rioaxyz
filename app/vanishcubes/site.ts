/// Facts about Vanishcubes the pages share. Edit here, not in the pages.
export const VANISH = {
  name: "Vanishcubes",
  /// The game's line, kept in its two halves: the second is always set fainter (the game's BRAND.md).
  tagline: ["The pattern stays.", "The cubes don’t."],
  description:
    "A memory game for iPhone and iPad, played on a board that disappears. Watch the pattern, tap it back, and keep going as the cubes fade to black.",
  supportEmail: "hello@rioa.xyz",
  privacyEffectiveDate: "November 17, 2026",
};

/// The three boards and their cubes' colors in reading order, from Tools/brand/palette.json in the
/// game's repo. The numbers are computed there, not chosen: copy them, never adjust them.
export const BOARDS = [
  { name: "Four", side: 2, colors: ["#FF3AFF", "#06C700", "#FF7719", "#32ADFF"] },
  {
    name: "Nine",
    side: 3,
    colors: ["#FF3AFF", "#EBAA00", "#06C700", "#B08BFF", "#00BFA8", "#FF699B", "#FF7719", "#AAC700", "#32ADFF"],
  },
  {
    name: "Sixteen",
    side: 4,
    colors: [
      "#FF3AFF", "#CDBA00", "#B08BFF", "#06C700",
      "#FF716B", "#00BFA8", "#FF699B", "#00B8D8",
      "#95CD00", "#839EFF", "#E09100", "#D374FF",
      "#FF7719", "#FF5CC5", "#00C472", "#32ADFF",
    ],
  },
];

/// The cubes that light C, U, B, E and S in the wordmark: magenta, orange, green, azure, violet.
export const WORDMARK_CUBES = ["#FF3AFF", "#FF7719", "#06C700", "#32ADFF", "#B08BFF"];

/// How visible the cubes are between flashes, round by round: the game's VanishCurve. From round 6
/// on there is nothing to draw.
export const VANISH_CURVE = [1, 0.8, 0.6, 0.4, 0.2, 0];
