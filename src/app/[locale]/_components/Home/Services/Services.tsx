"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { cn, fadeInUp, transitionSettings } from "@/lib/utils";
import { useState, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ServiceListItem from "./ServiceListItem";
import ServiceDetail from "./ServiceDetail";

export default function Services() {
  const t = useTranslations("HomePage.services");
  const locale = useLocale();

  const services = useMemo(
    () => [
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
    ],
    [t],
  );

  const [currentService, setCurrentService] = useState(0);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
    >
      <div className="lg:container flex flex-col justify-center items-center gap-20">
        <div
          className={cn(
            "max-lg:container space-y-2",
            locale === "ar" ? "self-end" : "self-start",
          )}
        >
          <p
            className={cn(
              "uppercase text-muted-foreground italic text-sm",
              locale === "ar" ? "text-end" : null,
            )}
          >
            {t("what-we-do")}
          </p>
          <SectionTitle
            title={t("title")}
            id="services"
            className="text-start"
          />
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-5 size-full lg:h-[450px]">
          <div className="w-screen lg:w-1/3 ">
            <div className="size-full w-screen lg:max-w-xs overflow-x-scroll">
              <ul className="flex lg:flex-col items-start justify-start size-full max-lg:px-5">
                {services.map((item, index) => (
                  <ServiceListItem
                    key={index}
                    title={item.title}
                    isActive={index === currentService}
                    onClick={() => setCurrentService(index)}
                    index={index}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 max-lg:max-w-screen container">
            {services.map(
              (service, index) =>
                index === currentService && (
                  <ServiceDetail
                    key={index}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
