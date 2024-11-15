"use client";

import Image from "next/image";
import { Listbox, Tab, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { apexOrdersBook } from "@/../public/data/apexOrdersBook";
import { useDropdown } from "@/hooks";
import {
  IconArrowNarrowUp,
  IconCaretUpDownFilled,
  IconFlagFilled,
} from "@tabler/icons-react";
import orderLabel1 from "@/../public/images/orderLabel1.png";
import orderLabel2 from "@/../public/images/orderLabel2.png";
import orderLabel3 from "@/../public/images/orderLabel3.png";
import AnimateHeight, { Height } from "react-animate-height";

const OrderBook = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ["Order Book", "Recent Trades"];
  // Animate Height
  const [height1, setHeight1] = useState<Height>(200);
  const [height2, setHeight2] = useState<Height>(257);

  // Select
  const numbers = [0.5, 0.1, 2.4, 3.6, 1.6];
  const [ordersNumbers, setOrdersNumbers] = useState(numbers?.[0]);

  const {
    open: openOrdersNumbers,
    handleOption: handleOrdersNumbersOption,
    ref: payRef,
  } = useDropdown();

  return (
    <div className="bg-BG-FFF-8 my-rounded-20 h-full w-full">
      <Tab.Group
        defaultIndex={0}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <div className="my-rounded-20 rounded-b-none bg-primary-10 p-24px flex-centerY md:gap-4 sm:gap-3 gap-2.5 my-text-16">
          <Tab.List className="flex lg:gap-10 md:gap-9 sm:gap-8 gap-7">
            {tabs?.map((tab, index) => (
              <Tab
                key={index}
                className={`${
                  index === selectedIndex
                    ? "text-primary-1  outline-none"
                    : "text-white "
                }   hover:text-primary-1 font-roboto  
                       transition-none whitespace-normal`}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className="p-24px ">
          <div className="flex-centerY justify-between my-grid-gap gap-mb-24">
            <div className="flex-centerY gap-3">
              <button
                onClick={() => {
                  setHeight1(200);
                  setHeight2(257);
                }}
              >
                <Image
                  width={26}
                  height={26}
                  src={orderLabel1}
                  alt="orderLabel1"
                />
              </button>
              <button
                onClick={() => {
                  setHeight1(0);
                  setHeight2(457);
                }}
              >
                <Image
                  width={26}
                  height={26}
                  src={orderLabel2}
                  alt="orderLabel1"
                />
              </button>
              <button
                onClick={() => {
                  setHeight1(457);
                  setHeight2(0);
                }}
              >
                <Image
                  width={26}
                  height={26}
                  src={orderLabel3}
                  alt="orderLabel1"
                />
              </button>
            </div>
            <Listbox value={ordersNumbers} onChange={setOrdersNumbers}>
              <div className="relative">
                <div ref={payRef}>
                  <Listbox.Button
                    className="flex-center gap-1 relative cursor-pointer
                    
                    bg-BG-FFF-8 sm:px-3 px-2.5 py-[2px] rounded-md my-text-16 outline-none border-none 
                    "
                    onClick={handleOrdersNumbersOption}
                  >
                    <span>{ordersNumbers}</span>
                    <IconCaretUpDownFilled
                      className={` ${
                        openOrdersNumbers
                          ? " duration-500 text-primary-1"
                          : " duration-500 text-stroct-1"
                      } w-4 h-4`}
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
                  <Listbox.Options className="my-shadow-1 w-full h-[220px] bg-BG text-secondary p-2 absolute grid gap-1 overflow-y-auto overflow-x-hidden scrollbar scrollbar-sm rounded-md z-[1]">
                    {numbers?.map((item, idx) => (
                      <Listbox.Option key={idx} value={item}>
                        <li className="group rounded-md  hover:bg-primary-1 cursor-pointer my-transition">
                          <span className="block my-text-18 text-center group-hover:text-primary-4 whitespace-nowrap">
                            {item}
                          </span>
                        </li>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <Tab.Panels>
            {tabs?.map((tab, index) => (
              <Tab.Panel key={index} className="relative max-h-[457px]">
                <div className="sm:pb-3 pb-2.5">
                  <AnimateHeight duration={500} height={height1}>
                    <div className="grid grid-cols-3 my-text-16 sm:mb-3 mb-2.5 relative scrollbar scrollbar-0 overflow-auto whitespace-nowrap">
                      <span className=" text-left">Price(USD)</span>
                      <span className=" text-left">Amount(BTC)</span>
                      <span className=" text-left">Total(BTC)</span>
                    </div>
                    <div
                      style={{ height: height1 }}
                      className="relative scrollbar scrollbar-sm overflow-auto w-full text-left whitespace-nowrap"
                    >
                      <div className="sm:space-y-3 space-y-2.5">
                        {apexOrdersBook
                          ?.filter((order, idx) => order?.status === tab)
                          ?.map((item, idx) => (
                            <div
                              key={idx}
                              className="grid grid-cols-3 my-text-16 my-transition cursor-pointer"
                            >
                              <span className="block">
                                {item?.price?.toLocaleString()}
                              </span>
                              <span className="block">
                                {item?.amount?.toLocaleString()}
                              </span>
                              <span className="block">
                                {item?.total?.toLocaleString()}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </AnimateHeight>
                </div>
                <div>
                  <AnimateHeight duration={500} height={height2}>
                    <div className="grid grid-cols-3 my-text-16 sm:mb-3 mb-2.5">
                      <span
                        className={` flex-centerY gap-1  text-left my-text-20 text-primary-1 `}
                      >
                        {apexOrdersBook[0]?.price?.toLocaleString()}
                        <IconArrowNarrowUp
                          className={` sm:w-5 sm:h-5 w-4 h-4`}
                        />
                      </span>
                      <span className=" text-left">
                        {apexOrdersBook[0]?.amount}
                      </span>
                      <span className="flex-centerY gap-1  text-left my-text-20 text-primary-1 ">
                        {apexOrdersBook[0]?.total?.toLocaleString()}
                        <IconFlagFilled className={` sm:w-5 sm:h-5 w-4 h-4`} />
                      </span>
                    </div>
                    <div
                      style={{ height: height2 }}
                      className="relative scrollbar scrollbar-sm overflow-auto w-full text-left whitespace-nowrap"
                    >
                      <div className="sm:space-y-3 space-y-2.5">
                        {apexOrdersBook
                          ?.sort((a, b) => b.price - a.price) // Sort from largest to smallest
                          ?.filter((order) => order?.status === tab)
                          ?.map((item, idx) => (
                            <div
                              key={idx}
                              className="my-text-16 grid grid-cols-3 my-text-16 my-transition cursor-pointer"
                            >
                              <span className="flex-centerY gap-1  text-primary-1">
                                {item?.price?.toLocaleString()}
                              </span>
                              <span>{item?.amount?.toLocaleString()}</span>
                              <span className="flex-centerY gap-1 text-primary-1">
                                {item?.total?.toLocaleString()}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </AnimateHeight>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default OrderBook;
