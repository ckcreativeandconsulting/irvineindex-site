import type { Metadata } from "next";
import Link from "next/link";
import { Building2, PlusCircle, Search } from "lucide-react";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Irvine local business directory`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description:
    "Irvine Index is a local directory for discovering Irvine, CA businesses by category and neighborhood.",
  openGraph: {
    title: SITE_CONFIG.name,
    description: "A local business directory for Irvine, California.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-ink/10 bg-paper/92 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2 font-semibold text-ink" aria-label="Irvine Index home">
              <span className="grid h-9 w-9 place-items-center rounded bg-coast text-white">
                <Building2 size={20} aria-hidden="true" />
              </span>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Link className="hidden rounded px-3 py-2 text-ink/75 hover:bg-ink/5 sm:inline-flex" href="/irvine-ca">
                Categories
              </Link>
              <Link className="inline-flex items-center gap-2 rounded bg-ink px-3 py-2 text-white hover:bg-sage" href="/submit">
                <PlusCircle size={16} aria-hidden="true" />
                <span>List a Business</span>
              </Link>
              <Link className="grid h-10 w-10 place-items-center rounded border border-ink/15 hover:bg-white" href="/#search" aria-label="Search listings">
                <Search size={18} aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-ink/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-ink/70 sm:grid-cols-[1fr_auto] sm:px-6 lg:px-8">
            <p>
              {SITE_CONFIG.name} is an independent local guide to Irvine businesses.
            </p>
            <div className="flex gap-4">
              <Link className="hover:text-ink" href="/irvine-ca">Categories</Link>
              <Link className="hover:text-ink" href="/submit">Submit</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


