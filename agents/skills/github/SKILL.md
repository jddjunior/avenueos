# GitHub Version Control Skill

All changes made by AvenueOS agents MUST be tracked in GitHub. This skill defines how to commit, branch, and create pull requests for every modification to tenant sites — providing a full audit trail, rollback capability, and review workflow.

## Setup

Every Managed Agent session mounts the `jddjunior/avenueos` repository as a GitHub resource. You have read/write access to the repo files through the `file_editor` tool and can run `git` commands via the `bash` tool.

The working directory for the repo is `/repo` in the agent container.

## Tenant Branch Convention

Each tenant has a dedicated branch:
```
tenant/<tenant-id>/main          — production branch
tenant/<tenant-id>/staging       — staging / review
tenant/<tenant-id>/agent/<task-id>  — per-task working branch
```

**Always work on the per-task branch** — never commit directly to `tenant/<id>/main`.

## Workflow: Making Changes

### 1. Set up tenant branch
```bash
git fetch origin
git checkout -b tenant/<tenant-id>/agent/<task-id> \
  origin/tenant/<tenant-id>/staging 2>/dev/null \
  || git checkout -b tenant/<tenant-id>/agent/<task-id>
```

### 2. Make file edits
Use `file_editor` to modify `.dc.html` files, configuration, or any other asset.

### 3. Stage and commit
```bash
git add -p   # review changes interactively
# or
git add agents/ *.dc.html   # stage specific files

git commit -m "feat(<channel>): <concise description>

Tenant: <tenant-id>
Task: <task-id>
Channel: seo|ads|cro|web|call|report
Score: <triple-check score>/100

What changed:
- <bullet describing each file changed>

Why:
- <reason for change, data or instruction that drove it>"
```

### 4. Push
```bash
git push -u origin tenant/<tenant-id>/agent/<task-id>
```

### 5. Open PR (optional — only if orchestrator requests human review)
```bash
gh pr create \
  --title "[<channel>] <description> — <tenant-name>" \
  --body "..." \
  --base tenant/<tenant-id>/staging \
  --head tenant/<tenant-id>/agent/<task-id>
```

## Commit Message Format

```
<type>(<channel>): <summary under 72 chars>

Tenant: <tenant-id>
Task: <task-id>
Score: <validation score>/100

<body: what changed and why — as many lines as needed>
```

Types: `feat` (new content), `fix` (correction), `refactor` (restructure), `perf` (performance), `seo`, `cro`, `copy`.

## Checking for Conflicts

Before committing, always check for conflicts with the staging branch:
```bash
git fetch origin tenant/<tenant-id>/staging
git merge-tree $(git merge-base HEAD origin/tenant/<tenant-id>/staging) \
  HEAD origin/tenant/<tenant-id>/staging
```

If there are conflicts, resolve them by:
1. Keeping changes from the staging branch for any sections you did not modify
2. Keeping your changes for sections you explicitly changed
3. Never silently discarding either side

## Rollback

If the triple-check validator rejects the output:
```bash
git checkout origin/tenant/<tenant-id>/staging -- <affected-files>
git add .
git commit -m "revert(<channel>): rollback failed task <task-id>"
```

## DC File Locations

| Template | Path in repo |
|---|---|
| Home page | `Home.dc.html` |
| SEO Agent page | `Agent-SEO.dc.html` |
| Ads Agent page | `Agent-Ads.dc.html` |
| CRO Agent page | `Agent-CRO.dc.html` |
| Web Agent page | `Agent-Web.dc.html` |
| Call Agent page | `Agent-Call.dc.html` |
| Report Agent page | `Agent-Report.dc.html` |
| SEO Service page | `Service-SEO.dc.html` |
| Ads Service page | `Service-Ads.dc.html` |
| CRO Service page | `Service-CRO.dc.html` |
| Web Design Service page | `Service-Web-Design.dc.html` |
| Industry: Automotive | `Industry-Automotive.dc.html` |
| Industry: Contractors | `Industry-Contractors.dc.html` |
| Industry: Franchise | `Industry-Franchise.dc.html` |
| Industry: Shopify | `Industry-Shopify.dc.html` |

## Audit Log

After every commit, append a record to `agents/logs/<tenant-id>.jsonl`:
```json
{"timestamp":"<ISO>","taskId":"<id>","channel":"<ch>","agentId":"<id>","score":<n>,"commit":"<sha>","files":["..."]}
```

Use `bash` to append:
```bash
echo '{"timestamp":"...","taskId":"..."}' >> agents/logs/<tenant-id>.jsonl
git add agents/logs/<tenant-id>.jsonl
git commit --amend --no-edit  # amend the task commit to include the log
```

## Security

- Never commit `.env` files, API keys, or private keys
- Never commit raw Builder.io private API keys — reference them only via environment variable names
- If you accidentally stage a secret, immediately unstage it: `git restore --staged <file>`
