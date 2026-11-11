# Kit: rea (static profile)
Adds the REA MCP server (rea-agents 6.8.0, Ghidra 12.1.4, JDK 21) to one project, with
runtime/debugger/Frida/ADB/browser/Rizin tools denied (OpenCode: opencode.json permissions;
Claude Code: .claude/settings.json deny list generated from rea-tools-6.8.0.tsv), the REA
skill as a project skill, a targets/ folder (gitignored) and AGENTS.md rules.
When REA is updated: regenerate rea-tools-<ver>.tsv, denied-tools.txt and
claude-settings.fragment.json, and re-copy the skill from the installed package.
The skill is vendored deliberately (not pulled at install time): it enumerates
the tool's capabilities for a specific REA version, so skill and tool stay
version-locked and kit installs are deterministic and reviewable.
Dynamic analysis is a separate future kit (rea-dynamic) with an isolation design.
