import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  ArrowsClockwise,
  Siren,
  Gauge,
  Package,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { OfferList, type OfferItem } from "@/components/sections/offer-list";
import { CtaBand } from "@/components/sections/cta-band";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { engineBrands, contact } from "@/lib/site";

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

export default function MaintenanceRepairsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Maintenance & Repairs"
        title="Diesel engine maintenance and repair you can trust"
        description="Keeping your engines running smoothly is at the core of what we do. Our team provides comprehensive maintenance and repair services for diesel engines across all major brands, minimizing downtime and extending the life of your equipment."
      />

      <section className="border-b bg-secondary/40 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <OfferList heading="What we offer" items={offers} />

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
