import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC =
  "https://res.cloudinary.com/dyp8gtllq/image/upload/v1786042065/WhatsApp_Image_2026-08-06_at_11.10.17_AM_cvi1bz.jpg";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 shrink-0",
        className
      )}
    >
      <span className="relative size-9 shrink-0 overflow-hidden rounded-md">
        <Image src={LOGO_SRC} alt="Umendu Marine logo" fill sizes="36px" className="object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          Umendu Marine
        </span>
        <span className="text-[11px] tracking-wide text-current/60">
          Engineering Services
        </span>
      </span>
    </Link>
  );
}
