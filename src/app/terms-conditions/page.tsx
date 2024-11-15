import { Banner } from "@/components/Global";
import { TermsAndConditionsSection } from "@/components/Pages";
import { headerProps } from "@/config/types";

const TermsAndConditions = () => {
  const headerData: headerProps = {
    title: "Terms & Conditions",
    description: "Earn passive income easily with just one click!",
  };

  return (
    <main className="bg-primary-5">
      <Banner headerData={headerData} />
      <section className="bg-primary-5 section-py">
        <div className="container">
          <TermsAndConditionsSection />
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
