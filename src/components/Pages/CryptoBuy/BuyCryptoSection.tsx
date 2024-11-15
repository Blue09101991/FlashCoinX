import Image from "next/image";
import { cryptoeBuyingBenefits } from "./cryptoBuyData";
import { BuyCryptoCard } from "@/components/Global";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const BuyCryptoSection = () => {
  return (
    <section className="bg-">
      <div className="container section-py">
        <div className="grid items-center lg:grid-cols-2 grid-cols-1 my-grid-gap lg:gap-y-14 md:gap-y-12 sm:gap-y-10 gap-y-9">
          <div>
            <FadeUp>
              <h2 className="section-title gap-mb-60 lg:text-left text-center">
                Effortlessly Buy Crypto Your Way, Anytime, Anywhere
              </h2>
            </FadeUp>
            <FadeDown>
              <div className="grid xl:gap-y-[60px] lg:gap-y-14 md:gap-y-12 sm:gap-y-10 gap-y-9">
                {cryptoeBuyingBenefits?.map((item, idx) => (
                  <div key={idx} className="flex-centerY my-grid-gap">
                    <Image
                      className="xl:w-[100px] xl:h-[100px] lg:w-[90px]  md:w-[80px]  lg:h-[90px] md:h-[80px] sm:w-[70px] sm:h-[70px] w-[60px] h-[60px]"
                      width={100}
                      height={100}
                      src={item?.image}
                      alt={item?.title}
                    />
                    <div>
                      <h4 className="my-text-24 gap-mb-20">{item?.title}</h4>
                      <p className="my-text-16">{item?.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeDown>
          </div>
          <div className="h-full flex-center relative flex items-center justify-center flex-col w-full">
            <div className="bg-[#F5D871] filter blur-[867.5px] rounded-full min-w-full min-h-full absolute"></div>
            <div className="relative z-[2] w-full h-full">
              <BuyCryptoCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCryptoSection;
