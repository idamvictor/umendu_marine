import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Anchor, ArrowRight, FileText } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { engineBrands } from "@/lib/site";
import { images } from "@/lib/images";

const gallery = [
  { src: images.technicianTools, alt: "Precision technical work on marine equipment", tall: true },
  { src: images.welderSparks, alt: "Welder at work on a marine structure at dusk", tall: false },
  { src: images.engineParts, alt: "Rigging equipment inside a vessel engine room", tall: true },
  { src: images.cargoShipDocked, alt: "Cargo vessel docked at a container terminal", tall: false },
];

const reportFields = [
  { label: "Vessel / Engine Brand", example: "e.g. Cummins, MAN B&W, Wärtsilä" },
  { label: "Scope of Work", example: "e.g. full engine overhaul, diagnostic servicing" },
  { label: "Outcome", example: "e.g. days to return to service, follow-up support" },
];

interface ProjectProfile {
  id: string;
  category: string;
  title: string;
  vesselProfile: string;
  engineModel: string;
  technicalScope: string[];
  operationalOutcome: string;
  image: string;
  imageAlt: string;
}

const representativeProjects: ProjectProfile[] = [
  {
    id: "overhaul-cat-3500",
    category: "Major Overhaul",
    title: "Complete Top-and-Bottom-End Engine Overhaul",
    vesselProfile: "Offshore Tugboat",
    engineModel: "Caterpillar 3512B Marine Propulsion Engine",
    technicalScope: [
      "Complete top-and-bottom-end overhaul",
      "Re-sleeving of blocks and crankshaft inspection",
      "Replacement of piston crowns, liners, and bearings",
      "Laser alignment and final sea-trial load testing",
    ],
    operationalOutcome: "Successfully restored compression and returned the engine to full charter capability in 14 days.",
    image: images.engineRoomWide,
    imageAlt: "Overhauled marine propulsion engine in vessel engine room",
  },
  {
    id: "diagnostics-yanmar-common-rail",
    category: "Diagnostics & Repairs",
    title: "Common Rail System Electronic Diagnostics",
    vesselProfile: "Crew Transfer Vessel (CTV)",
    engineModel: "Yanmar 6AYM-WGT Common Rail Engine",
    technicalScope: [
      "Sensor recalibration & diagnostic troubleshooting",
      "Intermittent power loss diagnostics & calibration",
      "Targeted fuel injector replacement and sealing",
      "ECU software diagnostic checks & error code clearance",
    ],
    operationalOutcome: "Pinpointed electrical contact issue, resolved power drop, and cleared error codes in 36 hours of callout.",
    image: images.technicianDiagnostic,
    imageAlt: "Technician performing diagnostics on common rail diesel control system",
  },
  {
    id: "maintenance-cummins-fleet",
    category: "Scheduled Maintenance",
    title: "Preventive Fleet Auxiliary Maintenance Contract",
    vesselProfile: "Multi-Cat Support Fleet",
    engineModel: "Cummins KTA19 & KTA38 Auxiliaries",
    technicalScope: [
      "Structured 250-hour and 1000-hour service intervals",
      "Cooling system descaling & heat exchanger maintenance",
      "Lube oil analysis for early wear metal detection",
      "Systematic belt, hose, and fuel system adjustment",
    ],
    operationalOutcome: "Achieved 100% engine uptime across all contracted vessels over a six-month operations window.",
    image: images.dieselGeneratorInspection,
    imageAlt: "Scheduled preventive maintenance on auxiliary diesel generator",
  },
  {
    id: "emergency-steering-wartsila",
    category: "Emergency Response",
    title: "Emergency Steering & Propulsion Control Restoration",
    vesselProfile: "Harbor Tugboat",
    engineModel: "Wärtsilä Propulsion Control Interface",
    technicalScope: [
      "On-site diagnosis of hydraulic pump failure",
      "Pressure seal kit replacement and bleeding",
      "Propulsion linkage re-alignment & emergency repair",
      "Control interface board inspection & soldering",
    ],
    operationalOutcome: "Re-commissioned steering systems within 24 hours of vessel docking in Port Harcourt.",
    image: images.technicianTools,
    imageAlt: "Emergency steering and control system restoration",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A look at the work Umendu Marine Engineering Services Limited supports, and the vessels and engines behind it.",
};

const workTypes = [
  "Full engine overhauls",
  "Emergency breakdown response",
  "Scheduled maintenance contracts",
  "ET diagnosis and troubleshooting",
  "Vessel hiring and leasing",
  "Marine procurement and parts supply",
];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        title="Work we're proud of"
        description="A look at the kind of vessels, engines, and projects we support, and where we're headed as our case study archive grows."
        images={[images.technicianTools, images.welderSparks, images.engineParts]}
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.alt}
                className={
                  item.tall
                    ? "aspect-[3/4] overflow-hidden rounded-lg"
                    : "aspect-[3/4] overflow-hidden rounded-lg lg:mt-10"
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-background pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-xl font-semibold">
                Engine brands we&apos;ve worked on
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {engineBrands.map((brand) => (
                  <Badge key={brand} variant="secondary" className="px-3 py-1 text-[13px] font-normal">
                    {brand}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Typical scope of work</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {workTypes.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Projects Section */}
      <section className="border-t bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              Capabilities in Action
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
              Representative Projects
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">
              These profiles represent actual engagements our engineering team handles, demonstrating the depth of our technical capabilities to keep diesel-powered vessels operational.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {representativeProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:border-muted-foreground/20"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-w-7xl) 50vw, 100vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-2.5 py-1">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground text-balance">
                      {project.title}
                    </h3>
                    
                    <div className="mt-4 grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 text-[14px] border-y border-border py-4">
                      <div>
                        <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Vessel Profile
                        </span>
                        <span className="mt-1 block font-medium text-foreground">
                          {project.vesselProfile}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Engine / System
                        </span>
                        <span className="mt-1 block font-medium text-foreground text-pretty">
                          {project.engineModel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex-1">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Technical Scope of Work
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {project.technicalScope.map((scope, index) => (
                        <li key={index} className="flex items-start text-[14px] text-muted-foreground leading-relaxed">
                          <span className="mr-2.5 mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 rounded-lg bg-secondary/50 p-4 border border-border/40">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                      Operational Outcome
                    </h4>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/95 font-medium">
                      {project.operationalOutcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <FileText className="size-6 text-primary" weight="duotone" />
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                What every case study will include
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                As real projects are published here, each one follows the
                same format, so you can compare work at a glance.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 lg:col-span-8">
              {reportFields.map((field) => (
                <div key={field.label} className="border-t pt-5">
                  <h3 className="text-base font-semibold">{field.label}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {field.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Empty className="rounded-lg border-none bg-card p-10 shadow-sm lg:p-14">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Anchor weight="duotone" />
              </EmptyMedia>
              <EmptyTitle className="text-lg">
                Documenting Our Full Case Studies
              </EmptyTitle>
              <EmptyDescription>
                We are currently assembling full-length, documented case studies
                for recent engine overhauls and technical support contracts. In
                the meantime, our team can provide references, service records,
                and specific project details directly.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button asChild>
                <Link href="/contact">
                  Talk to Our Team
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </EmptyContent>
          </Empty>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
