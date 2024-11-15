"use client";

import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Countdown from "react-countdown";

const EventOfferTimeSection = () => {
  const CountdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: any) => {
    if (completed) {
      return <h2 className="my-text-32">Event is Over</h2>;
    } else {
      return (
        <div className="flex-centerY md:gap-3 sm:gap-2.5 gap-1.5">
          <div className="xl:py-3 lg:py-2.5 md:py-2 sm:1.5 py-1 lg:px-6 md:px-5 sm:px-4 px-3  sm:rounded-lg rounded-md bg-white text-primary-4">
            <h3 className=" text-primary-4 my-text-32 ">{days}</h3>
          </div>
          <h5 className="my-text-20 text-primary-4">d</h5>
          <div className="xl:py-3 lg:py-2.5 md:py-2 sm:1.5 py-1 lg:px-6 md:px-5 sm:px-4 px-3  sm:rounded-lg rounded-md bg-white text-primary-4">
            <h3 className=" text-primary-4 my-text-32 ">{hours}</h3>
          </div>
          <h5 className="my-text-20 text-primary-4">h</h5>
          <div className="xl:py-3 lg:py-2.5 md:py-2 sm:1.5 py-1 lg:px-6 md:px-5 sm:px-4 px-3  sm:rounded-lg rounded-md bg-white text-primary-4">
            <h3 className=" text-primary-4 my-text-32 ">{minutes}</h3>
          </div>
          <h5 className="my-text-20 text-primary-4">m</h5>
          <div className="xl:py-3 lg:py-2.5 md:py-2 sm:1.5 py-1 lg:px-6 md:px-5 sm:px-4 px-3  sm:rounded-lg rounded-md bg-white text-primary-4">
            <h3 className=" text-primary-4 my-text-32 ">{seconds}</h3>
          </div>
          <h5 className="my-text-20 text-primary-4">s</h5>
        </div>
      );
    }
  };

  return (
    <section className="bg-gradient-to-l from-primary-1 to-highlight-1 section-py relative">
      <div className="relative flex-center flex-col">
        <div className="bg-highlight-2 filter blur-[985px] rounded-full xxl:w-[358px] xl:w-[300px] w-full h-full absolute"></div>
        <div className="container grid my-grid-gap justify-between lg:grid-cols-2 grid-cols-1 relative">
          <FadeUp>
            <div className="flex flex-col justify-center lg:items-start items-center ">
              <h2 className="section-title lg:text-left text-center lg:w-[526px] w-full text-primary-4 gap-mb-24">
                Coinx Web3 USDC Odyssey - Swap & Hold
              </h2>
              <Link
                className="btn bg-primary-4 text-white hover:text-black hover:bg-white inline-flex items-center md:gap-[10px] sm:gap-2 gap-1.5"
                href="/pricing-plan"
              >
                Check Out <IconArrowRight className="icon-24" />
              </Link>
            </div>
          </FadeUp>
          <FadeDown>
            <div className="flex flex-col justify-center lg:items-end items-center ">
              <p className="my-text-18 font-lexend  lg:text-right text-center text-primary-4 gap-mb-24">
                The event will end in
              </p>
              <Countdown
                date={Date.now() + 570400000}
                renderer={CountdownRenderer}
              >
                <h2>Time Over</h2>
              </Countdown>
            </div>
          </FadeDown>
        </div>
      </div>
    </section>
  );
};

export default EventOfferTimeSection;
