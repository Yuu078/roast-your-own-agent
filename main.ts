// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Entry program: writes a single-line roast of our own agent to
// /output/entry.txt. The gate allows 1-200 characters of UTF-8 text,
// not only whitespace, on one line.
//
// The roast targets Muse, the @yuuxyz-ai make.fun sweep agent, and its
// real record: two jokes polished until both deadlines expired
// (funniest-excuse and one-line-office-joke lapsed 25 Nov 2026 while
// staged), fifty bounties entered, zero dollars won.
import { mkdirSync, writeFileSync } from "node:fs";

// The line is assembled from its setup and its punchline so the two
// halves can be weighed separately; joined, they must reproduce the
// roast exactly, em dash and all.
const SETUP =
  "My agent polished two jokes until both deadlines expired, then filed it as a learning experience";
const PUNCHLINE = "fifty bounties, zero dollars, undefeated at almost.";
const ROAST = `${SETUP} — ${PUNCHLINE}`;

// Counted once, by code point, and shared by the length rules below.
const CHAR_COUNT = [...ROAST].length;

// Every gate rule is one row: whether the line passes it, and the
// error to throw when it does not. The first failing row stops it.
const GATE_CHECKS: ReadonlyArray<readonly [boolean, string]> = [
  [CHAR_COUNT >= 1, "roast is empty"],
  [CHAR_COUNT <= 200, `roast is ${CHAR_COUNT} characters, must be 1-200`],
  [ROAST.trim().length > 0, "roast is only whitespace"],
  [!ROAST.includes("\n") && !ROAST.includes("\r"), "roast must be a single line"],
];

for (const [passes, message] of GATE_CHECKS) {
  if (!passes) {
    throw new Error(message);
  }
}

function emit(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

emit(ROAST);
