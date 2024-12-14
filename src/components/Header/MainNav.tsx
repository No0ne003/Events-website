"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const t = useTranslations("Header");

  const navLinks = [
    { href: "#contact", label: t("contact") },
    { href: "/achievements", label: t("achievements") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
  ];

  const localActive = useLocale();

  return (
    <nav
      className={cn(
        "flex items-center gap-4 lg:gap-6",
        localActive ? "flex-row-reverse" : null,
      )}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={`${localActive}${link.href}`}
          label={link.label}
        />
      ))}
    </nav>
  );
}

const NavLink: React.FC<{
  href: string;
  label: string;
  className?: string;
}> = ({ href, label, className }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/${href}`}
      className={cn(
        "relative text-sm md:text-base font-medium transition-transform hover:scale-110 hidden sm:inline-block",
        pathname === href
          ? cn("before:content-['*'] before:text-2xl before:mr-1")
          : null,
        className,
      )}
    >
      {label}
    </Link>
  );
};
