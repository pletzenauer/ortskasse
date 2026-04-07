@AGENTS.md

# Ortskasse

## Project
Subscription-based "buy local" membership platform for DACH villages. Residents pay 9.90-24.90/month for 15-25% discounts at all local businesses.

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind CSS)
- Prisma 6 + PostgreSQL
- Mollie (SEPA-native payment processing)
- Docker + Caddy (deployment)
- Hetzner VPS (46.225.12.180)

## Key Architecture Decisions
- No payment license needed: identification-based, not payment-based. Never add wallet/stored-value features.
- Prisma 6 (not 7): standard @prisma/client imports
- Mollie over Stripe: SEPA-native, lower EU fees

## Important Paths
- /src/app/kasse/page.tsx — Business checkout screen (core UX)
- /src/app/registrieren/page.tsx — Subscriber registration
- /src/app/m/[token]/page.tsx — Member verification (QR/NFC target)
- /src/app/api/webhooks/mollie/route.ts — Payment lifecycle
- /prisma/schema.prisma — Database schema
- /docs/pitch/ — Pitch materials

## Commands
- npm run dev — Start dev server
- npm run build — Production build
- npx prisma generate — Regenerate Prisma client
- npx prisma db push — Push schema to database
- npx tsx prisma/seed.ts — Seed demo data
