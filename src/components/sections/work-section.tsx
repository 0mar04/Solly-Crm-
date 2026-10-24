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
    <section id="projects" className="section-spacing scroll-mt-24">
      <div className="site-container">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="section-kicker">{copy.eyebrow}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-copy">{copy.description}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-black/5 ${toneClasses[item.tone]} ${index === 0 ? "lg:col-span-7 lg:min-h-[560px]" : "lg:col-span-5 lg:min-h-[272px]"}`}
            >
              <div className="relative z-10 max-w-md p-6 sm:p-8">
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${item.tone === "dark" ? "text-white/55" : "text-muted-foreground"}`}>{item.category}</p>
                <h3 className={`mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${item.tone === "dark" ? "text-white" : ""}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 sm:text-base ${item.tone === "dark" ? "text-white/65" : "text-muted-foreground"}`}>{item.description}</p>
              </div>
              <div className={`relative ${index === 0 ? "h-[340px] lg:absolute lg:inset-x-0 lg:bottom-0" : "h-[250px] lg:absolute lg:inset-y-0 lg:end-0 lg:w-[48%]"}`}>
                <Image src={item.image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain object-bottom p-4 transition-transform duration-500 group-hover:scale-[1.025]" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold">
            {copy.viewAll}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
