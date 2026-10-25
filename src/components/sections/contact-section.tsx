import Image from "next/image";
import { FiArrowUpLeft, FiArrowUpRight, FiMessageCircle } from "react-icons/fi";

import type { HomeCopy } from "@/data/home";

type ContactSectionProps = {
  copy: HomeCopy["contact"];
};

export function ContactSection({ copy }: ContactSectionProps) {
  return (
    <section id="contact" className="relative scroll-mt-24 pb-10 pt-14 sm:pt-20 lg:pt-24">
      <div className="site-container">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#e9eddc] shadow-[0_24px_70px_rgba(17,17,17,0.07)]">
          <Image
            src="/assets/backgrounds/grid-dots-light.svg"
            alt=""
            width={400}
            height={400}
            className="pointer-events-none absolute start-0 top-0 -z-10 w-80 opacity-30"
          />
          <Image
            src="/assets/backgrounds/soft-sage-blob.png"
            alt=""
            width={620}
            height={620}
            className="pointer-events-none absolute -bottom-48 -end-32 -z-10 w-[34rem] opacity-50"
          />

          <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-14 xl:px-14">
            <div className="relative z-10 flex min-h-[420px] flex-col justify-between">
              <div className="max-w-xl">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-foreground text-background">
                  <FiMessageCircle />
                </div>
                <p className="section-kicker mt-6">{copy.eyebrow}</p>
                <h2 className="section-title">{copy.title}</h2>
                <p className="section-copy">{copy.description}</p>
              </div>

              <div className="relative mt-8 hidden min-h-[180px] lg:block">
                <Image
                  src="/assets/decor/bonsai-rock-island.png"
                  alt=""
                  fill
                  className="object-contain object-start"
                />
              </div>
            </div>

            <form className="relative z-10 grid gap-4 rounded-[1.8rem] border border-white/80 bg-white/88 p-4 shadow-[0_20px_55px_rgba(17,17,17,0.06)] backdrop-blur sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-semibold text-muted-foreground">
                  {copy.name}
                  <input className="h-13 rounded-[0.9rem] border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-foreground/25 focus:ring-2 focus:ring-ring/15" />
                </label>
                <label className="grid gap-2 text-xs font-semibold text-muted-foreground">
                  {copy.phone}
                  <input inputMode="tel" className="h-13 rounded-[0.9rem] border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-foreground/25 focus:ring-2 focus:ring-ring/15" />
                </label>
              </div>

              <label className="grid gap-2 text-xs font-semibold text-muted-foreground">
                {copy.project}
                <textarea rows={6} className="resize-none rounded-[1rem] border border-border bg-white px-4 py-3.5 text-sm text-foreground outline-none transition focus:border-foreground/25 focus:ring-2 focus:ring-ring/15" />
              </label>

              <button
                type="submit"
                className="group mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-[0.95rem] bg-foreground px-5 text-sm font-semibold text-background shadow-[0_12px_30px_rgba(17,17,17,0.14)] transition-all hover:-translate-y-0.5"
              >
                {copy.submit}
                <FiArrowUpRight className="ltr:block rtl:hidden" />
                <FiArrowUpLeft className="hidden rtl:block" />
              </button>

              <p className="text-xs leading-5 text-muted-foreground">{copy.note}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
