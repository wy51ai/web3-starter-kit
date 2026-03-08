# Installing web3-safe-guide for Codex

## Prerequisites

- Git
- onchainos CLI (see Step 1)

## Step 1 — Install onchainos CLI

```bash
curl -sSL https://raw.githubusercontent.com/okx/onchainos-skills/main/install.sh | sh
```

## Step 2 — Clone the Repository

```bash
git clone https://github.com/your-username/web3-safe-guide.git ~/.codex/web3-safe-guide
```

## Step 3 — Create Skills Symlink

```bash
mkdir -p ~/.agents/skills
ln -s ~/.codex/web3-safe-guide/skills ~/.agents/skills/web3-safe-guide
```

**Windows (PowerShell):**

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
cmd /c mklink /J "$env:USERPROFILE\.agents\skills\web3-safe-guide" "$env:USERPROFILE\.codex\web3-safe-guide\skills"
```

## Step 4 — Restart Codex

Restart Codex. Verify:

```bash
ls -la ~/.agents/skills/web3-safe-guide
```

## Updating

```bash
cd ~/.codex/web3-safe-guide && git pull
```

## Uninstalling

```bash
rm ~/.agents/skills/web3-safe-guide
rm -rf ~/.codex/web3-safe-guide
```
