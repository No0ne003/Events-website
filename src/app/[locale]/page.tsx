"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import ImageAnimation from "@/components/Home/ImageAnimation";
import TitleAnimation from "@/components/Home/TitleAnimation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

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

  const words = keys.map((word, index) => ({
    word,
  }));

  const flipWords = messages.HomePage.titleSplit;

  return (
    <div className="flex-1">
      <div className="container flex flex-col justify-center items-center relative size-full">
        <div className="flex flex-col gap-10 mt-14 justify-center items-center max-w-4xl max-h-[500px]">
          <div className="size-full flex">
            <TitleAnimation
              locale={locale}
              title={words}
              flipWords={flipWords}
            />
          </div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 7,
              duration: 0.8,
              ease: [0.19, 1, 0.22, 1],
            }}
            className={cn(
              "flex gap-4 md:gap-8 justify-center items-center",
              locale === "ar" ? "flex-row-reverse" : "",
            )}
          >
            <Button
              variant="shine"
              size="lg"
              className="bg-primary hover:bg-primary/90 group relative"
              asChild
            >
              <Link href={`${locale}/contact`}>
                {t("contact-us")}
                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:translate-x-0 group-hover:pl-3 group-hover:opacity-100">
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </Button>
            <Button variant="linkHover1" asChild>
              <Link href={`${locale}/services`}>{t("discover-now")}</Link>
            </Button>
          </motion.div>
        </div>
        <div className="flex justify-center items-center w-full">
          <ImageAnimation images={IMAGES} />
        </div>
      </div>
    </div>
  );
};

export default Home;
