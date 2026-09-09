import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ListingCard } from "@/components/ListingCard";
import { categories, getCategory, getListingsByCategory } from "@/lib/directory";
import { SITE_CONFIG } from "@/lib/site";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategory(params.category);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} in Irvine, CA`,
    description: `${category.description} Browse ${category.name.toLowerCase()} sample listings on Irvine Index.`
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const categoryListings = getListingsByCategory(category.slug);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link className="text-sm font-semibold text-coast hover:text-ink" href={`/${SITE_CONFIG.city.slug}`}>
        Back to categories
      </Link>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-clay">Irvine, CA</p>
          <h1 className="mt-2 text-4xl font-semibold text-ink">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72">{category.description}</p>
        </div>
        <Link className="inline-flex h-11 items-center justify-center rounded bg-ink px-4 font-semibold text-white hover:bg-sage" href="/submit">
          Add a listing
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryListings.map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </div>
    </section>
  );
}
