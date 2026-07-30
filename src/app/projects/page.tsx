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
                Project case studies coming soon
              </EmptyTitle>
              <EmptyDescription>
                We&apos;re building a showcase of completed vessel and engine
                projects, with scope and outcomes for each. In the meantime,
                our team is glad to share references and past project details
                directly.
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
