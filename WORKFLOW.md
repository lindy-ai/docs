# Documentation Workflow

## Branch Strategy

- **`main`** = Live production site + Mintlify search index (deployed automatically)
- **`pivot`** = Working branch for all development
- **Personal branches** (`pivot-yourname`) = Your working branches

**Daily work happens on `pivot`.** Merge `pivot` → `main` to deploy and enable search indexing.

### Automatic Protection

This repository has a Claude Code hook that blocks git commits and pushes on the `main` branch. Merging to main is allowed (used for deployment).

**The hook is already active** if you're using Claude Code - no setup needed!

## Initial Setup: Getting the Repository

### First Time Setup

```bash
# Clone the repository
git clone https://github.com/lindy-ai/docs.git
cd docs

# Install Mintlify CLI (if not already installed)
npm install -g mintlify

# Fetch all branches
git fetch origin

# Checkout the pivot branch
git checkout pivot

# Create your personal branch
git checkout -b pivot-your-name
```

### Installing Mintlify CLI

If you don't have Mintlify installed:

```bash
npm install -g mintlify
```

Verify installation:
```bash
mintlify --version
```

## Previewing Your Changes Locally

### Preview Current Branch

To see a live preview of your current branch (including your personal branch):

```bash
# Make sure you're in the docs directory
cd docs

# Start the Mintlify dev server
mintlify dev
```

The preview will be available at: **http://localhost:3000**

The server will automatically reload when you make changes to `.mdx` files or `mint.json`.

### Stop the Preview Server

Press `Ctrl+C` in the terminal where Mintlify is running.

### Preview Pivot Branch

To preview what's on the `pivot` branch (to see latest integrated changes):

```bash
# Switch to pivot branch
git checkout pivot
git pull origin pivot

# Start preview
mintlify dev
```

**Note:** Make sure to commit or stash your changes before switching branches, or you'll get an error.

### Stashing Changes Before Switching Branches

If you have uncommitted changes and need to switch branches:

```bash
# Save your current changes temporarily
git stash

# Switch branches
git checkout pivot  # or your branch

# When you come back, restore your changes
git checkout pivot-your-name
git stash pop
```

## Current Workflow: Personal Branches

Everyone works on their own branch off `pivot`, then merges via Pull Requests.

### Step 1: Get Latest Pivot Branch

```bash
git checkout pivot
git pull origin pivot
```

### Step 2: Create Your Personal Branch

```bash
git checkout -b pivot-your-name
# Examples: pivot-marvin, pivot-sarah, pivot-john
# Note: Using hyphen instead of slash to avoid Git ref conflicts
```

### Step 3: Work and Commit

```bash
# Make your changes
git add .
git commit -m "Description of your changes"
```

### Step 4: Push Your Branch

```bash
git push -u origin pivot-your-name
```

### Step 5: Create Pull Request

1. Go to GitHub repository
2. Create PR: `pivot-your-name` → `pivot`
3. Request review (optional but recommended)
4. Merge when approved

### Step 6: Keep Your Branch Updated

```bash
# When pivot gets new changes, update your branch:
git checkout pivot-your-name
git pull origin pivot
git rebase pivot  # or git merge pivot
```

## Deploying to Production

When changes on `pivot` are ready to go live and be searchable:

```bash
# Switch to main and pull latest
git checkout main
git pull origin main

# Merge pivot into main
git merge pivot

# Push to trigger Mintlify deployment
git push origin main

# Switch back to pivot for continued work
git checkout pivot
```

**Why this matters**: Mintlify only indexes the production branch (`main`) for search and AI assistant. Content on `pivot` renders but is NOT searchable until merged to `main`.

## Branch Structure

```
main (production - deployed, search-indexed)
  └── pivot (working branch)
       ├── pivot-marvin
       ├── pivot-inaan
       └── ...
```

## Safety Checks

Before pushing, always check your branch:
```bash
git branch --show-current
```

If it says `main` and you're NOT deploying, switch to pivot first.

Or use the safety check alias:
```bash
git safe-check
```

## Quick Reference: Common Commands

```bash
# Check what branch you're on
git branch --show-current

# Safety check before pushing
git safe-check

# See all branches (local and remote)
git branch -a

# See what files you've changed
git status

# Preview your changes
mintlify dev
# Then open http://localhost:3000
```

## Need Help?

- Merge conflicts? Ask team lead
- Accidentally pushed to main? Contact team lead immediately
- Unsure about something? Ask before pushing
- Mintlify not working? Make sure you're in the `docs` directory and Mintlify CLI is installed

