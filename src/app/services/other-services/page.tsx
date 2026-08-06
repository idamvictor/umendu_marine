import type { Metadata } from "next";
import Image from "next/image";
import {
  Truck,
  Package,
  Users,
  Anchor,
  ClipboardText,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { OfferList, type OfferItem } from "@/components/sections/offer-list";
import { CtaBand } from "@/components/sections/cta-band";

function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

const stockImages = {
  cargoShipDocked: unsplash("1670121180530-cfcba4438038", "q=80&w=1400&auto=format&fit=crop"),
  portOperations: unsplash("1601311852860-1d8f42381551", "q=80&w=1800&auto=format&fit=crop"),
  tugboatHarbor: unsplash("1527314392553-2c7bded21b23", "q=80&w=1400&auto=format&fit=crop"),
} as const;

export const metadata: Metadata = {
  title: "Other Services",
  description:
    "Maritime logistics, marine procurement, technician staffing, and vessel hiring, supporting every side of your marine operations.",
};

const offers: OfferItem[] = [
  {
    icon: Truck,
    title: "Maritime Logistics",
    description:
      "Coordinated logistics support to keep your marine operations moving smoothly.",
  },
  {
    icon: Package,
    title: "Supply of Ship Engine Parts",
    description:
      "Sourcing and supply of genuine and quality engine parts for a wide range of diesel engine brands.",
  },
  {
    icon: Users,
    title: "Supply of Competent Technicians",
    description:
      "Skilled, experienced technicians available to work on-site, wherever your project requires them.",
  },
  {
    icon: Anchor,
    title: "Vessel Hiring & Leasing",
    description:
      "Flexible vessel hiring and leasing solutions tailored to your operational needs.",
  },
  {
    icon: ClipboardText,
    title: "Marine Procurement",
    description:
      "Reliable procurement services for marine equipment, parts, and supplies.",
  },
  {
    icon: Stack,
    title: "Marine Services",
    description:
      "Additional marine support services designed around our clients' specific operational demands.",
  },
];

export default function OtherServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Other Services"
        title="Full support for your marine operations"
        description="We know marine operations require more than engine repairs. That's why we offer a wider range of services to support the full scope of your maritime needs."
        images={[stockImages.cargoShipDocked, stockImages.portOperations, stockImages.tugboatHarbor]}
      />

      <OfferList heading="What we offer" items={offers} />

      <section className="border-t bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-lg p-7">
              <Image
                src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1786042777/WhatsApp_Image_2026-08-05_at_1.14.23_AM_hchghv.jpg"
                alt="Tugboat available for hire in harbor"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-ink-foreground">
                  Vessel hiring, without the long-term commitment
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-foreground/80">
                  Short or long-term hire arrangements for operators who
                  need extra capacity without buying it outright.
                </p>
              </div>
            </div>
            <div className="relative flex min-h-80 flex-col justify-end overflow-hidden rounded-lg p-7">
              <Image
                src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1786042822/WhatsApp_Image_2026-08-05_at_1.09.47_AM_avx7aj.jpg"
                alt="Technician available for on-site marine work"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-ink-foreground">
                  Skilled hands, deployed where you need them
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-foreground/80">
                  Technicians vetted for competence, not just availability,
                  ready to work on-site for the duration of your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what your operation needs."
        description="We'll help you find the right solution."
      />
    </>
  );
}
