import Image from "next/image";
import { media } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Editorial argument for well specified solar. Written about solar as a
 * discipline, so it makes no claim about installations JP2 has completed.
 */
const arguments_ = [
  {
    title: "Sizing follows consumption",
    body: "A system built around measured load behaves predictably. One built around a price point rarely does.",
  },
  {
    title: "Components decide service life",
    body: "Panels, inverters and batteries age at different rates. Specifying them together is what keeps a system whole.",
  },
  {
    title: "Installation quality is the variable",
    body: "Mounting, cable routing and protection are where most long term faults begin, and where careful work pays back.",
  },
];

export function SolarFeature() {
  return (
    <section aria-labelledby="solar-feature-heading" className="bg-paper-100 py-20 sm:py-24 lg:py-32">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-paper-200 lg:aspect-5/4">
              <Image
                src={media.installationDetail}
                alt="Two installers fitting a photovoltaic module into its mounting frame"
                fill
                quality={80}
                sizes="(min-width: 1024px) 45vw, 92vw"
                placeholder="blur"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <Eyebrow>Solar Energy</Eyebrow>
              <h2 id="solar-feature-heading" className="display-lg mt-6 text-graphite-900">
                Reliable Power Starts With the Right Energy Strategy
              </h2>
              <p className="lede mt-7 text-graphite-700">
                Solar works when the design is honest about the building it serves. The array, the
                inverter and the storage have to agree with how much power is drawn, when it is
                drawn and what must stay running when the grid does not cooperate.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <ul className="border-t border-graphite-900/12">
                {arguments_.map((item) => (
                  <li
                    key={item.title}
                    className="group/row border-b border-graphite-900/12 py-5 transition-colors duration-300 hover:bg-paper-200/50"
                  >
                    <div className="flex gap-5">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-6 shrink-0 bg-solar-600/50 transition-[width] duration-400 ease-out group-hover/row:w-10"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-graphite-900">{item.title}</h3>
                        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-graphite-500">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={210} className="mt-9">
              <ButtonLink href="/contact" variant="dark" size="lg" withArrow>
                Talk to JP2
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
