# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is **web3-starter-kit** — a beginner-friendly Web3 skill suite that wraps the onchainos CLI into a guided, safety-first experience. It provides automatic safety scoring, smart money signal tracking, step-by-step swap guidance, and a paper trading simulator for users who are new to Web3.

## Architecture

- **skills/** — 1 skill definition (`web3-safe-guide`)

Each skill is a Markdown file (`SKILL.md`) with YAML frontmatter and detailed workflow documentation.

## Available Skills

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| web3-safe-guide | Safety scoring, smart money signals, beginner swap guide | User asks about token safety, trending coins, what whales are buying, or wants to swap with guidance |
| web3-trade-simulator | Paper trading, virtual portfolio, trade decision scoring | User wants to practice trading without real money, simulate a buy/sell, evaluate trading ability, or track a virtual portfolio |

## Dependency

This skill requires the `onchainos` CLI to be installed:

```bash
curl -sSL https://raw.githubusercontent.com/okx/onchainos-skills/main/install.sh | sh
```
