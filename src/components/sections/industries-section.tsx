import Image from "next/image";

import type { HomeCopy } from "@/data/home";

type IndustriesSectionProps = {
  copy: HomeCopy["industries"];
};

export function IndustriesSection({ copy }: IndustriesSectionProps) {
  return (
    <section id="industries" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-32">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div className="max-w-xl">
            <p className="section-kicker">{copy.eyebrow}</p>
            <h2 className="section-title">{copy.title}</h2>
            <p className="section-copy">{copy.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {copy.items.map((item, index) => (
              <div
                key={item}
                className="group relative min-h-36 overflow-hidden rounded-[1.45rem] border border-border bg-white p-4 shadow-[0_10px_30px_rgba(17,17,17,0.025)] sm:min-h-40"
              >
                <span className="relative z-10 max-w-[10ch] text-sm font-semibold leading-5">{item}</span>
                <span className="absolute bottom-3 end-4 text-4xl font-semibold tracking-[-0.07em] text-foreground/[0.055] transition-transform duration-300 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute -bottom-10 -end-8 size-28 rounded-full bg-accent/25 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2.3rem] border border-border/70 bg-[#e8f3ef]">
          <Image
            src="/assets/backgrounds/section-orbit-light.svg"
            alt=""
            width={1200}
            height={900}
            className="pointer-events-none absolute -end-60 -top-72 w-[60rem] opacity-35"
          />
          <div className="grid min-h-[420px] items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div className="relative z-10 max-w-lg">
              <span className="inline-flex rounded-full border border-border bg-white/70 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
                Built for property businesses
              </span>
              <p className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl">
                One platform for developers, brokers and property sales teams.
              </p>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[360px]">
              <Image
                src="/assets/decor/angular-building-cutout.png"
                alt=""
                fill
                className="object-contain object-center lg:object-end"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
