#!/bin/bash
set -e

# Read hook input from stdin
input=$(cat)

# Extract command from hook input
command=$(echo "$input" | python3 -c "import json, sys; data=json.load(sys.stdin); print(data.get('tool_input', {}).get('command', ''))" 2>/dev/null || echo "")

# Exit early if not a git command (performance optimization)
if ! echo "$command" | grep -q "^git "; then
  exit 0
fi

# Only check git commands that modify the repository
if ! echo "$command" | grep -qE "git (commit|push|reset|rebase|merge|cherry-pick|am|apply)"; then
  exit 0
fi

# Get current branch
current_branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")

# Block if on main branch
if [[ "$current_branch" == "main" ]]; then
  echo "🚫 ERROR: You are on the 'main' branch!" >&2
  echo "" >&2
  echo "The main branch is PROTECTED (live production site)." >&2
  echo "" >&2
  echo "Please switch to the pivot branch or your personal branch:" >&2
  echo "  git checkout pivot" >&2
  echo "  # OR" >&2
  echo "  git checkout -b pivot-yourname" >&2
  echo "" >&2
  echo "See WORKFLOW.md for detailed git workflow." >&2
  exit 2
fi

# Allow all other branches
exit 0
