import type { Icon } from "@phosphor-icons/react/dist/lib/types";

export type OfferItem = {
  icon: Icon;
  title: string;
  description: string;
};

export function OfferList({
  heading,
  items,
}: {
  heading?: string;
  items: OfferItem[];
}) {
  return (
    <section className="border-t bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {heading}
          </h2>
        )}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border-t pt-5">
              <item.icon className="size-6 text-primary" weight="duotone" />
              <h3 className="mt-3.5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
