import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, siteConfig, whatsappLink } from "@/config/site";
import { solutions } from "@/content/solutions";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { Placeholder } from "@/components/ui/Placeholder";

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
};

function ColumnHeading({ children }: { children: string }) {
  return <h2 className="eyebrow mb-6 text-white/35">{children}</h2>;
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block py-1.5 text-[0.9375rem] text-white/60 transition-colors duration-200 hover:text-solar-400"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const wa = whatsappLink();
  const { contact, social } = siteConfig;
  const activeSocials = (
    Object.keys(social) as Array<keyof typeof siteConfig.social>
  ).filter((key) => social[key]);

  const addressParts = [contact.address.line1, contact.address.city, contact.address.state].filter(
    Boolean,
  );

  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <Container width="wide">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-white/55">
              {siteConfig.name} works with property owners and businesses that need dependable
              power, from first consultation through to installation and continued support.
            </p>

            <div className="mt-8">
              <ColumnHeading>Follow</ColumnHeading>
              {activeSocials.length > 0 ? (
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {activeSocials.map((key) => (
                    <li key={key}>
                      <a
                        href={social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social inline-flex items-center gap-1.5 text-[0.9375rem] text-white/60 transition-colors duration-200 hover:text-solar-400"
                      >
                        {socialLabels[key]}
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-200 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <Placeholder tone="dark" label="Add social profile links" />
              )}
            </div>
          </div>

          <nav aria-label="Solutions" className="lg:col-span-2">
            <ColumnHeading>Solutions</ColumnHeading>
            <ul>
              {solutions.map((solution) => (
                <FooterLink key={solution.slug} href={`/solutions#${solution.slug}`}>
                  {solution.title}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <nav aria-label="Projects" className="lg:col-span-2">
            <ColumnHeading>Projects</ColumnHeading>
            <ul>
              {projects.map((project) => (
                <FooterLink key={project.slug} href={`/projects/${project.slug}`}>
                  {project.title}
                </FooterLink>
              ))}
              <FooterLink href="/projects">All Projects</FooterLink>
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <ColumnHeading>Company</ColumnHeading>
            <ul>
              {navigation.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <ColumnHeading>Contact</ColumnHeading>
            <dl className="space-y-5 text-[0.9375rem]">
              <div>
                <dt className="mb-1.5 text-xs tracking-wide text-white/35">WhatsApp</dt>
                <dd>
                  {wa ? (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/75 transition-colors duration-200 hover:text-solar-400"
                    >
                      {siteConfig.cta.whatsapp.label}
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add WhatsApp number" />
                  )}
                </dd>
              </div>

              <div>
                <dt className="mb-1.5 text-xs tracking-wide text-white/35">Email</dt>
                <dd>
                  {contact.email ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-words text-white/75 transition-colors duration-200 hover:text-solar-400"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <Placeholder tone="dark" label="Add email address" />
                  )}
                </dd>
              </div>

              <div>
                <dt className="mb-1.5 text-xs tracking-wide text-white/35">Location</dt>
                <dd className="text-white/75">
                  {addressParts.length > 0 ? (
                    <address className="not-italic leading-relaxed">
                      {addressParts.join(", ")}
                      <br />
                      {contact.address.country}
                    </address>
                  ) : (
                    <Placeholder tone="dark" label="Add office address" />
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Website concept. Company details to be confirmed before launch.</p>
        </div>
      </Container>
    </footer>
  );
}
