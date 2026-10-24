"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import type { Locale } from "@/i18n/config";
import type { HomeCopy } from "@/data/home";

type SiteHeaderProps = {
  locale: Locale;
  copy: HomeCopy["nav"];
};

const items = [
  ["work", "#projects"],
  ["services", "#services"],
  ["process", "#process"],
  ["industries", "#industries"],
  ["contact", "#contact"],
] as const;

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="site-container !px-0">
        <div className="rounded-[1.35rem] border border-black/5 bg-white/85 shadow-[0_10px_35px_rgba(17,17,17,0.06)] backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:h-[4.6rem]">
            <Link href={`/${locale}`} className="relative h-8 w-[106px] shrink-0" aria-label="NINJA home">
              <Image src="/assets/brand/ninja-wordmark.svg" alt="NINJA" fill className="object-contain object-start" priority />
            </Link>

            <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/75 lg:flex">
              {items.map(([key, href]) => (
                <Link key={key} href={href} className="transition-colors hover:text-foreground">
                  {copy[key]}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href={`/${nextLocale}`}
                className="hidden h-10 min-w-10 items-center justify-center rounded-full border border-border bg-white px-3 text-xs font-semibold uppercase transition-colors hover:bg-surface sm:flex"
              >
                {nextLocale}
              </Link>
              <Link
                href="#contact"
                className="hidden rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
              >
                {copy.cta}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="grid size-10 place-items-center rounded-full border border-border bg-white lg:hidden"
                aria-expanded={open}
                aria-label={copy.menu}
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-border px-4 py-4 lg:hidden">
              <nav className="grid gap-1">
                {items.map(([key, href]) => (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-surface"
                  >
                    {copy[key]}
                  </Link>
                ))}
                <div className="mt-2 flex gap-2">
                  <Link href={`/${nextLocale}`} className="rounded-full border border-border px-4 py-2.5 text-xs font-semibold uppercase">
                    {nextLocale}
                  </Link>
                  <Link href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background">
                    {copy.cta}
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
