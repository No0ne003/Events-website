"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./Form";
import ContactInformation from "./ContactInformation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("HomePage.contact");

  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle title={t("title")} id="contact" />
        <div
          className={cn("size-full flex flex-col md:flex-row justify-between")}
        >
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
