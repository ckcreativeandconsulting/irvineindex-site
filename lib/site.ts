export const SITE_CONFIG = {
  name: process.env.SITE_NAME || "Irvine Index",
  url: process.env.SITE_URL || "https://irvineindex.com",
  owner: "Charles Kang",
  city: {
    name: "Irvine",
    state: "CA",
    slug: "irvine-ca"
  }
} as const;
