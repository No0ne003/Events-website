import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  locale: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  image,
  locale,
}) => (
  <div className="relative flex flex-col md:flex-row justify-end items-center gap-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
      className="self-start z-20 max-w-xl lg:mt-10 bg-background/20 backdrop-blur-3xl rounded-lg lg:absolute lg:left-0"
    >
      <p
        className={cn(
          "py-5 px-3 leading-relaxed",
          locale === "ar" ? "text-end" : "text-start",
        )}
      >
        {description}
      </p>
    </motion.div>

    <Image
      src={image}
      alt={title}
      width={400}
      height={400}
      className="z-10 rounded-sm max-sm:w-screen size-[300px] lg:size-[400px] lg:mr-10"
    />
  </div>
);

export default ServiceDetail;
