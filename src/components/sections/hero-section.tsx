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
    <section className="relative isolate overflow-hidden pb-10 pt-28 sm:pt-32 lg:min-h-[96svh] lg:pb-16 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(135deg,#f7faf8_0%,#eff7f5_65%,#e1f0ea_100%)]" />
      <Image
        src="/assets/backgrounds/section-orbit-light.svg"
        alt=""
        width={1200}
        height={900}
        priority
        className="pointer-events-none absolute -end-[26rem] -top-[15rem] -z-20 hidden w-[74rem] max-w-none opacity-70 lg:block"
      />
      <Image
        src="/assets/backgrounds/grid-dots-light.svg"
        alt=""
        width={400}
        height={400}
        className="pointer-events-none absolute start-0 top-24 -z-20 w-64 opacity-35 sm:w-80"
      />
      <Image
        src="/assets/backgrounds/soft-sage-blob.png"
        alt=""
        width={640}
        height={640}
        className="pointer-events-none absolute end-[8%] top-[16%] -z-10 w-[28rem] opacity-45 blur-[1px] sm:w-[38rem]"
      />

      <div className="site-container">
        <div className="grid min-h-[68svh] items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-4">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 px-3.5 py-2 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur">
              <span className="size-2 rounded-full bg-accent-strong" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="mt-6 max-w-[11.5ch] text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[0.93] tracking-[-0.07em]">
              {hero.title}{" "}
              <span className="relative inline">
                <span className="relative z-10">{hero.highlight}</span>
                <span className="absolute inset-x-[-0.04em] bottom-[0.03em] -z-0 h-[0.22em] rotate-[-1deg] rounded-full bg-accent/80" />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-[0_10px_30px_rgba(17,17,17,0.14)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(17,17,17,0.18)]"
              >
                {hero.primary}
                <Arrow className="transition-transform group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center rounded-full border border-border bg-white/80 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white"
              >
                {hero.secondary}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[520px] lg:min-h-[650px]">
            <div className="absolute inset-[8%_2%_6%_8%] rounded-[4rem] bg-[radial-gradient(circle_at_center,rgba(231,240,107,0.22),rgba(238,240,230,0.45)_38%,transparent_72%)] blur-2xl" />
            <div className="absolute start-[4%] top-[13%] z-10 rounded-full border border-white/70 bg-white/70 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm backdrop-blur">
              Leads → Properties → Sales
            </div>
            <div className="absolute bottom-[12%] end-[2%] z-10 hidden rounded-[1.25rem] border border-white/80 bg-white/72 p-4 shadow-[0_18px_45px_rgba(17,17,17,0.08)] backdrop-blur sm:block">
              <div className="text-2xl font-semibold tracking-[-0.04em]">01</div>
              <div className="mt-1 text-xs text-muted-foreground">One CRM for your real estate team.</div>
            </div>
            <Image
              src="/assets/mockups/dashboard-devices-mockup.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-contain drop-shadow-[0_36px_55px_rgba(17,17,17,0.12)]"
            />
          </div>
        </div>

        <div className="relative z-10 -mt-1 grid overflow-hidden rounded-[1.8rem] border border-border/90 bg-white/92 shadow-[0_20px_55px_rgba(17,17,17,0.05)] backdrop-blur sm:grid-cols-3 lg:-mt-5">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="relative px-6 py-5 sm:px-7 sm:py-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-e"
            >
              <span className="absolute end-5 top-5 text-[0.65rem] font-semibold text-foreground/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{item.value}</div>
              <div className="mt-1 max-w-[16rem] text-sm leading-6 text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/assets/backgrounds/line-curves-light.svg"
        alt=""
        width={1000}
        height={600}
        className="pointer-events-none absolute -bottom-48 start-1/2 -z-20 w-[90rem] max-w-none -translate-x-1/2 opacity-45"
      />
    </section>
  );
}
