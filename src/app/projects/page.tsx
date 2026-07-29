import type { Metadata } from "next";
import Link from "next/link";
import { Anchor, ArrowRight } from "@phosphor-icons/react/dist/ssr";
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

      <section className="border-b bg-background py-16 lg:py-20">
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

      <section className="bg-secondary/40 py-20 lg:py-28">
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
