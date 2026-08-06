export const size = { width: 32, height: 32 };
export const contentType = "image/jpeg";

const LOGO_SRC =
  "https://res.cloudinary.com/dyp8gtllq/image/upload/v1786042065/WhatsApp_Image_2026-08-06_at_11.10.17_AM_cvi1bz.jpg";

export default async function Icon() {
  const res = await fetch(LOGO_SRC);
  const buffer = await res.arrayBuffer();
  return new Response(buffer, {
    headers: { "Content-Type": contentType },
  });
}
