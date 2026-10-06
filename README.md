# PulseBoard — Personalized Content Dashboard

A production-style frontend assignment implementation focused on clean architecture, polished UI engineering, motion, state management, API integration and testing.

## Assignment coverage

- Personalized category preferences persisted in localStorage.
- News API integration with safe server-side API key handling and mock fallback.
- TMDB recommendation integration with mock fallback.
- Social feed mock API plus SSE stream endpoint for real-time updates.
- Unified interactive cards with images, descriptions and CTAs.
- Pagination / Load More.
- Responsive sidebar + top header + account controls.
- Personalized feed, Trending and Favorites views.
- Debounced global search.
- Framer Motion card transitions and hover interactions.
- Drag/reorder with Framer Motion Reorder.
- Dark mode using CSS variables + Tailwind.
- Redux Toolkit + async thunk.
- LocalStorage session persistence.
- Unit tests, integration-oriented reducer tests and Playwright E2E.

## Optional bonus features included

- Mock authentication / sign-in and profile identity.
- Real-time SSE social stream endpoint.
- English + Tamil language switching with react-i18next.
- Profile/account controls.

## Extra features

- Feed match score and personalization stats.
- Compact/comfortable feed density setting.
- Notification preference.
- Command shortcut visual affordance.
- Privacy-first API key handling.
- Graceful API fallback so the app still works without keys.
- Empty, error and loading states.
- Accessible labels and keyboard-friendly controls.
- Favorite reading list.
- Smooth layout animation and image hover treatment.

## Architecture

```text
app/
  api/                 # Server-side integrations and SSE
  __tests__/           # Unit/integration-oriented tests
  page.tsx             # Thin page orchestration
components/
  dashboard/           # Feed cards, stats and content presentation
  layout/              # Shell, header, sidebar, providers
  settings/            # Preferences UI
  ui/                  # Reusable primitives
hooks/                 # Reusable React hooks
lib/                   # Storage + mock/domain utilities
store/
  slices/              # Redux Toolkit state domains
types/                 # Shared TypeScript domain models
e2e/                   # Playwright critical user flows
```

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Optional API keys

`NEWS_API_KEY` enables NewsAPI. `TMDB_API_KEY` enables TMDB. The app falls back to curated local data when keys are absent or an upstream API fails.

## Quality checks

```bash
npm run typecheck
npm test
npm run build
npm run e2e
```

## Submission checklist

1. Push the repository to GitHub.
2. Add a clear commit history.
3. Deploy to Vercel/another host for a live link.
4. Record a short demo video covering preferences, search, drag/reorder, favorites, dark mode, API fallback and bonus features.

## Note about verification in this environment

The project source has been statically checked for syntax. Dependency installation was attempted, but the package registry request timed out in the execution environment, so a full `next build` could not be completed here. Run the quality commands above after `npm install` locally/CI.
