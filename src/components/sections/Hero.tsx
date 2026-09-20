"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { media } from "@/content/media";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ease = [0.16, 1, 0.3, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease },
  }),
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink-950">
      {/* Photography with a slow settle on load. One movement, then still. */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={media.heroRooftopSunset}
          alt="Photovoltaic array installed across a commercial rooftop at sunset"
          fill
          priority
          quality={82}
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Layered overlays keep the headline legible without flattening the photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/82 to-ink-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/10 to-ink-950/75"
      />

      <Container width="wide" className="pt-32 pb-0">
        <div className="max-w-4xl">
          <motion.div variants={rise} initial="hidden" animate="visible" custom={0.35}>
            <Eyebrow tone="dark">{siteConfig.name}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="display-xl mt-7 text-white"
          >
            Powering a Smarter
            <br className="hidden sm:block" /> Energy Future
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0.58}
            className="lede mt-7 max-w-xl text-white/70"
          >
            {siteConfig.name} provides energy solutions for homes and businesses that need power
            they can depend on. Every system starts with the site, the load it carries and the
            result the client is working toward.
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={siteConfig.cta.primary.href} variant="solar" size="lg" withArrow>
              {siteConfig.cta.primary.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.cta.secondary.href} variant="outlineLight" size="lg">
              {siteConfig.cta.secondary.label}
            </ButtonLink>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="mt-14 border-t border-white/12 lg:mt-20"
      >
        <Container width="wide">
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <span className="eyebrow flex items-center gap-3 text-white/40">
              <span aria-hidden="true" className="relative block h-6 w-px overflow-hidden bg-white/20">
                <span className="absolute inset-x-0 top-0 block h-2 animate-[scrollcue_2.4s_ease-in-out_infinite] bg-solar-500" />
              </span>
              Scroll
            </span>
            <p className="max-w-md text-sm leading-relaxed text-white/45 sm:text-right">
              Designed, installed and supported by a team that treats your energy supply as an
              engineering problem before a product sale.
            </p>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
