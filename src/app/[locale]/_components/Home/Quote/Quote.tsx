"use client";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Quote() {
  const t = useTranslations("HomePage");
  const quote = t("quote");
  const locale = useLocale();

  return (
    <section className="py-10 bg-gradient-to-b from-primary/20 to-transparent">
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <QuoteIcon
            className={cn(
              "size-8 fill-secondary",
              locale === "ar" ? null : "transform -scale-x-100",
            )}
          />
          <p
            className={cn(
              "lg:text-lg font-semibold leading-relaxed font-spectral mx-auto text-start max:max-w-xs pl-16",
              locale === "ar" ? "flex-row-reverse" : null,
            )}
          >
            {quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
