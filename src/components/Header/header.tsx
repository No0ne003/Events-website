import Image from "next/image";
import { Icons } from "../icons";

export default function Header() {
  return (
    <header className="z-10 w-screen border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <UrbaLogo />
      </div>
    </header>
  );
}

export function UrbaLogo() {
  return <Icons.logo />;
}
