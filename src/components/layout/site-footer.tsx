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
          <Link href={`/${locale}`} className="text-xl font-black tracking-tight text-[#153f35]">Solly<span className="font-medium text-[#1f886e]">CRM</span></Link>
          <p className="text-sm text-muted-foreground">{copy.line}</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Solly CRM. {copy.rights}</p>
        </div>
      </div>
    </footer>
  );
}
