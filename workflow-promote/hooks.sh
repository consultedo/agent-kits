kit_post_add() {
  cat <<'EOF'
=== workflow-promote: manual setup needed ===
1. Create .github/workflows/promote-workflows.yml yourself
   (GitHub web UI: Add file → Create new file). Contents:
   .github/workflow-promote/promote-workflows.yml
2. Give WORKFLOW_PAT access to this repo (Contents + Workflows: read/write).
3. Add repo secret WORKFLOW_PAT.
4. If main is protected, allow that token to push to it.
The agent will also show these steps in chat when it first needs them.
EOF
}
