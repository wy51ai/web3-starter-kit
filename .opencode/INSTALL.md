# Installing web3-safe-guide for OpenCode

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed
- Git installed
- onchainos CLI installed (see below)

## Step 1 — Install onchainos CLI

```bash
curl -sSL https://raw.githubusercontent.com/okx/onchainos-skills/main/install.sh | sh
onchainos --version
```

## Step 2 — Clone this Repository

```bash
git clone https://github.com/your-username/web3-safe-guide.git ~/.config/opencode/web3-safe-guide
```

## Step 3 — Register the Plugin

```bash
mkdir -p ~/.config/opencode/plugins
rm -f ~/.config/opencode/plugins/web3-safe-guide.js
ln -s ~/.config/opencode/web3-safe-guide/.opencode/plugins/web3-safe-guide.js ~/.config/opencode/plugins/web3-safe-guide.js
```

## Step 4 — Symlink Skills

```bash
mkdir -p ~/.config/opencode/skills
rm -rf ~/.config/opencode/skills/web3-safe-guide
ln -s ~/.config/opencode/web3-safe-guide/skills ~/.config/opencode/skills/web3-safe-guide
```

## Step 5 — Restart OpenCode

Restart OpenCode. Verify by asking: `"帮我研究一下 BONK"` or `"what are whales buying?"`

## Updating

```bash
cd ~/.config/opencode/web3-safe-guide && git pull
```
