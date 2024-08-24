import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const socialLinks = [
  {
    href: siteConfig.links.youtube,
    label: "Youtube",
    icon: <Youtube className="size-4" />,
  },
  {
    href: siteConfig.links.facebook,
    label: "Facebook",
    icon: <Facebook className="size-4" />,
  },
  {
    href: siteConfig.links.instagram,
    label: "Instagram",
    icon: <Instagram className="size-4" />,
  },
  {
    href: `mailto:${siteConfig.links.email}`,
    label: "Mail",
    icon: <Mail className="size-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <Icons.logo src="/logo-urba2.png" alt="urba logo" />
            <div className="flex w-full justify-between items-center">
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
        </div>
      </div>
    </footer>
  );
}
