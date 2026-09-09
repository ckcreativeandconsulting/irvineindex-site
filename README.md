# Irvine Index

Irvine Index is a local business directory MVP for Irvine, CA. It is owned by Charles Kang and built for a 90-day kill/keep test.

All seeded businesses in `data/listings.json` are **SAMPLE listings**. They are fictional, use `example.com` websites, and use fake `(949) 555-01xx` phone numbers. Do not treat them as real business data.

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

- `/` home page with Irvine headline, search, top categories, featured sample listings, and business CTA
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
  "name": "Sample Business",
  "slug": "sample-business",
  "category": "restaurants",
  "description": "Short local description.",
  "neighborhood": "Woodbridge",
  "phone": "(949) 555-0128",
  "website": "https://example.com/sample-business",
  "hours": "Hours to be confirmed",
  "featured": false
}
```

Use category slugs from `data/categories.json`. Keep phone numbers fake for sample data, or verify real listings before publishing.

## Business Submissions

The `/submit` form posts to `/api/submissions` and appends submissions to `data/submissions.json` when running locally. Review submissions manually, then copy approved businesses into `data/listings.json`.

On serverless hosts, writing to local JSON may not persist. For the MVP, this is fine for local validation; later it can be replaced with a free database or form backend if demand is proven.

## SEO And Domain Setup

The app reads:

- `SITE_NAME`, defaulting to `Irvine Index`
- `SITE_URL`, defaulting to `https://irvineindex.com`

For local development, no env vars are required. Before deployment, set:

```bash
SITE_NAME="Irvine Index"
SITE_URL="https://irvineindex.com"
```

When Charles is ready to deploy, use free options only unless he asks otherwise. Vercel's free tier is a good fit for this stack. Do not buy domains, paid hosting, ads, or paid APIs during the test.

## Outbound Click Tracking Stub

External website links include `data-track-outbound`. `components/ClickTracker.tsx` listens for those clicks and logs an `outbound_click` event to the browser console.

This is intentionally a no-cost analytics stub. It can later be swapped for first-party logging or a free analytics tool.

## 90-Day Kill/Keep Metrics

Track these manually or with free analytics:

- Sessions: Are Irvine residents finding the site?
- Listing count: Are real businesses being added or claimed?
- Outbound clicks: Are visitors clicking through to business websites?
- Submission quality: Are submissions complete and relevant to Irvine?
- Category demand: Which categories get searches, clicks, or submissions?

Suggested keep threshold: keep iterating if the site gets repeat local traffic, a growing base of verified Irvine listings, and measurable outbound clicks without paid ads.

Suggested kill threshold: pause or reposition if traffic, submissions, and outbound clicks stay flat after consistent organic distribution.

## Scope Notes

This MVP is Irvine-only. The code keeps site and city config centralized in `lib/site.ts` so a later Tri-Valley sibling can be added without rewriting the directory model, but no multi-city UI is included.

Out of scope: payments, auth, scraping, multi-city UI, paid services, paid ads, and paid APIs.
