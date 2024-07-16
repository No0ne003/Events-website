import Image from "next/image";
import { Icons } from "../icons";
import { MainNav } from "./MainNav";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="z-10 w-screen border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <UrbaLogo />
        <div className="flex-1 flex items-center justify-end space-x-2">
          <MainNav />
        </div>
      </div>
    </header>
  );
}

export function UrbaLogo() {
  return (
    <Link href="/">
      <Icons.logo />
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
