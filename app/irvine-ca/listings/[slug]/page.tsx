import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { ClickTracker } from "@/components/ClickTracker";
import { getCategoryName, getListing, listings } from "@/lib/directory";
import { SITE_CONFIG } from "@/lib/site";

type ListingPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export function generateMetadata({ params }: ListingPageProps): Metadata {
  const listing = getListing(params.slug);

  if (!listing) {
    return {};
  }

  return {
    title: `${listing.name} in ${listing.neighborhood}, Irvine`,
    description: `${listing.description} Listing in ${listing.neighborhood}, Irvine, CA.`
  };
}

export default function ListingPage({ params }: ListingPageProps) {
  const listing = getListing(params.slug);

  if (!listing) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: listing.name,
    description: listing.description,
    telephone: listing.phone,
    url: `${SITE_CONFIG.url}/${SITE_CONFIG.city.slug}/listings/${listing.slug}`,
    areaServed: {
      "@type": "City",
      name: "Irvine"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irvine",
      addressRegion: "CA",
      addressCountry: "US"
    }
  };

  return (
    <>
      <ClickTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link className="text-sm font-semibold text-coast hover:text-ink" href={`/${SITE_CONFIG.city.slug}/${listing.category}`}>
          Back to {getCategoryName(listing.category)}
        </Link>
        <div className="mt-6 rounded border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-clay">{getCategoryName(listing.category)}</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-4xl font-semibold text-ink">{listing.name}</h1>
            {listing.featured ? <span className="w-fit rounded bg-citrus/15 px-3 py-1 text-sm font-semibold text-ink">Founding listing</span> : null}
          </div>
          <p className="mt-5 text-lg leading-8 text-ink/72">{listing.description}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded bg-paper p-4">
              <dt className="flex items-center gap-2 text-sm font-semibold text-ink">
                <MapPin size={17} aria-hidden="true" />
                Neighborhood
              </dt>
              <dd className="mt-2 text-ink/72">{listing.neighborhood}</dd>
            </div>
            <div className="rounded bg-paper p-4">
              <dt className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Phone size={17} aria-hidden="true" />
                Phone
              </dt>
              <dd className="mt-2 text-ink/72">{listing.phone}</dd>
            </div>
            <div className="rounded bg-paper p-4">
              <dt className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Clock size={17} aria-hidden="true" />
                Hours
              </dt>
              <dd className="mt-2 text-ink/72">{listing.hours}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded bg-coast px-4 font-semibold text-white hover:bg-ink"
              href={listing.website}
              data-track-outbound={listing.slug}
              rel="noreferrer"
              target="_blank"
            >
              Visit website <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link className="inline-flex h-11 items-center justify-center rounded border border-ink/15 px-4 font-semibold text-ink hover:bg-paper" href={`/submit?claim=${listing.slug}`}>
              Claim or update this listing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

