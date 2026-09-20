import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink-950 py-32">
      <Container width="wide">
        <Eyebrow tone="dark">Error 404</Eyebrow>
        <h1 className="display-lg mt-6 max-w-2xl text-white">
          This page is not part of the site
        </h1>
        <p className="lede mt-6 max-w-lg text-white/60">
          The address you followed does not match anything here. The links below cover everything
          the site holds.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="solar" size="lg" withArrow>
            Back to homepage
          </ButtonLink>
          <ButtonLink href="/contact" variant="outlineLight" size="lg">
            Request a Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
