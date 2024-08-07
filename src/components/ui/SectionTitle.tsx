"use client";
import { motion } from "framer-motion";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="text-center text-3xl md:text-5xl font-medium font-spectral"
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
