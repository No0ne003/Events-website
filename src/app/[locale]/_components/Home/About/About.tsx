"use client";
import { Icons } from "@/components/icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, transitionSettings } from "@/lib/utils";

export default function About() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
      className="py-16 flex flex-col gap-10 bg-primary/20"
    >
      <SectionTitle title="About Us" />
      <div className="container flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-8">
        <div className="relative w-full lg:w-1/2 h-full self-start overflow-hidden">
          <Image
            src="/semi-marathon-2.jpg"
            alt="marathon"
            layout="responsive"
            width={500}
            height={400}
            className="rounded-lg shadow-lg transition-transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-lg pointer-events-none"></div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 p-6">
          <div className="max-w-2xl flex flex-col gap-4 leading-relaxed">
            <p>
              <strong className="text-foreground/80">
                URBA EVENTS INTERNATIONAL
              </strong>{" "}
              is a communication and event agency specializing in the design,
              development, and organization of sports and cultural events.
            </p>
            <p>
              With a strong expertise and hands-on experience, the{" "}
              <strong className="text-foreground/80">
                URBA EVENTS INTERNATIONAL
              </strong>{" "}
              team offers a tailor-made service, from concept definition to
              execution.
            </p>
            <p>
              We provide our clients and partners with event communication tools
              that generate brand awareness, business opportunities, and
              partnerships.
            </p>
            <p>
              Choosing to work with{" "}
              <strong className="text-foreground/80">
                URBA EVENTS INTERNATIONAL
              </strong>{" "}
              means opting for innovative, creative, and original ideas.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
