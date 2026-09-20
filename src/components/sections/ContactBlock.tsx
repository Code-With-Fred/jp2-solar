import { ArrowUpRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { QuoteForm } from "@/components/forms/QuoteForm";

type ChannelProps = {
  label: string;
  children: React.ReactNode;
};

function Channel({ label, children }: ChannelProps) {
  return (
    <div className="border-t border-white/10 py-5">
      <dt className="eyebrow text-white/35">{label}</dt>
      <dd className="mt-2.5 text-[0.9375rem] text-white/80">{children}</dd>
    </div>
  );
}

export function ContactBlock() {
  const wa = whatsappLink();
  const { contact } = siteConfig;
  const addressParts = [contact.address.line1, contact.address.city, contact.address.state].filter(
    Boolean,
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ink-950 py-20 sm:py-24 lg:py-32"
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">Contact</Eyebrow>
              <h2 id="contact-heading" className="display-lg mt-6 text-white">
                Let’s Build a Better Energy Solution
              </h2>
              <p className="lede mt-7 text-white/60">
                Tell us about the property, what it has to keep running and where supply is falling
                short today. That is enough for a useful first conversation.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <dl>
                <Channel label="WhatsApp">
                  {wa ? (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-solar-400"
                    >
                      {siteConfig.cta.whatsapp.label}
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add WhatsApp number" />
                  )}
                </Channel>

                <Channel label="Phone">
                  {contact.phone ? (
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="transition-colors duration-200 hover:text-solar-400"
                    >
                      {contact.phone}
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add phone number" />
                  )}
                </Channel>

                <Channel label="Email">
                  {contact.email ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-words transition-colors duration-200 hover:text-solar-400"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add email address" />
                  )}
                </Channel>

                <Channel label="Location">
                  {addressParts.length > 0 ? (
                    <address className="not-italic leading-relaxed">
                      {addressParts.join(", ")}, {contact.address.country}
                    </address>
                  ) : (
                    <Placeholder tone="dark" label="Add office address" />
                  )}
                </Channel>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-sm bg-paper-50 p-6 sm:p-9 lg:p-11">
              <h3 className="display-sm text-graphite-900">Request a Quote</h3>
              <p className="mt-2.5 mb-8 text-[0.9375rem] text-graphite-500">
                Fields marked optional can be left blank.
              </p>
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
