// Real project photography and footage hosted on Cloudinary.
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

function videoPoster(src: string) {
  return src.replace(/\.mp4$/, ".jpg");
}

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    id: "site-photo-1",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.38_PM_ihdctp.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-2",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.52_PM_1_egagtk.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-3",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.51_PM_wpn6xp.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-4",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.30_PM_mbedlb.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-5",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873840/WhatsApp_Image_2026-08-04_at_4.21.15_PM_dck79b.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-6",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873840/WhatsApp_Image_2026-08-04_at_3.50.50_PM_vbfpvi.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-7",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873840/WhatsApp_Image_2026-08-04_at_4.20.41_PM_il7oqa.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-8",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873839/WhatsApp_Image_2026-08-04_at_3.50.52_PM_2_txypw1.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-9",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873841/WhatsApp_Image_2026-08-04_at_4.21.14_PM_mkjjno.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-10",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873841/WhatsApp_Image_2026-08-04_at_4.20.57_PM_b8hiad.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  {
    type: "image",
    id: "site-photo-11",
    src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1785873841/WhatsApp_Image_2026-08-04_at_3.50.52_PM_axjxk9.jpg",
    alt: "Umendu Marine Services project photo",
    caption: "On-site work",
  },
  ...[
    "https://res.cloudinary.com/dyp8gtllq/video/upload/v1785873950/WhatsApp_Video_2026-08-04_at_3.50.51_PM_ilmmkb.mp4",
    "https://res.cloudinary.com/dyp8gtllq/video/upload/v1785873951/WhatsApp_Video_2026-08-04_at_3.50.50_PM_rxqt6f.mp4",
    "https://res.cloudinary.com/dyp8gtllq/video/upload/v1785873952/WhatsApp_Video_2026-08-04_at_4.21.14_PM_wyqynx.mp4",
    "https://res.cloudinary.com/dyp8gtllq/video/upload/v1785873953/WhatsApp_Video_2026-08-04_at_3.50.51_PM_1_y5wrgx.mp4",
    "https://res.cloudinary.com/dyp8gtllq/video/upload/v1785873968/WhatsApp_Video_2026-08-04_at_3.50.36_PM_qqdzwb.mp4",
  ].map(
    (src, index): GalleryItem => ({
      type: "video",
      id: `site-video-${index + 1}`,
      src,
      poster: videoPoster(src),
      alt: "Umendu Marine Services project video",
      caption: "Project footage",
    })
  ),
];
