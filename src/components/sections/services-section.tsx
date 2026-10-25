import Image from "next/image";

import type { HomeCopy } from "@/data/home";

type ServicesSectionProps = {
  copy: HomeCopy["services"];
};

export function ServicesSection({ copy }: ServicesSectionProps) {
  return (
    <section id="services" className="relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-12 -z-20 mx-auto h-[80%] max-w-[95rem] rounded-[3rem] bg-[#f3f5ee]" />
      <Image
        src="/assets/backgrounds/line-curves-light.svg"
        alt=""
        width={1000}
        height={600}
        className="pointer-events-none absolute -end-40 bottom-0 -z-10 w-[64rem] opacity-35"
      />

      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">{copy.eyebrow}</p>
            <h2 className="section-title">{copy.title}</h2>
          </div>
          <p className="section-copy !mt-0 lg:max-w-xl lg:justify-self-end">{copy.description}</p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/82 p-6 shadow-[0_14px_40px_rgba(17,17,17,0.035)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.075)] sm:p-7 ${index === 0 || index === 5 ? "xl:min-h-[290px]" : "xl:min-h-[250px]"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative grid size-14 place-items-center rounded-[1.1rem] border border-border/80 bg-surface">
                  <Image src={`/assets/icons/services/${item.icon}.svg`} alt="" fill className="object-contain p-1" />
                </div>
                <span className="text-[0.68rem] font-semibold tracking-[0.12em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-10 max-w-[12ch] text-2xl font-semibold tracking-[-0.04em] sm:text-[1.7rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{item.description}</p>

              <div className="pointer-events-none absolute -bottom-12 -end-10 size-28 rounded-full bg-accent/18 blur-2xl transition-transform duration-500 group-hover:scale-150" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
