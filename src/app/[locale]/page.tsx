"use client";

import { useLocale, useTranslations } from "next-intl";
import ImageAnimation from "@/components/Home/ImageAnimation";
import TitleAnimation from "@/components/Home/TitleAnimation";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const images = [
    "/festival-agicole.jpg",
    "/festival-national.jpg",
    "/festival-printemps.jpeg",
    "/marathon.jpg",
    "/mariage.jpg",
    "/semi-marathon-2.jpg",
    "/semi-marathon.jpg",
  ];

  const title = t("title");

  return (
    <div className="container flex-1 flex justify-center items-center relative">
      <ImageAnimation images={images} />

      <motion.div
        className="absolute w-full h-[35vh] bg-background top-[18%] md:top-[23%]"
        initial={{ y: "100%" }}
        animate={{ width: 0, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 5.2,
        }}
      />

      <TitleAnimation title={title} locale={locale} />
    </div>
  );
};

export default Home;
