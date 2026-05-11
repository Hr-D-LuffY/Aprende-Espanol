# Aprende Español

A personal Spanish study dashboard. Verb conjugations, vocabulary, grammar, and daily phrases — organized by CEFR level, pulled live from Supabase.

Not a course platform. Just a clean, fast reference tool built for my own study sessions.

**Live →** [aprendeespanol-hr.vercel.app](https://aprendeespanol-hr.vercel.app)

---

## What's inside

- **A1 Foundation** — Spanish alphabet, pronunciation guide, and the building blocks to get started
- **Daily Phrases** — common expressions for real conversations
- **Verbs** — full conjugation tables, filterable by category (regular, GO verbs, stem-changing, spelling-change, irregular)
- **Vocabulary** — words grouped by topic
- **Grammar** — rules and notes by section (ser/estar, negation, gustar, etc.)
- **Level Roadmap** — content mapped to A1 → C2 CEFR levels

---

## Stack

| | |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Routing | React Router v6 |
| Deployment | Vercel |

---

## Design

Two themes — togglable at any time.

**Dark** — Zinc & Amber. Near-black background (`#09090b`), amber accent (`#f59e0b`). The default.

**Light** — Sage & Amber. Warm parchment background (`#f8f5e4`), same amber accent (`#f79c1d`) with sage green as a supporting tone.

Typography is split between two families — `DM Mono` for all UI, labels, and body text; `Lora` (serif) for headings. No shadows, no gradients, no icon libraries. Hover states are the only interaction feedback.
