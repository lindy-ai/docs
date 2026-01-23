# Claude Code Configuration

This directory contains Claude Code configuration and hooks for the Lindy documentation repository.

**⚠️ IMPORTANT**: This directory is **committed to git** so that everyone who clones the repository gets the same protections automatically.

## Branch Protection Hook

**Purpose**: Prevents accidentally working on the `main` branch, which is the live production documentation site.

### How it works

The `branch-safety.sh` hook runs **before Bash commands** and efficiently checks:
1. **Early exit**: If it's not a git command, exit immediately (no overhead)
2. **Filter**: Only check git commands that modify the repository (commit, push, reset, etc.)
3. **Branch check**: Are we currently on the `main` branch?
4. If YES to all → **BLOCK the command** and show an error message

**Performance**: The hook exits in microseconds for non-git commands, so there's no noticeable impact on other Bash operations.

### What gets blocked

When on the `main` branch, these commands are blocked:
- `git commit`
- `git push`
- `git reset`
- `git rebase`
- `git merge`
- `git cherry-pick`
- `git am`
- `git apply`

### What's allowed

- All git commands on `pivot` or personal branches
- Read-only git commands on main (e.g., `git status`, `git log`, `git diff`)
- All non-git commands

### Error message

If you try to commit/push on main, you'll see:
```
🚫 ERROR: You are on the 'main' branch!

The main branch is PROTECTED (live production site).

Please switch to the pivot branch or your personal branch:
  git checkout pivot
  # OR
  git checkout -b pivot-yourname

See WORKFLOW.md for detailed git workflow.
```

## First Time Setup

**Good news**: If you clone this repository, the hook is **automatically active**!

Claude Code will detect the `.claude/settings.json` file and use it automatically. No manual setup required.

To verify the hook is active:
```bash
# In the docs directory
git checkout main  # Switch to main
# Try a commit (will be blocked)
# Switch back to pivot
git checkout pivot
```

## Files

- **`settings.json`** - Hook configuration (registers the PreToolUse hook)
- **`hooks/branch-safety.sh`** - Branch protection script
- **`README.md`** - This file

All files are committed to git so everyone gets the same protection.

## Testing the hook

To verify the hook is working:

```bash
# Switch to main (don't worry, hook will block commits)
git checkout main

# Try to commit something (should be blocked)
git commit -m "test"
# Expected: Error message appears

# Switch back to pivot
git checkout pivot
```

## Disabling the hook

If you need to temporarily disable the hook:

1. **Rename settings.json**:
   ```bash
   mv .claude/settings.json .claude/settings.json.disabled
   ```

2. **Re-enable later**:
   ```bash
   mv .claude/settings.json.disabled .claude/settings.json
   ```

**Note**: Only disable if absolutely necessary. The hook is there to protect the live production site.

## More information

- **Claude Code hooks documentation**: https://code.claude.com/docs/en/hooks.md
- **Project git workflow**: See `WORKFLOW.md` in the repository root
- **Development guidelines**: See `CLAUDE.md` in the repository root
