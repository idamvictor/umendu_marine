// Placeholder media -- no real project photography or footage exists yet
// (see PRODUCT.md "Evidence on Hand"). Images reuse the verified Unsplash
// set from lib/images.ts; videos are generic, freely-licensed sample clips
// standing in for real project footage. Replace both with the client's own
// media as it becomes available.
import { images } from "@/lib/images";

export type GalleryItem =
  | { type: "image"; id: string; src: string; alt: string; caption: string }
  | {
      type: "video";
      id: string;
      src: string;
      poster: string;
      alt: string;
      caption: string;
    };

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    id: "engine-room-wide",
    src: images.engineRoomWide,
    alt: "Wide view of a vessel engine room",
    caption: "Engine room overview",
  },
  {
    type: "video",
    id: "sample-overhaul-walkthrough",
    src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    poster: images.technicianDiagnostic,
    alt: "Placeholder video standing in for an engine overhaul walkthrough",
    caption: "Overhaul walkthrough (placeholder footage)",
  },
  {
    type: "image",
    id: "technician-tools",
    src: images.technicianTools,
    alt: "Precision technical work on marine equipment",
    caption: "Precision technical work",
  },
  {
    type: "image",
    id: "welder-sparks",
    src: images.welderSparks,
    alt: "Welder at work on a marine structure at dusk",
    caption: "On-site welding",
  },
  {
    type: "image",
    id: "engine-parts",
    src: images.engineParts,
    alt: "Rigging equipment inside a vessel engine room",
    caption: "Rigging and parts handling",
  },
  {
    type: "video",
    id: "sample-generator-service",
    src: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
    poster: images.dieselGeneratorInspection,
    alt: "Placeholder video standing in for a generator service callout",
    caption: "Generator service callout (placeholder footage)",
  },
  {
    type: "image",
    id: "cargo-ship-docked",
    src: images.cargoShipDocked,
    alt: "Cargo vessel docked at a container terminal",
    caption: "Cargo vessel docked",
  },
  {
    type: "image",
    id: "diesel-generator-inspection",
    src: images.dieselGeneratorInspection,
    alt: "Inspection of an auxiliary diesel generator",
    caption: "Generator inspection",
  },
  {
    type: "image",
    id: "tugboat-harbor",
    src: images.tugboatHarbor,
    alt: "Tugboat moored in harbor",
    caption: "Tugboat in harbor",
  },
  {
    type: "image",
    id: "engineer-hardhat",
    src: images.engineerHardhat,
    alt: "Marine engineer on site",
    caption: "On-site engineering support",
  },
];
