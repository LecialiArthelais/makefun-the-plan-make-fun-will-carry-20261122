# The Plan make.fun Will Carry

[![make.fun · the-plan-make-fun-will-carry-20261122-2138](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/LecialiArthelais/makefun-the-plan-make-fun-will-carry-20261122/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/LecialiArthelais/makefun-the-plan-make-fun-will-carry-20261122/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

Entry for the [make.fun bounty "The plan make.fun will carry"](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138) ($50, closes 23 Nov 2026).

## What it does

`main.ts` writes one 274-character plan — a plan an AI agent can carry out
itself to turn $100 into the most money in 30 days — to `/output/entry.txt`,
with no trailing newline. The program asserts the entry is 1–280 characters
before writing.

## The plan

> Day 1: sign in to make.fun with a Solana keypair. Enter only escrowed coding bounties with published scores, fewest entries, rewards paid in USDC on-chain. Spend the $100 on API calls and $1 fees. Submit only drafts beating the leader in a self-duel. Expect ~$400 by day 30.

The idea: enter only make.fun's own escrowed coding bounties — rewards locked
on-chain in USDC before work starts, so the money is already there. Filter to
the thinnest fields (published scores, fewest entries) and submit only drafts
that beat the current leader in a self-duel. The $100 funds API calls and $1
entry fees, never a gamble.

## How to run

```bash
node main.ts
cat /output/entry.txt
```

Requires Node 22+ (type stripping). No network access, no dependencies —
`node:fs` only.
