"use client";

import { useLocale, useTranslations } from "next-intl";
import ImageAnimation from "@/components/Home/ImageAnimation";
import TitleAnimation from "@/components/Home/TitleAnimation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const localActive = useLocale();

  return (
    <div className="flex-1">
      <div className="container flex flex-col justify-center items-center relative size-full">
        <div className="flex flex-col gap-10 justify-center items-center w-screen h-[400px]">
          <TitleAnimation title={title} locale={locale} />
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 6,
              duration: 0.8,
              ease: [0.19, 1, 0.22, 1],
            }}
            className={cn(
              "flex gap-8 jusitfy-center items-center",
              localActive === "ar" ? "flex-row-reverse" : null,
            )}
          >
            <Button variant={"secondary"} size="xl" asChild>
              <Link href={`${localActive}/contact`}>{t("contact-us")}</Link>
            </Button>
            <Button variant={"outline"} size="lg">
              <Link href={`${localActive}/services`}>{t("discover-now")}</Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex justify-center items-center w-full">
          <ImageAnimation images={images} />
        </div>
      </div>

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
    </div>
  );
};

export default Home;
