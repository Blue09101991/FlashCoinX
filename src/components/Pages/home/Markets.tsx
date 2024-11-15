"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import MarketStakingTab from "./MarketStakingTab";
import MarketSwapTab from "./MarketSwapTab";
import MarketIDOTab from "./MarketIDOTab";
import MarketCryptoTab from "./MarketCryptoTab";

const Markets = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ["Staking", "IDO", "Buy Crypto"];
  return (
    <section className="bg-BG-2 section-py">
      <div className="container">
        <Tab.Group
          defaultIndex={0}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <div className="flex-centerY sm:justify-between justify-center gap-mb-60">
            <div>
              <div className="flex-centerY my-grid-gap gap-mb-32">
                <h2 className="section-title">Markets</h2>
                {/* <Link
                  className="flex-centerY text-primary-1"
                  href="/staking-pools"
                >
                  More Market
                  <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link> */}
              </div>
              <div>
                <Tab.List className="flex lg:gap-3 md:gap-2.5 sm:gap-2 gap-0">
                  {tabs?.map((tab, index) => (
                    <Tab
                      key={index}
                      className={`${
                        index === selectedIndex
                          ? "text-primary-1 bg-stroct-1 outline-none border-transparent"
                          : "text-white border-stroct-1 bg-transparent"
                      }  hover:bg-stroct-1 hover:border-transparent hover:text-primary-1 font-roboto border  
                      sm:btn p-2.5 outline-none transition-none lg:rounded-lg md:rounded-md sm:rounded-sm rounded-none `}
                    >
                      {tab}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>
            <div className="hidden md:flex-centerY md:gap-3 gap-2.5">
              <button
                className="btn-prev-slider btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4"
                aria-label="left"
              >
                <IconChevronLeft className=" xxl:w-6 xxl:h-6 w-5 h-5" />
              </button>
              <button
                className="btn-next-slider btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4"
                aria-label="right"
              >
                <IconChevronRight className=" xxl:w-6 xxl:h-6 w-5 h-5" />
              </button>
            </div>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <MarketStakingTab />
            </Tab.Panel>
            <Tab.Panel>
              <MarketIDOTab />
            </Tab.Panel>
            {/* <Tab.Panel>
              <MarketSwapTab />
            </Tab.Panel> */}
            <Tab.Panel>
              <MarketCryptoTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="w-full flex-center">
          <div className="md:hidden flex-centerY md:gap-3 gap-2.5 gap-mt-24">
            <button className="btn-prev-slider btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4">
              <IconChevronLeft
                className="xxl:w-6 xxl:h-6 w-5 h-5"
                aria-label="left"
              />
            </button>
            <button className="btn-next-slider btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4">
              <IconChevronRight
                className="xxl:w-6 xxl:h-6 w-5 h-5"
                aria-label="right"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
