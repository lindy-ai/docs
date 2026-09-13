# CLAUDE.md

This file provides guidance to Claude Code when working with the Lindy documentation repository.

## CRITICAL: Branch Strategy

**Work on `pivot`, merge to `main` for deployment.**

- **`main`** = Live production site + Mintlify search index. **GitHub branch-protected** — you cannot push directly; changes land via an approved PR. Deploy is **not fully automatic** (see Deploying below).
- **`pivot`** = Working branch for all development
- **Personal branches** (`pivot-yourname`) = Your working branches

**Daily work happens on `pivot`.** When `pivot` is ready to go live, open a PR `pivot` → `main`, get it approved, merge, then trigger the deploy.

### 🛡️ Branch Protection Hook

This repository has a **Claude Code hook** that automatically prevents git operations on the `main` branch:
- **Automatically active** when you clone this repo (no setup needed)
- **Blocks**: `git commit`, `git push`, `git reset`, `git rebase` on main (`git merge` allowed for deployment)
- **Performance**: Exits immediately for non-git commands (no overhead)
- **Location**: `.claude/hooks/branch-safety.sh`
- **Configuration**: `.claude/settings.json`
- **Documentation**: See `.claude/README.md` for details

If blocked, you'll see an error message with instructions to switch to `pivot` or your personal branch.

### 🔒 GitHub Branch Protection on `main`

Separate from the local hook, GitHub itself protects `main`:
- **Direct pushes to `main` are rejected.** All changes reach `main` through a Pull Request.
- **A PR into `main` requires one approving review.** The PR author **cannot self-approve** — a teammate must approve it.
- To deploy, open a PR `pivot` → `main` and request review. An admin merge (`gh pr merge <n> --admin --merge`) can bypass the approval gate, but **only do this with explicit authorization from the docs owner**.

See **`.claude/WORKFLOW.md`** for detailed git workflow and safety checks.

## Repository Overview

This is the **Lindy documentation repository** built with **Mintlify** (a modern documentation framework that renders MDX files).

**Current Project**: Lindy documentation site. The lead claim is **"Lindy is an AI employee"** — it lives in your Slack, connects to your tools, and comes back with the work done. The March 2026 individual-EA restructure is retired, and the Aug 2026 "AI teammate" headline is superseded — see Current Positioning below.

**Repository Stats**:
- 32 MDX documentation pages, all registered in `docs.json`
- 643 brand assets (screenshots, videos) in `lindy-brand-assets/`

The legacy workflow-builder docs (`fundamentals/lindy-101/`, `skills/`, `use-cases/`, `testing/`, `integrations/popular/`, and the old `account-billing/` and `bot-for-slack` pages) were dropped from the navigation during the pivot and **deleted from the repo on 2026-09-03**. Every one of those paths now has a `redirects` entry in `docs.json`. Do not restore them or link to them.

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

**For complete workflow details, see `.claude/WORKFLOW.md`**

## Repository Structure

