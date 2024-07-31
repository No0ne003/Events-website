import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ImageAnimationProps {
  images: string[];
}

const ImageAnimation: React.FC<ImageAnimationProps> = ({ images }) => {
  return (
    <motion.div
      className="absolute w-[49vw] h-[140px] md:h-[230px] lg:w-[400px] lg:h-[280px] aspect-square rounded-md overflow-hidden"
      initial={{ scale: 1, y: "-50%" }}
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
          className="absolute w-full h-full rounded-md overflow-hidden"
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
