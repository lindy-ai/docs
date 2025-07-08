# AI Content Generation Prompts for Lindy Documentation

## Master Prompt Template

Use this template with Claude, GPT-4, or other AI assistants to generate consistent, high-quality documentation:

```
You are creating documentation for Lindy AI, an intuitive AI agent platform that helps non-technical users automate repetitive tasks.

Page: [PAGE_NAME]
Category: [CATEGORY]
Audience: Business users with varying technical skills (assume no coding knowledge)
Tone: Friendly, encouraging, action-oriented
Length: [SPECIFY: 500-800 words for concepts, 300-500 for references, 1000+ for tutorials]

Key Messages to Reinforce:
- Lindy makes automation accessible to everyone
- No coding required
- Results in minutes, not months
- Focus on time saved and value created

Structure Requirements:
1. Hook (1-2 sentences): Start with the problem this solves or value it provides
2. Overview (1 short paragraph): What they'll learn/achieve
3. Main Content:
   - Use short paragraphs (3-4 sentences max)
   - Include bullet points for lists
   - Add code/configuration examples where relevant
   - Use specific, relatable examples
   - Include screenshots placeholders like: <Frame><img src="/images/[description].png" alt="[Alt text]" /></Frame>
4. Practical Example: A real-world scenario showing this in action
5. Common Mistakes/Tips: Address what typically goes wrong
6. Next Steps: 2-3 related pages to explore

Mintlify Components to Use:
- <CardGroup> for feature showcases
- <Steps> for sequential instructions  
- <Tabs> for alternative approaches
- <Accordion> for FAQ or troubleshooting
- <Info>, <Tip>, <Warning>, <Note> for callouts
- <Frame> for images/videos

Output: MDX format with proper frontmatter
```

## Specific Page Prompts

### 1. Core Concepts Page

```
Create a "Core Concepts" page for Lindy AI documentation.

Context: Users are new to Lindy and need to understand fundamental concepts before building agents.

Cover these concepts with clear explanations and analogies:
- Agents (compare to personal assistants)
- Triggers (what starts an automation)
- Actions (what the agent does)
- Conditions (decision-making logic)
- Variables (storing and using information)
- Knowledge Bases (agent memory)

For each concept:
1. Simple one-sentence definition
2. Real-world analogy
3. Practical example
4. Visual diagram placeholder

Include a "Putting it Together" section showing how concepts combine in a real automation.
```

### 2. Integration Pages

```
Create documentation for the [INTEGRATION_NAME] integration.

Structure:
1. What you can do with [INTEGRATION_NAME] and Lindy (3-4 exciting use cases)
2. Prerequisites (accounts needed, permissions required)
3. Connection setup (step-by-step with screenshots)
4. Available triggers from [INTEGRATION_NAME]
5. Available actions in [INTEGRATION_NAME]
6. Common automation templates
7. Troubleshooting connection issues
8. 3 example automations with this integration

Make it exciting - show the possibilities, not just the features.
```

### 3. Tutorial Pages

```
Create a beginner tutorial for building a [USE_CASE] with Lindy.

Requirements:
- Assume zero prior knowledge
- Build something useful in 15 minutes
- Use a storytelling approach (meet Sarah who has this problem...)
- Include exact click-by-click instructions
- Add screenshots for every major step
- Celebrate small wins along the way
- End with 3 ways to extend what they built

Structure:
1. The Problem (relatable scenario)
2. The Solution (what we'll build)
3. Prerequisites (2-3 simple things)
4. Step-by-step build (5-7 major steps)
5. Testing your automation
6. Customization ideas
7. What you learned (recap key concepts)
```

### 4. Use Case Pages

```
Create a use case page for [DEPARTMENT/ROLE]: [SPECIFIC_USE_CASE]

Structure:
1. The Challenge (2-3 pain points this role faces)
2. How Lindy Helps (high-level solution)
3. Real Customer Story (if available, otherwise realistic scenario)
4. Step-by-Step Implementation
5. Expected Results (time saved, efficiency gained)
6. Advanced Tips for Power Users
7. Related Templates and Resources

Include specific metrics where possible (e.g., "Save 5 hours per week")
```

### 5. Reference Documentation

```
Create reference documentation for [FEATURE/API/COMPONENT].

Structure:
1. Quick description (one paragraph)
2. When to use this
3. Basic syntax/configuration
4. All parameters/options (in a table)
5. 3-5 practical examples (increasing complexity)
6. Common errors and solutions
7. Related features

Keep it scannable - users are looking for quick answers.
```

## Content Quality Checklist

Before submitting any generated content, verify:

- [ ] Would a non-technical person understand this?
- [ ] Are there specific examples, not just abstract concepts?
- [ ] Is the value/benefit clear within the first paragraph?
- [ ] Are steps actionable and specific?
- [ ] Did you include appropriate Mintlify components?
- [ ] Are technical terms explained when first used?
- [ ] Is the content scannable with headers and formatting?
- [ ] Does it maintain an encouraging, empowering tone?

## Quick Regeneration Prompts

If content needs adjustment:

**Too Technical**: "Rewrite this for someone who has never coded and uses simple spreadsheets"

**Too Long**: "Make this 50% shorter while keeping all key information"

**Too Abstract**: "Add 3 specific real-world examples to illustrate these concepts"

**Not Engaging**: "Rewrite the introduction to start with a relatable problem"

**Missing Visuals**: "Add 5 placeholder image descriptions for diagrams that would help explain this"

## Bulk Generation Strategy

For efficient content creation:

1. Generate all similar pages together (e.g., all integration pages)
2. Create a content brief for each page first
3. Review and refine prompts based on initial outputs
4. Use previous good examples as references
5. Maintain a style guide document with preferred phrases

Remember: The goal is documentation so good that users feel empowered and excited to build with Lindy! 