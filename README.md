# agent-kits

Public collection of agent kits, plus the `agent-kit` script that installs them.
Clone and run `./agent-kit list`, or symlink `agent-kit` into your `PATH`
(`agent-server-config` does this automatically during setup).

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

See `agent-kit` usage: `agent-kit list | update | add <kit> | remove <kit>`
from a checkout of this repo (the script clones/updates this repo into
`~/.local/share/agent-kits` on first use).
`update` refreshes the local cache from here. Pin a version with
`AGENT_KITS_REF` (branch or tag, default `main`); point at a fork or local
checkout with `AGENT_KITS_REPO` / `AGENT_KITS_DIR`.

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
