import { Anchor, Buildings, UserGear } from "@phosphor-icons/react/dist/ssr";

const audiences = [
  {
    icon: Anchor,
    title: "Vessel Owners & Operators",
    description:
      "Independent owners and operators who need a dependable technical partner for engines that can't afford downtime.",
  },
  {
    icon: Buildings,
    title: "Shipping & Offshore Companies",
    description:
      "Shipping lines and offshore operators running fleets across Nigeria's marine and oil and gas corridors.",
  },
  {
    icon: UserGear,
    title: "Fleet & Technical Managers",
    description:
      "In-house technical and fleet managers who need a responsive contractor for scheduled work and emergencies alike.",
  },
];

export function WhoWeServe() {
  return (
    <section className="border-t bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Who we serve
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience.title} className="border-t pt-5">
              <audience.icon className="size-6 text-primary" weight="duotone" />
              <h3 className="mt-3.5 text-base font-semibold">
                {audience.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
