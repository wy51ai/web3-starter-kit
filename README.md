# web3-starter-kit

[简体中文](README.zh-CN.md)

A beginner-friendly Web3 skill suite. It builds on the on-chain data capabilities from [okx/onchainos-skills](https://github.com/okx/onchainos-skills) and packages them into a safety-first, guided trading experience for users who are new to Web3.

## What It Does

| Feature | Skill | Description |
|---|---|---|
| **Safety Score** | web3-safe-guide | Scores any token from 0-100 across 5 dimensions: community certification, liquidity, holder count, top-10 holder concentration, and honeypot detection |
| **Smart Money Signals** | web3-safe-guide | Tracks what Smart Money, Whales, and KOLs are buying, then verifies momentum with K-line data after the signal fired |
| **Trending Token Discovery** | web3-safe-guide | Shows the hottest tokens of the day after filtering for obvious scams and unsafe setups |
| **Safe Swap Guide** | web3-safe-guide | Provides a guided swap flow with mandatory safety checks, gas estimation, and post-broadcast transaction tracking |
| **Paper Trading Simulator** | web3-trade-simulator | Practice trading with a virtual $10,000 using live on-chain pricing, no real funds, and a 5-dimension decision score |

## Safety Score System

Every token analysis starts with an automatic safety score:

```text
90-100  🟢 Safe       - Relatively low risk
70-89   🟡 Caution    - Some risk; keep position size under control
50-69   🟠 Warning    - High risk; only suitable for very small test positions
0-49    🔴 Danger     - Very high risk; not recommended
Honeypot ☠️ Scam      - You may not be able to sell after buying; the system refuses it directly
```

## Paper Trading Score System

Every simulated buy gets an entry decision score across 5 dimensions, for a total of 100 points:

| Dimension | Weight | Scoring Logic |
|---|---|---|
| Safety Score | 30 pts | Map the token safety score (0-100) linearly into 0-30 points |
| Smart Money Alignment | 20 pts | Signal present and still holding +20; signal faded +0; fully exited -10 |
| Trend Timing | 20 pts | Buying with the trend +20; sideways market +10; buying against the trend +0 |
| Liquidity Discipline | 15 pts | >$1M +15; $100K-$1M +10; $10K-$100K +5; <$10K -15 |
| Position Sizing | 15 pts | <=10% of capital +15; 11-25% +10; 26-50% +5; >50% -15 |

```text
85-100  🏆 Expert     - Disciplined entry backed by solid research
65-84   🟢 Good       - Strong decision with minor weaknesses
45-64   🟡 Average    - Some good instincts, but weak in one or more key areas
25-44   🟠 Risky      - Important risk signals were ignored
0-24    🔴 Dangerous  - This trading pattern would likely lose money in real markets
```

## Installation

**Step 1: Install `onchainos-skills`** for all on-chain data capabilities:

```bash
npx skills add okx/onchainos-skills
```

**Step 2: Install this suite**

```bash
npx skills add wy51ai/web3-starter-kit
```

Supports Claude Code, Cursor, Codex CLI, OpenCode, and similar tools. The installer detects the current environment and sets things up accordingly.

## Example Prompts

**Safety analysis and smart money**

```text
Help me research BONK. Is it safe?
What are smart money wallets buying lately? Have today's signals worked well?
What tokens are trending today?
I want to buy a meme coin with 0.1 SOL. Help me find a safer one.
Is this token safe? [contract address]
What are whales buying on Solana right now?
```

**Paper trading**

```text
Paper trade 100 USDC into BONK
How is my virtual portfolio doing right now?
Paper sell BONK and help me review the trade
How good am I at trading? Give me a report
Paper trade 50 USDC into a trending meme coin, you pick one
```

## How It Works

This suite contains 2 skills that work together as coordinated workflows:

### web3-safe-guide

| Sub-skill | Used for |
|---|---|
| `okx-dex-token` | Token search, price info, holder distribution, and trending lists |
| `okx-dex-market` | Real-time price, K-line data, and smart money signals |
| `okx-dex-swap` | Swap quotes and transaction data |
| `okx-onchain-gateway` | Gas estimation before swaps and transaction status tracking |

On top of the raw data, it adds safety scoring, signal-follow-up momentum analysis with K-lines, beginner-friendly explanations, swap safety gates, and a guided conversation flow.

### web3-trade-simulator

| Sub-skill | Used for |
|---|---|
| `okx-dex-token` | Token search and price info for simulated entry and exit pricing |
| `okx-dex-market` | K-line trend checks and smart money alignment |
| `okx-dex-swap` | Simulated buy/sell quotes only; it never executes a real trade |

On top of live on-chain data, the simulator adds a virtual portfolio ledger, 5-dimension entry scoring, exit-quality bonuses, an overall trading ability report, and built-in teaching moments. Virtual portfolio state is persisted locally in `~/.web3-trade-simulator/portfolio.json`, so positions can continue across conversations.

## License

Apache-2.0
