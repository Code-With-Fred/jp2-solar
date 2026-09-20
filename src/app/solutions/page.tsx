import type { Metadata } from "next";
import Image from "next/image";
import { solutions } from "@/content/solutions";
import { media } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solar, storage and electrical solutions from JP2 Solar Energy, specified around how each site actually uses power.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | JP2 Solar Energy",
    description:
      "Solar, storage and electrical solutions from JP2 Solar Energy, specified around how each site actually uses power.",
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Energy systems specified around the site"
        lede="A system is only as good as the brief behind it. Every category below starts from how a property uses power, then works outward to components, protection and support."
        image={media.solarArrayWide}
        imageAlt="Wide view of a photovoltaic array under open sky"
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <section className="bg-paper-50">
        <Container width="wide">
          <Reveal className="border-b border-graphite-900/12 py-10 sm:py-12">
            <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-graphite-500">
              These categories are proposed placeholders prepared for this concept. They describe
              the kind of work a solar and energy company delivers and are not presented as
              confirmed JP2 offerings. Once JP2 confirms the final service list, each entry is
              edited in one content file.
            </p>
          </Reveal>

          <div>
            {solutions.map((solution, index) => {
              const flipped = index % 2 === 1;

              return (
                <article
                  key={solution.slug}
                  id={solution.slug}
                  className="scroll-mt-28 border-b border-graphite-900/12 py-16 last:border-b-0 sm:py-20 lg:py-24"
                >
                  <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
                    <Reveal
                      className={cn(
                        "lg:col-span-6",
                        flipped ? "lg:order-2 lg:col-start-7" : "lg:order-1",
                      )}
                    >
                      <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-paper-200">
                        <Image
                          src={solution.image}
                          alt={solution.imageAlt}
                          fill
                          quality={78}
                          sizes="(min-width: 1024px) 45vw, 92vw"
                          placeholder="blur"
                          className="object-cover object-center"
                        />
                      </div>
                    </Reveal>

                    <Reveal
                      delay={90}
                      className={cn("lg:col-span-6", flipped ? "lg:order-1" : "lg:order-2")}
                    >
                      <span className="eyebrow text-graphite-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="display-md mt-4 text-graphite-900">{solution.title}</h2>
                      <p className="lede mt-5 text-graphite-700">{solution.summary}</p>
                      <p className="mt-4 text-[0.9375rem] leading-relaxed text-graphite-500">
                        {solution.detail}
                      </p>

                      <ul className="mt-8 grid gap-px border-t border-graphite-900/12 sm:grid-cols-3">
                        {solution.points.map((point) => (
                          <li
                            key={point}
                            className="border-b border-graphite-900/12 py-4 sm:border-b-0 sm:py-5"
                          >
                            <span className="eyebrow text-solar-600">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <ButtonLink href="/contact" variant="dark" withArrow>
                          Discuss this solution
                        </ButtonLink>
                      </div>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper-100 py-20 sm:py-24 lg:py-28">
        <Container width="wide">
          <Reveal className="max-w-3xl">
            <Eyebrow>Not sure which applies</Eyebrow>
            <h2 className="display-md mt-6 text-graphite-900">
              Start with the problem, not the product
            </h2>
            <p className="lede mt-6 text-graphite-500">
              If you are unsure which category fits, describe what is failing today. The right
              system falls out of a proper assessment rather than a catalogue.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="solar" size="lg" withArrow>
                Talk to JP2
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
