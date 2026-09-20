import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/content/projects";
import { SampleTag } from "@/components/ui/Placeholder";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group/project flex h-full flex-col rounded-sm border border-white/10 bg-ink-900 transition-colors duration-500 ease-out hover:border-solar-500/45"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-sm bg-ink-800">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          quality={78}
          priority={priority}
          sizes="(min-width: 1024px) 28rem, (min-width: 640px) 45vw, 92vw"
          placeholder="blur"
          className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover/project:scale-[1.05]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent"
        />
        {project.sample ? (
          <SampleTag tone="dark" className="absolute top-4 left-4 backdrop-blur-sm" />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="eyebrow text-solar-400">{project.category}</span>
          <span aria-hidden="true" className="h-3 w-px bg-white/15" />
          <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
            <MapPin className="size-3.5" aria-hidden="true" />
            {project.location}
          </span>
        </div>

        <h3 className="display-sm mt-4 text-white transition-colors duration-300 group-hover/project:text-solar-300">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-white/55">
          {project.summary}
        </p>

        <span className="mt-6 inline-flex items-center gap-2.5 border-t border-white/10 pt-5 text-[0.9375rem] font-medium text-white">
          View Project
          <ArrowRight
            aria-hidden="true"
            className="size-4 text-solar-400 transition-transform duration-300 ease-out group-hover/project:translate-x-1.5"
          />
        </span>
      </div>
    </Link>
  );
}
