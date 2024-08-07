"use client";

import RefrencesItem from "./RefrencesItem";
import { motion } from "framer-motion";
import { fadeInUp, transitionSettings } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import SectionTitle from "@/components/ui/SectionTitle";

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
      className="py-8 overflow-x-hidden flex flex-col gap-5 justify-center items-center"
    >
      <SectionTitle title={t("our-references")} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="max-w-[90vw] sm:max-w-[70vw]"
      >
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
      </motion.div>
    </motion.section>
  );
}
