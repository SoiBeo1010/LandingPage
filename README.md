# Landing Page

Landing page built with Next.js (App Router), TypeScript, Tailwind CSS, and reusable UI components.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives

## Prerequisites

- Node.js 20+
- pnpm (recommended)

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run development server:

```bash
pnpm dev
```

3. Open in browser:

```text
http://localhost:3000
```

## Available Scripts

- `pnpm dev`: Start local development server.
- `pnpm build`: Build production bundle.
- `pnpm start`: Start app in production mode.
- `pnpm lint`: Run lint checks.

## Project Structure

```text
app/                # App Router pages and global layout
components/         # Page sections and reusable UI components
components/ui/      # Base UI primitives
hooks/              # Custom React hooks
lib/                # Shared helpers and utilities
public/             # Static assets
styles/             # Global style files
```

## Notes

- Environment variables should be stored in `.env.local`.
- Build and local artifacts are ignored via `.gitignore`.
- Project is ready to deploy on Vercel.

## Deploy to GitHub Pages

1. Push code to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. Ensure your default branch is `main` (workflow is configured for `main`).
5. Push changes to `main` or run the workflow manually from `Actions`.

The deployment workflow is located at `.github/workflows/deploy.yml`.

Notes for GitHub Pages:

- The app uses static export (`output: 'export'`) and deploys the `out/` folder.
- `NEXT_PUBLIC_BASE_PATH` is set automatically to `/<repo-name>` in CI.
- If you deploy to a user/organization root page (`<user>.github.io`), set `NEXT_PUBLIC_BASE_PATH` to an empty string in the workflow build step.