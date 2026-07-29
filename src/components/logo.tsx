import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 shrink-0",
        className
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-md bg-primary font-mono text-[13px] font-bold tracking-tight text-primary-foreground">
        UM
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
