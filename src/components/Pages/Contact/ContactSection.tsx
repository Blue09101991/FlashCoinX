import FadeDown from "@/motion/FadeDown";
import { ContactForm, GoogleMap } from "../";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section className="section-py bg-primary-5">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-x-6 gap-x-5 gap-y-6 relative">
          <div className="xl:col-span-9 lg:col-span-8 col-span-12 w-full lg:order-1 order-2">
            <FadeDown>
              <ContactForm />
            </FadeDown>
            <FadeDown>
              <GoogleMap />
            </FadeDown>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 col-span-12 w-full lg:order-2 order-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
