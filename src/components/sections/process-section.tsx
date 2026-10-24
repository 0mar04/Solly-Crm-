import Image from "next/image";
import { FiCheck } from "react-icons/fi";

import type { HomeCopy } from "@/data/home";

type ProcessSectionProps = {
  process: HomeCopy["process"];
  promise: HomeCopy["promise"];
};

export function ProcessSection({ process, promise }: ProcessSectionProps) {
  return (
    <section id="process" className="relative overflow-hidden section-spacing scroll-mt-24">
      <Image src="/assets/backgrounds/section-wave-light.svg" alt="" fill className="-z-10 object-cover object-center opacity-80" />
      <div className="site-container">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="section-kicker">{process.eyebrow}</p>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-copy">{process.description}</p>
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          {process.items.map((item) => (
            <article key={item.step} className="rounded-[1.5rem] border border-white/70 bg-white/75 p-5 backdrop-blur sm:p-6">
              <div className="text-xs font-semibold text-muted-foreground">{item.step}</div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-8 overflow-hidden rounded-[2.2rem] border border-black/5 bg-[#11130f] p-6 text-white sm:p-9 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{promise.eyebrow}</p>
            <h3 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl">{promise.title}</h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">{promise.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {promise.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-white/82">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-foreground">
                    <FiCheck />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[300px]">
            <Image src="/assets/decor/crystal-shard-cluster.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
