const configuredSiteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Solly CRM",
  metadataBase: new URL(configuredSiteUrl),
  assets: {
    mark: "/assets/brand/ninja-mark.svg",
    wordmark: "/assets/brand/ninja-wordmark.svg",
    hero: "/assets/mockups/dashboard-devices-mockup.png",
  },
} as const;
