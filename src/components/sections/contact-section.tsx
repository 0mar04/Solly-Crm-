import Image from "next/image";

import type { HomeCopy } from "@/data/home";

type ContactSectionProps = {
  copy: HomeCopy["contact"];
};

export function ContactSection({ copy }: ContactSectionProps) {
  return (
    <section id="contact" className="pb-8 pt-12 scroll-mt-24 sm:pt-20">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#e9eddc] px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute inset-y-0 end-0 hidden w-[38%] lg:block">
            <Image src="/assets/decor/bonsai-rock-island.png" alt="" fill className="object-contain object-end-bottom opacity-95" />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-xl">
              <p className="section-kicker">{copy.eyebrow}</p>
              <h2 className="section-title">{copy.title}</h2>
              <p className="section-copy">{copy.description}</p>
            </div>

            <form className="grid max-w-2xl gap-3 rounded-[1.6rem] border border-white/70 bg-white/82 p-4 shadow-[0_18px_50px_rgba(17,17,17,0.05)] backdrop-blur sm:p-5">
              <label className="grid gap-2 text-xs font-semibold text-muted-foreground">
                {copy.name}
                <input className="h-12 rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-ring/20" />
              </label>
              <label className="grid gap-2 text-xs font-semibold text-muted-foreground">
                {copy.phone}
                <input inputMode="tel" className="h-12 rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-ring/20" />
              </label>
              <label className="grid gap-2 text-xs font-semibold text-muted-foreground">
                {copy.project}
                <textarea rows={4} className="resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-ring/20" />
              </label>
              <button type="submit" className="mt-1 h-12 rounded-xl bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
                {copy.submit}
              </button>
              <p className="text-xs leading-5 text-muted-foreground">{copy.note}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
