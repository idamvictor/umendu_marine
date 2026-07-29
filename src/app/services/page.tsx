import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";

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
    image: images.shipEngineDetail,
    alt: "Close view of a marine diesel engine during service",
  },
  {
    title: "Engineering Services",
    description:
      "ET diagnosis, technical consultancy, general contracts, and ship general maintenance, delivered with engineering precision.",
    href: "/services/engineering-services",
    image: images.technicianDiagnostic,
    alt: "Engineer running diagnostics on industrial equipment",
  },
  {
    title: "Other Services",
    description:
      "Maritime logistics, marine procurement, technician staffing, and vessel hiring and leasing.",
    href: "/services/other-services",
    image: images.cargoPortCranes,
    alt: "Port cranes loading cargo at a shipping terminal",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <PageIntro
        title="Services built around your vessel's uptime"
        description="From engine maintenance to logistics and procurement, every service is delivered by the same technical team."
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
