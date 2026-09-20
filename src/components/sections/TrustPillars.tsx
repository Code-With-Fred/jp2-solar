import { trustPillars } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Sits directly beneath the hero on the same dark ground, separated only
 * by a hairline. Four positioning statements, not statistics.
 */
export function TrustPillars() {
  return (
    <section aria-labelledby="trust-heading" className="border-t border-white/10 bg-ink-950">
      <h2 id="trust-heading" className="sr-only">
        Why work with JP2 Solar Energy
      </h2>

      <Container width="wide">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, index) => (
            <Reveal
              as="li"
              key={pillar.index}
              delay={index * 90}
              className="group/pillar relative border-b border-white/10 py-9 last:border-b-0 sm:py-11 lg:border-b-0 lg:py-14"
            >
              {/* Vertical hairlines between columns, drawn only where they belong. */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 hidden w-px bg-white/10 lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 hidden w-px origin-bottom scale-y-0 bg-solar-500 transition-transform duration-600 ease-out group-hover/pillar:scale-y-100 lg:block"
              />

              <div className="lg:pr-8 lg:pl-8 lg:first:pl-0">
                <span className="eyebrow text-solar-500">{pillar.index}</span>
                <h3 className="display-sm mt-5 text-white">{pillar.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/55">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
