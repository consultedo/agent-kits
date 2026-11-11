---
name: agent-kit
description: Install or remove reusable project kits via agent-kit. Use when the user wants to add a standardized capability to a repository (testing, analysis, automation, CI) or remove a previously added kit. Run `agent-kit list` to discover available kits.
---

# agent-kit

## Source

Kits and the `agent-kit` script live in the public repo
https://github.com/consultedo/agent-kits — including this skill file, at
`skills/agent-kit/SKILL.md`. Install the skill by linking it from the local
cache (see the repo README): the cache is refreshed by `agent-kit update`, so
the skill never goes stale.
Setup symlinks `agent-kit` into `~/.local/bin` from the local cache at
`~/.local/share/agent-kits`
(overrides: `AGENT_KITS_DIR` for the cache, `AGENT_KITS_REPO` for a fork,
`AGENT_KITS_REF` to pin a branch/tag).
`list`/`add` fetch automatically on first use; `agent-kit update` refreshes.
Kit docs: `$AGENT_KITS_DIR/<kit>/README.md`, same content as the public repo.

## Discover kits (the set changes — never hardcode it)

1. Run `agent-kit list`: one line per kit with its summary.
2. Read the README of any candidate: `$AGENT_KITS_DIR/<kit>/README.md`. It
   documents what the kit adds and any manual follow-ups — surface those to
   the user instead of repeating them here.
3. Propose the matching kit, then install per below.

## When to use

- User wants a standardized capability added to a repo → discover, propose,
  `agent-kit add <kit>`.
- "Remove the X kit" → `agent-kit remove <kit>`. This reverses an add;
  `.gitignore` lines and global MCP pre-approvals stay in place by design.

## How

1. Find the repo root: `git rev-parse --show-toplevel`. Run everything there.
2. List first: `agent-kit list` (fetches the public kits repo on first use).
   Then `agent-kit add <kit>`.
   It never overwrites existing files (reports "kept existing"). It refuses when
   `opencode.jsonc` exists — convert to plain `opencode.json` by hand first.
3. Review with `git status` and `git diff`, and summarise what landed.
