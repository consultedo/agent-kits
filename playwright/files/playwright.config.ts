import { defineConfig, devices } from '@playwright/test';

// EDIT PER PROJECT: hosts the browser may reach directly (comma-separated).
// Loopback is always direct. Everything else hits a dead proxy and fails.
// Keep in sync with --proxy-bypass / --allowed-origins in opencode.json and .mcp.json.
const ALLOWED_HOSTS = '127.0.0.1,localhost,.localhost';
const BASE_URL = process.env.PW_BASE_URL ?? 'http://127.0.0.1:3000';

export default defineConfig({
  testDir: './tests',
  workers: 1,                 // one browser at a time (8 GB RAM)
  fullyParallel: false,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  outputDir: 'test-results',
  use: {
    baseURL: BASE_URL,
    headless: true,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    proxy: { server: 'http://127.0.0.1:9', bypass: ALLOWED_HOSTS },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // EDIT PER PROJECT: how to start the app under test, bound to 127.0.0.1.
  // webServer: { command: 'npm run dev -- --host 127.0.0.1 --port 3000', url: BASE_URL, reuseExistingServer: true },
});
