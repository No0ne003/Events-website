"use client";

import RefrencesItem from "./RefrencesItem";
import { motion } from "framer-motion";
import { fadeInUp, transitionSettings } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";

export default function Refrences() {
  const t = useTranslations("HomePage");

  const IMAGES = [
    "/references/central-logo.png",
    "/references/go-sport-logo.png",
    "/references/logo-city-sport.png",
    "/references/logo-mercure-international.png",
    "/references/logo-omrane.png",
    "/references/Logo_Sultan.png",
    "/references/maroc-logo.png",
    "/references/pepsi-logo.png",
    "/references/Volkswagen-Logo.svg",
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
      className="py-8 overflow-x-hidden"
    >
      <h1 className="text-2xl font-bold text-center decoration-secondary underline underline-offset-4 decoration-4 font-spectral">
        {t("our-references")}
      </h1>
      <Marquee autoFill pauseOnHover gradient gradientColor="#D6E2FF">
        {IMAGES.map((item, index) => (
          <RefrencesItem key={index} image={item} />
        ))}
      </Marquee>
    </motion.section>
  );
}
