import {
  Wrench,
  Lightning,
  Package,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { StaggerReveal } from "@/components/stagger-reveal";

const reasons = [
  {
    icon: Wrench,
    title: "Proven Technical Expertise",
    description:
      "Our engineers work across a wide range of diesel engine brands and marine systems, bringing hands-on experience to every project.",
  },
  {
    icon: Lightning,
    title: "Fast, Reliable Response",
    description:
      "Downtime is costly. We move quickly to diagnose issues and get your vessel or equipment back in operation.",
  },
  {
    icon: Package,
    title: "Full-Service Support",
    description:
      "Beyond repairs, we support your operations with logistics, procurement, staffing, and vessel leasing, one partner for multiple needs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance First",
    description:
      "Every job is carried out with strict attention to safety standards and industry compliance.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="border-t bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Why marine operators choose Umendu
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          <StaggerReveal distance={16} duration={500} staggerMs={80}>
            {reasons.map((reason) => (
              <div key={reason.title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <reason.icon className="size-6 text-primary" weight="duotone" />
                <h3 className="mt-4 text-base font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
