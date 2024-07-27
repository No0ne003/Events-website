"use client";

import { motion } from "framer-motion";
import React from "react";

interface TitleAnimationProps {
  title: string;
  locale: string;
}

const TitleAnimation: React.FC<TitleAnimationProps> = ({ title, locale }) => {
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
    <motion.h1
      className="text-[4em] lg:text-[5.3em] font-bold font-mono mb-[18rem] overflow-hidden flex"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {locale === "ar" ? (
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
              duration: 0.4,
              ease: [0.19, 1, 0.22, 1],
              delay: 5.5 + 0.1 * index,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      )}
    </motion.h1>
  );
};

export default TitleAnimation;
