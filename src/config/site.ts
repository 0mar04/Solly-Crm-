const configuredSiteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "NINJA Software House",
  metadataBase: new URL(configuredSiteUrl),
  assets: {
    mark: "/assets/brand/ninja-mark.svg",
    wordmark: "/assets/brand/ninja-wordmark.svg",
    hero: "/assets/hero/hero-composition-crystal-devices.png",
  },
} as const;
