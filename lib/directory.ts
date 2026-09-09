import categoriesJson from "@/data/categories.json";
import listingsJson from "@/data/listings.json";
import type { Category, Listing } from "@/lib/types";

export const categories = categoriesJson as Category[];
export const listings = listingsJson as Listing[];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(slug: string) {
  return getCategory(slug)?.name ?? slug;
}

export function getListingsByCategory(slug: string) {
  return listings.filter((listing) => listing.category === slug);
}

export function getHomeListings() {
  return listings.slice(0, 8);
}

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}

export function getTopCategories() {
  return categories.slice(0, 6).map((category) => ({
    ...category,
    count: getListingsByCategory(category.slug).length
  }));
}

export function searchListings(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return listings;
  }

  return listings.filter((listing) =>
    [listing.name, listing.description, listing.neighborhood, getCategoryName(listing.category)]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}


