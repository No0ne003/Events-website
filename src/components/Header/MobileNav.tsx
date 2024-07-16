"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { navLinks } from "./MainNav";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
          <Icons.logo className="mr-2 size-5" />
          <span className="sr-only">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-5">
          {navLinks.map((link) => (
            <MobileLink onOpenChange={setOpen} key={link.href} href={link.href} className={cn(link.label === 'Contact' ? 'bg-primary w-fit text-lg rounded-full px-3 py-1' : null)}>
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