```
docs/
├── docs.json                      ← Mintlify config (navigation, branding)
├── style.css                      ← Custom styling
├── favicon.png                    ← Site favicon
├── .gitignore                     ← Git ignore rules
│
├── .claude/                       ← Claude Code config + internal guides (committed)
│   ├── CLAUDE.md                  ← This file (for Claude Code)
│   ├── WORKFLOW.md                ← Git workflow and safety guidelines
│   ├── README.md                  ← Hook documentation and setup guide
│   ├── settings.json              ← Hook configuration
│   └── hooks/
│       └── branch-safety.sh       ← Git branch protection hook
│
├── .mintlify/
│   └── Assistant.md               ← System context for the docs-site AI chatbot
│
├── components/                    ← Custom React components for MDX
│   ├── ChatIcon.jsx
│   └── ZapIcon.jsx
│
├── index.mdx                      ← Homepage ("What is Lindy?")
├── export-full-docs.mdx           ← Export utility page
├── pricing.mdx                    ← Plans and pricing
│
├── start-here/                    ← Getting started
│   ├── quickstart.mdx
│   ├── best-practices.mdx
│   └── team-setup.mdx
├── teammate/                      ← Lindy Teammate surface
│   ├── setup.mdx                  ← Get Lindy into Slack, link everyone
│   ├── home.mdx, skills.mdx, routines.mdx, files.mdx
│   ├── artifacts.mdx, meeting-library.mdx, slack-commands.mdx
│   └── lindy-teammate-billing.mdx ← Seats, trials, shared credit pool
├── features/                      ← Your personal Lindy
│   ├── imessage-sms.mdx           ← iMessage & SMS guide
│   ├── ad-hoc-tasks.mdx           ← Research & on-demand tasks
│   ├── chrome-extension.mdx
│   ├── inbox-management/          ← triage, drafting, alerting, follow-up bumps
│   └── meeting-assistant/         ← daily brief, prep, recording, scheduling
├── integrations/                  ← Connect your tools
│   ├── overview.mdx
│   ├── credentials.mdx
│   └── mcp.mdx
├── account-billing/
│   └── usage.mdx                  ← Credits and usage
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

## Current Positioning (live)

**Source of truth is `index.mdx`.** It is the only positioning artifact that is both current and shipped. Read it before writing any page. Do not restore the pre-2026-08 "AI assistant that runs your work life / 10+ hours back every week" framing — that was the individual-EA pitch and the product is no longer sold that way.

- **Category claim**: "Lindy is an AI employee." It lives in your Slack, connects to your tools, and maintains a rich profile of your team. Set by the sell-side deck and adopted on the homepage 2026-09-12, replacing the Aug 2026 "AI teammate that makes the whole team better" headline.
- **Two surfaces, one Lindy**: an assistant for every employee in DMs, an AI teammate for the team in channels. Same Lindy, one team, one `@mention`. These are surfaces of one product, never two SKUs.
- **What it does**: finished work, not just an answer. Name the tool and the outcome ("updates the forecast tab", "files the notes where the team already looks"), not the capability. The homepage retired the abstract Ask/Act/Create triad for exactly this reason.
- **Why it compounds**: skills, routines, files, and meetings belong to the **workspace**, not to whoever built them. One person teaches it, the team inherits it.
- **Audience**: business teams. The champion is usually an individual contributor who adopts it in DMs; the expansion happens when the work becomes visible in channels.

### Scope labeling (the most common mistake)

Most features exist at both **Personal** and **Team** scope. `teammate/skills.mdx` (Your skills / Team skills / Built-in) and `teammate/files.mdx` (Personal / Team / System) get this right — copy their pattern.

Possessives are **not** the problem. "Your inbox" is correct on the personal surface. The problem is failing to say *which surface a feature lives on*, which makes a shared product read as single-user. Say the scope; keep the "your".

**Current Navigation Structure** (in `docs.json`):

The repo migrated from the legacy `mint.json` to Mintlify's current **`docs.json`** schema (2026-05-16). The site theme is `maple`. Navigation is a **single flat list of groups** (no tabs): Start Here, Lindy Teammate, Your personal Lindy (with a nested "Built-in Routines" group), Connect your tools, Admin & Billing, Security & Resources.

New pages must be registered in `docs.json` under `navigation.groups` or they will not appear in the sidebar. A group's `pages` array accepts only page paths and nested groups — **it cannot hold a bare link**, so a nav entry that should send readers elsewhere needs a real stub page.

**Nav is not the same as publishing.** Dropping a page from `docs.json` only removes it from the sidebar; the hosted build still serves and indexes the file. That is how 93 orphaned legacy pages stayed live for months after the pivot. To take a page off the site you must **delete the file** and add a `redirects` entry. Note that `mint export` builds only the nav pages, so it will *not* reveal this class of problem — check the deploy preview or the live URL directly.

### ⚠️ Keep internal docs inside a dot-directory

**This file and `WORKFLOW.md` live in `.claude/` on purpose. Do not move them back to the repo root.**

Any `.md` at the repo root gets published. Until 2026-09-12, `CLAUDE.md` and `WORKFLOW.md` were both live and readable at `docs.lindy.ai/CLAUDE` and `docs.lindy.ai/WORKFLOW` — internal branch strategy, team names, and the retired-positioning notes, served to anyone who asked, with `robots.txt` set to `ai-train=yes`. The `redirects` entries for those paths did not help: **a redirect never wins over a real file.**

Mintlify does not serve anything inside a dot-directory (`.claude/`, `.mintlify/` — both verified 404 on production while root `.md` files return 200), and there is no `ignore` config in `docs.json`. A dot-directory is therefore the only reliable way to keep a Markdown file in this repo unpublished. Claude Code treats `.claude/CLAUDE.md` and root `CLAUDE.md` as equivalent auto-loaded memory, so nothing is lost by keeping it here.

Note that any `.md` outside a dot-directory is parsed by Mintlify's build even when it is not a nav page, and MDX rejects HTML comments (`<!-- -->`) — use `{/* */}` or plain prose in those files. This file is exempt only because it sits in `.claude/`.

## Verify before you trust this file

This file has gone stale before. `internal-ref-docs/` was cited here as authoritative for months after it was deleted. Before relying on any path or claim below, confirm it exists.

## Key Files

### Configuration
- **`docs.json`** - Navigation, metadata, branding, redirects
  - All pages MUST be registered here to appear in nav
  - Branding colors: primary `#1A1A1A`, light `#E5E4E1`, dark `#000000`
  - Icons: FontAwesome library
  - Top-level keys in use: `theme`, `name`, `redirects`, `colors`, `favicon`, `logo`, `navbar`, `navigation`
  - There is **no `ignore` config**. Non-page files simply aren't registered in `navigation`.
  - Deleting or moving a page means adding a `redirects` entry **and** fixing inbound links

