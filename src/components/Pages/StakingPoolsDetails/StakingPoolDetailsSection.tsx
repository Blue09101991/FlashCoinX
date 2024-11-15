import Image from "next/image";
import InvestLoginCard from "./InvestLoginCard";
import PoolChart from "./PoolChart";
import InvestmentPoll from "./InvestmentPoll";
import PoolInformation from "./PoolInformation";
import SmartContracts from "./SmartContracts";
import FadeLeft from "@/motion/FadeLeft";
import FadeDown from "@/motion/FadeDown";
import { web3CoinType } from "@/config/types";

const StakingPoolDetailsSection = ({
  currency,
}: {
  currency: web3CoinType | any;
}) => {
  return (
    <section className="section-py bg-BG-3">
      <div className="container grid grid-cols-12 my-grid-gap relative">
        <div className="xl:col-span-8 lg:col-span-7 col-span-12 w-full lg:order-1 order-2">
          <div className="flex-centerY justify-between sm:flex-nowrap flex-wrap my-grid-gap gap-mb-40">
            <div className="flex-centerY md:gap-4 sm:gap-3.5 gap-3">
              <Image
                width={69}
                height={40}
                src={currency?.image ? currency?.image : ""}
                className="w-auto max-w-[69px] h-10 object-cover"
                alt="coin"
              />
              <div>
                <h5 className="my-text-24 font-medium mb-[2px]">
                  {currency?.title}
                </h5>
                <p className="my-text-16">{currency?.subTitel}</p>
              </div>
            </div>
            <h2 className="section-title text-primary-1 font-medium">
              {currency?.percentage}%{" "}
              <span className="my-text-24 font-lexend font-normal">APY</span>
            </h2>
          </div>
          <FadeLeft>
            <PoolChart />
          </FadeLeft>
          <FadeDown>
            <InvestmentPoll />
          </FadeDown>
          <FadeDown>
            <PoolInformation />
          </FadeDown>
          <FadeDown>
            <SmartContracts />
          </FadeDown>
        </div>
        <div className="xl:col-span-4 lg:col-span-5 col-span-12 w-full lg:order-2 order-1 lg:mb-0 gap-mb-60">
          <InvestLoginCard />
        </div>
      </div>
    </section>
  );
};

export default StakingPoolDetailsSection;
