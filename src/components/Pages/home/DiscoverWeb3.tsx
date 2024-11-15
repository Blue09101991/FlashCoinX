"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { web3s } from "@/../../public/data/discoverWeb3";
import blockchainIcon from "@/../../public/images/blockchainIcon.png";
import { useState } from "react";
import { IconArrowUp } from "@tabler/icons-react";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";

const DiscoverWeb3 = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tabs = ["Defi", "GameFi", "NFT"];

  return (
    <section className="bg-primary-6 section-py relative">
      <div className="bg-[#F5D871] filter blur-[647px] rounded-full xxl:w-[358px] xl:w-[300px] lg:w-[240px] md:w-[156px] w-[300px] xxl:h-[358px] xl:h-[300px] lg:h-[240px] md:h-[156px] h-[300px] absolute left-0 top-0"></div>
      <div className="container relative">
        <div className="flex-centerY justify-between gap-mb-24">
          <FadeLeft>
            <div>
              <h2 className="section-title gap-mb-24">
                Discover <span className="text-highlight-1">Web3</span>
              </h2>
              <p className="my-text-16">
                Access Apps via the Bybit Wallet extension or the respective
                mobile app
              </p>
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="hidden md:flex-centerY sm:gap-3 gap-2.5">
              <Link className="btn btn-primary" href="/staking-pools">
                VIEW ALL
              </Link>
            </div>
          </FadeRight>
        </div>

        <Tab.Group
          defaultIndex={0}
          selectedIndex={selectedIdx}
          onChange={setSelectedIdx}
        >
          <Tab.List className="flex xl:gap-x-[72px] lg:gap-x-16 md:gap-x-14 sm:gap-x-12 gap-x-10">
            {tabs?.map((tab, idx) => (
              <Tab
                key={idx}
                className={`${
                  idx === selectedIdx
                    ? "text-primary-1 border-primary-1 border-b outline-none"
                    : "text-white border-transparent  border-b "
                }   hover:text-primary-1 my-text-16 font-normal font-lexend  
                       transition-none py-2.5 hover:border-primary-1`}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <div>
            <Tab.Panels className="relative overflow-x-auto scrollbar-sm scrollbar">
              {tabs?.map((tab, idx) => (
                <Tab.Panel key={idx} className="relative">
                  <table className=" w-full text-left rtl:text-right whitespace-nowrap">
                    <thead className="capitalize my-text-16 font-semibold  xl:pb-8 lg:py-7 md:py-6 sm:py-5 py-4 border-t border-stroct-1">
                      <tr>
                        <th
                          scope="col"
                          className="hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 sm:px-6 px-5"
                        >
                          Rankings
                        </th>
                        <th
                          scope="col"
                          className="hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 sm:px-6 px-5"
                        >
                          Blockchain
                        </th>
                        <th
                          scope="col"
                          className="hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 sm:px-6 px-5"
                        >
                          Token Price
                        </th>
                        <th
                          scope="col"
                          className="hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 sm:px-6 px-5"
                        >
                          24H Volume
                        </th>
                        <th
                          scope="col"
                          className="hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 sm:px-6 px-5"
                        >
                          Market Cap
                        </th>
                        <th
                          scope="col"
                          className="hover:text-primary-1 xl:py-8 lg:py-7 md:py-6 sm:py-5 py-4 sm:px-6 px-5"
                        >
                          TVL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {web3s
                        ?.filter((market) => market?.category == tab)
                        ?.map((item, idx) => (
                          <tr
                            key={idx}
                            className={`${
                              idx === 0 ? "border-y" : "border-b"
                            } my-text-16 border-b border-stroct-1 hover:bg-BG-FFF-8 `}
                          >
                            <td>
                              <span className="font-roboto flex-centerY md:gap-3 sm:gap-2.5 gap-2 sm:px-6 px-5">
                                {idx + 1}
                                <Image
                                  className=" w-auto xl:h-10 lg:h-8 h-7 max-w-min"
                                  width={40}
                                  height={40}
                                  src={item?.image}
                                  alt="coin"
                                />
                                <span className="font-roboto block">
                                  <Link
                                    href={`/staking-pools/${item?.id}`}
                                    className="my-text-16 font-semibold mb-[2px] block hover:text-primary-1 my-transition"
                                  >
                                    {item?.title}
                                  </Link>
                                  <span className="my-text-16">
                                    {item?.subTitel}
                                  </span>
                                </span>
                              </span>
                            </td>
                            <td className="lg:py-4 md:py-3.5 sm:py-3 py-2.5">
                              <span className="flex-centerY md:gap-3 sm:gap-2.5 gap-2 sm:px-6 px-5">
                                <Image
                                  width={24}
                                  height={24}
                                  className="icon-24"
                                  src={blockchainIcon}
                                  alt="blockchainIcon"
                                />
                                <span className="my-text-16 block">
                                  {item?.blockchain}
                                </span>
                              </span>
                            </td>
                            <td className="lg:py-4 md:py-3.5 sm:py-3 py-2.5">
                              <span className="sm:px-6 px-5 block">
                                <span className="my-text-16 mb-[2px]">
                                  {item?.price}
                                </span>
                                <span className="my-text-16 text-primary-1 flex">
                                  +{item?.percentage}{" "}
                                  <IconArrowUp className="sm:w-5 sm:h-5 w-4 h-4" />
                                </span>
                              </span>
                            </td>
                            <td className="my-text-16">
                              <span className="sm:px-6 px-5 block">
                                ${item?.hrVolume} M
                              </span>
                            </td>
                            <td className="my-text-16">
                              <span className="sm:px-6 px-5 block">
                                ${item?.marketCap} B
                              </span>
                            </td>
                            <td className="my-text-16">
                              <span className="sm:px-6 px-5 block">
                                ${item?.tvl} B
                              </span>
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
        <div className="w-full md:hidden flex-center sm:gap-3 gap-2.5 gap-mt-32">
          <Link className="btn btn-primary" href="/staking-pools">
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverWeb3;
