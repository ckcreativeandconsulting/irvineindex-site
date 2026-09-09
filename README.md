# Irvine Index

Irvine Index is a local business directory for Irvine, CA. It is owned by Charles Kang and focuses on helping residents find useful restaurants, home services, medical and dental providers, shops, and other neighborhood businesses.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local JSON data in `data/listings.json`, `data/categories.json`, and `data/submissions.json`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To confirm a production build:

```bash
npm run build
```

## Core Routes

- `/` home page with Irvine headline, search, top categories, listings, and business CTA
- `/irvine-ca` category index
- `/irvine-ca/restaurants`
- `/irvine-ca/home-services`
- `/irvine-ca/medical-dental`
- `/irvine-ca/listings/[slug]`
- `/submit` business submission form
- `/sitemap.xml`
- `/robots.txt`

## Add Or Edit Listings

Edit `data/listings.json`. Each listing needs:

```json
{
  "name": "Business Name",
  "slug": "business-name",
  "category": "restaurants",
  "description": "Short local description.",
  "neighborhood": "Woodbridge",
  "phone": "(949) 555-0128",
  "website": "https://example.com/business-name",
  "hours": "Hours to be confirmed",
}
```

Use category slugs from `data/categories.json`. Verify business names, phone numbers, websites, and hours before publishing public listing changes.

## Business Submissions

The `/submit` form posts to `/api/submissions` and appends submissions to `data/submissions.json` when running locally. Review submissions manually, then copy approved businesses into `data/listings.json`.

On serverless hosts, writing to local JSON may not persist. For a live submission workflow, replace this local endpoint with persistent storage or a form backend.

## SEO And Domain Setup

The app reads:

- `SITE_NAME`, defaulting to `Irvine Index`
- `SITE_URL`, defaulting to `https://irvineindex.com`

For local development, no env vars are required. Before deployment, set:

```bash
SITE_NAME="Irvine Index"
SITE_URL="https://irvineindex.com"
```

When Charles is ready to deploy, use free options only unless he asks otherwise. Vercel's free tier is a good fit for this stack. Do not buy domains, paid hosting, ads, or paid APIs unless explicitly requested.

## Outbound Click Tracking Stub

External website links include `data-track-outbound`. `components/ClickTracker.tsx` listens for those clicks and logs an `outbound_click` event to the browser console.

This is intentionally a no-cost analytics stub. It can later be swapped for first-party logging or a free analytics tool.

## Scope Notes

This site is Irvine-only. The code keeps site and city config centralized in `lib/site.ts` so a later sibling city directory can be added without rewriting the directory model, but no multi-city UI is included.

Out of scope: payments, auth, scraping, multi-city UI, paid services, paid ads, and paid APIs.


