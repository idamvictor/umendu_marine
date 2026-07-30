import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ArrowsClockwise,
  Siren,
  Gauge,
  Package,
  Phone,
  SpeakerHigh,
  Wind,
  GasPump,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { OfferList, type OfferItem } from "@/components/sections/offer-list";
import { CtaBand } from "@/components/sections/cta-band";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { engineBrands, contact } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Maintenance & Repairs",
  description:
    "Comprehensive maintenance and repair services for diesel engines across all major brands, minimizing downtime and extending equipment life.",
};

const offers: OfferItem[] = [
  {
    icon: Wrench,
    title: "Routine Maintenance",
    description:
      "Scheduled servicing to keep engines performing at peak efficiency and prevent costly breakdowns before they happen.",
  },
  {
    icon: ArrowsClockwise,
    title: "Full Engine Overhauls",
    description:
      "Complete teardown, inspection, and rebuild services to restore engines to optimal working condition.",
  },
  {
    icon: Siren,
    title: "Emergency Repairs",
    description:
      "Rapid-response repair services when unexpected engine failures threaten to disrupt your operations.",
  },
  {
    icon: Gauge,
    title: "Diagnostics & Performance Checks",
    description:
      "Thorough inspection and diagnostic services to identify issues early and keep engines running efficiently.",
  },
  {
    icon: Package,
    title: "Spare Parts Replacement",
    description:
      "Genuine and quality-assured parts replacement, sourced and fitted by our technical team.",
  },
];

const warningSigns = [
  {
    icon: SpeakerHigh,
    title: "Unusual noise or vibration",
    description: "Knocking, rattling, or new vibration patterns usually point to a developing mechanical fault.",
  },
  {
    icon: Wind,
    title: "Smoke or exhaust changes",
    description: "Black, blue, or white smoke that wasn't there before is a sign worth investigating quickly.",
  },
  {
    icon: GasPump,
    title: "Rising fuel consumption",
    description: "A sudden jump in fuel use often means the engine is working harder than it should.",
  },
  {
    icon: WarningCircle,
    title: "Dropping performance",
    description: "Slower response, reduced power, or difficulty starting are early warnings, not one-off events.",
  },
];

export default function MaintenanceRepairsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Maintenance & Repairs"
        title="Diesel engine maintenance and repair you can trust"
        description="Keeping your engines running smoothly is at the core of what we do. Our team provides comprehensive maintenance and repair services for diesel engines across all major brands, minimizing downtime and extending the life of your equipment."
        images={[images.engineCloseup, images.generatorMaintenance, images.shipEngineDetail]}
      />

      <section className="border-b bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Engine brands we service
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {engineBrands.map((brand) => (
                  <Badge key={brand} variant="secondary" className="px-3 py-1 text-[13px] font-normal">
                    {brand}
                  </Badge>
                ))}
                <Badge variant="outline" className="px-3 py-1 text-[13px] font-normal">
                  And other major diesel engine brands
                </Badge>
              </div>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Whatever&apos;s under the hatch, our engineers have likely
                serviced it before. We keep genuine and quality-assured
                parts moving so a single missing component never stalls a
                job.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={images.engineCloseup}
                alt="Close view of a diesel engine block during maintenance"
                width={900}
                height={675}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <OfferList heading="What we offer" items={offers} />

      <section className="border-t bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Signs your engine shouldn&apos;t wait for its next service
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {warningSigns.map((sign) => (
              <div key={sign.title} className="border-t pt-5">
                <sign.icon className="size-6 text-primary" weight="duotone" />
                <h3 className="mt-3.5 text-base font-semibold">{sign.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Experiencing an engine issue or due for maintenance?"
        description="Reach out to our team today."
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact?service=maintenance-repairs">Request Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ink-border bg-transparent text-ink-foreground hover:bg-white/8 hover:text-ink-foreground"
            >
              <a href={contact.mobileHref}>
                <Phone data-icon="inline-start" />
                Emergency Contact
              </a>
            </Button>
          </>
        }
      />
    </>
  );
}
