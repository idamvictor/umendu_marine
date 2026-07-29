import { HomeHero } from "@/components/sections/home-hero";
import { BrandStrip } from "@/components/sections/brand-strip";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BrandStrip />
      <ServicesOverview />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
