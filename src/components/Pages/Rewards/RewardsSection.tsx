"use client";

import Image from "next/image";
import rewardCoin from "@/../public/images/cryptocurrency11.png";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { AirdropsTab, TasksTab } from "../";
import MyRewardsTab from "./MyRewardsTab";

const RewardsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ["Tasks", "Airdrops", "My Rewards"];
  return (
    <section className="section-py">
      <div className="container">
        <Tab.Group
          defaultIndex={0}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="flex-centerY flex-wrap lg:justify-start justify-center xl:gap-10 lg:gap-8 md:gap-7 sm:gap-6 gap-4 gap-mb-60">
            {tabs?.map((tab, index) => (
              <Tab
                key={index}
                className=" flex-centerY md:gap-[10px] sm:gap-2 gap-1.5 outline-none transition-none "
              >
                <Image
                  className="xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6"
                  width={40}
                  height={40}
                  src={rewardCoin}
                  alt="coin"
                />
                <span
                  className={`${
                    index === selectedIndex
                      ? " btn-linebar-effect before:w-full"
                      : "before:w-0"
                  } my-text-24 block pb-[5px]`}
                >
                  {tab}
                </span>
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <TasksTab />
            </Tab.Panel>
            <Tab.Panel>
              <AirdropsTab />
            </Tab.Panel>
            <Tab.Panel>
              <MyRewardsTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default RewardsSection;
