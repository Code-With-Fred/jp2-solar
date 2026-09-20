import { solutions } from "@/content/solutions";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SolutionCard } from "./SolutionCard";
import { cn } from "@/lib/cn";

export function Solutions() {
  return (
    <section aria-labelledby="solutions-heading" className="bg-ink-900 py-20 sm:py-24 lg:py-32">
      <Container width="wide">
        <Reveal className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">What we do</Eyebrow>
            <h2 id="solutions-heading" className="display-lg mt-6 text-white">
              Solutions across the
              <br className="hidden sm:block" /> energy system
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.9375rem] leading-relaxed text-white/55">
              Categories below are proposed placeholders prepared for this concept. JP2 confirms
              the final service list, and each entry is written to be edited in a single content
              file.
            </p>
            <div className="mt-6">
              <ArrowLink href="/solutions" tone="dark">
                View all solutions
              </ArrowLink>
            </div>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {solutions.map((solution, index) => {
            const feature = index < 2;

            return (
              <Reveal
                as="li"
                key={solution.slug}
                delay={(index % 4) * 80}
                className={cn(feature ? "lg:col-span-6" : "lg:col-span-3")}
              >
                <SolutionCard solution={solution} index={index} feature={feature} />
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
