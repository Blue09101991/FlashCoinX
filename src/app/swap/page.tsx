import {
  Banner,
  EventOfferTimeSection,
  PoolsSection,
} from "@/components/Global";
import { MarketDashboard } from "@/components/Pages";
import { headerProps } from "@/config/types";

const Swap = () => {
  const headerData: headerProps = {
    title: "Swap",
    description: "Earn passive income easily with just one click!",
  };
  return (
    <main>
      <Banner headerData={headerData} />
      <EventOfferTimeSection />
      <MarketDashboard />
      <PoolsSection />
    </main>
  );
};

export default Swap;
