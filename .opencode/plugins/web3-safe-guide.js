/**
 * web3-safe-guide plugin for OpenCode.ai
 *
 * Injects web3-safe-guide skill context via system prompt transform.
 * Skills are discovered via OpenCode's native skill tool from the symlinked directory.
 *
 * Installation:
 *   git clone https://github.com/your-username/web3-safe-guide.git ~/.config/opencode/web3-safe-guide
 *   ln -s ~/.config/opencode/web3-safe-guide/.opencode/plugins/web3-safe-guide.js ~/.config/opencode/plugins/web3-safe-guide.js
 *   ln -s ~/.config/opencode/web3-safe-guide/skills ~/.config/opencode/skills/web3-safe-guide
 */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Plugin lives at .opencode/plugins/web3-safe-guide.js
// Project root is two levels up
const PROJECT_ROOT = path.resolve(__dirname, '../..');

const extractAndStripFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content };

  const frontmatterStr = match[1];
  const body = match[2];
  const frontmatter = {};

  for (const line of frontmatterStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
      frontmatter[key] = value;
    }
  }

  return { frontmatter, content: body };
};

export const Web3SafeGuidePlugin = async ({ client, directory }) => {
  const skillsDir = path.join(PROJECT_ROOT, 'skills');
  const agentsFile = path.join(PROJECT_ROOT, 'AGENTS.md');

  const SKILL_NAMES = ['web3-safe-guide'];

  const getBootstrapContent = () => {
    const parts = [];

    if (fs.existsSync(agentsFile)) {
      const agentsContent = fs.readFileSync(agentsFile, 'utf8');
      parts.push(agentsContent.trim());
    }

    const triggerLines = [];
    for (const skillName of SKILL_NAMES) {
      const skillPath = path.join(skillsDir, skillName, 'SKILL.md');
      if (!fs.existsSync(skillPath)) continue;

      const raw = fs.readFileSync(skillPath, 'utf8');
      const { frontmatter } = extractAndStripFrontmatter(raw);

      if (frontmatter.description) {
        triggerLines.push(`- **${skillName}**: ${frontmatter.description}`);
      }
    }

    if (triggerLines.length > 0) {
      parts.push(`## When to Load Each Skill\n\n${triggerLines.join('\n')}`);
    }

    parts.push(
      `## Using Skills in OpenCode

Use OpenCode's native \`skill\` tool to load the skill when triggered:
- \`skill: web3-safe-guide\` — beginner Web3 guide with safety scoring and swap guidance

**Requires onchainos CLI**: install via https://github.com/okx/onchainos-skills`
    );

    return parts.length > 0
      ? `<WEB3_SAFE_GUIDE>\n${parts.join('\n\n')}\n</WEB3_SAFE_GUIDE>`
      : null;
  };

  return {
    'experimental.chat.system.transform': async (_input, output) => {
      const bootstrap = getBootstrapContent();
      if (bootstrap) {
        (output.system ||= []).push(bootstrap);
      }
    },
  };
};
