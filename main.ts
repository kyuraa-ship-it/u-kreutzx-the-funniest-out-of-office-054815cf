// The Funniest Out-of-Office — make.fun entry.
// Writes one line of an out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office. I left my laptop with my toddler, who has replied to everyone with the same word: no.";

// Gate (RULES.txt): UTF-8 text, 1 to 140 characters, one line, not only whitespace.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
