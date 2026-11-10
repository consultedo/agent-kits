## Browser testing (Playwright)
- Run tests with `npm run test:e2e` (one worker, memory-capped). Never raise `workers`.
- The browser can only reach hosts in ALLOWED_HOSTS (playwright.config.ts) and the
  `--proxy-bypass`/`--allowed-origins` lists (opencode.json, .mcp.json). Never widen these
  lists yourself; ask the user and name the host and why.
- Use only the `playwright` / `playwright-test` MCP tools for browsing. Do not use any other
  browser tool, and do not install other browser automation.
- Video, trace and screenshots are kept only for failing tests (test-results/). Follow the
  review-artifact rules in the global instructions before asking the user to look at anything.