### Content
- **MDX files** - All documentation pages (Markdown + JSX)
- **Frontmatter required**:
  ```mdx
  ---
  title: 'Page Title'
  icon: 'icon-name'
  description: 'SEO description'
  keywords: ['search term 1', 'search term 2']
  ---
  ```

### Docs-site AI chatbot (`.mintlify/Assistant.md`)
- System context for the assistant that answers questions on the published site.
- **It carries the product pitch to every visitor who asks a question**, so it drifts out of date the same way pages do. Update it whenever positioning changes.
- Its terminology mappings point search terms at specific pages. **Deleting or moving a page means fixing the mapping**, or the chatbot cites a dead path.
- Only indexes the production branch, same as search.

*(A former `internal-ref-docs/` directory held the Feb 2026 positioning and lifecycle-comms references. It has been deleted. Older commit messages still cite it.)*

### Custom Components (in `components/`)
- **ChatIcon.jsx** - Custom chat icon component for MDX
- **ZapIcon.jsx** - Custom zap/automation icon component for MDX
- Import in MDX files: `import { ChatIcon } from '/components/ChatIcon'`

## Common Tasks

### Adding a New Page
1. Create `.mdx` file in appropriate directory
2. Add frontmatter (title, icon, description)
3. Write content using MDX
4. Register page in `docs.json` navigation
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
Edit `docs.json` → `navigation` array:
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

