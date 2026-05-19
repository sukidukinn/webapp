# Workspace Rules

This thread must operate only inside:

- `C:\Menu\tool\codex\sukidukinn_web`

Do not read, create, update, move, or delete files outside this directory tree.
Do not use sibling folders such as `C:\Menu\tool\codex\kaigos`.
Treat `C:\Menu\tool\codex\sukidukinn_web` as the only valid workspace root for this thread.

## Project Split

- `sukidukinn.com`: official site, portfolio, business-card QR landing page, work/contact entry point
- `sukidukinn.blog`: separate activity log, hobby posting space, experimental publishing space

## Priorities

- lightweight
- simple
- trustworthy
- mobile-first
- easy-to-read code
- clear external link guidance
- static pages first

## Avoid

- heavy effects
- autoplay audio
- unnecessary dependencies
- complex state
- DB/API/member/payment features in the first release
- strong Vercel lock-in

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Data

- links: `data/links.ts`
- works: `data/works.ts`
- profile: `data/profile.ts`
