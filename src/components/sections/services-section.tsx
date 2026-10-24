import Image from "next/image";

import type { HomeCopy } from "@/data/home";

type ServicesSectionProps = {
  copy: HomeCopy["services"];
};

export function ServicesSection({ copy }: ServicesSectionProps) {
  return (
    <section id="services" className="section-spacing scroll-mt-24">
      <div className="site-container">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="section-kicker">{copy.eyebrow}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-copy">{copy.description}</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {copy.items.map((item, index) => (
            <article key={item.title} className="group rounded-[1.75rem] border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(17,17,17,0.07)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="relative size-12">
                  <Image src={`/assets/icons/services/${item.icon}.svg`} alt="" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
