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

  return (
    <div className="container flex-1 flex justify-center items-center relative">
      <motion.div
        className="absolute w-[400px] h-[300px]"
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
            className="size-full absolute"
            style={{
              background: `url(${url}) 50% 50% no-repeat`,
              backgroundSize: "cover",
            }}
            initial={{ scale: 0, y: "100%" }}
            animate={{ scale: 1, y: "-10%" }}
            transition={{
              scale: { duration: 1, delay: 0.4 * index },
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
        className="absolute w-full h-[30vh] bg-background"
        initial={{ y: "100%", scale: 1 }}
        animate={{ scale: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 5.2,
        }}
      />

      <motion.h1
        className="text-[10em] font-bold font-mono mb-[18rem] overflow-hidden flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
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
        ))}
      </motion.h1>
    </div>
  );
};

export default Home;
