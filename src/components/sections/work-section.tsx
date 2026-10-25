import Image from "next/image";
import Link from "next/link";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

import type { Locale } from "@/i18n/config";
import type { HomeCopy } from "@/data/home";

type WorkSectionProps = {
  locale: Locale;
  copy: HomeCopy["work"];
};

const toneClasses = {
  light: "bg-[#f4f5ef]",
  sage: "bg-[#e8edde]",
  dark: "bg-[#151714]",
};

export function WorkSection({ locale, copy }: WorkSectionProps) {
  const Arrow = locale === "ar" ? FiArrowUpLeft : FiArrowUpRight;

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">{copy.eyebrow}</p>
            <h2 className="section-title">{copy.title}</h2>
          </div>
          <div className="flex flex-col gap-5 lg:items-end">
            <p className="section-copy !mt-0 lg:max-w-xl">{copy.description}</p>
            <Link href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold">
              {copy.viewAll}
              <Arrow className="transition-transform group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className={`group relative isolate overflow-hidden rounded-[2.2rem] border border-black/5 ${toneClasses[item.tone]} ${index === 0 ? "min-h-[560px] lg:col-span-7 lg:row-span-2 lg:min-h-[660px]" : "min-h-[320px] lg:col-span-5"}`}
            >
              {index === 0 && (
                <Image
                  src="/assets/backgrounds/grid-dots-light.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="pointer-events-none absolute -start-16 top-8 -z-10 w-72 opacity-30"
                />
              )}

              <div className="relative z-20 max-w-lg p-6 sm:p-8 lg:p-9">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] ${item.tone === "dark" ? "border-white/15 bg-white/5 text-white/55" : "border-black/8 bg-white/55 text-muted-foreground"}`}>
                    {item.category}
                  </span>
                  <span className={`text-xs font-semibold ${item.tone === "dark" ? "text-white/30" : "text-foreground/20"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={`mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl ${item.tone === "dark" ? "text-white" : ""}`}>
                  {item.title}
                </h3>
                <p className={`mt-4 max-w-md text-sm leading-7 sm:text-base ${item.tone === "dark" ? "text-white/62" : "text-muted-foreground"}`}>
                  {item.description}
                </p>
              </div>

              <div className={`relative z-10 ${index === 0 ? "h-[340px] sm:h-[420px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[430px]" : "h-[250px] lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[54%]"}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.035] ${index === 0 ? "object-bottom lg:p-6" : "object-bottom lg:object-center lg:p-4"}`}
                />
              </div>

              <div className={`pointer-events-none absolute -bottom-20 -end-16 -z-0 size-56 rounded-full blur-3xl ${item.tone === "dark" ? "bg-accent/10" : "bg-accent/25"}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
