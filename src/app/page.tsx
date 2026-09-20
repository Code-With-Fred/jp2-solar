import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { Solutions } from "@/components/sections/Solutions";
import { SolarFeature } from "@/components/sections/SolarFeature";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { WhyJp2 } from "@/components/sections/WhyJp2";
import { ContactBlock } from "@/components/sections/ContactBlock";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPillars />
      <AboutIntro />
      <Solutions />
      <SolarFeature />
      <Projects />
      <Process />
      <WhyJp2 />
      <ContactBlock />
    </>
  );
}
