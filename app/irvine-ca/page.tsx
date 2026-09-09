import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getListingsByCategory } from "@/lib/directory";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Irvine Business Categories",
  description: "Browse Irvine Index sample business categories for Irvine, CA."
};

export default function CategoryIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-clay">Irvine categories</p>
      <h1 className="mt-2 text-4xl font-semibold text-ink">Browse Irvine business categories</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72">
        These category pages are seeded with sample listings for the local MVP test.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = getListingsByCategory(category.slug).length;

          return (
            <Link key={category.slug} className="rounded border border-ink/10 bg-white p-5 shadow-sm hover:shadow-soft" href={`/${SITE_CONFIG.city.slug}/${category.slug}`}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold text-ink">{category.name}</h2>
                <ArrowRight size={18} className="text-coast" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/68">{category.description}</p>
              <p className="mt-4 text-sm font-semibold text-sage">{count} sample listings</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
