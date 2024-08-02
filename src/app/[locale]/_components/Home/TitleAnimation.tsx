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
                delay: 5.5 + 0.2 * index,
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
          className={cn(
            "relative inline-block overflow-hidden",
            wordObj.className,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.01 * index,
          }}
        >
          {wordObj.word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ y: "60%", opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1],
                delay: 0.5 * index + 0.05 * letterIndex,
              }}
              className="relative inline-block"
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
        "relative text-[3em] lg:text-[4.3em] font-bold flex flex-wrap gap-3 justify-center ",
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
          transition: { staggerChildren: 0.1, delay: 5.8 },
        },
      }}
    >
      {renderTitle()}
      <FlipWords className="text-secondary" words={flipWords} duration={5000} />
    </motion.h1>
  );
};

export default TitleAnimation;
