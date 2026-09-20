import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { media } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed installation records from JP2 Solar Energy, covering scope, location, solution and outcome.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | JP2 Solar Energy",
    description:
      "Completed installation records from JP2 Solar Energy, covering scope, location, solution and outcome.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work speaks before any description does"
        lede="Each record sets out what the site needed, what was installed and what changed as a result. That is the detail a prospective client actually reads."
        image={media.arrayRows}
        imageAlt="Rows of solar panels on a completed installation"
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section aria-labelledby="project-list-heading" className="bg-ink-950 pb-20 sm:pb-24 lg:pb-28">
        <Container width="wide">
          <h2 id="project-list-heading" className="sr-only">
            Project records
          </h2>

          <Reveal className="border-y border-white/10 py-8">
            <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-white/55">
              The entries below are sample records included to show how a completed project is
              presented. They are not JP2 projects and carry a visible marker until real records
              replace them.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal as="li" key={project.slug} delay={index * 90} className="h-full">
                <ProjectCard project={project} priority={index === 0} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Have a site that needs the same treatment?"
        body="Tell us what the property runs and where supply falls short. We will take it from there."
      />
    </>
  );
}
