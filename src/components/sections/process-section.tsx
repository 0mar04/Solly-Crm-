import Image from "next/image";
import { FiCheck } from "react-icons/fi";

import type { HomeCopy } from "@/data/home";

type ProcessSectionProps = {
  process: HomeCopy["process"];
  promise: HomeCopy["promise"];
};

export function ProcessSection({ process, promise }: ProcessSectionProps) {
  return (
    <section id="process" className="relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32">
      <Image
        src="/assets/backgrounds/section-wave-light.svg"
        alt=""
        fill
        className="-z-30 object-cover object-center opacity-90"
      />
      <Image
        src="/assets/backgrounds/grid-dots-light.svg"
        alt=""
        width={400}
        height={400}
        className="pointer-events-none absolute -start-24 top-32 -z-20 w-80 opacity-30"
      />

      <div className="site-container">
        <div className="max-w-3xl">
          <p className="section-kicker">{process.eyebrow}</p>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-copy">{process.description}</p>
        </div>

        <div className="relative mt-14">
          <div className="absolute start-[7%] end-[7%] top-7 hidden h-px bg-border lg:block" />
          <div className="grid gap-3 lg:grid-cols-5">
            {process.items.map((item, index) => (
              <article key={item.step} className="relative rounded-[1.6rem] border border-white/80 bg-white/78 p-5 shadow-[0_14px_35px_rgba(17,17,17,0.035)] backdrop-blur sm:p-6">
                <div className="relative z-10 grid size-14 place-items-center rounded-full border border-border bg-white text-sm font-semibold shadow-sm">
                  {item.step}
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                {index < process.items.length - 1 && (
                  <span className="absolute end-[-0.55rem] top-7 z-20 hidden size-2.5 rounded-full bg-accent-strong lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2.4rem] border border-black/5 bg-[#11130f] text-white shadow-[0_28px_80px_rgba(17,17,17,0.12)]">
          <Image
            src="/assets/backgrounds/grid-dots-light.svg"
            alt=""
            width={400}
            height={400}
            className="pointer-events-none absolute end-0 top-0 w-80 invert opacity-[0.06]"
          />
          <div className="grid items-center gap-6 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:p-12 xl:p-14">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{promise.eyebrow}</p>
              <h3 className="mt-4 max-w-[14ch] text-4xl font-semibold leading-[1.01] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {promise.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">{promise.description}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {promise.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] px-3 py-3 text-sm text-white/82">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-foreground">
                      <FiCheck />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[390px]">
              <div className="absolute inset-[15%] rounded-full bg-accent/10 blur-3xl" />
              <Image src="/assets/decor/crystal-shard-cluster.png" alt="" fill className="object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]" />
              <Image src="/assets/decor/crystal-shard-tall.png" alt="" width={170} height={260} className="absolute bottom-[4%] start-[6%] hidden w-28 opacity-80 sm:block lg:w-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
