import { motion } from "framer-motion";
import React from "react";

interface ImageAnimationProps {
  images: string[];
}

const ImageAnimation: React.FC<ImageAnimationProps> = ({ images }) => {
  return (
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
        />
      ))}
    </motion.div>
  );
};

export default ImageAnimation;
