"use client";

import { useLocale, useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BOLD_TEXT_HTML =
  "<strong class='text-foreground/80'>URBA EVENTS INTERNATIONAL</strong>";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.19, 1, 0.22, 1],
  },
};

export default function About() {
  const t = useTranslations("HomePage.about-us");
  const title = t.raw("title");
  const description: string[] = t.raw("description");
  const locale = useLocale();

  return (
    <section className="py-16 flex flex-col gap-10 bg-primary/20">
      <SectionTitle title={title} id="about" />

      <div className="container flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-8">
        <motion.div
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 0.3 }}
          className="relative w-full lg:w-1/2 h-full overflow-hidden"
        >
          <Image
            src="/semi-marathon-2.jpg"
            alt="Marathon event"
            layout="responsive"
            width={500}
            height={400}
            className="rounded-lg shadow-lg transition-transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-lg pointer-events-none"></div>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 p-6">
          <div className="max-w-2xl flex flex-col gap-4 leading-relaxed">
            {description.map((paragraph: string, index: number) => (
              <motion.p
                key={index}
                className={cn(locale === "ar" ? "text-end" : null)}
                {...fadeInAnimation}
                transition={{
                  ...fadeInAnimation.transition,
                  delay: 0.08 * index,
                }}
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(
                    /URBA EVENTS INTERNATIONAL/g,
                    BOLD_TEXT_HTML,
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
