import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./Form";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle title="Contact Us" id="Contact" />
        <ContactForm />
      </div>
    </section>
  );
}
