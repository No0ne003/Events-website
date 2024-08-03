import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

interface ImageAnimationProps {
  images: string[];
}

const ImageAnimation: React.FC<ImageAnimationProps> = ({ images }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.div
      className="w-[50vw] h-[140px] sm:w-[260px] lg:w-[360px] lg:h-[220px] border-background border-2 rounded-md overflow-hidden"
      initial={{ scale: 1, y: isMobile ? "-50vh" : "-50vh" }}
      animate={{ scale: 2, y: "0%" }}
      transition={{
        duration: 2,
        ease: [0.19, 1, 0.22, 1],
        delay: 5.5,
      }}
    >
      {images.map((url, index) => (
        <motion.div
          key={index}
          className="absolute size-full rounded-md overflow-hidden"
          initial={{ y: "150%" }}
          animate={{ y: "0%" }}
          transition={{
            ease: [0.87, 0, 0.13, 1],
            delay: 1 + 0.4 * index,
            duration: 2,
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={url}
            alt="test"
            layout="fill"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageAnimation;
