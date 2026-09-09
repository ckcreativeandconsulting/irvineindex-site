"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import type { Listing } from "@/lib/types";

type SearchDirectoryProps = {
  listings: Listing[];
};

export function SearchDirectory({ listings }: SearchDirectoryProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return listings;
    }

    return listings.filter((listing) =>
      [listing.name, listing.description, listing.neighborhood, listing.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [listings, query]);

  return (
    <section id="search" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-clay">Search Irvine</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">Find sample listings by name, category, or neighborhood</h2>
        </div>
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search listings</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" size={18} aria-hidden="true" />
          <input
            className="h-12 w-full rounded border border-ink/15 bg-white pl-10 pr-3 text-ink shadow-sm"
            placeholder="Try Woodbridge or dental"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.slice(0, 9).map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </div>
      <p className="mt-5 text-sm text-ink/60">
        Showing {Math.min(results.length, 9)} of {results.length} matching sample listings.
      </p>
    </section>
  );
}
