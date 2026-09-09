import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import type { Listing } from "@/lib/types";
import { getCategoryName } from "@/lib/directory";
import { SITE_CONFIG } from "@/lib/site";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="rounded border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-clay">{getCategoryName(listing.category)}</p>
          <h3 className="mt-2 text-lg font-semibold text-ink">
            <Link href={`/${SITE_CONFIG.city.slug}/listings/${listing.slug}`} className="hover:text-coast">
              {listing.name}
            </Link>
          </h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-ink/72">{listing.description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-ink/70">
        <span className="inline-flex items-center gap-1">
          <MapPin size={15} aria-hidden="true" />
          {listing.neighborhood}
        </span>
        <span className="inline-flex items-center gap-1">
          <Phone size={15} aria-hidden="true" />
          {listing.phone}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <Link className="text-sm font-semibold text-coast hover:text-ink" href={`/${SITE_CONFIG.city.slug}/listings/${listing.slug}`}>
          View listing
        </Link>
        <a
          className="inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-coast"
          href={listing.website}
          data-track-outbound={listing.slug}
          rel="noreferrer"
          target="_blank"
        >
          Website <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

