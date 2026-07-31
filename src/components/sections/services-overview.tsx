import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Maintenance & Repairs",
    description:
      "Expert servicing and repair of diesel engines across all major brands, from routine maintenance to full overhauls and emergency response.",
    href: "/services/maintenance-repairs",
    linkLabel: "View Maintenance & Repair Services",
    image: images.shipEngineDetail,
    alt: "Close view of a marine diesel engine during service",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[16/10] lg:aspect-auto lg:h-full",
  },
  {
    title: "Engineering Services",
    description:
      "From ET diagnosis and troubleshooting to technical consultancy and general contracts, we bring engineering precision to every job.",
    href: "/services/engineering-services",
    linkLabel: "View Engineering Services",
    image: images.technicianDiagnostic,
    alt: "Engineer running diagnostics on industrial equipment",
    span: "lg:col-span-1",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Other Services",
    description:
      "Maritime logistics, marine procurement, technician staffing, and vessel hiring, supporting every side of your marine operations.",
    href: "/services/other-services",
    linkLabel: "View Other Services",
    image: images.cargoPortCranes,
    alt: "Port cranes loading cargo at a shipping terminal",
    span: "lg:col-span-1",
    aspect: "aspect-[16/10]",
  },
] as const;

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Everything your fleet needs from one technical partner
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={cn(
                "group relative flex flex-col justify-end overflow-hidden rounded-lg transition-transform duration-150 ease-out active:scale-[0.98]",
                service.span,
                service.aspect
              )}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent transition-opacity duration-300 group-hover:from-ink/95" />
              <div className="relative p-6 lg:p-7">
                <h3 className="text-xl font-semibold text-ink-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-foreground/80">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {service.linkLabel}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
