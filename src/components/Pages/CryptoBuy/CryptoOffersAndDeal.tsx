import React from "react";
import { cryptoOffersAndDeals } from "./cryptoBuyData";
import Image from "next/image";
import { tiltStyles } from "@/utility/tiltStyles";
import TiltWraper from "@/lib/TiltWraper";
import FadeUp from "@/motion/FadeUp";

const CryptoOffersAndDeal = () => {
  return (
    <section className="bg-primary-7 section-py relative">
      <div className="container relative">
        <FadeUp>
          <h2 className="text-center section-title gap-mb-60">
            Why Buy Crypto on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FACD95] to-[#C7F801]">
              FlashCoin
            </span>
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 grid-cols-1 my-grid-gap">
          {cryptoOffersAndDeals?.map((item, idx) => (
            <TiltWraper key={idx} tiltStyles={tiltStyles}>
              <div className="group h-full">
                <div className="flex flex-col sm:items-start items-center h-full p-32px border border-stroct-1 group-hover:bg-BG-FFF-8 my-rounded-20 my-transition">
                  <div className="gap-mb-32 xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] group-hover:bg-BG-FFF-8 rounded-full my-transition">
                    <Image
                      className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] w-[80px] h-[80px]"
                      src={item?.image}
                      width={140}
                      height={140}
                      alt="img"
                    />
                  </div>
                  <div className="sm:text-left text-center">
                    <h4 className="my-text-24 group-hover:text-primary-1 gap-mb-16 my-transition">
                      {item?.title}
                    </h4>
                    <p className="my-text-16">{item?.details}</p>
                  </div>
                </div>
              </div>
            </TiltWraper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoOffersAndDeal;
