# CLAUDE.md

This file provides guidance to Claude Code when working with the Lindy documentation repository.

## CRITICAL: Branch Strategy

**NEVER WORK ON OR PUSH TO `main` BRANCH**

- **`main`** = Live production documentation site (PROTECTED)
- **`pivot`** = Integration branch for documentation restructure (March 2, 2026 launch)
- **Personal branches** (`pivot-yourname`) = Your working branches

**Always work on the `pivot` branch or a personal branch off `pivot`.**

### 🛡️ Branch Protection Hook

This repository has a **Claude Code hook** that automatically prevents git operations on the `main` branch:
- **Automatically active** when you clone this repo (no setup needed)
- **Blocks**: `git commit`, `git push`, `git reset`, `git rebase`, `git merge` on main
- **Performance**: Exits immediately for non-git commands (no overhead)
- **Location**: `.claude/hooks/branch-safety.sh`
- **Configuration**: `.claude/settings.json`
- **Documentation**: See `.claude/README.md` for details

If blocked, you'll see an error message with instructions to switch to `pivot` or your personal branch.

See **`WORKFLOW.md`** for detailed git workflow and safety checks.

## Repository Overview

This is the **Lindy documentation repository** built with **Mintlify** (a modern documentation framework that renders MDX files).

**Current Project**: Complete documentation restructure from "automation platform" to "AI assistant for professionals" positioning. Launch date: March 2, 2026.

**Repository Stats**:
- ~100+ MDX documentation pages
- 478 brand assets (screenshots, videos)
- 22 integration guides
- 3 internal reference documents

## Quick Start

### Check Your Branch
```bash
# Always verify you're NOT on main
git branch --show-current

# Should show: pivot or pivot-yourname
# If it shows main, STOP and switch to pivot
```

### Local Development
```bash
# Install Mintlify CLI (if not installed)
npm install -g mintlify

# Start local preview server
cd docs
mintlify dev

# Opens at http://localhost:3000
# Auto-reloads on file changes
```

### Git Workflow
```bash
# Get latest pivot changes
git checkout pivot
git pull origin pivot

# Create your branch (if first time)
git checkout -b pivot-yourname

# Work and commit
git add .
git commit -m "Description"

# Push
git push -u origin pivot-yourname

# Create PR: pivot-yourname → pivot (NOT to main)
```

**For complete workflow details, see `WORKFLOW.md`**

## Repository Structure

```
docs/
├── WORKFLOW.md                    ← Git workflow and safety guidelines
├── CLAUDE.md                      ← This file (for Claude Code)
├── mint.json                      ← Mintlify config (navigation, branding)
├── styles.css                     ← Custom styling
├── favicon.png                    ← Site favicon
├── .gitignore                     ← Git ignore rules
│
├── .claude/                       ← Claude Code configuration (committed to git)
│   ├── README.md                  ← Hook documentation and setup guide
│   ├── settings.json              ← Hook configuration
│   └── hooks/
│       └── branch-safety.sh       ← Git branch protection hook
│
├── internal-ref-docs/             ← Internal reference docs (excluded from Mintlify)
│   ├── README.md                  ← Guide to internal reference docs
│   ├── lifecycle_comms.md         ← Tone, voice, and messaging patterns
│   └── messaging_positioning_frameworks.md  ← Product positioning frameworks
│
├── components/                    ← Custom React components for MDX
│   ├── ChatIcon.jsx
│   └── ZapIcon.jsx
│
├── index.mdx                      ← Homepage ("What is Lindy?")
├── export-full-docs.mdx           ← Export utility page
├── join-community.mdx             ← Community page
│
├── start-here/                    ← Getting started docs
│   └── quickstart.mdx
├── features/                      ← Core feature pages (NEW - pivot branch)
│   ├── imessage-sms.mdx           ← iMessage & SMS guide
│   ├── ad-hoc-tasks.mdx           ← Research & on-demand tasks
│   ├── inbox-management/
│   │   ├── email-triage.mdx       ← Email labeling & prioritization
│   │   └── email-drafting.mdx     ← AI-drafted replies
│   └── meeting-assistant/
│       ├── meeting-prep.mdx       ← Pre-meeting briefings
│       ├── meeting-notes.mdx      ← Recording & summaries
│       ├── follow-ups.mdx         ← Automatic follow-up emails
│       └── scheduling.mdx         ← Smart scheduling
├── fundamentals/                  ← Core concepts (legacy workflow builder docs)
│   ├── lindy-101/                 ← 15 workflow builder pages
│   ├── testing/                   ← 5 testing pages
│   └── account-billing/           ← 5 account pages
├── use-cases/                     ← Use case documentation
│   ├── popular-workflows/         ← 4 core assistant workflows
│   ├── sales/                     ← 3 sales automation examples
│   ├── operations/                ← Operations examples
│   ├── finance/                   ← Finance examples
│   ├── customer success/          ← Customer success examples
│   ├── marketing/                 ← Marketing examples
│   └── hr/                        ← HR examples
├── skills/                        ← Features and integrations
│   ├── by-lindy/                  ← 14 Lindy-built features
│   ├── lindy-utilities/           ← 5 utility features
│   ├── web-browsing/              ← 5 web scraping features
│   └── popular-integrations/      ← 22 integration guides
├── testing/                       ← Testing docs (legacy location)
├── account-billing/               ← Account management (legacy location)
├── integrations/                  ← Integration docs
│   ├── overview.mdx
│   ├── all-integrations.mdx
│   └── popular/
├── resources/                     ← Security, changelog
│   ├── security.mdx
│   └── changelog.mdx
│
├── lindy-brand-assets/            ← Screenshots, videos (478 files)
├── images/                        ← Documentation images (8 files)
└── logo/                          ← Brand logos (SVG files)
    ├── dark.svg
    └── light.svg
```

