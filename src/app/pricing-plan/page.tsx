import { Banner, FaqSection } from "@/components/Global";
import { Exchange, PricingPlanSection } from "@/components/Pages";
import { headerProps } from "@/config/types";

const PricingPlan = () => {
  const headerData: headerProps = {
    title: "Our Pricing Plan",
    description:
      "Discover our unbeatable pricing plan, offering the perfect balance of value and features, tailored to meet your unique needs in Coiner Website.",
  };

  return (
    <main>
      <Banner headerData={headerData} />
      <PricingPlanSection />
      <Exchange />
      <FaqSection />
    </main>
  );
};

export default PricingPlan;
