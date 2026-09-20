import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="bg-ink-950 py-20 sm:py-24 lg:py-32">
      <Container width="wide">
        <Reveal className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">Projects</Eyebrow>
            <h2 id="projects-heading" className="display-lg mt-6 text-white">
              Evidence matters more
              <br className="hidden sm:block" /> than description
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.9375rem] leading-relaxed text-white/55">
              The three entries below are sample records that show how a completed installation is
              presented, including scope, location and outcome. They are not JP2 projects. Each one
              is replaced with a real record from a single content file.
            </p>
            <div className="mt-6">
              <ArrowLink href="/projects" tone="dark">
                View all projects
              </ArrowLink>
            </div>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
