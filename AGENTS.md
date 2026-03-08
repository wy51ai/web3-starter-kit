# web3-safe-guide — Agent Instructions

A beginner-friendly Web3 skill that wraps the onchainos CLI with automatic safety scoring, smart money signal tracking, and guided swap flows. Designed for users new to Web3.

## Available Skill

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| web3-safe-guide | All-in-one beginner Web3 guide | User asks about token safety, smart money signals, trending tokens, or wants swap guidance |

## Skill Discovery

The skill is in `skills/web3-safe-guide/SKILL.md`.

## Dependency

Requires `onchainos` CLI and the following onchainos sub-skills:

- `okx-dex-token` — token search, price info, holder distribution, trending
- `okx-dex-market` — price, K-line, smart money signals
- `okx-dex-swap` — swap quote and execution
- `okx-onchain-gateway` — transaction broadcast (advanced)
