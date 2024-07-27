"use client";

import { useLocale, useTranslations } from "next-intl";
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

  return (
    <div className="container flex-1 flex justify-center items-center relative overflow-x-hidden">
      <motion.div
        className="absolute w-[49vw] h-[160px] aspect-video md:h-[250px] lg:w-[400px] lg:h-[300px] lg:aspect-square rounded-md overflow-hidden"
        initial={{ scale: 1, y: "0%" }}
        animate={{ scale: 2, y: "140%" }}
        transition={{
          duration: 2,
          ease: [0.19, 1, 0.22, 1],
          delay: 5.5,
        }}
      >
        {images.map((url, index) => (
          <motion.div
            key={index}
            className="size-full absolute rounded-md"
            style={{
              background: `url(${url}) 50% 50% no-repeat`,
              backgroundSize: "cover",
            }}
            initial={{ scale: 0, y: "100%" }}
            animate={{ scale: 1, y: "-15%" }}
            transition={{
              scale: { duration: 1, delay: 1 },
              y: {
                ease: [0.87, 0, 0.13, 1],
                delay: 1 + 0.4 * index,
                duration: 2,
              },
            }}
          ></motion.div>
        ))}
      </motion.div>

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

      <motion.h1
        className="text-[4em] lg:text-[8em] font-bold font-mono mb-[18rem] overflow-hidden flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {useLocale() === "ar" ? (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 5.5,
              ease: [0.19, 1, 0.22, 1],
              duration: 0.8,
            }}
          >
            {title}
          </motion.div>
        ) : (
          title.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
                delay: 5.5 + 0.1 * index,
              }}
            >
              {char}
            </motion.span>
          ))
        )}
      </motion.h1>
    </div>
  );
};

export default Home;
