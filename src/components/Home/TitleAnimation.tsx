import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface TitleAnimationProps {
  title: {
    word: string;
    className?: string;
  }[];
  locale: string;
  className?: string;
  arTitle?: string;
}

// Helper Functions
const createLetterArray = (title: TitleAnimationProps["title"]) =>
  title.flatMap(({ word, className }, wordIndex) =>
    word
      .split("")
      .map((letter, letterIndex) => ({
        letter,
        className: className || null,
      }))
      .concat(
        wordIndex < title.length - 1
          ? [{ letter: "\u00A0", className: null }]
          : [],
      ),
  );

const TitleAnimation: React.FC<TitleAnimationProps> = ({
  title,
  locale,
  className,
  arTitle,
}) => {
  const letterArray = createLetterArray(title);

  const renderTitle = () => {
    if (locale === "ar") {
      return (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            delay: 5.5,
          }}
        >
          {arTitle}
        </motion.div>
      );
    } else {
      return letterArray.map((letterObj, index) => (
        <motion.span
          key={index}
          className={cn("inline-block", letterObj.className)}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            delay: 5.5 + 0.05 * index,
          }}
        >
          {letterObj.letter}
        </motion.span>
      ));
    }
  };

  return (
    <motion.h1
      className={cn(
        "text-[2em] sm:text-[3em] lg:text-[5.3em] font-bold flex overflow-hidden",
        className,
      )}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {renderTitle()}
    </motion.h1>
  );
};

export default TitleAnimation;
