# Project Context

## Project Overview
**Café The Penguin** — A modern, responsive Next.js website for a coffee shop in Islamabad.

**Repository:** https://github.com/yassinsaied/cafe-the-penguin

---

## Tech Stack
- **Framework:** Next.js 16.2.4 (Turbopack)
- **React:** 19.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deploy on `git push main`)

---

## Color Palette (Tailwind Theme)
```css
--color-gold:       #c9a84c   /* Primary accent */
--color-gold-light: #e8d5a3   /* Light accent */
--color-espresso:   #120d07   /* Primary bg (dark) */
--color-brown:      #3d1f00   /* Secondary bg */
--color-muted:      #9a8f80   /* Muted text */
--color-cream:      #c8bba6   /* Light text */
```

---

## Font Stack
- **Heading:** Oswald (font-heading) — Bold, uppercase, tracking
- **Body:** Lato (font-body) — Light, readable
- **Display:** Playfair Display (font-display) — Italic, decorative

---

## Pages & Routes
| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `page.tsx` | Landing hero, info bar |
| `/services` | `app/services/page.tsx` | 3 service cards |
| `/qui-somme-nous` | `app/qui-somme-nous/page.tsx` | About, story, values |
| `/contact` | `app/contact/page.tsx` | Contact form + info |

---

## Key Components

### Header
- **File:** `components/Header.tsx`
- **Status:** ✅ Responsive with mobile hamburger menu
- **Features:** Active link detection, backdrop blur, responsive logo sizing

### PageLayout
- **File:** `components/PageLayout.tsx`
- **Purpose:** Wrapper for all pages (header + banner + footer)
- **Responsive:** ✅ Footer footer padding adjusted for mobile

### HeroContent
- **File:** `components/HeroContent.tsx`
- **Purpose:** Home page hero section with CTA buttons
- **Responsive:** ✅ Reduced padding on mobile

### InfoBar
- **File:** `components/InfoBar.tsx`
- **Purpose:** Info cards (phone, location, hours)
- **Responsive:** ✅ Relative on mobile, absolute on desktop

### Specialized Components
- `InfoItem.tsx` — Reusable info card component
- `HeroContent.tsx` — Landing hero section

---

## Known Issues & Fixes

### Build Issues Fixed
- ✅ JSX syntax errors in footer (orphan tags)
- ✅ Apostrophes in single-quoted strings (`l'enthousiasme`, `world's`)
- ✅ Tailwind v4 arbitrary value deprecations

### Responsive Fixes
- ✅ Mobile hamburger menu with drawer overlay
- ✅ Home page `h-screen overflow-hidden` → `min-h-screen` to allow scroll
- ✅ InfoBar positioning (relative mobile, absolute desktop)
- ✅ HeroContent padding adjusted for mobile

---

## Git & Deployment

### Git Setup
- **Remote:** `https://github.com/yassinsaied/cafe-the-penguin.git`
- **Main Branch:** `main`
- **Auto-Deploy:** ✅ Every `git push origin main` triggers Vercel build

### Vercel
- **URL:** `https://cafe-the-penguin.vercel.app`
- **Status:** ✅ Public, live
- **Deployments:** Auto on main branch push

### GitHub
- **Visibility:** Public
- **Files ignored:** `CLAUDE.md`, `AGENTS.md`, `.copilot-instructions.md` (local only)

---

## Development Workflow

1. **Make changes** in local branch
2. **Test locally:** `npm run build`
3. **Fix any errors** before pushing
4. **Commit:** `git add -A && git commit -m "..."`
5. **Push:** `git push origin main`
6. **Vercel redeploys** automatically
7. **Check status:** Visit `https://cafe-the-penguin.vercel.app`

---

## Performance Notes

- Tailwind v4 with inline theme (no separate CSS file)
- Next.js Image optimization for logo, hero backgrounds
- Responsive design with mobile-first approach
- Hamburger menu only renders on mobile (`md:hidden`)
- Static pages (all routes prerendered at build)

---

## Future Improvements

- [ ] Dark mode toggle
- [ ] Animation improvements (View Transitions API)
- [ ] Email form submission (backend needed)
- [ ] SEO meta tags per page
- [ ] Analytics integration
- [ ] CMS integration for dynamic content
