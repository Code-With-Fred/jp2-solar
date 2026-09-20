import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SampleTag } from "@/components/ui/Placeholder";
import { CtaBand } from "@/components/sections/CtaBand";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | JP2 Solar Energy`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.cover.src, width: project.cover.width, height: project.cover.height }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <article>
        <header className="bg-ink-950">
          <Container width="wide">
            <div className="pt-32 pb-12 sm:pt-40 lg:pt-48">
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40">
                  <li>
                    <Link href="/" className="transition-colors duration-200 hover:text-solar-400">
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
                    <Link
                      href="/projects"
                      className="transition-colors duration-200 hover:text-solar-400"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
                    <span className="text-white/65">{project.title}</span>
                  </li>
                </ol>
              </nav>

              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow tone="dark">{project.category}</Eyebrow>
                {project.sample ? (
                  <SampleTag tone="dark">Sample entry, not a JP2 project</SampleTag>
                ) : null}
              </div>

              <h1 className="display-xl mt-6 max-w-4xl text-white">{project.title}</h1>
              <p className="lede mt-7 max-w-2xl text-white/65">{project.summary}</p>

              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
                <div>
                  <dt className="eyebrow text-white/35">Location</dt>
                  <dd className="mt-2.5 flex items-center gap-1.5 text-[0.9375rem] text-white/75">
                    <MapPin className="size-3.5 shrink-0 text-solar-400" aria-hidden="true" />
                    {project.location}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-white/35">Year</dt>
                  <dd className="mt-2.5 text-[0.9375rem] text-white/75">{project.year}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-white/35">Category</dt>
                  <dd className="mt-2.5 text-[0.9375rem] text-white/75">{project.category}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-white/35">Scope</dt>
                  <dd className="mt-2.5 text-[0.9375rem] text-white/75">
                    {project.specs.find((spec) => spec.label === "Scope")?.value ?? "Scope"}
                  </dd>
                </div>
              </dl>
            </div>
          </Container>

          <div className="relative aspect-4/3 w-full overflow-hidden bg-ink-900 sm:aspect-16/9 lg:aspect-21/9">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              priority
              quality={82}
              sizes="100vw"
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
        </header>

        <div className="bg-paper-50 py-16 sm:py-20 lg:py-28">
          <Container width="wide">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow>Project overview</Eyebrow>
                  <div className="mt-6 space-y-5">
                    {project.overview.map((paragraph, index) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className={
                          index === 0
                            ? "lede text-graphite-700"
                            : "text-[0.9375rem] leading-relaxed text-graphite-500"
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={90} className="mt-12">
                  <Eyebrow>Solution provided</Eyebrow>
                  <p className="mt-6 text-[0.9375rem] leading-relaxed text-graphite-700">
                    {project.solution}
                  </p>
                </Reveal>

                <Reveal delay={140} className="mt-12">
                  <Eyebrow>Results</Eyebrow>
                  <ul className="mt-6 border-t border-graphite-900/12">
                    {project.outcomes.map((outcome) => (
                      <li
                        key={outcome.label}
                        className="grid gap-2 border-b border-graphite-900/12 py-5 sm:grid-cols-3 sm:gap-6"
                      >
                        <h3 className="text-sm font-semibold text-graphite-900">
                          {outcome.label}
                        </h3>
                        <p className="text-[0.9375rem] leading-relaxed text-graphite-500 sm:col-span-2">
                          {outcome.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <Reveal delay={60}>
                  <div className="lg:sticky lg:top-32">
                    <div className="rounded-sm border border-graphite-900/12 bg-paper-100 p-6 sm:p-7">
                      <h2 className="eyebrow text-solar-600">Project scope</h2>
                      <dl className="mt-6">
                        {project.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="border-t border-graphite-900/12 py-4 first:border-t-0 first:pt-0"
                          >
                            <dt className="text-xs tracking-wide text-graphite-400">
                              {spec.label}
                            </dt>
                            <dd className="mt-1.5 text-[0.9375rem] text-graphite-900">
                              {spec.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="mt-6">
                      <ButtonLink href="/contact" variant="dark" size="lg" withArrow className="w-full">
                        Request a Quote
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal className="mt-16 lg:mt-24">
              <Eyebrow>Additional images</Eyebrow>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
                {project.gallery.map((item) => (
                  <li key={item.alt}>
                    <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-paper-200">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        quality={78}
                        sizes="(min-width: 640px) 45vw, 92vw"
                        placeholder="blur"
                        className="object-cover object-center"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </div>
      </article>

      <section aria-labelledby="next-project-heading" className="bg-paper-100">
        <Container width="wide">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group/next flex flex-col gap-6 border-t border-graphite-900/12 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14"
          >
            <div>
              <h2 id="next-project-heading" className="eyebrow text-graphite-400">
                Next project
              </h2>
              <p className="display-md mt-4 text-graphite-900 transition-colors duration-300 group-hover/next:text-solar-600">
                {nextProject.title}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-graphite-900/20 text-graphite-900 transition-[background-color,border-color,color] duration-400 group-hover/next:border-solar-600 group-hover/next:bg-solar-600 group-hover/next:text-white"
            >
              <ArrowRight className="size-5" />
            </span>
          </Link>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
