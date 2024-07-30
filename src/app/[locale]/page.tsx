"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import ImageAnimation from "@/components/Home/ImageAnimation";
import TitleAnimation from "@/components/Home/TitleAnimation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Constants
const IMAGES = [
  "/festival-agicole.jpg",
  "/festival-national.jpg",
  "/festival-printemps.jpeg",
  "/marathon.jpg",
  "/mariage.jpg",
  "/semi-marathon-2.jpg",
  "/semi-marathon.jpg",
];

const Home: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const messages = useMessages();
  const keys = messages.HomePage.title;

  const words = [
    { word: keys[0] },
    { word: keys[1] },
    { word: keys[2], className: "text-secondary font-bold" },
  ];

  return (
    <div className="flex-1">
      <div className="container flex flex-col justify-center items-center relative size-full">
        <div className="flex flex-col gap-10 justify-center items-center w-screen h-[400px]">
          <TitleAnimation locale={locale} title={words} arTitle={t("title")} />
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 6,
              duration: 0.8,
              ease: [0.19, 1, 0.22, 1],
            }}
            className={cn(
              "flex gap-8 justify-center items-center",
              locale === "ar" ? "flex-row-reverse" : "",
            )}
          >
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:text-secondary transition-all hover:bg-transparent border-secondary border-2 hover:shadow-secondary hover:shadow-2xl"
              asChild
            >
              <Link href={`${locale}/contact`}>{t("contact-us")}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background"
              asChild
            >
              <Link href={`${locale}/services`}>{t("discover-now")}</Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex justify-center items-center w-full">
          <ImageAnimation images={IMAGES} />
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
