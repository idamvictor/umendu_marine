// Real, verified Unsplash photography (industrial / marine engineering
// subjects). No stock-agency placeholders or generated fakes -- every id
// below resolves to a real photo. Replace with the client's own photography
// as it becomes available (see PRODUCT.md "Evidence on Hand").

function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  heroEngineRoom: unsplash("1660543228631-3f2341090afe", "q=80&w=1800&auto=format&fit=crop"),
  engineRoomWide: unsplash("1652837135894-cd1d7f74588a", "q=80&w=1800&auto=format&fit=crop"),
  engineCloseup: unsplash("1523559094051-53bac879eb80", "q=80&w=1400&auto=format&fit=crop"),
  engineParts: unsplash("1652837135986-d737901cc7d7", "q=80&w=1400&auto=format&fit=crop"),
  shipEngineDetail: unsplash("1608062720349-a044e289748b", "q=80&w=1400&auto=format&fit=crop"),
  technicianAtWork: unsplash("1581092160562-40aa08e78837", "q=80&w=1400&auto=format&fit=crop"),
  technicianDiagnostic: unsplash("1621905251918-48416bd8575a", "q=80&w=1400&auto=format&fit=crop"),
  technicianTools: unsplash("1581092163144-b7ae3c00adbc", "q=80&w=1400&auto=format&fit=crop"),
  welderAtWork: unsplash("1455165814004-1126a7199f9b", "q=80&w=1400&auto=format&fit=crop"),
  welderSparks: unsplash("1508188609340-e8068b599193", "q=80&w=1400&auto=format&fit=crop"),
  cargoPortCranes: unsplash("1606185540834-d6e7483ee1a4", "q=80&w=1800&auto=format&fit=crop"),
  cargoPortContainers: unsplash("1678182451047-196f22a4143e", "q=80&w=1400&auto=format&fit=crop"),
  cargoShipDocked: unsplash("1670121180530-cfcba4438038", "q=80&w=1400&auto=format&fit=crop"),
  portOperations: unsplash("1601311852860-1d8f42381551", "q=80&w=1800&auto=format&fit=crop"),
  dieselGeneratorInspection: unsplash("1636867759143-c28c1e909bd3", "q=80&w=1400&auto=format&fit=crop"),
  generatorMaintenance: unsplash("1637296001293-43ec1ac4e5ed", "q=80&w=1400&auto=format&fit=crop"),
  tugboatAtSea: unsplash("1558613812-da76d80cca11", "q=80&w=1800&auto=format&fit=crop"),
  tugboatHarbor: unsplash("1527314392553-2c7bded21b23", "q=80&w=1400&auto=format&fit=crop"),
  controlRoomPanel: unsplash("1581092795360-fd1ca04f0952", "q=80&w=1400&auto=format&fit=crop"),
  controlRoomGauges: unsplash("1589186161289-9eb8898086df", "q=80&w=1400&auto=format&fit=crop"),
  engineerHardhat: unsplash("1621905253185-95614217f357", "q=80&w=1400&auto=format&fit=crop"),
  engineerWorkwear: unsplash("1567954970774-58d6aa6c50dc", "q=80&w=1400&auto=format&fit=crop"),
} as const;

export type ImageKey = keyof typeof images;
