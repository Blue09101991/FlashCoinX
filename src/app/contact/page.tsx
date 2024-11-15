import { Banner } from "@/components/Global";
import { ContactSection, Exchange } from "@/components/Pages";
import { headerProps } from "@/config/types";

const Contact = () => {
  const headerData: headerProps = {
    title: "Contact Us",
    description: "Earn passive income easily with just one click!",
  };

  return (
    <main>
      <Banner headerData={headerData} />
      <ContactSection />
      <Exchange />
    </main>
  );
};

export default Contact;
