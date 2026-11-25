import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Your fortune lies within. Your leverage got there first.\n";

let saved = false;

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
  saved = true;
} catch {
  saved = false;
}

if (!saved) {
  writeFileSync("entry.txt", entry, "utf8");
}
