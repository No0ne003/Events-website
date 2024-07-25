"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink: React.FC<{
  href: string;
  label: string;
  className?: string;
}> = ({ href, label, className }) => {
  const pathname = usePathname();
  return (
    // <motion.div
    //   initial={{ y: "-300%" }}
    //   animate={{ y: 0 }}
    //   transition={{
    //     duration: 0.8,
    //     ease: [0.19, 1, 0.22, 1],
    //   }}
    // >
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
    // </motion.div>
  );
};

// MainNav component rendering the navigation links
export function MainNav() {
  const t = useTranslations("Header"); // Use translations from the 'Header' namespace

  // Navigation links data using translations
  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/achievements", label: t("achievements") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          className={cn(
            link.label === t("contact") &&
              "hover:no-underline bg-primary rounded-full px-3 py-1 transition-all hover:px-5 hover:bg-transparent border-primary border-[2px] hover:shadow-primary hover:shadow-2xl",
          )}
        />
      ))}
    </nav>
  );
}
