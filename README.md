# Spanish·notes

A personal Spanish language study dashboard. Verb conjugations, vocabulary, and grammar rules — organized by CEFR level and pulled live from Supabase.

---

## What it is

A personal tool for studying Spanish. Not a course platform — just a clean, fast reference app. Content lives entirely in Supabase. Add a row to the database, it shows up in the app instantly. No code changes, no redeployment needed.

---

## Tech Stack

| Layer          | Tool                  |
| -------------- | --------------------- |
| Frontend       | React + Vite          |
| Styling        | Tailwind CSS          |
| Database & API | Supabase (PostgreSQL) |
| Routing        | React Router v6       |
| Deployment     | Vercel                |

---

## Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx          # Dashboard, level roadmap, quick jump
│   ├── VerbsPage.jsx         # Verb conjugations, filterable by category
│   ├── VocabularyPage.jsx    # Vocabulary by topic
│   ├── GrammarPage.jsx       # Grammar rules by section
│   ├── FlashcardsPage.jsx    # Flip cards for vocab review
│   └── AlphabetPage.jsx      # Spanish alphabet reference
├── components/
│   ├── Navbar.jsx            # Sticky nav with active route highlight
│   ├── VerbCard.jsx          # Verb name, meaning, yo form, example
│   ├── ConjugationTable.jsx  # Full 6-form conjugation table
│   ├── GrammarRule.jsx       # Colored rule block (tip / rule / warning)
│   ├── FlashCard.jsx         # Flippable vocabulary card
│   ├── Sidebar.jsx           # Section navigation
│   └── ProgressBar.jsx       # Study progress via localStorage
├── lib/
│   └── supabase.js           # Supabase client setup
├── App.jsx
└── main.jsx
```

---

## Database Tables (Supabase)

### `verbs`

| Column     | Type | Notes                                                                        |
| ---------- | ---- | ---------------------------------------------------------------------------- |
| id         | int  | Primary key                                                                  |
| name       | text | e.g. `hablar`                                                                |
| meaning    | text | e.g. `to speak`                                                              |
| type       | text | `AR` / `ER` / `IR`                                                           |
| category   | text | `regular` / `go-verb` / `spelling-change` / `stem-ie` / `stem-ue` / `stem-i` |
| yo         | text | Conjugated form                                                              |
| tu         | text | Conjugated form                                                              |
| el         | text | Conjugated form                                                              |
| nosotros   | text | Conjugated form                                                              |
| vosotros   | text | Conjugated form                                                              |
| ellos      | text | Conjugated form                                                              |
| example_es | text | Example sentence in Spanish                                                  |
| example_en | text | Example sentence in English                                                  |

### `vocabulary`

| Column     | Type | Notes                                |
| ---------- | ---- | ------------------------------------ |
| id         | int  | Primary key                          |
| spanish    | text | e.g. `amigo`                         |
| english    | text | e.g. `friend`                        |
| topic      | text | e.g. `greetings` / `family` / `food` |
| example_es | text |                                      |
| example_en | text |                                      |

### `grammar_rules`

| Column  | Type | Notes                                    |
| ------- | ---- | ---------------------------------------- |
| id      | int  | Primary key                              |
| title   | text | e.g. `Ser vs Estar`                      |
| body    | text | Rule explanation                         |
| type    | text | `tip` / `rule` / `warning`               |
| section | text | e.g. `ser-estar` / `negation` / `gustar` |

---

## Routes

| Path          | Page                                                  |
| ------------- | ----------------------------------------------------- |
| `/`           | Home dashboard                                        |
| `/alphabet`   | Spanish alphabet reference                            |
| `/verbs`      | All verbs — filter with `?category=regular` etc.      |
| `/vocabulary` | Vocabulary — filter with `?topic=family` etc.         |
| `/grammar`    | Grammar rules — filter with `?section=ser-estar` etc. |
| `/flashcards` | Flashcard review mode                                 |

---

## CEFR Level Roadmap

| Level | Label              | Key topics                                                              |
| ----- | ------------------ | ----------------------------------------------------------------------- |
| A1    | Beginner           | Greetings, numbers, basic questions, ser/estar                          |
| A2    | Elementary         | Regular verbs, reflexive verbs, family & food vocab, negation           |
| B1    | Intermediate       | Stem-changing verbs, GO verbs, preterite, gustar                        |
| B2    | Upper-Intermediate | Subjunctive, spelling-change verbs, advanced vocab                      |
| C1    | Advanced           | Complex subjunctive, conditional perfect, idioms, formal register       |
| C2    | Mastery            | Regional dialects, literary Spanish, nuanced tenses, native-level vocab |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://
github.com/Hr-D-LuffY/Spanish-Note-Web.git
cd es-notes
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Find these in your Supabase project under **Settings → API**.

### 4. Set up Supabase client

```js
// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 5. Run locally

```bash
npm run dev
```

---

## Adding Content

No code needed. Just insert rows directly in Supabase:

- **New verb** → insert a row in the `verbs` table with all conjugation columns filled
- **New vocabulary word** → insert a row in `vocabulary` with a `topic` value
- **New grammar rule** → insert a row in `grammar_rules` with the right `section` value

The app fetches live from Supabase on every page load.

---

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel → Project Settings → Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy — Vercel auto-detects Vite

---

## Design

- **Theme:** Zinc & Amber — dark background (`#09090b`), amber accent (`#f59e0b`)
- **Font:** Monospace throughout (`font-mono`)
- **Styling:** Tailwind CSS utility classes only — no CSS files, no CSS-in-JS
- See project theme summary for full color reference and design rules

---
