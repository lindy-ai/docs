# Lindy Documentation Master Plan

## 🎯 Mission
Create documentation so good that anyone - technical or not - can quickly understand and master Lindy. When someone opens our docs, they should think "Damn, this is really pretty."

## 📊 Current Status

### ✅ Completed
- Mintlify setup with template
- Documentation structure defined
- Brand assets integrated (logo, favicon)
- Placeholder system implemented
- AI content generation prompts created
- Example pages created (homepage, quickstart, what-is-lindy)

### 🔄 Placeholders Created

#### URLs (12 total)
- `[PLACEHOLDER_APP_URL]` - Main app URL
- `[PLACEHOLDER_SIGNUP_URL]` - Signup page
- `[PLACEHOLDER_TEMPLATES_URL]` - Templates page
- `[PLACEHOLDER_ACADEMY_URL]` - Academy URL
- `[PLACEHOLDER_BLOG_URL]` - Blog URL
- `[PLACEHOLDER_COMMUNITY_URL]` - Community platform
- `[PLACEHOLDER_DISCORD_URL]` - Discord invite
- `[PLACEHOLDER_TWITTER_URL]` - Twitter/X profile
- `[PLACEHOLDER_LINKEDIN_URL]` - LinkedIn company page
- `[PLACEHOLDER_OG_IMAGE_URL]` - Open Graph image

#### Emails (2 total)
- `[PLACEHOLDER_SUPPORT_EMAIL]` - Support email
- `[PLACEHOLDER_DOCS_EMAIL]` - Documentation feedback email

#### Images Needed (53 total)
**Priority 1 (10 images) - Essential for launch:**
- Hero images (light/dark)
- Quickstart screenshots (template selection, email trigger setup)
- Overview images (agent dashboard, workflow editor, results dashboards)

**Priority 2-5 (43 images):**
- Core concepts diagrams
- Feature screenshots
- Tutorial walkthroughs
- Use case examples

## 📁 Essential Files Structure

```
/docs
├── MASTER_PLAN.md (this file - all planning consolidated)
├── AI_CONTENT_PROMPTS.md (content generation guide)
├── docs.json (Mintlify config with placeholders)
├── setup-folders.sh (creates folder structure)
├── favicon.svg (Lindy icon)
├── logo/
│   ├── light.svg (Lindy wordmark)
│   └── dark.svg (Lindy wordmark)
├── images/ (empty - needs 53 images)
├── snippets/ (Mintlify snippets folder)
├── index.mdx (homepage ✅)
├── quickstart.mdx (5-minute guide ✅)
└── getting-started/
    └── what-is-lindy.mdx (product overview ✅)
```

**Total files:** 11 (excluding .git)
**Content pages created:** 3 of 23 Priority 1 pages
**Placeholders to replace:** 14 (12 URLs + 2 emails)

## 🚀 Execution Plan

### Day 1 (Tuesday)
**Morning (2-3 hours)**
- [ ] Replace all URL/email placeholders with actual values
- [ ] Set up Mintlify account with team members
- [ ] Connect with Luiz for DNS setup

**Afternoon (3-4 hours)**
- [ ] Screenshot session for Priority 1 images (10 images)
- [ ] Create hero images showing Lindy value prop
- [ ] Record 5-minute quickstart video

### Day 2 (Wednesday) 
**Morning (3-4 hours)**
- [ ] Generate Priority 1 content using AI prompts:
  - Core concepts (5 pages)
  - Understanding triggers/actions

**Afternoon (3-4 hours)**
- [ ] Generate agent basics content (4 pages)
- [ ] Create top 3 integration guides
- [ ] Internal review with Ethan/Marvin

### Day 3 (Thursday)
**Morning (3-4 hours)**
- [ ] Generate trigger documentation (6 pages)
- [ ] Generate action documentation (5 pages)
- [ ] Create 3 beginner tutorials

**Afternoon (2-3 hours)**
- [ ] Priority 2 screenshots (13 images)
- [ ] Review and polish all content
- [ ] Fix any issues from review

### Day 4 (Friday)
**Morning (2-3 hours)**
- [ ] Generate remaining Priority 1 content
- [ ] Final review pass
- [ ] SEO optimization

**Afternoon (2-3 hours)**
- [ ] Deploy to staging
- [ ] Team testing
- [ ] Prepare for launch

### Day 5 (Monday)
- [ ] Soft launch to internal team
- [ ] Fix any last-minute issues
- [ ] Full public launch

## 📋 Content Tracking

### Priority 1 Pages (23 total)
| Category | Pages | Status |
|----------|-------|--------|
| Homepage | 1 | ✅ Done |
| Quickstart | 1 | ✅ Done |
| Getting Started | 5 | 🔄 1/5 done |
| Agent Basics | 4 | ❌ Not started |
| Triggers | 5 | ❌ Not started |
| Actions | 5 | ❌ Not started |
| Integrations | 3 | ❌ Not started |

### Success Metrics
- Time to first success: < 5 minutes
- Support ticket reduction: 30%
- Documentation NPS: > 8.0
- Conversion rate (docs → signup): > 15%

## 🛠 Technical Requirements

### Mintlify Setup
```bash
# Install and run locally
npm i -g mintlify
cd docs
mintlify dev

# Deploy
git push origin main
```

### Image Guidelines
- Screenshots: 1200x800px
- Use Lindy brand colors (#5B47ED)
- Consistent test data
- Both light/dark modes where applicable

## 🎨 What Makes Us Better Than Gumloop

1. **Faster onboarding** - 5 minutes vs their 15+
2. **Role-based paths** - Separate tracks for different users
3. **Visual richness** - More screenshots and examples
4. **AI assistance** - Lindy chatbot for instant help
5. **Better organization** - Clearer navigation and progression

## ⚡ Quick Commands

```bash
# Run locally
mintlify dev

# Create folder structure
chmod +x setup-folders.sh
./setup-folders.sh

# Find placeholders
grep -r "PLACEHOLDER" .

# Count remaining work
grep -r "Not Started" MASTER_PLAN.md | wc -l
```

## 📞 Key Contacts
- Luiz - DNS and deployment
- Ethan/Marvin - Content review
- Michelle - Team access

---

**Remember**: Every page should make users feel empowered and excited to build with Lindy! 