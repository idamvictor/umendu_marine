import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { CtaBand } from "@/components/sections/cta-band";

function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

const stockImages = {
  engineRoomWide: unsplash("1652837135894-cd1d7f74588a", "q=80&w=1800&auto=format&fit=crop"),
  shipEngineDetail: unsplash("1608062720349-a044e289748b", "q=80&w=1400&auto=format&fit=crop"),
  technicianDiagnostic: unsplash("1621905251918-48416bd8575a", "q=80&w=1400&auto=format&fit=crop"),
  cargoPortCranes: unsplash("1606185540834-d6e7483ee1a4", "q=80&w=1800&auto=format&fit=crop"),
  generatorMaintenance: unsplash("1637296001293-43ec1ac4e5ed", "q=80&w=1400&auto=format&fit=crop"),
  tugboatAtSea: unsplash("1558613812-da76d80cca11", "q=80&w=1800&auto=format&fit=crop"),
} as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Diesel engine maintenance and repair, engineering consultancy, and marine support services from Umendu Marine Engineering Services Limited.",
};

const services = [
  {
    title: "Maintenance & Repairs",
    description:
      "Routine servicing, full overhauls, emergency repairs, diagnostics, and spare parts replacement across all major diesel engine brands.",
    href: "/services/maintenance-repairs",
    image: stockImages.shipEngineDetail,
    alt: "Close view of a marine diesel engine during service",
  },
  {
    title: "Engineering Services",
    description:
      "ET diagnosis, technical consultancy, general contracts, and ship general maintenance, delivered with engineering precision.",
    href: "/services/engineering-services",
    image: stockImages.technicianDiagnostic,
    alt: "Engineer running diagnostics on industrial equipment",
  },
  {
    title: "Other Services",
    description:
      "Maritime logistics, marine procurement, technician staffing, and vessel hiring and leasing.",
    href: "/services/other-services",
    image: stockImages.cargoPortCranes,
    alt: "Port cranes loading cargo at a shipping terminal",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <PageIntro
        title="Services built around your vessel's uptime"
        description="From engine maintenance to logistics and procurement, every service is delivered by the same technical team."
        images={[stockImages.engineRoomWide, stockImages.generatorMaintenance, stockImages.tugboatAtSea]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={700}
                    height={525}
                    className="size-full object-cover"
                  />
                </div>
                <h2 className="mt-5 text-xl font-semibold transition-colors duration-200 group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