# Verify docs.json is valid
mintlify validate
```

## Mintlify Search & Indexing

Mintlify only indexes the **production branch** (`main`) for search and AI assistant. Content on `pivot` renders in preview but is NOT searchable.

### Frontmatter for search
Every page should include `keywords` (invisible search terms that help users discover the page):
```mdx
keywords: ['term1', 'term2', 'synonym', 'related concept']
```

### AI Assistant
- Configuration: `.mintlify/Assistant.md` (provides product context and terminology mappings)
- The AI assistant must be enabled in the Mintlify dashboard (Pro/Enterprise plans)
- It auto-indexes published content on the production branch

### Deploying to production (and for search)

`main` is branch-protected — you **cannot** `git push origin main`. Deploy with a PR:

```bash
# From pivot (or after merging your work into pivot):
gh pr create --base main --head pivot --title "Deploy: <summary>" --fill
# Get a teammate to approve the PR (you cannot self-approve), then:
gh pr merge <number> --merge
```

**⚠️ Deploy is not fully automatic.** Mintlify's GitHub auto-deploy on merge-to-`main` has been firing unreliably. After the PR merges, confirm the site updated — if it didn't, **manually trigger an update in the Mintlify dashboard** (dashboard.mintlify.com). Mintlify only indexes `main` for search and the AI assistant; content on `pivot` renders in preview but is not searchable until merged.

## Content Writing Guidelines

### Current Style (from existing docs)
- **Video first** - Every page starts with a video demo
- **Quick Overview** - 3-5 bullet points of key features
- **Tables** - Use for settings, options, comparisons
- **Screenshots** - Heavy visual documentation
- **Concise** - 1-2 sentence paragraphs

### Positioning Language (AI employee, Sep 2026)

**Category**: "Lindy is an AI employee." This is the lead claim, set by the sell-side deck.
**Structure**: "Same Lindy, one team, one `@mention`" — an assistant for every employee in DMs, an AI teammate for the team in channels.
**Stack replacement**: "One tool, not five" (do NOT name competitors in docs)

**Use**:
- "Lindy is an AI employee"
- "Lives in your Slack" / "Connects to your tools" / "Maintains a rich profile of your team"
- "Value from day one" — every employee gets time back; real work gets done where everyone sees it
- "Finished work, not just an answer"
- "Context that compounds" / "every teammate starts where the last one left off"
- "One person teaches it, the team inherits it"
- "Skills and routines belong to the workspace, not to whoever built them"
- "@mention it like a person"

**Note on "AI employee" vs "AI teammate".** Both are live and they are not interchangeable. "AI employee" is the **category claim** and leads the page. "AI teammate" names the **shared/team surface** specifically ("an AI teammate for the team"), paired against "an assistant for every employee" for the DM surface. Do not use "AI teammate" as the top-level promise — that was the Aug 2026 headline and it has been superseded.

**Avoid**:
- "Runs your work life" / "10+ hours back every week" — retired individual-EA framing
- "Your next hire is AI", or any claim that Lindy lets you cut or avoid headcount. The category claim is that Lindy *does the work*, not that it removes people. The champion is an IC and will get defensive.
- "Do more" as a benefit — an IC reads that as *more will be expected of me*. Say what compounds instead.
- "Ontology" and similar jargon. The deck says "self-updating ontology of your entire business"; docs say "a self-updating map of your entire business".
- Treating "Lindy Teammate" and "Assistant" as separate products
- "Build a workflow" / "Configure triggers" / "Deploy your agent"
- "Actions" / "Automations" (use "Routines" / "Skills")
- Naming specific competitors (Superhuman, Calendly, Granola, Fyxer)
- Em dashes (use colons for **Bold**: description patterns)
- Implying Lindy spends time or takes a while: it is instant. Never "Lindy will spend a few minutes…"
- "her" for Lindy: it is "it"

### Tone & Voice Reference

**Primary source**: `index.mdx`. It is shipped, approved, and current. Match its register.

**Good interior examples to copy**: `teammate/meeting-library.mdx` (team-first framing with clear Personal/Team scoping) and `teammate/skills.mdx` (ownership model stated plainly).

Note: `internal-ref-docs/` (`messaging_positioning_frameworks.md`, `lifecycle_comms.md`) is referenced in older docs and commit messages. **That directory no longer exists.** Do not cite it.

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
- Verify page is registered in `docs.json`
- Check path is correct (without `.mdx` extension)
- Restart dev server

### Merge Conflicts
1. Don't panic
2. See `.claude/WORKFLOW.md` or ask team lead
3. Never force push to resolve conflicts

## Project Context

**What**: Documenting Lindy as a **team** product — an AI teammate that lives in Slack, shared by the workspace.

**History**: The docs were restructured twice. March 2, 2026 moved them from "workflow automation platform" to an individual Executive Assistant pitch (inbox, meetings, calendar). **That EA framing is retired.** August 2026 moved them to the current team positioning, and on 2026-09-03 the leftover workflow-builder pages were deleted. Older commit messages and PR titles still describe the EA phase — do not treat them as current.

**Branch**: Work on `pivot`, merge to `main` for deployment

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

1. **Git workflow questions**: See `.claude/WORKFLOW.md`
2. **Tone, messaging, and positioning**: Read `index.mdx`. It is the shipped source of truth.
3. **Good interior examples**: `teammate/meeting-library.mdx` and `teammate/skills.mdx`
4. **Mintlify documentation**: https://mintlify.com/docs
5. **Team lead**: Ask before pushing if unsure

## Remember

- ⚠️ **Work on `pivot`**, merge to `main` only for deployment
- ✅ **Always work on `pivot`** or personal branches
- 🔍 **Always verify branch** before committing
- 👀 **Preview locally** before pushing
- 📖 **Follow `.claude/WORKFLOW.md`** for detailed git workflow
