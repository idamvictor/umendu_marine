import { engineBrands } from "@/lib/site";

export function BrandStrip() {
  return (
    <section className="border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Trusted to service leading diesel engine brands
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {engineBrands.map((brand) => (
              <li
                key={brand}
                className="font-mono text-sm text-foreground/70"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
