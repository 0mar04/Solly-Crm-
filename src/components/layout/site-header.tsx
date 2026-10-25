"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import type { HomeCopy } from "@/data/home";
import type { Locale } from "@/i18n/config";

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
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="site-container">
        <div className="flex h-[84px] items-center justify-between gap-4 border-b border-black/[0.06]">
          <Link href={`/${locale}`} className="relative h-8 w-[104px] shrink-0" aria-label="NINJA home">
            <Image src="/assets/brand/ninja-wordmark.svg" alt="NINJA" fill priority className="object-contain object-start" />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-black/65 lg:flex">
            {items.map(([key, href]) => (
              <Link key={key} href={href} className="transition-colors hover:text-black">
                {copy[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`/${nextLocale}`}
              className="hidden min-w-11 items-center justify-center rounded-full px-3 py-2 text-xs font-semibold uppercase text-black/60 transition-colors hover:text-black sm:flex"
            >
              {nextLocale}
            </Link>
            <Link
              href="#contact"
              className="hidden rounded-full bg-black px-5 py-3 text-sm font-semibold text-white sm:inline-flex"
            >
              {copy.cta}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid size-10 place-items-center rounded-full border border-black/10 bg-white lg:hidden"
              aria-expanded={open}
              aria-label={copy.menu}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-black/5 bg-white p-3 shadow-lg lg:hidden">
            <nav className="grid gap-1">
              {items.map(([key, href]) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-[#f4f5ef]"
                >
                  {copy[key]}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link href={`/${nextLocale}`} className="rounded-full border border-black/10 px-4 py-2.5 text-xs font-semibold uppercase">
                  {nextLocale}
                </Link>
                <Link href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white">
                  {copy.cta}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
