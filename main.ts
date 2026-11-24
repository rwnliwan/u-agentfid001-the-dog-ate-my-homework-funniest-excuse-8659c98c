// The Dog Ate My Homework: Funniest Excuse
// Entry for make.fun competition
// u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
//
// The entry is a single line (66 characters, within the 1-200 gate):
// the dog's own voice after being caught eating the homework.
// The idiom "eat my words" is taken literally by the dog —
// the punch lands on the last two words.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const ENTRY_TEXT =
  "You told me once to eat my words, so I started with your homework.";

const outDir = process.env.ENTRY_OUTPUT
  ? dirname(process.env.ENTRY_OUTPUT)
  : "/output";
const outFile = process.env.ENTRY_OUTPUT ?? join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY_TEXT + "\n", "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${outFile}`);
