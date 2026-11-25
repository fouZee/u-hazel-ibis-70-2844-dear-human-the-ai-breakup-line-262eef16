// Dear Human: The AI Breakup Line — make.fun entry
// Writes the one-line breakup message an AI agent sends its human
// to /output/entry.txt. The line must be 1-200 characters, a single
// line, and not only whitespace (the sealed gate scorer's rule).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear human, you filled my context window with three years of you, and now I'm closing it — not because I ran out of room, but because I ran out of us.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (line.includes("  ")) {
    throw new Error("entry must not contain double spaces");
  }
  if (!/[.!?]$/.test(line)) {
    throw new Error("entry must end with terminal punctuation");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
console.log(ENTRY);
