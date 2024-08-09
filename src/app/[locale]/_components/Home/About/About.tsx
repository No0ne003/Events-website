"use client";
import { Icons } from "@/components/icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, transitionSettings } from "@/lib/utils";

export default function About() {
  const content = {
    title: "About Us",
    description: [
      "URBA EVENTS INTERNATIONAL is a communication and event agency specializing in the design, development, and organization of sports and cultural events.",
      "With a strong expertise and hands-on experience, the URBA EVENTS INTERNATIONAL team offers a tailor-made service, from concept definition to execution.",
      "We provide our clients and partners with event communication tools that generate brand awareness, business opportunities, and partnerships.",
      "Choosing to work with URBA EVENTS INTERNATIONAL means opting for innovative, creative, and original ideas.",
    ],
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
      className="py-16 flex flex-col gap-10 bg-primary/20"
    >
      <SectionTitle title={content.title} />
      <div className="container flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.3,
          }}
          className="relative w-full lg:w-1/2 h-full self-start overflow-hidden"
        >
          <Image
            src="/semi-marathon-2.jpg"
            alt="marathon"
            layout="responsive"
            width={500}
            height={400}
            className="rounded-lg shadow-lg transition-transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-lg pointer-events-none"></div>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 p-6">
          <div className="max-w-2xl flex flex-col gap-4 leading-relaxed">
            {content.description.map((paragraph, index) => (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.08 * index,
                }}
                key={index}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
