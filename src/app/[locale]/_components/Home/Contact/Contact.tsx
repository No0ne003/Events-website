import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./Form";
import ContactInformation from "./ContactInformation";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle title="Contact Us" id="contact" />
        <div className="size-full flex justify-evenly">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
