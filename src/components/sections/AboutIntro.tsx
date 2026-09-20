import Image from "next/image";
import { media } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";

/**
 * Editorial introduction. The body copy below is a placeholder written to
 * the right length and tone. Replace with JP2's official description.
 */
export function AboutIntro() {
  return (
    <section aria-labelledby="about-intro-heading" className="bg-paper-50 py-20 sm:py-24 lg:py-32">
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6 xl:col-span-5">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-paper-200 sm:aspect-3/4 lg:aspect-4/5">
                <Image
                  src={media.engineerRooftop}
                  alt="Installation engineer standing on a completed rooftop solar array"
                  fill
                  quality={80}
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 45vw, (min-width: 640px) 80vw, 90vw"
                  placeholder="blur"
                  className="object-cover object-center"
                />
              </div>

              {/* Small anchored caption block, drawn in the same hairline language. */}
              <div className="mt-px border border-paper-300 border-t-0 bg-paper-100 px-6 py-5 sm:absolute sm:right-0 sm:-bottom-10 sm:mt-0 sm:max-w-xs sm:border-t sm:bg-paper-50 lg:-right-10">
                <span className="eyebrow text-solar-600">Our position</span>
                <p className="mt-3 text-sm leading-relaxed text-graphite-700">
                  Energy work is judged on what happens years after handover, not on the day the
                  invoice is settled.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <Eyebrow>About JP2</Eyebrow>
              <h2 id="about-intro-heading" className="display-lg mt-6 text-graphite-900">
                Energy Solutions Built Around Your Needs
              </h2>
            </Reveal>

            <Reveal delay={150} className="mt-7 space-y-5 text-graphite-700">
              <p className="lede">
                JP2 Solar Energy helps customers address their energy requirements through
                solutions that are specified, installed and supported properly. The work begins by
                understanding what a property actually needs, not by fitting it to a package.
              </p>
              <p className="text-[0.9375rem] leading-relaxed">
                That means looking closely at how power is used on site, where supply is failing
                today and what has to stay running when it does. The system is then designed
                around those answers, with components chosen for service life and an installation
                standard that holds up to inspection.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-graphite-500">
                This introduction is prepared as a placeholder. It is written to the length and
                tone the layout expects, ready to be replaced with the official JP2 company
                description.
              </p>
            </Reveal>

            <Reveal delay={210} className="mt-9">
              <ArrowLink href="/about">Discover JP2</ArrowLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
