// Placeholder business details -- realistic Nigerian formats, flagged for
// the client to replace with real values before launch (see PRODUCT.md).
export const contact = {
  companyName: "Umendu Marine Engineering Services Limited",
  tagline: "Engineering Reliability at Sea",
  addressLine1: "14 Woji Road, GRA Phase 2",
  addressLine2: "Port Harcourt, Rivers State, Nigeria",
  phoneDisplay: "+234 84 461 2200",
  phoneHref: "tel:+2348446122200",
  alternatePhoneDisplay: "+234 812 690 8117",
  alternatePhoneHref: "tel:+2348126908117",
  mobileDisplay: "+234 803 214 7765",
  mobileHref: "tel:+2348032147765",
  whatsappNumber: "2349063163794",
  emailDisplay: "umenduengineeringservicesltd@gmail.com",
  emailHref: "mailto:umenduengineeringservicesltd@gmail.com",
  hours: "Mon - Sat, 8:00am - 6:00pm",
  emergencyNote: "Emergency line answered 24/7",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const engineBrands = [
  "Caterpillar",
  "Cummins",
  "MAK",
  "Niigata",
  "Yanmar",
  "Daihatsu",
  "MAN B&W",
  "Wartsila",
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Maintenance & Repairs",
        href: "/services/maintenance-repairs",
        description: "Routine servicing, overhauls, and emergency repairs.",
      },
      {
        label: "Engineering Services",
        href: "/services/engineering-services",
        description: "Diagnosis, consultancy, and general contracts.",
      },
      {
        label: "Other Services",
        href: "/services/other-services",
        description: "Logistics, procurement, staffing, and vessel hire.",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
