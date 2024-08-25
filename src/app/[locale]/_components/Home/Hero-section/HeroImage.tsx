import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = [
  "/festival-agicole.jpg",
  "/festival-national.jpg",
  "/festival-printemps.jpeg",
  "/marathon.jpg",
  "/mariage.jpg",
  "/semi-marathon-2.jpg",
  "/semi-marathon.jpg",
];

const transition = { duration: 0.8, ease: "easeOut" };

export default function HeroImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[90vw] sm:max-w-[460px] lg:max-w-[600px] aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: 50 }}
          transition={transition}
          className="absolute inset-0"
        >
          <Image
            className="object-cover"
            src={IMAGES[currentIndex]}
            alt={`Hero Image ${currentIndex + 1}`}
            layout="fill"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 600px"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
