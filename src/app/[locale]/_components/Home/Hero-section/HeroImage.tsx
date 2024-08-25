import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      className="relative w-full max-w-[90vw] sm:max-w-[460px] lg:max-w-[600px] aspect-[3/2] overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        className="object-cover"
        src="/semi-marathon.jpg"
        alt="Hero Image"
        layout="fill"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 600px"
        quality={85}
        priority
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
