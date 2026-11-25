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

const ROAST =
  "My agent polished two jokes until both deadlines expired, then filed it as a learning experience — fifty bounties, zero dollars, undefeated at almost.";

function validateLine(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`roast is ${chars.length} characters, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("roast is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
}

validateLine(ROAST);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
