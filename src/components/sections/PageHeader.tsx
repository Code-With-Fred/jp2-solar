import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: StaticImageData;
  imageAlt?: string;
  crumbs?: Crumb[];
};

/**
 * Dark opening band shared by every page other than the homepage.
 *
 * Keeping every page dark at the top lets the fixed header hold a single
 * light on dark treatment, which removes a whole class of contrast bugs.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
  crumbs,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            quality={78}
            sizes="100vw"
            placeholder="blur"
            className="-z-10 object-cover object-center opacity-45"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70"
          />
        </>
      ) : null}

      <Container width="wide">
        <div className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
          {crumbs && crumbs.length > 0 ? (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40">
                {crumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="size-3 text-white/25" aria-hidden="true" />
                    ) : null}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors duration-200 hover:text-solar-400"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white/65">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="display-xl mt-6 max-w-4xl text-white">{title}</h1>
          {lede ? <p className="lede mt-7 max-w-2xl text-white/65">{lede}</p> : null}
        </div>
      </Container>
    </section>
  );
}
