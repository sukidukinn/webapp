# sukidukinn.com Handoff

## Current Understanding

- `sukidukinn.com` is the official site.
- Its roles are:
  - official profile
  - portfolio
  - business/contact entry point
  - landing page for business card QR codes
  - curated showcase of representative works
- `sukidukinn.blog` is managed separately as an activity log, hobby posting space, and experimental publishing space.
- The `.com` site should link to `.blog`, but should not absorb the blog's role.

## Product Direction

The `.com` site should feel:

- light
- simple
- trustworthy
- hard to mis-tap or misunderstand
- easy to read on mobile
- easy to maintain in code

Mystical atmosphere can remain only slightly. Official clarity takes priority.

## Required Routes

```text
/
/profile
/works
/services
/card
/contact
/links
```

## Route Roles

### `/`

Top page that immediately explains:

- who this person is
- what kind of work can be requested
- where visitors should go next

Recommended section order:

1. Name and title
2. Short explanation of what they do
3. Representative categories
4. Work / consultation entry points
5. Featured works
6. Link to `sukidukinn.blog`
7. Contact

### `/profile`

Official profile page for:

- self introduction
- work introductions
- business card follow-up

### `/works`

Curated achievements and representative works.

Examples:

- Unity
- books
- manga
- web production

### `/services`

Service menu and consultation page.

Should guide users toward:

- Coconala
- external payment / request flows

### `/card`

Highest practical priority.

This page is for business card QR access and should show essential information in the first smartphone viewport.

### `/contact`

Inquiry page with clear routes such as:

- Google Form
- email
- Coconala

### `/links`

Official link hub for:

- X
- note
- YouTube
- GitHub
- blog
- BOOTH
- other official destinations

## Technical Direction

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment first
- mostly static pages
- no database
- no API
- avoid unnecessary external libraries
- avoid Vercel-only coupling so later migration to AWS Amplify stays easy

## Data Organization

Keep content centralized in code:

- `data/links.ts`
- `data/works.ts`
- `data/profile.ts`

Optional future extension:

- `data/affiliate.ts`

## Suggested Project Structure

```text
sukidukinn-main/
- app/
  - layout.tsx
  - page.tsx
  - globals.css
  - card/page.tsx
  - profile/page.tsx
  - works/page.tsx
  - services/page.tsx
  - links/page.tsx
  - contact/page.tsx
- components/
  - layout/
    - SiteHeader.tsx
    - SiteFooter.tsx
    - SiteShell.tsx
  - ui/
    - LinkCard.tsx
    - WorkCard.tsx
    - SectionTitle.tsx
- data/
  - profile.ts
  - links.ts
  - works.ts
  - affiliate.ts
- public/
  - images/
- AGENTS.md
- README.md
```

## Implementation Priorities

1. `/`
2. `/card`
3. `/profile`
4. `/works`
5. `/links`
6. `/contact`
7. `/services`

Operationally, the first release goal should be:

- make `sukidukinn.com/card` ready for business card QR use

## UX Rules

- prioritize smartphone readability
- keep PC layout clean and stable
- use generous spacing
- keep animation minimal
- avoid flashy effects
- prefer explicit button labels
- avoid vague labels like `Learn more`
- make destination intent obvious from the link text

## Things To Avoid

- heavy 3D effects
- autoplay audio
- excessive animation
- unnecessary dependencies
- complex global state
- DB/API/member/payment implementation in the first release
- strong dependence on platform-specific hosting features

## Affiliate Strategy

Amazon Associates can fit this project if handled carefully.

Recommended approach:

- use it as a natural extension of work, tools, books, and review content
- do not make the official site feel ad-heavy
- place heavier review / recommendation content on `.blog`
- keep `.com` focused on trust and curated references

Good fit examples:

- recommended Unity books
- books related to authored works
- production tools
- hardware actually used
- reference materials connected to posted works

Implementation note:

- build reusable card/link UI now so affiliate items can later be added without redesign
- store affiliate links in `data/affiliate.ts`
- always use clear external-link handling with `target="_blank"` and `rel="noopener noreferrer"`

## Codex Prompt Draft

Use this prompt when handing off implementation:

```text
Build the official sukidukinn.com site.

Purpose:
- sukidukinn.com is the official website, business-card QR landing page, work/contact entry point, and curated portfolio
- sukidukinn.blog is managed separately as the activity log / hobby / experimental posting space
- the .com site should only include a clear link to the blog, not absorb the blog's role

Top priorities:
- lightweight
- simple
- trustworthy
- easy to understand
- hard to mis-tap
- mobile-first
- maintainable code

Tech:
- Next.js App Router
- TypeScript
- Tailwind CSS
- deployable on Vercel
- static pages first
- no DB
- no API
- avoid unnecessary dependencies
- do not rely heavily on Vercel-only features so later migration to AWS Amplify remains easy

Pages:
- /
- /card
- /profile
- /works
- /services
- /links
- /contact

Implementation rules:
- build must pass with npm run build
- centralize external links in data/links.ts
- centralize works in data/works.ts
- centralize profile data in data/profile.ts
- keep reusable UI in components/ui
- keep layout parts in components/layout
- use explicit CTA labels that describe destinations
- avoid ambiguous CTA labels
- release the smallest useful version first

Design:
- official and readable
- simple with generous spacing
- mobile-first
- restrained visual atmosphere
- minimal animation

Priority order:
1. /
2. /card
3. /profile
4. /works
5. /links
6. /contact
7. /services

Important:
- /card should be the first practically usable release target because it will be used on the business card QR code

Future-ready:
- keep the link-card UI reusable so Amazon affiliate links can later be added naturally
- do not make the site feel like an ad site
- prefer a structure that supports curated recommendations rather than aggressive monetization
```

## Workspace Note

All web-related work for this project should now be managed under `C:\Menu\tool\codex\sukidukinn_web`.
