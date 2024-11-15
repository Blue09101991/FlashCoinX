"use client";

import Link from "next/link";
import Cryptocurrency from "@/../public/images/Cryptocurrency.png";
import Image from "next/image";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconMessageDots,
  IconQuestionMark,
  IconSettingsExclamation,
} from "@tabler/icons-react";
import ApexDetailFeaturesSlider from "./ApexDetailFeaturesSlider";
import { Fragment, useState } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { currencyNetworkCategorys } from "@/../../public/data/currencyNetworkCategorys";
import { useDropdown } from "@/hooks";

const ApexHeader = () => {
  const currencyNetworks = currencyNetworkCategorys?.slice(2, 6);
  const [selectedCoin, setSelectedCoin] = useState(currencyNetworks[0]);
  const {
    open: openCoin,
    handleOption: handleCoinOption,
    ref: coinRef,
  } = useDropdown();

  return (
    <div className="flex xxl: items-center 3xl:flex-row flex-col justify-between my-grid-gap lg:pt-14 md:pt-12 sm:pt-10 pt-9 xl:pb-8 lg:pb-7 md:pb-6 sm:pb-5 pb-4 lg:px-6 md:px-5 sm:px-4 px-3.5">
      <div className="flex-centerY md:flex-row flex-col  gap-3">
        <div className="flex-centerY gap-3">
          <Listbox value={selectedCoin} onChange={setSelectedCoin}>
            <div className="relative">
              <div ref={coinRef}>
                <Listbox.Button
                  className="flex-centerY sm:gap-2 gap-1.5 relative cursor-pointer sm:w-[180px] w-[160px]      gradient-text-primary outline-none my-text-24 my-transition"
                  onClick={handleCoinOption}
                >
                  <span className="flex-centerY sm:gap-2 gap-1.5">
                    <Image
                      width={40}
                      height={40}
                      className="xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6"
                      src={selectedCoin?.image}
                      alt="coin"
                    />
                    <span>{selectedCoin?.title}</span>
                  </span>
                  <IconChevronDown
                    className={`h-5 w-5 icon-24 text-2xl block ${
                      openCoin
                        ? "rotate-180 duration-500 text-primary-1"
                        : "duration-500 text-white"
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
                <Listbox.Options className="my-shadow-1 w-full h-[232px] bg-BG text-secondary p-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md z-[1]">
                  {currencyNetworks?.map((item, idx) => (
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
          <div className="h-[20px] w-[2px] bg-BG-FFF-8"></div>
          <h6 className="my-text-20">$40,108.8</h6>
        </div>
        <div className="4xl:w-[707px] xxl:w-[580px] xl:w-[580px] lg:w-[460px] md:w-[360px] sm:w-[360px] w-[300px] flex-centerY sm:gap-3 gap-2.5 z-0">
          <IconChevronLeft className="btn-prev-slider cursor-pointer icon-24 text-white hover:text-primary-1 my-transition"></IconChevronLeft>
          <ApexDetailFeaturesSlider />
          <IconChevronRight className="btn-next-slider cursor-pointer icon-24 text-white hover:text-primary-1 my-transition"></IconChevronRight>
        </div>
        <div className="hidden 3xl:flex-centerY md:gap-4 sm:gap-3 gap-2.5">
          <Link
            className="btn inline-flex sm:gap-2.5 gap-2 bg-BG-FFF-8 border border-stroct-1 text-primary-1"
            href="/swap"
          >
            <Image
              width={26}
              height={26}
              src={Cryptocurrency}
              alt="Cryptocurrency"
            />
            Dashboards
          </Link>
          <Link className="btn btn-primary border border-primary-1" href="">
            Apex x ARB
          </Link>
        </div>
      </div>
      <div className="flex-centerY sm:flex-row flex-col gap-2 text-white">
        <div className="3xl:hidden flex-centerY md:gap-4 sm:gap-3 gap-2.5">
          <Link
            className="btn inline-flex sm:gap-2.5 gap-2 bg-BG-FFF-8 border border-stroct-1 text-primary-1"
            href="/swap"
          >
            <Image
              width={26}
              height={26}
              src={Cryptocurrency}
              alt="Cryptocurrency"
            />
            Dashboards
          </Link>
          <Link className="btn btn-primary border border-primary-1" href="">
            Apex x ARB
          </Link>
        </div>
        <div className="flex-centerY gap-2 text-white">
          <Link href="#">
            <IconSettingsExclamation className="icon-24 inline-block" />
          </Link>
          <Link href="mailto:your.email@example.com">
            <IconMessageDots className="icon-24 inline-block" />
          </Link>
          <Link
            href="/terms-conditions"
            className="flex-center p-1 w-auto h-auto border border-stroct-1 rounded-full icon-24"
          >
            <IconQuestionMark className="icon-24" />
          </Link>
          <Link
            href="/"
            className="sm:px-3 px-2 py-[2px] rounded-sm my-text-16 font-semibold gradient-text-primary bg-BG-FFF-8 inline-block"
          >
            CoinX
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApexHeader;
