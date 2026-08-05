"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { List, ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navLinks, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              if ("children" in link && link.children) {
                return (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger
                      onClick={(event) => {
                        event.preventDefault();
                        router.push(link.href);
                      }}
                      className={cn(
                        "bg-transparent text-[13.5px] font-medium transition-colors hover:!bg-white/8 focus:!bg-white/8 data-open:!bg-white/8",
                        isActive
                          ? "text-primary bg-white/5 font-semibold"
                          : "text-ink-foreground/85 hover:!text-ink-foreground data-open:!text-ink-foreground"
                      )}
                    >
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[320px] gap-1 p-1">
                        {link.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <NavigationMenuLink asChild active={isChildActive}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "flex-col items-start gap-0.5 transition-colors",
                                    isChildActive ? "text-primary" : "text-foreground"
                                  )}
                                >
                                  <span className="text-sm font-medium">
                                    {child.label}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {child.description}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "rounded-lg px-2.5 py-1.5 text-[13.5px] font-medium transition-colors hover:!bg-white/8 focus:!bg-white/8",
                      isActive
                        ? "text-primary bg-white/5 font-semibold"
                        : "text-ink-foreground/85 hover:!text-ink-foreground"
                    )}
                  >
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" className="text-ink-foreground hover:!bg-white/8 hover:!text-ink-foreground focus:!bg-white/8">
            <a href={whatsappHref("Hello, I'd like to speak with an engineer about my vessel.")} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo data-icon="inline-start" weight="fill" />
              WhatsApp
            </a>
          </Button>
          <Button asChild>
            <Link href="/contact">
              Request a Quote
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-ink-foreground hover:!bg-white/8 hover:!text-ink-foreground focus:!bg-white/8 lg:hidden"
              aria-label="Open menu"
            >
              <List />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0 sm:w-[340px]">
            <SheetHeader className="border-b px-5 py-4">
              <SheetTitle asChild>
                <Logo className="text-foreground" />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-3 py-4">
              {navLinks.map((link) => {
                const isLinkActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                
                if ("children" in link && link.children) {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="px-3 pt-3 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors",
                                isChildActive
                                  ? "bg-primary/10 text-primary border-l-2 border-primary rounded-l-none pl-2.5"
                                  : "text-foreground/80 hover:bg-muted"
                              )}
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </div>
                  );
                }
                
                return (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors",
                        isLinkActive
                          ? "bg-primary/10 text-primary border-l-2 border-primary rounded-l-none pl-2.5"
                          : "text-foreground/80 hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
            <SheetFooter className="border-t">
              <Button asChild variant="outline">
                <a href={whatsappHref("Hello, I'd like to speak with an engineer about my vessel.")} target="_blank" rel="noopener noreferrer">
                  <WhatsappLogo data-icon="inline-start" weight="fill" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
