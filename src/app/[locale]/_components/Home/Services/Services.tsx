"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { cn, fadeInUp, transitionSettings } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Services() {
  const t = useTranslations("HomePage.services");

  const services = [
    {
      title: t("service-1.title"),
      description: t("service-1.description"),
      image: "/services/organisation-des-evenements.png",
    },
    {
      title: t("service-2.title"),
      description: t("service-2.description"),
      image: "/services/couvertures-mediatique.png",
    },
    {
      title: t("service-3.title"),
      description: t("service-3.description"),
      image: "/services/communication-visuelle.png",
    },
    {
      title: t("service-4.title"),
      description: t("service-4.description"),
      image: "/services/amenagements-decor.png",
    },
    {
      title: t("service-5.title"),
      description: t("service-5.description"),
      image: "/services/location-materiel.png",
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  const handleTabClick = (index: number) => {
    setCurrentService(index);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
    >
      <div className="lg:container flex flex-col justify-center items-center gap-20">
        <div className="max-lg:container space-y-2 self-start">
          <p className="uppercase text-muted-foreground italic text-sm">
            {t("Header.services")}
          </p>
          <SectionTitle
            title="ELEVATE YOUR VISION WITH OUR TOUCH."
            id="services"
            className="text-start"
          />
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-5 size-full lg:h-[450px]">
          <div className="w-screen lg:w-1/3 ">
            <div className="size-full w-screen lg:max-w-xs overflow-x-scroll">
              <ul className="flex lg:flex-col items-start justify-start size-full max-lg:px-5">
                {services.map((item, index) => (
                  <motion.li
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.19, 1, 0.22, 1],
                      delay: 0.03 * index,
                    }}
                    className={cn(
                      "flex items-center w-full h-[60px] py-4 px-3 hover:text-secondary/80 cursor-pointer uppercase max-lg:text-xs",
                      index === currentService
                        ? "bg-secondary/80 text-secondary-foreground hover:text-secondary-foreground/90"
                        : null,
                    )}
                    onClick={() => handleTabClick(index)}
                    key={index}
                  >
                    {item.title}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 max-lg:max-w-screen container">
            {services.map((service, index) =>
              index === currentService ? (
                <div
                  className="relative flex flex-col md:flex-row justify-end items-center gap-5"
                  key={index}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="self-start z-20 max-w-xl lg:mt-10 bg-background/20 backdrop-blur-3xl rounded-lg lg:absolute lg:left-0"
                  >
                    <p className="text-muted-foregroun py-5 px-3 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>

                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="z-10 rounded-sm max-sm:w-screen size-[300px] lg:size-[400px] lg:mr-10"
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
