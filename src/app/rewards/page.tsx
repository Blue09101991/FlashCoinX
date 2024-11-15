import { Banner, FaqSection } from "@/components/Global";
import { RewardsSection } from "@/components/Pages";
import { headerProps } from "@/config/types";

const Rewards = () => {
  const headerData: headerProps = {
    title: "Rewards",
    description: "Earn passive income easily with just one click!",
  };

  return (
    <main className=" bg-primary-5">
      <Banner headerData={headerData} />
      <RewardsSection />
      <FaqSection />
    </main>
  );
};

export default Rewards;
