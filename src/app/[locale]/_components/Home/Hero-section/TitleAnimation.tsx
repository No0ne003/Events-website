import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

interface TitleAnimationProps {
  title: {
    word: string;
    className?: string;
  }[];
  locale: string;
  flipWords: string[];
  className?: string;
}

const TitleAnimation: React.FC<TitleAnimationProps> = ({
  title,
  locale,
  flipWords,
  className,
}) => {
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
                delay: 0.2 * index,
              }}
              className={cn("inline-block font-sans", word.className)}
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
          className={cn(
            "relative inline-block overflow-hidden",
            wordObj.className,
          )}
          initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{
            duration: 2,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.4 * index,
          }}
        >
          {wordObj.word.split("").map((letter, letterIndex) => (
            <span key={letterIndex} className="relative inline-block">
              {letter}
            </span>
          ))}
        </motion.div>
      ));
    }
  };

  return (
    <motion.h1
      className={cn(
        "relative text-4xl sm:text-6xl lg:text-[5.3em] font-bold flex flex-wrap gap-3 justify-center font-spectral",
        locale === "ar" ? "flex-row-reverse" : "flex-row",
        className,
      )}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -40 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      {renderTitle()}
      <FlipWords
        className={cn("text-secondary", locale === "ar" ? "font-sans" : null)}
        words={flipWords}
        duration={5000}
      />
    </motion.h1>
  );
};

export default TitleAnimation;
