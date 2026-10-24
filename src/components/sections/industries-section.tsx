import Image from "next/image";

import type { HomeCopy } from "@/data/home";

type IndustriesSectionProps = {
  copy: HomeCopy["industries"];
};

export function IndustriesSection({ copy }: IndustriesSectionProps) {
  return (
    <section id="industries" className="section-spacing scroll-mt-24">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-xl">
            <p className="section-kicker">{copy.eyebrow}</p>
            <h2 className="section-title">{copy.title}</h2>
            <p className="section-copy">{copy.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {copy.items.map((item, index) => (
              <div key={item} className="relative min-h-32 overflow-hidden rounded-[1.35rem] border border-border bg-surface p-4 sm:min-h-36">
                <span className="relative z-10 text-sm font-semibold">{item}</span>
                <div className="absolute -bottom-8 -end-8 size-24 rounded-full bg-accent/35 blur-xl" />
                <span className="absolute bottom-3 end-4 text-3xl font-semibold tracking-[-0.05em] text-foreground/10">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 min-h-[280px] overflow-hidden rounded-[2rem] bg-surface-muted sm:min-h-[360px]">
          <Image src="/assets/decor/angular-building-cutout.png" alt="" fill className="object-contain object-center sm:object-end" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent rtl:bg-gradient-to-l" />
        </div>
      </div>
    </section>
  );
}
