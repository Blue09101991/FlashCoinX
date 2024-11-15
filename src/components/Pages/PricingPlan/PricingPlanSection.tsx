import { CounterElement } from "@/components/Global";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { ChoosePlan } from "../";
import TiltWraper from "@/lib/TiltWraper";
import { tiltStyles } from "@/utility/tiltStyles";
import plan1 from "@/../public/images/plan1.png";
import plan2 from "@/../public/images/plan2.png";
import plan3 from "@/../public/images/plan3.png";
import Image from "next/image";
import FadeLeft from "@/motion/FadeLeft";

const PricingPlanSection = () => {
  const plans = [
    {
      id: 1,
      title: "Basic plan",
      image: plan1,
      price: 350,
      features: [
        "Limited access to flash transaction services",
        "Supports USDT TRC-20 and BTC transactions",
        "Basic on-chain confirmation support",
        "Up to 10 transactions per day",
        "Email support",
      ],
    },
    {
      id: 2,
      title: "Pro Plan",
      image: plan2,
      price: 1000,
      features: [
        "Full access to flash transaction services",
        "Multi-token support (USDT TRC-20, BTC, and ERC-20 options)",
        "Unlimited transactions per day",
        "24/7 priority customer support",
        "Regular software updates and security improvements",
      ],
    },
    {
      id: 3,
      title: "Expert Plan",
      image: plan3,
      price: 1500,
      features: [
        "Advanced flash transaction tools",
        "Support for all major cryptocurrencies",
        "Unlimited transactions with instant on-chain confirmation",
        "Multi-device compatibility (Windows, iOS, Android)",
        "24/7 dedicated support and regular updates",
      ],
    },
  ];
  return (
    <section className="bg-primary-5">
      <div className="container section-py">
        <div className="flex justify-center lg:items-start items-center flex-col">
          <h2 className="section-title gap-mb-16">Pricing Plan</h2>
          <FadeLeft>
            <p className="my-text-16 gap-mb-40 w-full sm:max-w-[626px] lg:text-left text-center">
              Explainability features and deep model. Specialized consectetur
              adipiscing sed do eiusmod.Explainability features and deep model.
            </p>
          </FadeLeft>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-grid-gap ">
          {plans?.map((item, idx) => (
            <TiltWraper key={idx} tiltStyles={tiltStyles}>
              <div className="group h-full w-full my-rounded-20">
                <div className="h-full w-full gredient-bg-effect gredient-bg-X my-transition p-32px my-rounded-20 border border-stroct-1">
                  <Image
                    className="sm:mb-4 mb-3"
                    src={item?.image}
                    alt={item?.title}
                  />
                  <h4 className="my-transition my-text-24 group-hover:text-primary-4 gap-mb-24">
                    {item?.title}
                  </h4>
                  <div className="my-text-48 flex items-center text-primary-1 group-hover:text-primary-4  my-transition gap-mb-24">
                    <span>$</span>
                    <CounterElement
                      counter={{
                        counterNumber: item?.price,
                        style: "",
                      }}
                    />
                    <span>_</span>
                    {/* <span className="my-text-16 my-transition sm:ml-3 ml-2 group-hover:text-primary-4">
                      month
                    </span> */}
                  </div>
                  <ul className="grid md:gap-y-4 sm:gap-y-3 gap-y-2.5 gap-mb-24">
                    {item?.features?.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`${
                          (item?.id === 1 && (idx === 3 || idx === 4)) ||
                          (item?.id === 2 && idx === 4)
                            ? "opacity-60 "
                            : "opacity-100"
                        } flex-centerY sm:gap-x-4 gap-x-3 text-white group-hover:text-primary-4  my-transition`}
                      >
                        <div
                          className={`${
                            (item?.id === 1 && (idx === 3 || idx === 4)) ||
                            (item?.id === 2 && idx === 4)
                              ? "group-hover:bg-primary-4"
                              : "group-hover:bg-white"
                          } flex-centerY p-1 rounded-full bg-BG-FFF-8  my-transition `}
                        >
                          <IconCheck
                            className={`sm:w-4 sm:h-4 w-3 h-3 text-primary-1 `}
                          />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link
                      href="/crypto-buy"
                      className="btn group-hover:bg-primary-4 group-hover:text-white btn-primary flex-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </TiltWraper>
          ))}
        </div>
        {/* <ChoosePlan /> */}
      </div>
    </section>
  );
};

export default PricingPlanSection;
