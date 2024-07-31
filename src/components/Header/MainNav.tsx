"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink: React.FC<{
  href: string;
  label: string;
  className?: string;
}> = ({ href, label, className }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
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

export function MainNav() {
  const t = useTranslations("Header");

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/achievements", label: t("achievements") },
    { href: "/contact", label: t("contact") },
  ];

  const localActive = useLocale();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
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
