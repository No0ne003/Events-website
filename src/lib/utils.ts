import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeInUp = {
  hidden: { y: "-50%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const transitionSettings = {
  delay: 6,
  duration: 2,
  ease: [0.19, 1, 0.22, 1],
};
