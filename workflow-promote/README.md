# Kit: workflow-promote
Adds: a `Promote workflow drafts` template and agent rules for a draft-then-promote flow (agent writes to `workflow-drafts/`, you promote via a manual Actions run). No dependencies, no config fragments.
The agent writes workflows to `workflow-drafts/` (pushable); you review them,
then run the Actions workflow "Promote workflow drafts" (workflow_dispatch, on
the default branch) to copy them into `.github/workflows/` with your own
token, delete the drafts, and push straight to main. Drafts never run until
you promote them.
After adding, do the one-time per-repo setup (the agent reminds you): create
`.github/workflows/promote-workflows.yml` by hand from
`.github/workflow-promote/promote-workflows.yml`, give a token Contents and
Workflows read/write on the repo, store it as the `WORKFLOW_PAT` repo secret,
and let it push to main if protected. One fine-grained token can cover several
repos. The template lives under `.github/workflow-promote/` (not
`.github/workflows/`) so the agent can push it without touching live workflows.
