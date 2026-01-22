# Documentation Workflow - Pivot Branch

## ⚠️ CRITICAL: DO NOT PUSH TO MAIN

The `main` branch is the **live production site**. It is protected and should never be modified directly.

## Current Workflow: Personal Branches

Everyone works on their own branch off `pivot`, then merges via Pull Requests.

### Step 1: Get Latest Pivot Branch

```bash
git checkout pivot
git pull origin pivot
```

### Step 2: Create Your Personal Branch

```bash
git checkout -b pivot/your-name
# Examples: pivot/marvin, pivot/sarah, pivot/john
```

### Step 3: Work and Commit

```bash
# Make your changes
git add .
git commit -m "Description of your changes"
```

### Step 4: Push Your Branch

```bash
git push -u origin pivot/your-name
```

### Step 5: Create Pull Request

1. Go to GitHub repository
2. Create PR: `pivot/your-name` → `pivot`
3. Request review (optional but recommended)
4. Merge when approved

### Step 6: Keep Your Branch Updated

```bash
# When pivot gets new changes, update your branch:
git checkout pivot/your-name
git pull origin pivot
git rebase pivot  # or git merge pivot
```

## Branch Structure

```
main (PROTECTED - live site)
  └── pivot (integration branch)
       ├── pivot/marvin
       ├── pivot/sarah
       └── pivot/john
```

## Safety Checks

Before pushing, always check your branch:
```bash
git branch --show-current
```

If it says `main`, STOP! Switch to pivot first.

Or use the safety check alias:
```bash
git safe-check
```

## Need Help?

- Merge conflicts? Ask team lead
- Accidentally pushed to main? Contact team lead immediately
- Unsure about something? Ask before pushing

