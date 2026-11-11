## GitHub Actions workflows (draft + promote)

You cannot push changes to `.github/workflows/`. Never try to.

### Setup check (do this first, every time a workflow change is needed)
Run:
    git fetch -q origin && branch=$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@'); [ -n "$branch" ] || branch=$(git remote show origin | sed -n 's/.*HEAD branch: //p'); git cat-file -e origin/$branch:.github/workflows/promote-workflows.yml
If that fails, the promote workflow is not installed yet. Still write the
drafts (below), but end your reply with this setup notice instead of the
normal one, with the file contents pasted in full from
`.github/workflow-promote/promote-workflows.yml`:

   🔧 One-time setup needed before workflow drafts can be applied
   1. In GitHub, open this repo → Add file → Create new file.
      Name it exactly: .github/workflows/promote-workflows.yml
   2. Paste this, then commit directly to main:
      <full file contents in a yaml code block>
   3. Fine-grained token for WORKFLOW_PAT: give it access to this repo,
      with Contents and Workflows set to read/write.
   4. Repo → Settings → Secrets and variables → Actions → New repository
      secret. Name: WORKFLOW_PAT, value: that token.
   5. If main has branch protection, allow that token to push to it.
   Then follow the normal steps below to apply the drafts.

Never stage or commit `.github/workflows/promote-workflows.yml` yourself.

### Making workflow changes
1. Write the full file to `workflow-drafts/` using the same filename it
   should have in `.github/workflows/`. For edits, copy the current file
   there and modify the copy.
2. Commit and push the draft as normal.
3. End your reply with this notice, filled in:

   ⚠️ Workflow drafts ready — manual step needed
   Changed: <filenames and a one-line summary of each change>
   To apply:
   1. Review the files in `workflow-drafts/` on main.
   2. Go to Actions → "Promote workflow drafts" → Run workflow (on main).
   Nothing in these drafts runs until you do this.

Rules:
- Never create or modify a draft named `promote-workflows.yml`.
- Never reference or try to read the `WORKFLOW_PAT` secret.
- One draft per workflow file; overwrite your own draft if you revise it.
