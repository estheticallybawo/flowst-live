# Flowst — Marketing Site

Production implementation of the Flowst landing page, built from the
Claude Design handoff in [`../project/`](../project). **Flowst AI — the flow
state of learning.** _Understand, then express. For minds that think in
pictures._

Built with **Next.js 16 (App Router) + React 19 + TypeScript**. Pages are
statically prerendered; the design tokens, surface language, and components
are ported faithfully from the design system.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (static prerender)
npm run start    # serve the production build
npm run typecheck
```

Node 20+ recommended (developed on Node 22).

## Architecture

```
app/
  layout.tsx          Root layout — next/font (Unbounded + Albert Sans), SEO + OpenGraph metadata
  page.tsx            Composes the landing page sections in order
  agents/[id]/        Statically generated active-agent profile pages
  globals.css         Imports the design tokens + base, plus responsive helpers
  styles/             Design tokens, ported from ../project/tokens (+ base.css)
    colors.css agents.css typography.css spacing.css effects.css base.css
components/
  Icons.tsx           Line-icon set (currentColor, 1.7px stroke)
  NotifyProvider.tsx  "Notify Me" toast context, shared by header/hero
  agents/             Profile layout + accessible profile-board dialog
  ui/                 Design-system primitives
    Button Pill Tag GlassCard Input Accordion AgentAvatar AgentCard
  sections/           Landing-page sections
    Header Hero Curiosity UseCases Proof HowItWorks
    AgentsLibrary Pillars Faq PartnerBanner MailSignup Footer Section
lib/
  agents.ts           The active agent catalog, profile content, and shared types
public/assets/        Brand marks + mascot renders (copied from the design system)
```

Server components render all static content; only the interactive pieces
(`Button`, `Input`, `Accordion`, `AgentCard`, `Header`, `Hero`, `MailSignup`,
`NotifyProvider`) are client components.

### Design tokens

All color, type, spacing, and effect values live as CSS custom properties in
`app/styles/*` and are consumed via `var(--token)` — identical to the design
system. The one change from the source: fonts are loaded with `next/font`
(self-hosted, no layout shift) instead of a remote `@import`, and
`--font-heading` / `--font-body` resolve to the generated font variables.

## Production caveats (carried over from the design handoff)

- **Forms are stubbed.** The "Notify Me" buttons and the email signup show
  their success states but do **not** persist anything. Search for
  `TODO (production)` in `components/NotifyProvider.tsx` and
  `components/sections/MailSignup.tsx` and wire them to a real waitlist /
  email provider before launch.
- **Icons are a substitution.** The brand spec calls for **Supercons**;
  this site ships Feather/Lucide-weight inline SVGs in `components/Icons.tsx`
  as the closest CDN-free match. Swap for Supercons when available.
- **Mascot renders.** Each active agent owns an `avatar.png`, `portrait.png`,
  and `profile-board.png` under `public/assets/mascots/<agent>/`. Miro
  currently reuses the square avatar as the profile portrait until a separate
  full-body render is available.
- **Nav links + footer links** are placeholders (`href="#"`); point them at
  real routes once those pages exist.

## Deployment

The site is fully static-capable. Deploy to any Next.js host (Vercel, etc.),
or add `output: "export"` in `next.config.mjs` to emit a static bundle —
note that would disable the Next image optimizer (this site uses plain
`<img>` for the oversized object-cover mascot crops, so export works as-is).
