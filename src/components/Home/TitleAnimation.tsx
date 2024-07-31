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
}

const TitleAnimation: React.FC<TitleAnimationProps> = ({
  title,
  locale,
  className,
}) => {
  console.log(title);

  const renderTitle = () => {
    if (locale === "ar") {
      return (
        <>
          {title.map((word, index) => (
            <motion.div
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
                delay: 5.5 + 0.05 * index,
              }}
              className={cn("inline-block", word.className)}
            >
              {word.word}
            </motion.div>
          ))}
        </>
      );
    } else {
      return title.flatMap((wordObj, index) => (
        <motion.div
          key={index}
          className={cn("inline-block", wordObj.className)}
          initial={{ y: "40%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            delay: 5.5 + 0.8 * index,
          }}
        >
          {wordObj.word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ y: "60%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1],
                delay: 0.8 * index + 5.5 + 0.05 * letterIndex,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ));
    }
  };

  return (
    <motion.h1
      className={cn(
        "text-[2em] sm:text-[3em] lg:text-[5.3em] font-bold flex flex-wrap gap-5 justify-center overflow-hidden",
        locale === "ar" ? "flex-row-reverse" : "flex-row",
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
