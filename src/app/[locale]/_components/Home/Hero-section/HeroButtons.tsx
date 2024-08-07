import { motion } from "framer-motion";
import { cn, fadeInUp, transitionSettings } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroButton({
  locale,
  contactUs,
  discoverNow,
}: {
  locale: string;
  contactUs: string;
  discoverNow: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={transitionSettings}
      className={cn(
        "flex gap-4 md:gap-8 justify-center items-center",
        locale === "ar" ? "flex-row-reverse" : "",
      )}
    >
      <Button
        variant="shine"
        size="lg"
        className="bg-primary hover:bg-primary/90 group relative"
        asChild
      >
        <Link
          href={`${locale}/contact`}
          className={cn("flex", locale === "ar" ? "flex-row-reverse" : null)}
        >
          {contactUs}
          <div
            className={cn(
              "w-0 translate-x-[100%] opacity-0 transition-all duration-200 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100",
              locale === "ar"
                ? "group-hover:pr-3 pr-0 group-hover:translate-x-[-50%]"
                : "group-hover:pl-3 pl-0",
            )}
          >
            {locale === "ar" ? (
              <ArrowLeft className="size-4" />
            ) : (
              <ArrowRight className="size-4" />
            )}
          </div>
        </Link>
      </Button>
      <Button variant="linkHover1" asChild>
        <Link href={`${locale}/services`}>{discoverNow}</Link>
      </Button>
    </motion.div>
  );
}
