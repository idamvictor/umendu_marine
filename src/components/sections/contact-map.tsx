"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./leaflet-map").then((mod) => mod.LeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="size-full animate-pulse bg-muted" />
    ),
  }
);

export function ContactMap() {
  return (
    <div className="isolate h-80 w-full overflow-hidden rounded-lg border lg:h-96">
      <LeafletMap />
    </div>
  );
}
