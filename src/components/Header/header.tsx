"use client";

import Image from "next/image";
import { Icons } from "../icons";
import { MainNav } from "./MainNav";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";
import LocalSwitcher from "../local-switcher";
import { motion } from "framer-motion";
import { fadeInUp, transitionSettings } from "@/lib/utils";

export default function Header() {
  return (
    <header className="relative py-4 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <motion.div
        initial={{ y: "-300%" }}
        animate={{ y: 0 }}
        transition={{
          delay: 5.5,
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="absolute top-0 h-[90px] w-screen bg-gradient-to-b from-primary/20 to-transparent"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={transitionSettings}
        className="container flex h-14 max-w-screen-2xl items-center"
      >
        <UrbaLogo />
        <div className="flex-1 flex items-center justify-end space-x-8">
          <MainNav />
          <LocalSwitcher />
          <MobileNav />
        </div>
      </motion.div>
    </header>
  );
}

export function UrbaLogo() {
  return (
    <Link href="/" className="flex self-end shadow-primary">
      <Icons.logo width={160} height={13} />
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
