import { Banner, EventOfferTimeSection } from "@/components/Global";
import { EventRules, Participate, SwapUSDC } from "@/components/Pages";
import { headerProps } from "@/config/types";

const SwapHoldShare = () => {
  const headerData: headerProps = {
    title: "Swap & Hold to Share",
    description: "Earn passive income easily with just one click!",
  };
  return (
    <main>
      <Banner headerData={headerData} />
      <EventOfferTimeSection />
      <section className="bg-BG section-py relative section-py overflow-x-hidden">
        <div className="bg-[#F5D871] filter blur-[565px] rounded-full 3xl:w-[688px] xxl:w-[538px] xl:w-[300px] lg:w-[240px] md:w-[156px] w-[300px] xxl:h-[565px] xl:h-[300px] lg:h-[240px] md:h-[156px] h-[300px] absolute top-1/2 translate-x-1/2  left-0"></div>
        <div className="container relative">
          <Participate />
          <SwapUSDC />
          <EventRules />
        </div>
      </section>
    </main>
  );
};

export default SwapHoldShare;
