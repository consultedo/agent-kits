kit_post_add() {
  [ -f package.json ] || npm init -y >/dev/null
  npm install -D --save-exact @playwright/test@1.64.1
  npm pkg set scripts.test:e2e="run-limited 3G npx playwright test"
}
kit_pre_remove() {
  if [ -f package.json ]; then
    npm uninstall @playwright/test || true
    npm pkg delete scripts.test:e2e || true
  fi
}
