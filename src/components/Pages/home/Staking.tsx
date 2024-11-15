"use client";

import { useDropdown } from "@/hooks";
import { Listbox, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { currencyNetworkCategorys } from "@/../../public/data/currencyNetworkCategorys";

const Staking = () => {
  const stakingMenu = currencyNetworkCategorys?.slice(2, 7);
  const [value, setValue] = useState([0, 7.12]);
  const [selectedStakingMenu, setSelectedStakingMenu] = useState(
    stakingMenu[0]
  );

  const {
    open: openStakingMenu,
    handleOption: stakingMenuOption,
    ref: stakingMenuRef,
  } = useDropdown();

  return (
    <div className="lg:p-8 md:p-7 sm:p-5 p-4 bg-BG border border-stroct-1 md:rounded-xl sm:rounded-lg rounded-md h-full">
      <div className="flex justify-between xl:mb-[52px] lg:mb-12 md:mb-11 sm:mb-10 mb-8">
        <div>
          <h2 className="section-title sm:mb-3 mb-2.5">Staking</h2>
          <p className="my-text-16">Calculate my earnings</p>
        </div>
        <Listbox value={selectedStakingMenu} onChange={setSelectedStakingMenu}>
          <div className="relative z-[5]">
            <div ref={stakingMenuRef}>
              <Listbox.Button
                className="flex items-center justify-between sm:gap-2 gap-1.5 relative cursor-pointer md:w-[200px] sm:w-[180px] w-[150px] text-white bg-BG-FFF-8 outline-none border-stroct-1 hover:bg-BG-FFF-8 hover:text-primary-1 font-roboto border md:py-3 sm:py-2.5 py-2 lg:px-5 md:px-4 sm:px-3.5 px-3 transition-none sm:rounded-lg rounded-md my-transition"
                onClick={stakingMenuOption}
              >
                <span className="flex-centerY sm:gap-2 gap-1.5">
                  <Image
                    className="sm:w-6 sm:h-6 w-5 h-5 rounded-full"
                    width={24}
                    height={24}
                    src={selectedStakingMenu?.image}
                    alt="curencyNetwork"
                  />
                  <span className="block my-text-18 hover:text-primary-1 my-transition leading-7">
                    {selectedStakingMenu?.title}
                  </span>
                </span>
                <IconChevronDown
                  className={`-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100 ${
                    openStakingMenu ? "rotate-180 duration-500" : "duration-500"
                  }`}
                />
              </Listbox.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options className="my-shadow-1 w-full h-[232px] bg-BG text-secondary p-4 absolute mt-3 grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md">
                {currencyNetworkCategorys?.map((item, idx) => (
                  <Listbox.Option key={idx} value={item}>
                    <li className="group rounded-md  hover:bg-primary-1 cursor-pointer my-transition">
                      <span className="flex-centerY gap-2 py-1 px-1.5 w-full">
                        <Image
                          className="sm:w-8 sm:h-8 w-6 h-6  rounded-full group-hover:bg-primary-4"
                          width={32}
                          height={32}
                          src={item?.image}
                          alt="coin"
                        />
                        <span className="block my-text-18 group-hover:text-primary-4 whitespace-nowrap">
                          {item?.title}
                        </span>
                      </span>
                    </li>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="flex my-grid-gap justify-between items-center gap-mb-32">
        <div>
          <span className="my-text-16 sm:mb-3 mb-2.5 block">
            How many coins do you hold?
          </span>
          <h2 className="text-white leading-[150%] lg:text-5xl md:text-4xl sm:text-3xl text-xxl">
            18166{" "}
            <span className="my-text-16">{selectedStakingMenu?.title}</span>
          </h2>
        </div>
        <div className="text-right ">
          <span className="my-text-16 sm:mb-3 mb-2.5 block">
            Estimate Annual Reward
          </span>
          <h2 className=" leading-[150%] lg:text-5xl md:text-4xl sm:text-3xl text-xxl text-primary-1">
            {value[1]}%
          </h2>
        </div>
      </div>
      <span className="block" aria-label="range">
        <RangeSlider
          id="range-slider"
          className="single-thumb bg-primary-1"
          defaultValue={[7.12]}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
          value={value}
          onInput={setValue}
          min={0}
          max={100}
        />
      </span>
      <div className="grid my-grid-gap gap-mb-60 gap-mt-48">
        <div className="flex-centerY justify-between">
          <p className="my-text-16">Daily Earnings:</p>
          <p className="my-text-16">0.019178 SOL 0.74 USD</p>
        </div>
        <div className="flex-centerY justify-between">
          <p className="my-text-16">Monthly Earnings:</p>
          <p className="my-text-16">0.583333 SOL 22 USD</p>
        </div>
        <div className="flex-centerY justify-between">
          <p className="my-text-16">Yearly Earnings:</p>
          <p className="my-text-16">7 SOL 270 USD</p>
        </div>
      </div>
      <Link
        className="btn btn-primary flex-center text-center"
        href="staking-pools"
      >
        Start staking
      </Link>
    </div>
  );
};

export default Staking;
