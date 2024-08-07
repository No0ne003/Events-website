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
    { href: "/about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "/achievements", label: t("achievements") },
    { href: "/contact", label: t("contact") },
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
          <Icons.logo width={160} height={13} className="mr-2 " />
          <span className="sr-only">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-5">
          {navLinks.map((link) => (
            <MobileLink
              onOpenChange={setOpen}
              key={link.href}
              href={`${localActive}${link.href}`}
              className={cn(
                "font-spectral",
                link.label === t("contact")
                  ? "bg-primary text-primary-foreground hover:text-primary w-fit text-lg rounded-full px-3 py-1"
                  : null,
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
      href={href}
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
