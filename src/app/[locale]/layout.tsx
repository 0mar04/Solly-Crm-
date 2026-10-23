import type { Metadata } from "next";
import { Geist, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";

import { AppProviders } from "@/components/shared/app-providers";
import { siteConfig } from "@/config/site";
import { getDirection, locales } from "@/i18n/config";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

const englishFont = Geist({
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
});

const arabicFont = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return {
    metadataBase: siteConfig.metadataBase,
    title: {
      default: dictionary.metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dictionary.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      url: `/${locale}`,
    },
    twitter: {
      card: "summary",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: siteConfig.assets.mark,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${englishFont.variable} ${arabicFont.variable}`}
    >
      <body className="min-h-dvh">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
