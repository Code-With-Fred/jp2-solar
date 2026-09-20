import { processSteps } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Five step delivery process.
 *
 * One markup structure serves both orientations: a left rule with nodes on
 * small screens, a continuous top rule with nodes on large screens.
 */
export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-paper-50 py-20 sm:py-24 lg:py-32">
      <Container width="wide">
        <Reveal className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 id="process-heading" className="display-lg mt-6 text-graphite-900">
            A process that removes the guesswork
          </h2>
          <p className="lede mt-6 text-graphite-500">
            Five stages, each with a clear output, so there is never a question about what happens
            next or what has already been agreed.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-y-10 lg:mt-20 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-0">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.index}
              delay={index * 80}
              className="group/step relative border-l border-graphite-900/15 pl-7 lg:border-l-0 lg:border-t lg:pt-8 lg:pl-0 lg:pr-5"
            >
              {/* Node sits on the rule: left edge on mobile, top edge on desktop. */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[4.5px] size-2 rotate-45 bg-solar-500 transition-transform duration-400 ease-out group-hover/step:scale-150 lg:top-[-4.5px] lg:left-0"
              />

              <span className="eyebrow text-graphite-400">{step.index}</span>
              <h3 className="display-sm mt-4 text-graphite-900">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-graphite-500">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
