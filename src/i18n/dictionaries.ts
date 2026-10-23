import "server-only";

import type { Locale } from "@/i18n/config";

type Dictionary = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
  }>;
  foundation: Readonly<{
    badge: string;
    title: string;
    description: string;
    status: string;
    nextStep: string;
  }>;
}>;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ar: () => import("@/i18n/dictionaries/ar.json").then((module) => module.default),
  en: () => import("@/i18n/dictionaries/en.json").then((module) => module.default),
};

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
