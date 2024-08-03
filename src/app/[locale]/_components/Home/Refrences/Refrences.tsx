"use client";

import useMeasure from "react-use-measure";
import RefrencesItem from "./RefrencesItem";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

export default function Refrences() {
  const IMAGES = [
    "/references/central-logo.png",
    "/references/go-sport-logo.png",
    "/references/logo-city-sport.png",
    "/references/logo-mercure-international.png",
    "/references/logo-omrane.png",
    "/references/Logo_Sultan.png",
    "/references/maroc-logo.png",
    "/references/pepsi-logo.png",
    "/references/Volkswagen-Logo.svg",
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 60;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="py-8">
      <motion.div
        className="absolute left-0 flex gap-[7.5rem]"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...IMAGES, ...IMAGES].map((item, index) => (
          <RefrencesItem key={index} image={item} />
        ))}
      </motion.div>
    </div>
  );
}
