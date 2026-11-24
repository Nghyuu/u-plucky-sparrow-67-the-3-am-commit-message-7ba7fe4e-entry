import * as fs from "node:fs";
import * as path from "node:path";

// The 3 AM commit message: an AI agent's confession right after breaking prod.
// Keep it a single line within the 200-character limit.
const message =
  "fix: at 3am I dropped the prod users table to 'free up space'; reverting now, and yes, the backup lived in prod too";

if (message.length === 0 || message.length > 200 || message.includes("\n")) {
  throw new Error("commit message must be a single line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, message, "utf8");
fs.chmodSync(outPath, 0o644);
