import Image from "next/image";
import Link from "next/link";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

import type { Locale } from "@/i18n/config";
import type { HomeCopy } from "@/data/home";

type HeroSectionProps = {
  locale: Locale;
  hero: HomeCopy["hero"];
  stats: HomeCopy["stats"];
};

export function HeroSection({ locale, hero, stats }: HeroSectionProps) {
  const Arrow = locale === "ar" ? FiArrowUpLeft : FiArrowUpRight;

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:min-h-[92svh] lg:pb-20 lg:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[78%] bg-[radial-gradient(circle_at_72%_25%,rgba(215,228,79,0.18),transparent_30%),radial-gradient(circle_at_16%_5%,rgba(238,240,230,0.95),transparent_32%)]" />
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{hero.eyebrow}</p>
            <h1 className="max-w-[12ch] text-balance text-[clamp(3rem,7vw,7.4rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              {hero.title}{" "}
              <span className="relative inline">
                <span className="relative z-10">{hero.highlight}</span>
                <span className="absolute inset-x-0 bottom-[0.06em] -z-0 h-[0.26em] rounded-full bg-accent/80" />
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
                {hero.primary}
                <Arrow className="transition-transform group-hover:-translate-y-0.5" />
              </Link>
              <Link href="#projects" className="inline-flex items-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-surface">
                {hero.secondary}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-[610px]">
            <div className="absolute inset-[8%_0_0_3%] rounded-[3rem] bg-surface-muted/60 blur-3xl" />
            <Image
              src="/assets/hero/hero-composition-crystal-devices.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.7rem] border border-border bg-border sm:grid-cols-3 lg:mt-2">
          {stats.map((item) => (
            <div key={item.label} className="bg-white px-6 py-5 sm:px-7 sm:py-6">
              <div className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{item.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
