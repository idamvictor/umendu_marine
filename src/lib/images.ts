// Real Umendu Marine Services photography, hosted on Cloudinary.

const A = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.38_PM_ihdctp.jpg";
const B = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.52_PM_1_egagtk.jpg";
const C = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.51_PM_wpn6xp.jpg";
const D = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.30_PM_mbedlb.jpg";
const E = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873840/WhatsApp_Image_2026-08-04_at_4.21.15_PM_dck79b.jpg";
const F = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873840/WhatsApp_Image_2026-08-04_at_3.50.50_PM_vbfpvi.jpg";
const G = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873840/WhatsApp_Image_2026-08-04_at_4.20.41_PM_il7oqa.jpg";
const H = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.52_PM_2_txypw1.jpg";
const I = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873841/WhatsApp_Image_2026-08-04_at_4.21.14_PM_mkjjno.jpg";
const J = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873841/WhatsApp_Image_2026-08-04_at_4.20.57_PM_b8hiad.jpg";
const K = "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873841/WhatsApp_Image_2026-08-04_at_3.50.52_PM_axjxk9.jpg";

export const images = {
  heroEngineRoom: A,
  engineRoomWide: B,
  engineCloseup: C,
  engineParts: D,
  shipEngineDetail: E,
  technicianAtWork: F,
  technicianDiagnostic: G,
  technicianTools: H,
  welderAtWork: I,
  welderSparks: J,
  cargoPortCranes: K,
  cargoShipDocked: A,
  portOperations: B,
  dieselGeneratorInspection: C,
  generatorMaintenance: D,
  tugboatAtSea: E,
  tugboatHarbor: F,
  engineerHardhat: G,
  engineerWorkwear: H,
} as const;

export type ImageKey = keyof typeof images;
