import React from "react";
import { counters } from "@/../../public/data/counters";
import { CounterElement } from "@/components/Global";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const DigitalWorld = () => {
  const digitalWorldCounters = counters?.slice(0, 3);

  return (
    <section className="section-py bg-[url('/images/digitalWorldCounterBG.png')] bg-no-repeat bg-cover bg-center bg-primary-4">
      <div className="container text-center w-full">
        <div className="w-full flex-center flex-col gap-mb-40 xxl:mb-[92px] xl:mb-20 lg:mb-16 md:mb-14 sm:mb-12 mb-10">
          <div className=" gap-mb-24 sm:py-2 py-1.5 md:px-5 sm:px-4 px-3 backdrop-blur-lg bg-stroct-1 max-w-[500px] rounded-full">
            <h5 className="lg:text-xl md:text-lg text-base  text-center text-white">
              Blockchain Technology
            </h5>
          </div>
          <FadeDown>
            <h2 className="section-title">Life in the digital world</h2>
          </FadeDown>
        </div>
        <FadeUp>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-grid-gap">
            {digitalWorldCounters?.map((item, idx) => (
              <div key={idx} className="flex-center group">
                <div>
                  <div>
                    <CounterElement
                      counter={{
                        counterNumber: item?.countNumber,
                        style:
                          "banner-title text-center xl:max-w-[1074px] w-full group-hover:gradient-text-primary gap-mb-40",
                        sizeText: item?.sizeText,
                      }}
                    />
                  </div>

                  <div>
                    <h2 className="my-text-24 group-hover:gradient-text-primary gap-mb-24">
                      {item?.title}
                    </h2>

                    <p className="my-text-16 sm:w-full w-[304px]">
                      {item?.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-[2px] h-[50%] bg-stroct-1  ${
                    digitalWorldCounters?.length - 1 !== idx
                      ? "lg:block hidden"
                      : "hidden"
                  } sm:mx-3 mx-2.5`}
                ></div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default DigitalWorld;
