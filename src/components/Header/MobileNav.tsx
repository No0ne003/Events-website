"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { useLocale, useTranslations } from "next-intl";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Header");
  const localActive = useLocale();

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "/achievements", label: t("achievements") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <AlignJustify className="h-5 w-5" />
          <span className="sr-only">Toggle Mobile navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Icons.logo src="/logo-urba.png" alt="urba logo" className="mr-2" />
          <span className="sr-only">{siteConfig.name}</span>
        </MobileLink>
        <div className="size-full flex flex-col mt-5">
          {navLinks.map((link) => (
            <MobileLink
              onOpenChange={setOpen}
              key={link.href}
              href={`${localActive}${link.href}`}
              className={cn(
                "text-lg font-spectral h-16 flex justify-start items-center px-2 border-y-[1px] odd:border-none border-foreground",
              )}
            >
              {link.label}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinksProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinksProps) {
  const router = useRouter();
  return (
    <Link
      className={className}
      href={`/${href}`}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
