"use client";

import useMeasure from "react-use-measure";
import RefrencesItem from "./RefrencesItem";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const FAST_DURATION = 15;
  const SLOW_DURATION = 65;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 60;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <section className="py-8 overflow-x-hidden">
      <motion.div
        className="relative left-0 flex gap-8 md:gap-16 lg:gap-[7.5rem]"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...IMAGES, ...IMAGES].map((item, index) => (
          <RefrencesItem key={index} image={item} />
        ))}
      </motion.div>
    </section>
  );
}
