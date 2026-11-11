# agent-kits

Public collection of agent kits, plus the `agent-kit` script that installs them
and the `agent-kit` skill that teaches agents to use them.

## Prerequisites

`bash`, `git`, `jq`.

## Install

Clone and run from the checkout:

    git clone https://github.com/consultedo/agent-kits.git
    cd agent-kits
    ./agent-kit list

Or put `agent-kit` on your `PATH` (on first use it clones this repo into
`~/.local/share/agent-kits` as its local cache):

    git clone --depth 1 --branch main https://github.com/consultedo/agent-kits.git ~/.local/share/agent-kits
    ln -s ~/.local/share/agent-kits/agent-kit ~/.local/bin/agent-kit
    agent-kit list

(`agent-server-config` does the equivalent automatically during setup.)

## Use

Run inside the target repo (must be a git checkout):

    cd your-project
    agent-kit list      # available kits with one-line summaries
    agent-kit add <kit> # copy in files, merge config, append AGENTS.md section
    git status && git diff   # review, then commit
    agent-kit remove <kit>   # reverses an add

`add` never overwrites existing files (reports "kept existing"); `remove`
deletes template files only if unchanged, and leaves `.gitignore` lines and
global MCP pre-approvals in place. `update` refreshes the local cache from
here. Pin a version with `AGENT_KITS_REF` (branch or tag, default `main`);
point at a fork or local checkout with `AGENT_KITS_REPO` / `AGENT_KITS_DIR`.

## Agent skill

`skills/agent-kit/SKILL.md` instructs agents to discover kits (`list`, then
read the kit READMEs) instead of hardcoding them. Install it wherever your
agents look for skills, linked from the local cache so it stays fresh, e.g.:

    ln -s ~/.local/share/agent-kits/skills/agent-kit ~/.claude/skills/agent-kit
    ln -s ~/.local/share/agent-kits/skills/agent-kit ~/.agents/skills/agent-kit

## Kits

| Kit | Adds |
|---|---|
| `playwright` | Playwright e2e setup: config (egress lock, 1 worker, artifacts on failure), seed test, `specs/`, Planner/Generator/Healer agents, Playwright MCP servers for OpenCode and Claude Code |
| `rea` | Static reverse-engineering: REA MCP server (rea-agents, Ghidra, JDK), REA skill, `targets/` folder; runtime/debugger/Frida/ADB/browser/Rizin tools denied by design |
| `workflow-promote` | GitHub Actions draft-then-promote flow: agent writes to `workflow-drafts/`, you promote via a manual "Promote workflow drafts" run that copies them into `.github/workflows/` |

## Kit layout contract

A kit folder may contain any of (existing project files are never overwritten):

- `files/` — copied into the repo
- `opencode.fragment.json` — merged into `./opencode.json` (OpenCode v2)
- `mcp.fragment.json` — merged into `./.mcp.json` (Claude Code)
- `claude-settings.fragment.json` — merged into `./.claude/settings.json`
- `claude-servers.txt` — MCP names pre-approved in `~/.claude/settings.json`
- `gitignore.fragment` — lines appended to `./.gitignore`
- `agents.md` — block appended to `./AGENTS.md`
- `hooks.sh` — optional `kit_post_add` / `kit_pre_remove` shell functions
- `README.md` — short doc for the kit; its first non-header, non-empty line is
  the one-line summary shown by `agent-kit list` (keep it to one line)

`skills/` at the repo root holds agent skills (not kits) and is skipped by
`agent-kit list`.

## Contributing

One folder per kit, same contract as above. Keep kits additive and
non-destructive: never overwrite, keep `remove` clean, document follow-ups in
the kit's `README.md`.

## License

MIT — see [LICENSE](LICENSE) (© 2026 consultedo).

Attribution: the `rea` kit vendors the `reverse-engineer-anything` skill files
verbatim from the [`rea-agents`](https://github.com/morluto/rea) npm package
(v6.8.0), © 2026 morluto, also MIT. If you refresh the skill from a newer
`rea-agents`, keep this notice and check the upstream license still permits it.
