"use client";
import { CounterElement } from "@/components/Global";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const ChoosePlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // Define prices for monthly and yearly plans
  const monthlyPrice = 40.0;
  const yearlyPrice = monthlyPrice * 12;

  // Update the selected plan and price when the toggle switch changes
  const handleToggleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="gap-mt-24 p-32px bg-[rgba(188,231,12,0.10)] my-rounded-20 border border-stroct-1">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className=" !bg-gradient-to-r to-[rgba(199,248,1,0.24)] from-[rgba(250,205,149,0.24)] p-32px my-rounded-20 border border-stroct-1">
          <h2 className="section-title gap-mb-24">Choose your plan</h2>
          <p className="my-text-16 gap-mb-24">
          Flexible plans for flash crypto transactions tailored to meet your institutio &apos s needs. Choose from Basic, Pro, or Expert levels based on the volume and type of transactions required.
          </p>
          <div className="flex-centerY gap-2">
            {/* <span
              className={`my-text-16 font-semibold ${
                isMonthly ? "selected gradient-text-primary" : ""
              }`}
            >
              Monthly
            </span> */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!isMonthly}
                onChange={handleToggleChange}
                className="sr-only peer"
              />
              <span className="w-11 h-6 border-2 border-primary-1 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary-4 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary-1 after:border-primary-4 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></span>
            </label>
            {/* <span
              className={`my-text-16 font-semibold ${
                !isMonthly ? "selected gradient-text-primary" : ""
              }`}
            >
              Yearly
            </span> */}
          </div>
          <div className="my-text-48 flex items-center gap-mb-24 gap-mt-24">
            <span>$</span>
            <CounterElement
              counter={{
                counterNumber: isMonthly ? monthlyPrice : yearlyPrice,
                style: "",
              }}
            />
            <span>_</span>
          </div>
          <div className="flex-centerY gap-3 gap-mb-24">
            <h2 className="my-text-48">USD</h2>
            <span className="my-text-16">{isMonthly ? "/month" : "/year"}</span>
          </div>
          <Link href="/crypto-buy" className="btn btn-primary flex-center">
            Get Started
          </Link>
        </div>
        <div className="md:p-32px sm:pt-8 pt-7">
          <h2 className="section-title gap-mb-24">Expert Plan</h2>
          <p className="my-text-16 gap-mb-24">
            Trading cryptocurrencies from your phone offers convenience and
            flexibility. The rise has opened up opportunities in cryptocurrency
            world.
          </p>
          <h4 className="my-text-24 gap-mb-24">Whats Included?</h4>
          <ul className="grid md:gap-y-4 sm:gap-y-3 gap-y-2.5 gap-mb-24">
            <li className="flex-centerY sm:gap-x-4 gap-x-3 text-white group-hover:text-primary-4  my-transition">
              <span className="flex-centerY p-1 rounded-full bg-BG-FFF-8  my-transition">
                <IconCheck className="sm:w-4 sm:h-4 w-3 h-3 text-primary-1" />
              </span>
              Full platform access
            </li>
            <li className="flex-centerY sm:gap-x-4 gap-x-3 text-white group-hover:text-primary-4  my-transition">
              <span className="flex-centerY p-1 rounded-full bg-BG-FFF-8  my-transition">
                <IconCheck className="sm:w-4 sm:h-4 w-3 h-3 text-primary-1" />
              </span>
              Flexible subscription options
            </li>
            <li className="flex-centerY sm:gap-x-4 gap-x-3 text-white group-hover:text-primary-4  my-transition">
              <span className="flex-centerY p-1 rounded-full bg-BG-FFF-8  my-transition">
                <IconCheck className="sm:w-4 sm:h-4 w-3 h-3 text-primary-1" />
              </span>
              24/7 customer support
            </li>
            <li className="flex-centerY sm:gap-x-4 gap-x-3 text-white group-hover:text-primary-4  my-transition">
              <span className="flex-centerY p-1 rounded-full bg-BG-FFF-8  my-transition">
                <IconCheck className="sm:w-4 sm:h-4 w-3 h-3 text-primary-1" />
              </span>
              Regular updates & improvements
            </li>
            <li className="flex-centerY sm:gap-x-4 gap-x-3 text-white group-hover:text-primary-4  my-transition">
              <span className="flex-centerY p-1 rounded-full bg-BG-FFF-8  my-transition">
                <IconCheck className="sm:w-4 sm:h-4 w-3 h-3 text-primary-1" />
              </span>
              Premium educational resources
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
