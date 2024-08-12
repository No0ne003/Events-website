"use client";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { cn, fadeInUp, transitionSettings } from "@/lib/utils";

export default function Quote() {
  const t = useTranslations("HomePage");
  const quote = t("quote");
  const locale = useLocale();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
      className="py-10 bg-gradient-to-b from-primary/20 to-transparent"
    >
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <p
            className={cn(
              "lg:text-lg font-semibold leading-relaxed font-spectral mx-auto flex justify-center max:max-w-xs",
              locale ? "flex-row-reverse" : null,
            )}
          >
            <QuoteIcon
              className={cn(
                "size-10 lg:size-6 fill-secondary",
                locale ? null : "transform -scale-x-100",
              )}
            />
            {quote}
            <QuoteIcon
              className={cn(
                "size-10 lg:size-6 fill-secondary self-end",
                locale ? "transform -scale-x-100" : null,
              )}
            />
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
