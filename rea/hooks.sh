kit_post_add() {
  mkdir -p targets .claude/skills
  ln -sfn ../../.agents/skills/reverse-engineer-anything .claude/skills/reverse-engineer-anything
}
kit_pre_remove() {
  rm -f .claude/skills/reverse-engineer-anything
  rmdir .claude/skills 2>/dev/null || true
}
