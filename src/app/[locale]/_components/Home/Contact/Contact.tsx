import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./Form";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle title="Contact Us" id="contact" />
        <div className="flex justify-center items-center">
          <p>hello hello</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
