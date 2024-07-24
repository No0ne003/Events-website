"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Home: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <div className="container flex-1 flex justify-center items-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px]">
        {images.map((url, index) => (
          <motion.div
            key={index}
            className="size-full absolute aspect-square"
            style={{
              background: `url(${url}) 50% 50% no-repeat`,
              backgroundSize: "cover",
            }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              ease: [0.87, 0, 0.13, 1],
              delay: 1 + 0.4 * index,
              duration: 2,
            }}
          ></motion.div>
        ))}
      </div>

      <div className="overlay absolute w-full h-[50vh] bottom-[-12rem] bg-background"></div>

      <motion.h1
        id="title"
        className="title text-[10em] font-bold font-mono mt-[20rem] overflow-hidden flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Home;
