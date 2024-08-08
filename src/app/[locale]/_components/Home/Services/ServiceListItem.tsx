import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceListItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({
  title,
  isActive,
  onClick,
  index,
}) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      ease: [0.19, 1, 0.22, 1],
      delay: 0.03 * index,
    }}
    className={cn(
      "flex items-center w-full h-[60px] py-4 px-3 hover:text-secondary/80 cursor-pointer uppercase max-lg:text-xs",
      isActive
        ? "bg-secondary/80 text-secondary-foreground hover:text-secondary-foreground/90"
        : null,
    )}
    onClick={onClick}
  >
    {title}
  </motion.li>
);

export default ServiceListItem;
