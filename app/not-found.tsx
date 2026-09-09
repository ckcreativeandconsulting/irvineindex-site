import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-clay">Not found</p>
      <h1 className="mt-2 text-4xl font-semibold text-ink">This Irvine Index page is not listed yet.</h1>
      <p className="mt-4 text-ink/70">Try the category index or submit a business for the local MVP.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link className="inline-flex h-11 items-center justify-center rounded bg-ink px-4 font-semibold text-white hover:bg-sage" href="/irvine-ca">
          Browse categories
        </Link>
        <Link className="inline-flex h-11 items-center justify-center rounded border border-ink/15 px-4 font-semibold text-ink hover:bg-white" href="/submit">
          Submit business
        </Link>
      </div>
    </section>
  );
}
