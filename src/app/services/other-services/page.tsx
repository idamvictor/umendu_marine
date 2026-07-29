import type { Metadata } from "next";
import {
  Truck,
  Package,
  Users,
  Anchor,
  ClipboardText,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/sections/page-intro";
import { OfferList, type OfferItem } from "@/components/sections/offer-list";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Other Services",
  description:
    "Maritime logistics, marine procurement, technician staffing, and vessel hiring, supporting every side of your marine operations.",
};

const offers: OfferItem[] = [
  {
    icon: Truck,
    title: "Maritime Logistics",
    description:
      "Coordinated logistics support to keep your marine operations moving smoothly.",
  },
  {
    icon: Package,
    title: "Supply of Ship Engine Parts",
    description:
      "Sourcing and supply of genuine and quality engine parts for a wide range of diesel engine brands.",
  },
  {
    icon: Users,
    title: "Supply of Competent Technicians",
    description:
      "Skilled, experienced technicians available to work on-site, wherever your project requires them.",
  },
  {
    icon: Anchor,
    title: "Vessel Hiring & Leasing",
    description:
      "Flexible vessel hiring and leasing solutions tailored to your operational needs.",
  },
  {
    icon: ClipboardText,
    title: "Marine Procurement",
    description:
      "Reliable procurement services for marine equipment, parts, and supplies.",
  },
  {
    icon: Stack,
    title: "Marine Services",
    description:
      "Additional marine support services designed around our clients' specific operational demands.",
  },
];

export default function OtherServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Other Services"
        title="Full support for your marine operations"
        description="We know marine operations require more than engine repairs. That's why we offer a wider range of services to support the full scope of your maritime needs."
      />

      <OfferList heading="What we offer" items={offers} />

      <CtaBand
        title="Tell us what your operation needs."
        description="We'll help you find the right solution."
      />
    </>
  );
}
