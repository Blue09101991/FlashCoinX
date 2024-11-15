"use client";

import Image from "next/image";
import {
  IconCaretDownFilled,
  IconChevronDown,
  IconWallet,
} from "@tabler/icons-react";
import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import { web3s } from "@/../../public/data/discoverWeb3";
import React, { Fragment, useState } from "react";
import { useDropdown } from "@/hooks";
import AnimateHeight, { Height } from "react-animate-height";
import AuthCard from "@/components/Global/AuthCard";
import Modal from "@/components/Global/Modal";

const InvestLoginCard = () => {
  const coins = web3s?.slice(0, 10);

  const [selectedPayCurencys, setSelectedPayCurencys] = useState(coins[3]);
  const [height, setHeight] = useState<Height>(0);

  const {
    open: openPay,
    handleOption: handlePayOption,
    ref: payRef,
  } = useDropdown();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Rest of your submit logic
  };

  // Auth Modal
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="lg:sticky top-28 bg-BG lg:rounded-[20px] md:rounded-2xl rounded-xl  lg:py-8 md:py-7 py-6 lg:px-6 md:px-5 px-4">
      <div className="flex-centerY justify-between gap-mb-24">
        <h4 className="my-text-24 font-normal text-primary-1">Invest</h4>
        <h4 className="my-text-24 font-normal">Redeem</h4>
      </div>
      <div className="flex-centerY gap-2 gap-mb-24">
        <Image
          width={24}
          height={24}
          src={selectedPayCurencys?.image}
          alt="invest"
        />
        <p className="my-text-16">
          {selectedPayCurencys?.category} ({selectedPayCurencys?.subTitel})
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 lg:p-6 md:p-5 sm:p-4 p-3 font-roboto my-text-16 text-white-2 gap-mb-24">
          <div className=" flex-centerY justify-between w-full md:mb-3 sm:mb-2.5 mb-2 opacity-60 my-text-16">
            <span>Pay</span>
            <div className="flex-centerY gap-2">
              <IconWallet />
              <span>--ETH</span>
            </div>
          </div>
          <div className="flex-centerY gap-3 justify-between w-full">
            <div className="relative w-max">
              <Listbox
                value={selectedPayCurencys}
                onChange={setSelectedPayCurencys}
              >
                <div ref={payRef}>
                  <Listbox.Button
                    className="relative flex-centerY gap-2  cursor-pointer w-max"
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
                  <Listbox.Options
                    className="my-shadow-1  h-[220px] bg-BG text-secondary p-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md
                  
                  w-max right-0  z-10 
                  "
                  >
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

            <input
              id="pay"
              className="w-full outline-none md:rounded-xl sm:rounded-lg rounded-md my-text-24 bg-transparent border-none text-white opacity-60 placeholder:text-right text-right"
              type="number"
              name="pay"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="relative gap-mb-24">
          <div className="w-full bg-BG-FFF-8 border border-stroct-1 sm:rounded-lg rounded-md sm:py-3 sm:px-4 p-3 font-roboto my-text-16 text-white-2 flex-centerY justify-between text-foundation-blue-50">
            <span className="w-full">Estimated Cost</span>
            <div className="w-full whitespace-nowrap">
              <input
                className="text-right outline-none bg-transparent"
                name="estimated_cost"
                type="number"
                value={20.56}
                disabled={true}
              />
              %
            </div>
          </div>
          <button
            aria-expanded={height !== 0}
            onClick={() => setHeight(height === 0 ? "auto" : 0)}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2  bg-primary-1 text-primary-4 rounded-full sm:p-2 p-1.5"
            aria-label="down"
          >
            <IconChevronDown
              className={`my-transition sm:w-4 sm:h-4 w-3.5 h-3.5 ${
                height === 0 && "rotate-180"
              }`}
            />
          </button>
        </div>

        <AnimateHeight duration={500} height={height}>
          <div className="w-full bg-BG-FFF-8 border border-stroct-1 sm:rounded-lg rounded-md sm:py-3 sm:px-4 p-3 font-roboto my-text-16 text-white-2 gap-mb-24 flex-centerY justify-between text-foundation-blue-50">
            <span className="w-full">Slippage Fees</span>
            <div className="w-full whitespace-nowrap">
              <input
                className="text-right outline-none bg-transparent"
                name="slippage_fees"
                type="number"
                value={0.5}
                disabled={true}
              />
              %
            </div>
          </div>

          <div className="w-full bg-BG-FFF-8 border border-stroct-1 sm:rounded-lg rounded-md sm:py-3 sm:px-4 p-3 font-roboto my-text-16 text-white-2 gap-mb-24 flex-centerY justify-between text-foundation-blue-50">
            <span className="w-full">Gas Fees</span>
            <div className="w-full whitespace-nowrap">
              <input
                className="text-right outline-none bg-transparent"
                name="gas_fees"
                type="number"
                value={5.06}
                disabled={true}
              />
              $
            </div>
          </div>
        </AnimateHeight>

        <div className="w-full bg-BG-FFF-8 border border-stroct-1 sm:rounded-lg rounded-md sm:py-3 sm:px-4 p-3 font-roboto my-text-16 text-white-2 gap-mb-16 flex-centerY justify-between text-foundation-blue-50">
          <span className="w-full">Estimated Daily Yield</span>
          <div className="w-full whitespace-nowrap">
            <input
              className="text-right outline-none bg-transparent"
              name="gas_fees"
              type="number"
              value={5.06}
              disabled={true}
            />
            $
          </div>
        </div>
        <div className="flex gap-2 items-center customck gap-mb-24">
          <div className="flex items-center relative">
            <input
              type="checkbox"
              id="ch"
              name="A3-confirmation"
              value="ch"
              className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
            />
            <div className="bg-glass-6 border border-[rgba(255,255,255,0.16)] rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-primary ">
              <svg
                className="fill-current hidden w-2.5 h-2.5 text-white pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="currentColor"
                    fillRule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <label
              htmlFor="ch"
              className="select-none flex gap-2 cursor-pointer items-center my-text-16"
            >
              <Link href="#">Stake Protect Order</Link>
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={handleModal}
          className="btn btn-primary w-full"
        >
          Log In
        </button>
      </form>
      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default InvestLoginCard;
