import { BASE_PATH } from "./basePath";

/**
 * Canonical facts about this page: the address crawlers and share links use.
 * Origin from NEXT_PUBLIC_SITE_ORIGIN, path from NEXT_PUBLIC_BASE_PATH. Locally the base path is empty, so the
 * path falls back to the production one and the canonical still points at the live page.
 */
const DEFAULT_ORIGIN = "https://apilayer.com";
const DEFAULT_PATH = "/devtools/rental-scam-detector";

export const SITE = {
  name: "Rental Scam Detector",
  origin: (process.env.NEXT_PUBLIC_SITE_ORIGIN || DEFAULT_ORIGIN).replace(
    /\/$/,
    ""
  ),
  publicPath: BASE_PATH || DEFAULT_PATH,
  tagline: "Is this rental listing a scam?",
  description:
    "Check a rental listing before you pay a deposit. Paste the link and the tool reverse image searches every photo, then shows you where else those same pictures appear and whether the price or the address changed.",
  locale: "en_US",
} as const;

export const SITE_URL = `${SITE.origin}${SITE.publicPath}`;
