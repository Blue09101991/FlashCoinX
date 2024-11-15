"use client";

import Image from "next/image";
import React, { FormEvent } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IconCaretDownFilled } from "@tabler/icons-react";

import { web3s } from "@/../public/data/discoverWeb3";
import { currencyNetworkCategorys } from "@/../../public/data/currencyNetworkCategorys";
import { useDropdown } from "@/hooks";
import { Modal } from "./";
import AuthCard from "./AuthCard";

const BuyCryptoCard = () => {
  const coins = web3s?.slice(0, 10);
  const currencyNetworks = currencyNetworkCategorys?.slice(2, 6);
  const [selectedReceivedCurencys, setSelectedReceivedCurencys] = useState(
    coins[4]
  );

  const [selectedPayCurencys, setSelectedPayCurencys] = useState(coins[3]);
  const [selectedCoinNetworks, setSelectedCoinNetworks] = useState(
    currencyNetworks[0]
  );

  const {
    open: openReceived,
    handleOption: handleReceivedOption,
    ref: receivedRef,
  } = useDropdown();

  const {
    open: openPay,
    handleOption: handlePayOption,
    ref: payRef,
  } = useDropdown();

  const {
    open: openCoinNetworks,
    handleOption: handleCoinNetworksOption,
    ref: coinNetworksRef,
  } = useDropdown();

  // Auth Modal
  const [open, setOpen] = useState(false);
  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-BG p-32px my-rounded-20 relative w-full h-full">
      <h2 className="section-title sm:mb-3 mb-2">Buy Crypto</h2>
      <p className="my-text-16 gap-mb-40">Buy In Seconds</p>
      <form onSubmit={handleFormSubmit}>
        <div className="grid my-grid-gap gap-mb-32">
          <div>
            <label
              htmlFor="pay"
              className="my-text-16 sm:mb-2 mb-1.5 inline-block"
            >
              Spend
            </label>
            <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 flex-centerY">
              <input
                id="pay"
                className="common-input md:rounded-xl sm:rounded-lg rounded-md bg-transparent border-none md:p-4 sm:p-3 p-2.5 text-white"
                type="number"
                name="pay"
                placeholder="2201-650,600"
              />
              <div className="relative w-max">
                <Listbox
                  value={selectedPayCurencys}
                  onChange={setSelectedPayCurencys}
                >
                  <div ref={payRef}>
                    <Listbox.Button
                      className="relative flex-centerY gap-2  cursor-pointer w-max lg:px-4 md:px-3 sm:px-2.5 px-2"
                      onClick={handlePayOption}
                    >
                      <Image
                        className="sm:w-8 sm:h-8 w-6 h-6  rounded-full "
                        src={selectedPayCurencys?.image}
                        alt="curency"
                      />
                      <span className="flex justify-between gap-2 w-full">
                        <span className="block my-text-18 hover:text-primary-1 my-transition leading-7">
                          {selectedPayCurencys?.title}
                        </span>
                        <IconCaretDownFilled
                          className={` icon-24 text-2xl block ${
                            openPay
                              ? "rotate-180 duration-500 text-primary-1"
                              : " duration-500 text-stroct-1"
                          }`}
                        />
                      </span>
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
                    <Listbox.Options className="my-shadow-1 absolute w-max right-0 sm:h-[220px] h-[200px] bg-BG text-secondary p-4 grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md z-10 ">
                      {coins?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li className="group rounded-md  hover:bg-primary-1 cursor-pointer my-transition">
                            <span className="flex-centerY gap-2 py-1 px-1.5 w-full">
                              <Image
                                className="sm:w-6 sm:h-6 w-5 h-5 rounded-full group-hover:bg-primary-4"
                                width={24}
                                height={24}
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
                </Listbox>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="receive"
              className="my-text-16 sm:mb-2 mb-1.5 inline-block"
            >
              Receive
            </label>
            <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 flex-centerY">
              <input
                id="receive"
                className="common-input md:rounded-xl sm:rounded-lg rounded-md bg-transparent border-none md:p-4 sm:p-3 p-2.5 text-white"
                type="number"
                name="receive"
                placeholder="Enter amount"
              />
              <div className="relative w-max">
                <Listbox
                  value={selectedReceivedCurencys}
                  onChange={setSelectedReceivedCurencys}
                >
                  <div ref={receivedRef}>
                    <Listbox.Button
                      className="relative flex-centerY gap-2  cursor-pointer w-max lg:px-4 md:px-3 sm:px-2.5 px-2"
                      onClick={handleReceivedOption}
                    >
                      <Image
                        className="sm:w-8 sm:h-8 w-6 h-6  rounded-full group-hover:bg-primary-4"
                        width={32}
                        height={32}
                        src={selectedReceivedCurencys?.image}
                        alt="curency"
                      />
                      <span className="flex justify-between gap-2 w-full">
                        <span className="block my-text-18 hover:text-primary-1 my-transition leading-7">
                          {selectedReceivedCurencys?.title}
                        </span>
                        <IconCaretDownFilled
                          className={` icon-24 text-2xl block ${
                            openReceived
                              ? "rotate-180 duration-500 text-primary-1"
                              : " duration-500 text-stroct-1"
                          }`}
                        />
                      </span>
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
                    <Listbox.Options className="my-shadow-1 absolute w-max right-0 sm:h-[220px] h-[200px] bg-BG text-secondary p-4 grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md z-10 ">
                      {coins?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li className="group rounded-md  hover:bg-primary-1 cursor-pointer my-transition">
                            <span className="flex-centerY gap-2 py-1 px-1.5 w-full">
                              <Image
                                className="sm:w-6 sm:h-6 w-5 h-5 rounded-full group-hover:bg-primary-4"
                                width={24}
                                height={24}
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
                </Listbox>
              </div>
            </div>
            <h6 className="my-text-16 sm:mt-2 mt-1.5">1 USDT ≈ 126 BDT</h6>
          </div>
          <div className="w-full">
            <span className=" my-text-16 sm:mb-2 mb-1.5 inline-block">
              Network
            </span>
            <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 flex-centerY md:p-4 sm:p-3 p-2.5">
              <Listbox
                value={selectedCoinNetworks}
                onChange={setSelectedCoinNetworks}
              >
                <div className="relative z-[3] w-full">
                  <div ref={coinNetworksRef}>
                    <Listbox.Button
                      className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                      onClick={handleCoinNetworksOption}
                    >
                      <span className="flex-centerY gap-2 w-full">
                        <Image
                          className="sm:w-6 sm:h-6 w-5 h-5 rounded-full group-hover:bg-primary-4"
                          width={24}
                          height={24}
                          src={selectedCoinNetworks?.image}
                          alt="coin"
                        />
                        <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                          {selectedCoinNetworks?.title}
                        </span>
                      </span>
                      <IconCaretDownFilled
                        className={` icon-24 text-2xl block ${
                          openCoinNetworks
                            ? "rotate-180 duration-500 text-primary-1"
                            : " duration-500 text-stroct-1"
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
                    <Listbox.Options className="my-shadow-1 w-full h-[232px] bg-BG text-secondary p-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md">
                      {currencyNetworks?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li className="group rounded-md  hover:bg-primary-1 cursor-pointer my-transition">
                            <span className="flex-centerY gap-2 py-1 px-1.5 w-full">
                              <Image
                                className="sm:w-6 sm:h-6 w-5 h-5 rounded-full group-hover:bg-primary-4"
                                width={24}
                                height={24}
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

            <div className="flex-centerY justify-between sm:mt-2 mt-1.5 my-text-16">
              <h6>Gass fee</h6>
              <h6 className="text-primary-1 ">5 USDT</h6>
            </div>
          </div>
          <div>
            <label
              htmlFor="wallet_adress"
              className="my-text-16 sm:mb-2 mb-1.5 inline-block"
            >
              Wallet Adress
            </label>
            <textarea
              className="my-text-16 w-full bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 flex-centerY md:p-4 sm:p-3 p-2.5 outline-none
                common-input md:rounded-xl sm:rounded-lg rounded-md text-white"
              name="wallet_address"
              placeholder="Enter your wallet address"
              id="wallet_adress"
              cols={30}
              rows={3}
            ></textarea>
          </div>
        </div>
      </form>
      <button
        type="button"
        onClick={handleModal}
        className="btn btn-primary w-full"
      >
        Next
      </button>
      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default BuyCryptoCard;
