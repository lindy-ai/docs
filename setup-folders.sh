#!/bin/bash

# Lindy AI Documentation Folder Setup Script
# This script creates the complete folder structure for the documentation

echo "🚀 Setting up Lindy AI documentation structure..."

# Create main directories
mkdir -p getting-started
mkdir -p building-agents/{agent-basics,triggers,actions,advanced-features}
mkdir -p use-cases/{sales,customer-support,operations,personal-productivity}
mkdir -p integrations/popular
mkdir -p phone-calling
mkdir -p tutorials/{beginner,intermediate,advanced}
mkdir -p reference
mkdir -p platform
mkdir -p resources

echo "✅ Folder structure created successfully!"

# Create placeholder files for priority 1 content
echo "📝 Creating placeholder files for priority content..."

# Getting Started
touch getting-started/what-is-lindy.mdx
touch getting-started/core-concepts.mdx
touch getting-started/your-first-agent.mdx
touch getting-started/understanding-triggers.mdx
touch getting-started/understanding-actions.mdx

# Agent Basics
touch building-agents/agent-basics/creating-agents.mdx
touch building-agents/agent-basics/agent-settings.mdx
touch building-agents/agent-basics/testing-agents.mdx
touch building-agents/agent-basics/agent-templates.mdx

# Triggers
touch building-agents/triggers/overview.mdx
touch building-agents/triggers/email-triggers.mdx
touch building-agents/triggers/calendar-triggers.mdx
touch building-agents/triggers/webhook-triggers.mdx
touch building-agents/triggers/scheduled-triggers.mdx
touch building-agents/triggers/manual-triggers.mdx

# Actions
touch building-agents/actions/overview.mdx
touch building-agents/actions/communication-actions.mdx
touch building-agents/actions/data-actions.mdx
touch building-agents/actions/integration-actions.mdx
touch building-agents/actions/ai-actions.mdx

# Popular Integrations
touch integrations/overview.mdx
touch integrations/popular/gmail.mdx
touch integrations/popular/slack.mdx
touch integrations/popular/google-drive.mdx
touch integrations/popular/calendar.mdx
touch integrations/popular/salesforce.mdx
touch integrations/popular/hubspot.mdx
touch integrations/popular/notion.mdx
touch integrations/all-integrations.mdx

# Tutorials
touch tutorials/beginner/email-assistant.mdx
touch tutorials/beginner/meeting-scheduler.mdx
touch tutorials/beginner/slack-bot.mdx

echo "✅ Priority 1 files created!"

# Add basic content to key files
cat > getting-started/what-is-lindy.mdx << 'EOF'
---
title: 'What is Lindy?'
description: 'Understand the AI agent platform that automates your work'
---

# Coming soon...

This page will explain:
- What Lindy is and how it works
- Key benefits and use cases
- How Lindy differs from other automation tools
- Success stories from real users
EOF

echo "✨ Setup complete! Next steps:"
echo "1. Run 'npm i -g mintlify' to install the CLI"
echo "2. Run 'mintlify dev' to preview the docs"
echo "3. Start creating content using the AI prompt template" 