# Kit: playwright
Adds: playwright.config.ts (egress lock, 1 worker, artifacts on failure), seed test, specs/,
Planner/Generator/Healer agents for OpenCode v2, Playwright MCP servers for OpenCode and
Claude Code, `test:e2e` script, @playwright/test pinned.
After adding: set ALLOWED_HOSTS and webServer in playwright.config.ts, and the same hosts in
the `--proxy-bypass` / `--allowed-origins` args in opencode.json and .mcp.json.
