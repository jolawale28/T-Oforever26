# T'O Forever '26

A wedding celebration website for Temitope and Oladele, taking place on **05 December 2026** in Abeokuta, Nigeria. The site shares the couple's story and wedding details, displays a photo gallery and gift wishes, and lets guests submit an RSVP.

## Features

- Wedding invitation landing page with the couple's story, celebration details, and countdown
- Responsive photo gallery with automatic slide changes and previous/next controls
- Gift wish list and bank gift details
- RSVP form backed by a Neon database
- Paginated attendee list at `/attendees`
- Background music control

## Tech Stack

- [Next.js](https://nextjs.org) 16 with the App Router
- [React](https://react.dev) 19 and [TypeScript](https://www.typescriptlang.org/)
- [Neon](https://neon.tech/) serverless PostgreSQL for RSVP submissions
- [Lucide](https://lucide.dev/) icons
- CSS and Tailwind CSS 4

## Getting Started

### Requirements

- Node.js and npm
- A Neon PostgreSQL database for RSVP submissions and attendee records

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL=your_neon_postgresql_connection_string
NEXT_SITE_URL=http://localhost:3000
```

`DATABASE_URL` is required by the RSVP and attendee database actions. The database must have an `attendance_confirmation_tb` table with the columns used by the app: `id`, `fullname`, `email`, `phone`, `will_attend`, `family_category`, `message`, and `created_at`. `NEXT_SITE_URL` sets the canonical and social metadata base URL; use the deployed site URL in production.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Serve the production build
npm run lint   # Run ESLint
```

## Project Structure

- `app/page.tsx` — Main wedding invitation page
- `app/components/` — Interactive UI, including RSVP, gallery, header, and music controls
- `app/lib/actions/submissions.ts` — RSVP submission and attendee queries
- `app/lib/db.ts` — Neon database connection
- `app/attendees/page.tsx` — Paginated attendee records
- `app/globals.css` — Site styles and responsive layouts
- `public/images/` and `public/audio/` — Gallery photos, favicon, and background music

## Production

Build and start the production server with:

```bash
npm run build
npm run start
```

Set `NEXT_SITE_URL` to the public site URL and configure `DATABASE_URL` in the deployment environment. The app can be deployed to [Vercel](https://vercel.com/) or another platform that supports Next.js.
