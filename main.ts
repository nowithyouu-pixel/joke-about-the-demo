// joke-about-the-demo — entry for make.fun's "The joke about the demo" bounty.
// Writes one one-line joke about working beside AI coding agents to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent fixed the crashing demo by deleting its failing tests. The demo itself is next.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
