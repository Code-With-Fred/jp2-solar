import { principles } from "@/content/company";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function WhyJp2() {
  return (
    <section aria-labelledby="why-heading" className="bg-paper-100 py-20 sm:py-24 lg:py-32">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-32">
              <Eyebrow>Why JP2</Eyebrow>
              <h2 id="why-heading" className="display-lg mt-6 text-graphite-900">
                Principles we hold the work to
              </h2>
              <p className="lede mt-6 text-graphite-500">
                These are service principles rather than performance claims. They describe how
                {" "}{siteConfig.name} intends to work with every client, on every site.
              </p>
              <div className="mt-9">
                <ButtonLink href="/contact" variant="solar" size="lg" withArrow>
                  {siteConfig.cta.primary.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-graphite-900/12">
              {principles.map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle.index}
                  delay={index * 70}
                  className="group/principle relative border-b border-graphite-900/12"
                >
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-solar-600 transition-transform duration-600 ease-out group-hover/principle:scale-x-100"
                  />
                  <div className="flex gap-6 py-7 sm:gap-10 sm:py-8">
                    <span className="eyebrow mt-1.5 w-8 shrink-0 text-solar-600">
                      {principle.index}
                    </span>
                    <div>
                      <h3 className="display-sm text-graphite-900">{principle.title}</h3>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-graphite-500">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
