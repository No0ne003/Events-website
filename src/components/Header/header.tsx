import Image from "next/image";
import { Icons } from "../icons";
import { MainNav } from "./MainNav";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";
import LocalSwitcher from "../local-switcher";

export default function Header() {
  return (
    <header className="py-4 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <UrbaLogo />
        <div className="flex-1 flex items-center justify-end space-x-2">
          <MainNav />
          <MobileNav />
          <LocalSwitcher />
        </div>
      </div>
    </header>
  );
}

export function UrbaLogo() {
  return (
    <Link href="/" className="flex self-end">
      <Icons.logo />
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
