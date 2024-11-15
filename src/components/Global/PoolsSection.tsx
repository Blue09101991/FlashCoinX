"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import blockchainIcon from "@/../../public/images/blockchainIcon.png";
import { useState } from "react";
import { web3s } from "@/../../public/data/discoverWeb3";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import FadeDown from "@/motion/FadeDown";
import { IconCaretUpDownFilled } from "@tabler/icons-react";

const PoolsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ["All", "Events", "Single Asset"];

  return (
    <section className="bg-BG section-py relative section-py flex-center flex-col w-full">
      <div className="bg-[#F5D871] filter blur-[597px] rounded-full xxl:w-[538px] xl:w-[300px] lg:w-[240px] md:w-[156px] w-[300px] xxl:h-[538px] xl:h-[300px] lg:h-[240px] md:h-[156px] h-[300px] absolute"></div>

      <div className="container relative">
        <Tab.Group
          defaultIndex={0}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <div>
            <div className="gap-mb-24">
              <FadeDown>
                <h2 className="section-title gap-mb-24">Pools</h2>
              </FadeDown>
              <FadeDown>
                <p className="my-text-16">
                  Earn rewards by staking in our trusted and profitable pool.
                </p>
              </FadeDown>
            </div>
            <div>
              <Tab.List className="flex lg:gap-10 md:gap-9 sm:gap-8 gap-7">
                {tabs?.map((tab, index) => (
                  <Tab
                    key={index}
                    className={`${
                      index === selectedIndex
                        ? "text-primary-1 border-primary-1 border-b outline-none"
                        : "text-white border-transparent"
                    }   hover:text-primary-1 my-text-18  
                       transition-none py-2.5 border-b hover:border-primary-1`}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>
          <div>
            <Tab.Panels>
              {tabs?.map((tab, index) => (
                <Tab.Panel
                  key={index}
                  className="relative overflow-x-auto scrollbar scrollbar-sm"
                >
                  <table className=" w-full text-left rtl:text-right whitespace-nowrap">
                    <thead className="uppercase xl:pb-8 lg:py-7 md:py-6 sm:py-5 py-4 border-t border-stroct-1">
                      <tr>
                        <th
                          scope="col"
                          className="my-text-16 my-transition font-semibold hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 px-6 text-left"
                        >
                          Pool Name
                        </th>
                        <th
                          scope="col"
                          className="my-text-16 font-semibold xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
                        >
                          <span className="flex-centerY gap-1 cursor-pointer hover:text-primary-1 my-transition">
                            Current APY
                            <IconCaretUpDownFilled className="w-4 h-4 " />
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="my-text-16 font-semibold xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
                        >
                          <span className="flex-centerY gap-1 cursor-pointer hover:text-primary-1 my-transition">
                            Network
                            <IconCaretUpDownFilled className="w-4 h-4 " />
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="my-text-16 font-semibold xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
                        >
                          <span className="flex-centerY gap-1 cursor-pointer hover:text-primary-1 my-transition">
                            TVL
                            <IconCaretUpDownFilled className="w-4 h-4 " />
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="my-text-16 my-transition font-semibold hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
                        >
                          Type
                        </th>
                        {/* <th
                          scope="col"
                          className="my-text-16 my-transition font-semibold hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
                        >
                          Action
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {web3s
                        ?.filter((market) => market?.category === tab)
                        ?.map((item, idx) => (
                          <tr
                            key={idx}
                            className={`${
                              idx === 0 ? "border-y" : "border-b"
                            } my-text-16 border-b border-stroct-1 hover:bg-BG-FFF-8`}
                          >
                            <td>
                              <Link
                                href={`/staking-pools/${item?.id}`}
                                className="font-roboto flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 lg:px-6 pl-5 pr-4"
                              >
                                <Image
                                  width={69}
                                  height={40}
                                  src={item?.image}
                                  alt="img"
                                />
                                <div className="font-roboto">
                                  <p className="my-text-16 font-semibold mb-[2px]">
                                    {item?.title}
                                  </p>
                                  <p className="my-text-16">{item?.subTitel}</p>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <span className="font-lexend flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 my-text-12 text-primary-1">
                                {item?.percentage}%
                              </span>
                            </td>
                            <td>
                              <div className="flex-centerY md:gap-4 sm:gap-3 gap-2.5 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                                <Image
                                  width={24}
                                  height={24}
                                  src={blockchainIcon}
                                  alt="blockchainIcon"
                                />
                                <p className="my-text-16">{item?.blockchain}</p>
                              </div>
                            </td>
                            <td>
                              <span className="font-lexend flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                                ${item?.price} M
                              </span>
                            </td>
                            <td>
                              <div className="flex-centerY sm:gap-2 gap-1.5  md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                                <p className="my-text-16 mr-2">Flexi-Term</p>
                                <span className="text-primary-1 bg-BG-FFF-8 rounded py sm:px-[7px] px-1">
                                  Withdraw
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="font-lexend md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                                {/* <Link
                                  href={`/staking-pools/${item?.id}`}
                                  className="btn btn-primary sm:py-2 py-1.5 rounded w-full"
                                >
                                  {item?.action}
                                </Link> */}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
        {/* <div className="hidden sm:flex-center sm:gap-3 gap-2.5 gap-mt-32">
          <button
            className="btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4 xxl:text-2xl text-xl"
            aria-label="left"
          >
            <IconChevronLeft />
          </button>
          <button className="btn-outline-round border-primary-1 bg-primary-1 hover:border-primary-1 text-primary-4 w-8 h-8 xxl:p-6 p-5 flex-center">
            1
          </button>
          <button className="btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4 w-8 h-8 xxl:p-6 p-5 flex-center">
            2
          </button>
          <button className="btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4 w-8 h-8 xxl:p-6 p-5 flex-center">
            3
          </button>
          <button className="btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4 w-8 h-8 xxl:p-6 p-5 flex-center">
            4
          </button>
          <button
            className="btn-outline-round border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4 xxl:text-2xl text-xl"
            aria-label="right"
          >
            <IconChevronRight />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PoolsSection;
