import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/content/company";
import { media } from "@/content/media";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "JP2 Solar Energy works with property owners and businesses that need dependable power. Company profile, mission, vision and values.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | JP2 Solar Energy",
    description:
      "JP2 Solar Energy works with property owners and businesses that need dependable power.",
    url: "/about",
  },
};

/** Three empty slots. No names or biographies are invented. */
const leadershipSlots = ["01", "02", "03"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About JP2"
        title="Energy Solutions Built Around Your Needs"
        lede="A company profile is only persuasive when it is specific. This page is structured to carry the official JP2 description, mission, vision and story."
        image={media.engineerRooftop}
        imageAlt="Engineer standing on a completed rooftop solar installation"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section aria-labelledby="about-heading" className="bg-paper-50 py-20 sm:py-24 lg:py-28">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 id="about-heading" className="display-md text-graphite-900">
                Who {siteConfig.name} is
              </h2>
            </Reveal>

            <Reveal delay={90} className="space-y-5 lg:col-span-7">
              {about.intro.map((paragraph, index) => (
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
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="direction-heading" className="bg-ink-950 py-20 sm:py-24 lg:py-28">
        <Container width="wide">
          <h2 id="direction-heading" className="sr-only">
            Mission and vision
          </h2>

          <div className="grid gap-px lg:grid-cols-2">
            {[about.mission, about.vision].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className="border-t border-white/10 py-10 lg:py-12 lg:odd:pr-12 lg:even:border-l lg:even:pl-12"
              >
                <Eyebrow tone="dark">{item.title}</Eyebrow>
                <p className="display-sm mt-6 leading-relaxed text-white/85">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-14 lg:mt-20">
            <h3 className="eyebrow text-white/35">Values</h3>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {about.values.map((value, index) => (
                <li
                  key={value.index}
                  className="group/value relative border-t border-white/10 py-8 lg:py-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-solar-500 transition-transform duration-600 ease-out group-hover/value:scale-x-100"
                  />
                  <div className={index === 0 ? "lg:pr-8" : "lg:px-8 lg:last:pr-0"}>
                    <span className="eyebrow text-solar-500">{value.index}</span>
                    <h4 className="display-sm mt-4 text-white">{value.title}</h4>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/55">
                      {value.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="story-heading" className="bg-paper-50 py-20 sm:py-24 lg:py-28">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <Eyebrow>Company story</Eyebrow>
              <h2 id="story-heading" className="display-lg mt-6 text-graphite-900">
                The account that belongs here
              </h2>
              <div className="mt-7 space-y-5">
                {about.story.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-[0.9375rem] leading-relaxed text-graphite-500"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={90} className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-paper-200 lg:aspect-5/4">
                <Image
                  src={media.installationDetail}
                  alt="Installers fitting a photovoltaic module into its mounting frame"
                  fill
                  quality={80}
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  placeholder="blur"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="leadership-heading" className="bg-paper-100 py-20 sm:py-24 lg:py-28">
        <Container width="wide">
          <Reveal className="grid gap-8 border-b border-graphite-900/12 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow>Leadership</Eyebrow>
              <h2 id="leadership-heading" className="display-lg mt-6 text-graphite-900">
                The people behind the work
              </h2>
            </div>
            <p className="text-[0.9375rem] leading-relaxed text-graphite-500 lg:col-span-5">
              Named leadership carries real weight on an energy company website. These slots are
              left empty rather than filled with invented people. Supply a photograph, a name and a
              role for each and the section completes itself.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipSlots.map((slot, index) => (
              <Reveal as="li" key={slot} delay={index * 80}>
                <div className="h-full rounded-sm border border-dashed border-graphite-900/25 bg-paper-50 p-6">
                  <div className="flex aspect-4/5 items-center justify-center rounded-xs bg-paper-200">
                    <span className="eyebrow text-graphite-400">Photograph</span>
                  </div>
                  <div className="mt-6">
                    <span className="eyebrow text-solar-600">{slot}</span>
                    <p className="mt-4">
                      <Placeholder label="Add full name" />
                    </p>
                    <p className="mt-2.5">
                      <Placeholder label="Add role or title" className="text-sm" />
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Work with a team that starts from the engineering"
        body="Tell us what the property runs and where supply falls short. We will take it from there."
      />
    </>
  );
}
