import { Fragment } from "react";

/// The words the game shows in caps: its cues, its buttons and the labels on its HUD (the Voice
/// section of the game's BRAND.md). Longer names come first, so HOW TO PLAY is not read as PLAY.
const COMMANDS = [
  "HOW TO PLAY", "PLAY AGAIN", "LIGHTS OUT", "NEW BEST", "GAME OVER", "LEADERBOARD", "SIGN IN", "SETTINGS",
  "RESTART", "RESUME", "REPEAT", "SCORES", "PAUSED", "WATCH", "CLEAR", "CUBES", "BEST", "MENU",
  "PLAY", "QUIT",
];
const COMMAND = new RegExp(`\\b(${COMMANDS.join("|")})\\b`);

/// A sentence with the game's commands set as the game sets them: in Tomorrow, in caps. Write a
/// command in caps, exactly as it is on screen, and it is picked out.
export function Voiced({ children }: { children: string }) {
  return (
    <>
      {children.split(COMMAND).map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="vanish-command">
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
