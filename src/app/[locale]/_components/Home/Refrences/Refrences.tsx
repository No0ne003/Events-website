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
      className="py-8 overflow-x-hidden flex flex-col gap-2 justify-center items-center"
    >
      <h1 className="text-3xl md:text-5xl font-semibold font-spectral">
        {t("our-references")}
      </h1>
      <div className="max-w-[70vw]">
        <Marquee
          autoFill
          pauseOnHover
          gradient
          gradientColor="#D6E2FF"
          gradientWidth={100}
        >
          {IMAGES.map((item, index) => (
            <RefrencesItem key={index} image={item} />
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
}
