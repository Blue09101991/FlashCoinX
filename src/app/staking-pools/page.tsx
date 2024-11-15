import { Banner, FaqSection, PoolsSection } from "@/components/Global";
import { StakingPolls, StakingProcess } from "@/components/Pages";
import { headerProps } from "@/config/types";

const StakingPools = () => {
  const headerData: headerProps = {
    title: "Staking Pools",
    description: "Earn passive income easily with just one click!",
  };
  
  return (
    <main>
      <Banner headerData={headerData} />
      <StakingPolls />
      <PoolsSection />
      <StakingProcess />
      <FaqSection />
    </main>
  );
};

export default StakingPools;
