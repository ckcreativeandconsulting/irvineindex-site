import Link from "next/link";
import { ArrowRight, Building, ClipboardPenLine, MapPin, MousePointerClick } from "lucide-react";
import { ClickTracker } from "@/components/ClickTracker";
import { ListingCard } from "@/components/ListingCard";
import { SearchDirectory } from "@/components/SearchDirectory";
import { categories, getFeaturedListings, getTopCategories, listings } from "@/lib/directory";
import { SITE_CONFIG } from "@/lib/site";

export default function HomePage() {
  const featuredListings = getFeaturedListings();
  const topCategories = getTopCategories();

  return (
    <>
      <ClickTracker />
      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded bg-coast/10 px-3 py-1 text-sm font-semibold text-coast">
              <MapPin size={16} aria-hidden="true" />
              Irvine, California only
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Find useful Irvine businesses by neighborhood and category.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
              Irvine Index is a lean local directory MVP for the next 90 days: sample listings now, real Irvine submissions next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex h-12 items-center justify-center gap-2 rounded bg-ink px-5 font-semibold text-white hover:bg-sage" href="#search">
                Search listings <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="inline-flex h-12 items-center justify-center gap-2 rounded border border-ink/15 bg-white px-5 font-semibold text-ink hover:bg-paper" href="/submit">
                <ClipboardPenLine size={18} aria-hidden="true" />
                List a business
              </Link>
            </div>
          </div>
          <div className="grid content-start gap-4 rounded border border-ink/10 bg-paper p-5 shadow-sm">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded bg-white p-4">
                <p className="text-2xl font-semibold text-ink">{categories.length}</p>
                <p className="mt-1 text-sm text-ink/65">Categories</p>
              </div>
              <div className="rounded bg-white p-4">
                <p className="text-2xl font-semibold text-ink">{listings.length}</p>
                <p className="mt-1 text-sm text-ink/65">Samples</p>
              </div>
              <div className="rounded bg-white p-4">
                <p className="text-2xl font-semibold text-ink">90</p>
                <p className="mt-1 text-sm text-ink/65">Day test</p>
              </div>
            </div>
            <div className="rounded bg-white p-5">
              <div className="flex items-center gap-2 font-semibold text-ink">
                <MousePointerClick size={18} aria-hidden="true" />
                Kill/keep signals
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/68">
                Track sessions, submitted listings, claimed updates, and outbound clicks before adding paid services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-clay">Top categories</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">Start with everyday Irvine searches</h2>
          </div>
          <Link className="hidden text-sm font-semibold text-coast hover:text-ink sm:inline-flex" href={`/${SITE_CONFIG.city.slug}`}>
            View all categories
          </Link>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topCategories.map((category) => (
            <Link key={category.slug} className="rounded border border-ink/10 bg-white p-5 shadow-sm hover:shadow-soft" href={`/${SITE_CONFIG.city.slug}/${category.slug}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-ink">{category.name}</h3>
                <span className="rounded bg-sage/12 px-2 py-1 text-xs font-semibold text-sage">{category.count} listings</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/68">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase text-clay">
            <Building size={17} aria-hidden="true" />
            Founding listings
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">Featured sample businesses</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <SearchDirectory listings={listings} />

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded border border-ink/10 bg-ink p-6 text-white sm:p-8">
          <h2 className="text-2xl font-semibold">Own or manage an Irvine business?</h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Submit a listing for review. During the MVP test, submissions are saved locally so Charles can validate demand before adding paid tools.
          </p>
          <Link className="mt-6 inline-flex h-11 items-center gap-2 rounded bg-citrus px-4 font-semibold text-ink hover:bg-white" href="/submit">
            Submit listing <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