## Current Documentation State

**Old Positioning** (main branch - live site):
- "Build AI agents that automate work"
- Workflow builder focus
- Technical/developer audience

**New Positioning** (pivot branch - in development):
- "The AI that runs your work life. 10+ hours back every week."
- "Lindy doesn't assist. It acts. Autonomously."
- Business user audience (professionals, not developers)
- Core features: Inbox Management, Meeting Assistant, iMessage & SMS, Ad Hoc Tasks
- Key language: "delegate" (not "ask"), "runs" (not "manages"), "text like a friend"
- See `internal-ref-docs/messaging_positioning_frameworks.md` for authoritative messaging

**Current Navigation Structure** (in `mint.json`):
1. **Start Here** - What is Lindy? (homepage), Quickstart
2. **Texting & Tasks** - iMessage & SMS, Ad Hoc Tasks
3. **Inbox Management** - Email Triage, Email Drafting
4. **Meeting Assistant** - Meeting Prep, Meeting Notes, Follow-ups, Smart Scheduling
5. **Advanced** (nested sub-groups) - Lindy 101, Testing, Accounts & Billing, Use Cases, Skills, Utilities, Web Scraping, Integrations
6. **Resources** - Security, Changelog

## Key Files

### Configuration
- **`mint.json`** - Navigation, metadata, branding
  - All pages MUST be registered here to appear in nav
  - Branding colors: `#E6C147` (yellow/gold)
  - Icons: FontAwesome library
  - **Excluded from builds**: `internal-ref-docs/`, `CLAUDE.md`, `WORKFLOW.md`

### Content
- **MDX files** - All documentation pages (Markdown + JSX)
- **Frontmatter required**:
  ```mdx
  ---
  title: 'Page Title'
  icon: 'icon-name'
  description: 'SEO description'
  ---
  ```

### Internal Reference Docs (in `internal-ref-docs/`)
- **README.md** - Guide to using internal reference documents
- **lifecycle_comms.md** - Tone, voice, and messaging patterns from lifecycle emails (by David Henry, Jan 22, 2026)
- **messaging_positioning_frameworks.md** - **Authoritative positioning doc** (by Everett Butler, Feb 9, 2026). All pivot docs pages are aligned to this. Contains core positioning, ICPs, differentiators, value pillars, brand narrative, feature descriptions, objection handling.
- These files are excluded from Mintlify builds (see `mint.json` ignore config)
- **Always check these before writing new content** to ensure messaging alignment

### Custom Components (in `components/`)
- **ChatIcon.jsx** - Custom chat icon component for MDX
- **ZapIcon.jsx** - Custom zap/automation icon component for MDX
- Import in MDX files: `import { ChatIcon } from '/components/ChatIcon'`

## Common Tasks

### Adding a New Page
1. Create `.mdx` file in appropriate directory
2. Add frontmatter (title, icon, description)
3. Write content using MDX
4. Register page in `mint.json` navigation
5. Test locally: `mintlify dev`
6. Commit and push to your branch
7. Create PR to `pivot`

### Editing Existing Page
1. Verify you're on `pivot` or personal branch (NOT main)
2. Edit the `.mdx` file
3. Preview changes: `mintlify dev`
4. Commit and push
5. Create PR to `pivot`

### Working with Images/Videos
- **Screenshots**: Place in `lindy-brand-assets/`
- **Videos**: Host on DigitalOcean Spaces or place in `lindy-brand-assets/`
- **Reference in MDX**:
  ```mdx
  <Frame>
    <img src="/lindy-brand-assets/image.png" alt="Description" />
  </Frame>

  <video src="/lindy-brand-assets/video.mp4" autoPlay muted loop />
  ```

### Updating Navigation
Edit `mint.json` → `navigation` array:
```json
{
  "group": "Section Name",
  "pages": [
    "path/to/page"  // Without .mdx extension
  ]
}
```

## Mintlify Commands

```bash
# Local preview (auto-reload on changes)
mintlify dev

# Check for broken links
mintlify broken-links

# Verify mint.json is valid
mintlify validate
```

## Content Writing Guidelines

