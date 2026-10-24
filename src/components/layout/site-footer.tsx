import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { HomeCopy } from "@/data/home";

type SiteFooterProps = {
  locale: Locale;
  copy: HomeCopy["footer"];
};

export function SiteFooter({ locale, copy }: SiteFooterProps) {
  return (
    <footer className="pb-8 pt-4">
      <div className="site-container">
        <div className="flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/${locale}`} className="relative h-7 w-[95px]">
            <Image src="/assets/brand/ninja-wordmark.svg" alt="NINJA" fill className="object-contain object-start" />
          </Link>
          <p className="text-sm text-muted-foreground">{copy.line}</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NINJA. {copy.rights}</p>
        </div>
      </div>
    </footer>
  );
}
