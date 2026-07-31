import { HomeHero } from "@/components/sections/home-hero";
import { BrandStrip } from "@/components/sections/brand-strip";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProcessTeaser } from "@/components/sections/process-teaser";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ManifestoBand } from "@/components/sections/manifesto-band";
import { CoverageSection } from "@/components/sections/coverage-section";
import { CtaBand } from "@/components/sections/cta-band";
import { EmailCaptureDialog } from "@/components/sections/email-capture-dialog";

export default function Home() {
  return (
    <>
      <EmailCaptureDialog />
      <HomeHero />
      <BrandStrip />
      <StatsStrip />
      <ServicesOverview />
      <ProcessTeaser />
      <WhyChooseUs />
      <ManifestoBand />
      <CoverageSection />
      <CtaBand />
    </>
  );
}
