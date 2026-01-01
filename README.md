# Neothink+ Landing Page

Admin of the extraordinary values provided by the Hamilton Family and the Neothink Society.

## Tech Stack

- **Framework:** Next.js 16.1 (App Router)
- **React:** 19.2
- **Styling:** Tailwind CSS 4.1 + shadcn/ui
- **Email:** Resend
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20.9+ (required)
- pnpm, npm, or yarn

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env.local` file with:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=admin@neothink.io
ASCENDERS_EMAIL=ascenders@neothink.io
NEOTHINKERS_EMAIL=neothinkers@neothink.io
IMMORTALS_EMAIL=immortals@neothink.io
SUPERACHIEVERS_EMAIL=superachievers@neothink.io
NEXT_PUBLIC_SITE_URL=https://neothink.io
```

## Development

```bash
# Run development server with Turbopack
pnpm dev

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Build for production
pnpm build

# Start production server
pnpm start
```

## Testing

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run E2E tests
npx playwright test

# Run tests with UI
npx playwright test --ui

# Run tests in headed mode
npx playwright test --headed
```

## Project Structure

```
├── app/
│   ├── actions.ts          # Server actions (form submissions)
│   ├── error.tsx           # Error boundary
│   ├── global-error.tsx    # Global error handler
│   ├── layout.tsx          # Root layout with metadata
│   ├── not-found.tsx       # 404 page
│   ├── opengraph-image.tsx # Dynamic OG image
│   ├── page.tsx            # Home page
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── twitter-image.tsx   # Dynamic Twitter image
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── contact-form.tsx    # Contact form component
│   ├── hero.tsx            # Hero section
│   ├── member-types.tsx    # Four paths section
│   └── path-interest-modal.tsx
├── e2e/                    # Playwright E2E tests
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── llms.txt            # AI agent discoverability
└── ...config files
```

## Member Paths

- **Ascenders** (Orange) - LIVE: Prosperity through value creation
- **Neothinkers** (Amber) - LOVE: Happiness through integrated thinking
- **Immortals** (Red) - LIFE: Longevity through self-leadership
- **Superachievers** (Yellow) - LUCK: Mastery of all paths

## External Links

- **Website:** https://neothink.io
- **Community:** https://community.neothink.io
- **Mark Hamilton:** https://markhamilton.co
- **Neothink Society:** https://neothink.com

## Security

This application implements:

- HTTPS with HSTS
- XSS protection headers
- Content-Type sniffing prevention
- Clickjacking protection (X-Frame-Options)
- Strict referrer policy
- Permissions policy

## License

Proprietary - All rights reserved.
