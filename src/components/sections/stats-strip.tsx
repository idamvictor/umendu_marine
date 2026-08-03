import { StaggerReveal } from "@/components/stagger-reveal";

const stats = [
  { value: "8", label: "Major diesel engine brands serviced" },
  { value: "3", label: "Core service lines, one technical team" },
  { value: "24/7", label: "Emergency response line" },
  { value: "1", label: "Point of contact from diagnosis to delivery" },
] as const;

export function StatsStrip() {
  return (
    <section className="border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-border">
          <StaggerReveal distance={12} duration={450} staggerMs={90} scaleFrom={0.85}>
            {stats.map((stat) => (
              <div key={stat.label} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <p className="font-mono text-3xl font-semibold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
