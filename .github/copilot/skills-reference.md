# Skills Reference

Quick reference to all integrated agent skills and their rules.

---

## Deploy to Vercel

**File:** `.agents/skills/deploy-to-vercel/SKILL.md`

### Workflow

```bash
# 1. Check project state
git remote get-url origin                           # Git remote
cat .vercel/project.json || cat .vercel/repo.json  # Vercel linking
vercel whoami                                       # CLI auth
vercel teams list --format json                     # Teams
```

### Commands

```bash
# Preview (default)
vercel deploy -y --no-wait

# Production (only if user asks)
vercel deploy --prod -y

# With team scope
vercel deploy --scope <team-slug> -y --no-wait

# Check status
vercel inspect <url>
```

### Key Rules

- **Always preview** unless explicit "production"
- Ask for team if multiple exist
- Use `--no-wait` for faster feedback
- Move user toward git-push auto-deploys

---

## React Best Practices (70 Rules)

**File:** `.agents/skills/vercel-react-best-practices/SKILL.md`

### Priority 1: Eliminating Waterfalls (CRITICAL)

| Rule                                 | Purpose                                               |
| ------------------------------------ | ----------------------------------------------------- |
| `async-cheap-condition-before-await` | Check sync conditions first, avoid unnecessary awaits |
| `async-defer-await`                  | Move await into branches where actually used          |
| `async-parallel`                     | Use `Promise.all()` for independent operations        |
| `async-dependencies`                 | Use better tools for partial dependencies             |
| `async-api-routes`                   | Start promises early, await late in API routes        |
| `async-suspense-boundaries`          | Use Suspense to stream content, don't block           |

**Example:**

```javascript
// ❌ Bad: Waterfall
const data1 = await fetch('/api/users');
const data2 = await fetch('/api/posts');

// ✅ Good: Parallel
const [data1, data2] = await Promise.all([fetch('/api/users'), fetch('/api/posts')]);
```

---

### Priority 2: Bundle Size (CRITICAL)

| Rule                       | Purpose                                          |
| -------------------------- | ------------------------------------------------ |
| `bundle-barrel-imports`    | Import directly, avoid barrel files (`index.ts`) |
| `bundle-analyzable-paths`  | Use statically analyzable paths only             |
| `bundle-conditional`       | Conditionally import heavy dependencies          |
| `bundle-defer-third-party` | Defer non-critical third-party scripts           |
| `bundle-dynamic-imports`   | Use dynamic `import()` for code-splitting        |
| `bundle-preload`           | Preload critical resources                       |

**Example:**

```typescript
// ❌ Bad: Barrel import
import { HeavyComponent } from '@/components';

// ✅ Good: Direct import
import { HeavyComponent } from '@/components/HeavyComponent';

// ✅ Dynamic import for non-critical
const Modal = dynamic(() => import('@/components/Modal'));
```

---

### Priority 3: Server-Side Performance (HIGH)

| Rule    | Prefix    | Purpose                        |
| ------- | --------- | ------------------------------ |
| Various | `server-` | Optimize server-side rendering |

---

### Priority 4-8: Client, Rendering, JavaScript, Advanced

| Priority | Category               | Prefix       |
| -------- | ---------------------- | ------------ |
| 4        | Client Data Fetching   | `client-`    |
| 5        | Re-render Optimization | `rerender-`  |
| 6        | Rendering Performance  | `rendering-` |
| 7        | JavaScript Performance | `js-`        |
| 8        | Advanced Patterns      | `advanced-`  |

---

## Composition Patterns

**File:** `.agents/skills/vercel-composition-patterns/SKILL.md`

### Key Topics

- **Avoid boolean prop explosion** — Use composition instead of conditionals
- **Compound components** — Parent/child components that work together
- **Render props vs children** — Prefer children for simpler cases
- **React 19 breaking change** — No more `forwardRef`, use `ref` directly

**Example: Compound Component**

```tsx
// ✅ Good: Compound pattern
<Dialog>
  <Dialog.Header>Title</Dialog.Header>
  <Dialog.Content>Body</Dialog.Content>
  <Dialog.Footer>Actions</Dialog.Footer>
</Dialog>

// Instead of:
// ❌ <Dialog isOpen header="..." content="..." footer="..." />
```

---

## View Transitions

**File:** `.agents/skills/vercel-react-view-transitions/SKILL.md`

### When to Use

- Page transitions / route changes
- Smooth enter/exit animations
- Shared element animations
- Directional animations (forward/back)

### Implementation

```tsx
import { useTransition } from 'react';

function PageLink() {
  const [, startTransition] = useTransition();

  return (
    <Link
      onClick={e => {
        e.preventDefault();
        startTransition(() => {
          router.push('/page');
        });
      }}
    >
      Go to Page
    </Link>
  );
}
```

---

## Web Design Guidelines

**File:** `.agents/skills/web-design-guidelines/SKILL.md`

### When to Use

- Accessibility audits
- Design best practices review
- UI/UX compliance check
- WCAG conformance

---

## File Locations

All skills are in `.agents/skills/`:

```
.agents/
├── skills/
│   ├── deploy-to-vercel/
│   ├── vercel-react-best-practices/
│   ├── vercel-composition-patterns/
│   ├── vercel-react-view-transitions/
│   ├── web-design-guidelines/
│   └── vercel-react-native-skills/
```

Open the `SKILL.md` in each folder for full rule documentation.
