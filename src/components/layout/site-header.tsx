"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
                      className={cn(
                        "bg-transparent text-[13.5px] font-medium text-ink-foreground/85 hover:bg-white/8 hover:text-ink-foreground focus:bg-white/8 data-open:bg-white/8 data-open:text-ink-foreground",
                        isActive && "text-ink-foreground"
                      )}
                    >
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[320px] gap-1 p-1">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link href={child.href} className="flex-col items-start gap-0.5">
                                <span className="text-sm font-medium">
                                  {child.label}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-2.5 py-1.5 text-[13.5px] font-medium text-ink-foreground/85 hover:bg-white/8 hover:text-ink-foreground",
                        isActive && "text-ink-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" className="text-ink-foreground hover:bg-white/8 hover:text-ink-foreground">
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
              className="text-ink-foreground hover:bg-white/8 hover:text-ink-foreground lg:hidden"
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
              {navLinks.map((link) =>
                "children" in link && link.children ? (
                  <div key={link.label} className="flex flex-col">
                    <span className="px-3 pt-3 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <SheetClose asChild key={child.href}>
                        <Link
                          href={child.href}
                          className="rounded-md px-3 py-2.5 text-[15px] font-medium hover:bg-muted"
                        >
                          {child.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ) : (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-2.5 text-[15px] font-medium hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                )
              )}
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
