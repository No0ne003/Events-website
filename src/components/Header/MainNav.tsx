"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation links data
export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

// NavLink component with dynamic styles based on current pathname
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
          ? cn(
              "before:content-['*'] before:text-2xl before:mr-1",
              label === "Contact" && "before:content-none",
            )
          : null,
        className,
      )}
    >
      {label}
    </Link>
  );
};

// MainNav component rendering the navigation links
export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          className={cn(
            link.label === "Contact" &&
              "hover:no-underline bg-primary rounded-full px-3 py-1 transition-all hover:px-5 hover:bg-transparent border-primary border-[2px] hover:shadow-primary hover:shadow-2xl",
          )}
        />
      ))}
    </nav>
  );
}
