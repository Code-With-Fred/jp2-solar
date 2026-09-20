import type { Metadata } from "next";
import { media } from "@/content/media";
import { processSteps } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactBlock } from "@/components/sections/ContactBlock";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from JP2 Solar Energy. Share the property, the loads that matter and where supply falls short today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | JP2 Solar Energy",
    description:
      "Request a quote from JP2 Solar Energy. Share the property, the loads that matter and where supply falls short today.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let us look at your energy supply properly"
        lede="One form, one conversation, and a clear view of what your property needs. Start with what is failing today."
        image={media.urbanRooftops}
        imageAlt="Rooftops across an urban district with a solar installation in view"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <ContactBlock />

      <section aria-labelledby="what-happens-heading" className="bg-paper-50 py-20 sm:py-24 lg:py-28">
        <Container width="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>After you get in touch</Eyebrow>
            <h2 id="what-happens-heading" className="display-lg mt-6 text-graphite-900">
              What happens next
            </h2>
            <p className="lede mt-6 text-graphite-500">
              The first three stages of the process below happen before any quotation is issued,
              so the number you receive is based on the site rather than an assumption.
            </p>
          </Reveal>

          <ol className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0">
            {processSteps.slice(0, 3).map((step, index) => (
              <Reveal
                as="li"
                key={step.index}
                delay={index * 90}
                className="border-l border-graphite-900/15 pl-7 sm:border-l-0 sm:border-t sm:pt-8 sm:pl-0 sm:pr-6"
              >
                <span className="eyebrow text-solar-600">{step.index}</span>
                <h3 className="display-sm mt-4 text-graphite-900">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-graphite-500">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
