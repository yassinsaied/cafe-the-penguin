# GitHub Copilot Instructions

This configuration enables GitHub Copilot to use integrated agent skills for optimal assistance.

## Available Skills

### 1. Deploy to Vercel
**Triggers:** "deploy", "push live", "preview deployment", "check status"

**Key workflow:**
1. Check git remote: `git remote get-url origin`
2. Check if linked: `.vercel/project.json` or `.vercel/repo.json`
3. Check CLI auth: `vercel whoami`
4. Ask for team if multiple exist
5. Deploy with `--scope <team-slug>` if needed

**Always preview** unless user explicitly asks for production.

**File:** `.agents/skills/deploy-to-vercel/SKILL.md`

---

### 2. React Best Practices (CRITICAL)
**Triggers:** React/Next.js components, performance, data fetching, bundle optimization

**Priority order:**
1. **Eliminating Waterfalls** (`async-*`) — Check cheap conditions before await, Promise.all() for parallel, Suspense for streaming
2. **Bundle Size** (`bundle-*`) — Direct imports, avoid barrels, statically analyzable paths, dynamic imports
3. **Server Performance** (`server-*`)
4. **Client Data Fetching** (`client-*`)
5. **Re-render Optimization** (`rendering-*`)
6. **JavaScript Performance** (`js-*`)
7. **Advanced Patterns** (`advanced-*`)

**File:** `.agents/skills/vercel-react-best-practices/SKILL.md`

---

### 3. Composition Patterns
**Triggers:** Component architecture, reusable components, boolean props, compound components, React 19 APIs

**Topics:**
- Avoid boolean prop explosion
- Compound components pattern
- Render props vs children
- React 19 changes (no ForwardRef)

**File:** `.agents/skills/vercel-composition-patterns/SKILL.md`

---

### 4. View Transitions
**Triggers:** Page transitions, route animations, smooth UI updates, shared elements

**File:** `.agents/skills/vercel-react-view-transitions/SKILL.md`

---

### 5. Web Design Guidelines
**Triggers:** UI review, accessibility audit, design best practices

**File:** `.agents/skills/web-design-guidelines/SKILL.md`

---

## Usage Rules

✅ **Always:**
- Check the relevant skill file before responding to architecture questions
- Reference specific rules by prefix (e.g., `async-parallel`)
- Run `npm run build` before pushing
- Verify no regressions introduced

✅ **For Deployment:**
- Run the 4 state checks first
- Propose appropriate method
- Ask for team if multiple exist

✅ **For React Code:**
- Apply best practices by priority
- Start with CRITICAL (waterfalls, bundle)
- Reference rule files when making changes

---

## Quick Commands

```bash
npm run build        # Local build verification
git push origin main # Auto-deploys to Vercel
vercel deploy --prod # Manual production deploy
vercel inspect <url> # Check deployment status
```
