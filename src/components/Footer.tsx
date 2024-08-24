import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const socialLinks = [
  {
    href: siteConfig.links.youtube,
    label: "Youtube",
    icon: <Youtube className="size-5" />,
  },
  {
    href: siteConfig.links.facebook,
    label: "Facebook",
    icon: <Facebook className="size-5" />,
  },
  {
    href: siteConfig.links.instagram,
    label: "Instagram",
    icon: <Instagram className="size-5" />,
  },
  {
    href: `mailto:${siteConfig.links.email}`,
    label: "Mail",
    icon: <Mail className="size-5" />,
  },
];

export default function Footer() {
  const t = useTranslations("Header");
  const localActive = useLocale();

  const links = [
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "/achievements", label: t("achievements") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-14">
          <div className="flex flex-col items-center md:items-start gap-5">
            <div>
              <Icons.logo
                src="/logo-urba2.png"
                alt="Urba logo"
                className="mb-4"
              />
              <div className="text-center text-xs text-primary-foreground/60">
                Copyright &copy; {new Date().getFullYear()} - All rights
                reserved.
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  aria-label={label}
                  className="transition-transform hover:scale-110 p-2 border-[1px] border-primary-foreground/40 rounded-full"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">{t("explore")}</h4>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={`${localActive}${link.href}`}
                  className="text-sm transition-colors hover:text-primary-foreground/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">{t("contact")}</h4>
            <address className="not-italic text-sm leading-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-primary-foreground/80"
              >
                {siteConfig.email}
              </a>
              <br />
              <a
                href={`tel:${siteConfig.tel}`}
                className="transition-colors hover:text-primary-foreground/80"
              >
                {siteConfig.tel}
              </a>
              <br />
              {siteConfig.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
