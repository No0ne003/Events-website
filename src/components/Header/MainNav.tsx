"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/achievements", label: "Our Achievements" },
  { href: "/contact", label: "Contact" },
];

const NavLink: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
        pathname === href ? "text-foreground" : "text-foreground/60",
      )}
    >
      {label}
    </Link>
  );
};

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
