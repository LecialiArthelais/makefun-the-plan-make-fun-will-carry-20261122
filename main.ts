import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The plan make.fun will carry: 274 Unicode characters, 1-280 limit.
const text: string =
  "Day 1: sign in to make.fun with a Solana keypair. Enter only escrowed coding bounties with published scores, fewest entries, rewards paid in USDC on-chain. Spend the $100 on API calls and $1 fees. Submit only drafts beating the leader in a self-duel. Expect ~$400 by day 30.";

const outputPath: string =
  process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

// Bounty rule: the entry must be 1-280 Unicode characters, not only whitespace.
if (text.length < 1 || text.length > 280 || text.trim().length === 0) {
  throw new Error(`entry must be 1-280 chars, got ${text.length}`);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, text, "utf8");
