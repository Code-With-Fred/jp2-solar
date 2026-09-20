import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

type CtaBandProps = {
  title?: string;
  body?: string;
};

/** Closing conversion band used at the foot of the secondary pages. */
export function CtaBand({
  title = "Ready to talk about your energy supply?",
  body = "Share the property, the loads that matter and what you are trying to solve. That is enough to start a useful conversation.",
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-band-heading" className="bg-ink-950 py-20 sm:py-24 lg:py-28">
      <Container width="wide">
        <Reveal className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">Next step</Eyebrow>
            <h2 id="cta-band-heading" className="display-md mt-6 text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/55">{body}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:col-span-5 lg:justify-end">
            <ButtonLink href={siteConfig.cta.primary.href} variant="solar" size="lg" withArrow>
              {siteConfig.cta.primary.label}
            </ButtonLink>
            <ButtonLink href="/projects" variant="outlineLight" size="lg">
              View Projects
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
