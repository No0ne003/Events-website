"use client";
import TitleAnimation from "./TitleAnimation";
import HeroButton from "./HeroButtons";
import HeroImage from "./HeroImage";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

export default function Hero({
  locale,
  title,
  titleSplit,
  contactUs,
  discoverNow,
  subHeading,
}: {
  locale: string;
  title: string[];
  titleSplit: string[];
  contactUs: string;
  discoverNow: string;
  subHeading: string;
}) {
  const words = title.map((word, index) => ({
    word,
  }));

  return (
    <div className="container flex flex-col gap-10 justify-start items-center relative w-screen h-fit">
      <div className="flex flex-col gap-10 mt-16 lg:mb-0 justify-center items-center max-w-4xl max-h-[500px]">
        <div className="size-full flex flex-col justify-center items-center gap-10">
          <TitleAnimation
            locale={locale}
            title={words}
            flipWords={titleSplit}
          />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{
              duration: 1,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="text-muted-foreground text-center text-base font-medium max-w-2xl"
          >
            {subHeading}
          </motion.p>
        </div>
        <HeroButton
          locale={locale}
          contactUs={contactUs}
          discoverNow={discoverNow}
        />
      </div>
      {/*<div className="flex justify-center items-center max-w-full h-[300px] lg:h-[440px]">
        <ImageAnimation images={IMAGES} />
      </div>*/}
      <HeroImage />
    </div>
  );
}
