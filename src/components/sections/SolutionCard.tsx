import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/content/solutions";
import { cn } from "@/lib/cn";

type SolutionCardProps = {
  solution: Solution;
  index: number;
  /** Feature cards run wider with a landscape crop. */
  feature?: boolean;
};

export function SolutionCard({ solution, index, feature = false }: SolutionCardProps) {
  return (
    <Link
      href={`/solutions#${solution.slug}`}
      className="group/card relative flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-ink-800 transition-colors duration-500 ease-out hover:border-solar-500/45"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-ink-700",
          feature ? "aspect-16/10" : "aspect-4/3 sm:aspect-4/5",
        )}
      >
        <Image
          src={solution.image}
          alt={solution.imageAlt}
          fill
          quality={78}
          sizes={
            feature
              ? "(min-width: 1024px) 40rem, (min-width: 640px) 90vw, 92vw"
              : "(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 92vw"
          }
          placeholder="blur"
          className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover/card:scale-[1.05]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/25 to-transparent"
        />
        <span className="eyebrow absolute top-5 left-5 text-white/55">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="display-sm text-white transition-colors duration-300 group-hover/card:text-solar-300">
            {solution.title}
          </h3>
          <span
            aria-hidden="true"
            className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-[transform,background-color,border-color,color] duration-400 ease-out group-hover/card:border-solar-500 group-hover/card:bg-solar-500 group-hover/card:text-ink-950"
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-white/55">
          {solution.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
          {solution.points.map((point) => (
            <li key={point} className="eyebrow text-white/35">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