### Current Style (from existing docs)
- **Video first** - Every page starts with a video demo
- **Quick Overview** - 3-5 bullet points of key features
- **Tables** - Use for settings, options, comparisons
- **Screenshots** - Heavy visual documentation
- **Concise** - 1-2 sentence paragraphs

### New Positioning Language (from messaging doc, Feb 2026)

**Core positioning**: "The AI that runs your work life. 10+ hours back every week."
**Key line**: "Lindy doesn't assist. It acts. Autonomously."
**Stack replacement**: "One tool, not five" (do NOT name competitors in docs)

**Use** (AI Assistant):
- "Lindy runs your inbox / meetings / calendar"
- "Delegate to Lindy" (not "ask Lindy")
- "Text Lindy like a friend" (not "like a colleague")
- "10+ hours back every week"
- "You don't have to ask"
- "Nothing falls through the cracks"
- "One assistant replaces your entire work stack"

**Avoid** (Automation Platform):
- "Build a workflow" / "Configure triggers" / "Deploy your agent"
- "Actions" / "Automations" (use "Quick Tasks" / "Standing instructions")
- "Interact with" (use "delegate to")
- "Manages your" (use "runs your")
- Naming specific competitors (Superhuman, Calendly, Granola, Fyxer)
- Em dashes (use colons for **Bold**: description patterns)

### Tone & Voice Reference

**Primary source**: `internal-ref-docs/messaging_positioning_frameworks.md` (Feb 9, 2026 by Everett Butler) - authoritative messaging, positioning, differentiators, and feature descriptions.

**Secondary source**: `internal-ref-docs/lifecycle_comms.md` - tone examples from lifecycle emails, key phrases, Problem/Solution/Value structure.

See **`internal-ref-docs/README.md`** for guidance on using reference materials.

## Safety Guidelines

### Before Any Git Operation
```bash
# Check current branch
git branch --show-current

# If it says "main", STOP
# Switch to pivot:
git checkout pivot
```

### Before Pushing
```bash
# Verify you're NOT on main
git branch --show-current

# Should show: pivot or pivot-yourname
```

### If You Accidentally Work on Main
```bash
# DON'T PANIC
# Stash your changes
git stash

# Switch to correct branch
git checkout pivot-yourname

# Restore your changes
git stash pop

# Now commit and push from correct branch
```

## Common Mintlify Components

```mdx
# Cards
<CardGroup cols={2}>
  <Card title="Feature" icon="icon" href="/link">
    Description
  </Card>
</CardGroup>

# Steps
<Steps>
  <Step title="First">Content</Step>
  <Step title="Second">Content</Step>
</Steps>

# Callouts
<Note>Information</Note>
<Tip>Helpful tip</Tip>
<Warning>Caution</Warning>

# Images
<Frame>
  <img src="/path/to/image.png" alt="Description" />
</Frame>

# Tabs
<Tabs>
  <Tab title="Option 1">Content</Tab>
  <Tab title="Option 2">Content</Tab>
</Tabs>

# Accordion
<Accordion title="Question">Answer</Accordion>
```

## Troubleshooting

### Mintlify Dev Not Working
```bash
# Make sure you're in the docs directory
pwd  # Should show: .../docs

# Reinstall Mintlify CLI
npm install -g mintlify

# Clear cache
rm -rf .mintlify
mintlify dev
```

### Changes Not Showing in Preview
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Restart Mintlify dev server: `Ctrl+C` then `mintlify dev`
- Check console for errors

### Page Not Appearing in Navigation
- Verify page is registered in `mint.json`
- Check path is correct (without `.mdx` extension)
- Restart dev server

### Merge Conflicts
1. Don't panic
2. See `WORKFLOW.md` or ask team lead
3. Never force push to resolve conflicts

## Project Context

**What**: Restructuring documentation from "workflow automation platform" to "AI assistant for professionals"

**Why**: Product pivot to Executive Assistant (EA) positioning - focusing on inbox, meetings, calendar management

**When**: Launch March 2, 2026 (aligned with EA product launch)

**Branch**: All work happens on `pivot` branch, launches to `main` on March 2

**Team**:
- Marvin + Inaan: Content writing
- Michelle: Content approval
- David: Positioning/messaging
- Inaan: SEO strategy

## Quick Reference

```bash
# Check branch
git branch --show-current

# Switch to pivot
git checkout pivot
git pull origin pivot

# Create personal branch
git checkout -b pivot-yourname

# Preview locally
mintlify dev

# Check for issues
mintlify broken-links
```

## Need Help?

1. **Git workflow questions**: See `WORKFLOW.md`
2. **Tone and messaging**: See `internal-ref-docs/lifecycle_comms.md`
3. **Internal reference docs**: See `internal-ref-docs/README.md`
4. **Mintlify documentation**: https://mintlify.com/docs
5. **Team lead**: Ask before pushing if unsure

## Remember

- ⚠️ **NEVER push to `main`** - it's the live production site
- ✅ **Always work on `pivot`** or personal branches
- 🔍 **Always verify branch** before committing
- 👀 **Preview locally** before pushing
- 📖 **Follow WORKFLOW.md** for detailed git workflow
