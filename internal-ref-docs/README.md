# Internal Reference Documents

**Purpose**: This folder contains internal reference materials for documentation writers. These files are **excluded from Mintlify builds** and will not appear on the public documentation site.

---

## What's in this folder

### 📧 [lifecycle_comms.md](./lifecycle_comms.md)
**Official tone, voice, and messaging patterns**

Contains the lifecycle email sequence sent to new Lindy AI Assistant users. Use this as a reference for:
- **Tone**: Personal, conversational, founder-led (from Flo)
- **Voice**: Direct, benefit-focused, no fluff
- **Structure**: Problem → Solution → Value
- **Key phrases**: "Lindy just does it", "You don't have to ask", "Nothing falls through the cracks"

**When to use**: Writing any user-facing documentation to ensure consistency with product messaging.

---

### 🎯 [messaging_positioning_frameworks.md](./messaging_positioning_frameworks.md)
**Product positioning and messaging frameworks**

Contains strategic positioning documents and messaging frameworks for Lindy as an AI assistant.

**When to use**: Understanding product positioning, target audience, and value propositions.

---

## How to use these files

### For Documentation Writers
1. **Before writing any page**: Review `lifecycle_comms.md` to align on tone and voice
2. **Check messaging patterns**: Use the same language patterns found in lifecycle emails
3. **Avoid old automation language**: See "Key Messaging Patterns" section in lifecycle_comms.md

### Language Patterns to Use
✅ "Lindy automatically..."
✅ "Your assistant will..."
✅ "You don't have to ask. Lindy just does it."
✅ "Nothing falls through the cracks"
✅ "Gets better over time"

### Language to Avoid
❌ "Build a workflow"
❌ "Configure triggers"
❌ "Deploy your agent"
❌ "Step 1: Add action"

---

## Adding new reference documents

When adding new internal reference materials:

1. **Place file in this folder**: `/docs/internal-ref-docs/`
2. **Update this README**: Add a section describing the new file
3. **Update CLAUDE.md**: Add reference in "Internal Reference Docs" section
4. **No need to update mint.json**: The entire `internal-ref-docs/**` folder is already excluded

---

## Technical Details

### Excluded from Mintlify
These files are excluded via `mint.json`:
```json
"ignore": [
  "internal-ref-docs/**",
  "CLAUDE.md",
  "WORKFLOW.md"
]
```

This means:
- ✅ Files are in git repository (version controlled)
- ✅ Accessible to team for reference
- ❌ Will NOT appear in published documentation
- ❌ Will NOT be indexed or searchable on docs site

---

## Questions?

See [CLAUDE.md](../CLAUDE.md) for complete documentation repository guidance.
