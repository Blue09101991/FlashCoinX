"use client";

import Image from "next/image";
import {
  IconCaretDownFilled,
  IconExchange,
  IconWallet,
} from "@tabler/icons-react";
import { Transition } from "@headlessui/react";
import { FormEvent, Fragment, useState } from "react";
import { web3s } from "@/../public/data/discoverWeb3";
import { Listbox } from "@headlessui/react";
import { useDropdown } from "@/hooks";
import { currencyNetworkCategorys } from "@/../../public/data/currencyNetworkCategorys";
import AuthCard from "@/components/Global/AuthCard";
import Modal from "@/components/Global/Modal";

const ExchangeCard = () => {
  const coins = web3s?.slice(0, 10);
  const currencyNetworks = currencyNetworkCategorys?.slice(2, 6);
  const [selectedReceivedCurencys, setSelectedReceivedCurencys] = useState(
    coins[0]
  );
  const [selectedPayCurencys, setSelectedPayCurencys] = useState(coins[2]);
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

  // Exchange

  const [exchange, setExchange] = useState(false);

  // Auth Modal
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  // Logged
  const logged: boolean = false;

  // Swap Form submit
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-BG lg:rounded-[20px] md:rounded-2xl rounded-xl lg:py-8 md:py-7 py-6 lg:px-6 md:px-5 px-4 gap-mb-24">
      <form onSubmit={handleFormSubmit}>
        <div className="flex-centerY flex-wrap xxl:justify-between lg:justify-center justify-between  my-grid-gap gap-mb-24">
          <h4 className="my-text-24 text-primary-1">Tether USD</h4>
          <Listbox
            value={selectedCoinNetworks}
            onChange={setSelectedCoinNetworks}
          >
            <div className="relative z-[5]">
              <div ref={coinNetworksRef}>
                <Listbox.Button
                  className="flex justify-between items-center sm:2 gap-1.5 relative cursor-pointer sm:w-[160px] w-[140px]"
                  onClick={handleCoinNetworksOption}
                >
                  <span className="flex-centerY sm:gap-2 gap-1.5">
                    <Image
                      className="sm:w-6 sm:h-6 w-5 h-5 rounded-full"
                      width={24}
                      height={24}
                      src={selectedCoinNetworks?.image}
                      alt="curencyNetwork"
                    />
                    <span className="block my-text-18 hover:text-primary-1 my-transition leading-7">
                      {selectedCoinNetworks?.title}
                    </span>
                  </span>
                  <IconCaretDownFilled
                    className={`text-primary-1 icon-24 text-2xl block ${
                      openCoinNetworks
                        ? "rotate-180 duration-500"
                        : "duration-500"
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

        <div className="flex flex-col">
          <div
            className={`${
              exchange ? "order-3" : "order-1"
            } bg-BG-FFF-8 my-rounded-20 lg:p-6 md:p-5 sm:p-4 p-3 font-roboto my-text-16 text-white-2 my-transition`}
          >
            <div className=" flex-centerY justify-between w-full md:mb-3 sm:mb-2.5 mb-2">
              <span className="text-foundation-blue-50">Pay</span>
              <div className="flex-centerY gap-2 text-foundation-blue-50">
                <IconWallet className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="uppercase">
                  --{selectedPayCurencys?.subTitel}
                </span>{" "}
                <span className="text-primary-1">Max</span>
              </div>
            </div>
            <div className=" flex-centerY justify-between w-full">
              <Listbox
                value={selectedPayCurencys}
                onChange={setSelectedPayCurencys}
              >
                <div className="relative z-[4]">
                  <div ref={payRef}>
                    <Listbox.Button
                      className="flex items-start gap-3 relative cursor-pointer sm:w-[180px] w-[140px]"
                      onClick={handlePayOption}
                    >
                      <Image
                        className="sm:w-8 sm:h-8 w-6 h-6  rounded-full "
                        src={selectedPayCurencys?.image}
                        alt="curency"
                      />
                      <span className="flex justify-between w-full">
                        <span className="block text-left">
                          <span className="block my-text-18 hover:text-primary-1 my-transition leading-7">
                            {selectedPayCurencys?.title}
                          </span>
                          <span className="block my-text-16 text-foundation-blue-50">
                            {selectedCoinNetworks?.title}
                          </span>
                        </span>
                        <IconCaretDownFilled
                          className={`text-primary-1 icon-24 text-2xl block ${
                            openPay
                              ? "rotate-180 duration-500"
                              : " duration-500"
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
                    <Listbox.Options className="my-shadow-1 w-full h-[232px] bg-BG text-secondary p-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md">
                      {coins?.map((item, idx) => (
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
              <input
                className="outline-none bg-transparent w-14"
                placeholder="Max"
                min={0}
                defaultValue={(selectedPayCurencys?.price).toFixed(2)}
                type="number"
                name="pay_curencys"
                id="pay_curencys"
              />
            </div>
          </div>

          <div className="flex-center -my-2 relative order-2">
            <button
              onClick={() => setExchange(!exchange)}
              type="button"
              className=" bg-BG rounded-full p-1.5"
              aria-label="exchange"
            >
              <span className="block bg-primary-1 text-primary-4 rounded-full sm:p-2 p-1.5">
                <IconExchange className="my-transition sm:w-5 sm:h-5 w-4 h-4" />
              </span>
            </button>
          </div>

          <div
            className={`${
              exchange ? "order-1" : "order-3"
            }  bg-BG-FFF-8 my-rounded-20 lg:p-6 md:p-5 sm:p-4 p-3 font-roboto my-text-16 text-white-2 my-transition`}
          >
            <div className=" flex-centerY justify-between w-full md:mb-3 sm:mb-2.5 mb-2">
              <span className="text-foundation-blue-50">Receive</span>
              <div className="flex-centerY gap-2 text-foundation-blue-50">
                <IconWallet className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="uppercase">
                  --{selectedReceivedCurencys?.subTitel}
                </span>{" "}
                <span className="text-primary-1">Max</span>
              </div>
            </div>
            <div className=" flex-centerY justify-between w-full">
              <Listbox
                value={selectedReceivedCurencys}
                onChange={setSelectedReceivedCurencys}
              >
                <div className="relative z-[3]">
                  <div ref={receivedRef}>
                    <Listbox.Button
                      className="flex items-start gap-3 relative cursor-pointer sm:w-[180px] w-[140px]"
                      onClick={handleReceivedOption}
                    >
                      <Image
                        className="sm:w-8 sm:h-8 w-6 h-6  rounded-full "
                        src={selectedReceivedCurencys?.image}
                        alt="curency"
                      />
                      <span className="flex justify-between w-full">
                        <span className="block text-left">
                          <span className="block my-text-18 hover:text-primary-1 my-transition leading-7">
                            {selectedReceivedCurencys?.title}
                          </span>
                          <span className="block my-text-16 text-foundation-blue-50">
                            {selectedCoinNetworks?.title}
                          </span>
                        </span>
                        <IconCaretDownFilled
                          className={`text-primary-1 icon-24 text-2xl block ${
                            openReceived
                              ? "rotate-180 duration-500"
                              : " duration-500"
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
                    <Listbox.Options className="my-shadow-1 w-full h-[232px] bg-BG text-secondary p-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-sm rounded-md">
                      {coins?.map((item, idx) => (
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
              <input
                className="outline-none bg-transparent w-14"
                placeholder="Max"
                min={0}
                defaultValue={(selectedReceivedCurencys?.price).toFixed(2)}
                type="number"
                name="received_curencys"
                id="received_curencys"
              />
            </div>
          </div>
        </div>

        <div className=" font-roboto my-text-16 text-foundation-blue-50 text-white-2 gap-mb-16  gap-mt-16 flex-centerY justify-between">
          <span>Swap Fee</span>
          <input
            className="text-right outline-none bg-transparent"
            type="number"
            value={20.56}
            disabled={true}
            name="swap_fee"
            id="swap_fee"
          />
        </div>

        <div className=" font-roboto text-foundation-blue-50 my-text-16 text-white-2 gap-mb-16 flex-centerY justify-between">
          <span>Gas Fees</span>
          <input
            className="text-right outline-none bg-transparent"
            type="number"
            value={5.56}
            disabled={true}
            name="gas_fees"
            id="gas_fees"
          />
        </div>

        <div className="font-roboto text-foundation-blue-50 my-text-16 text-white-2 gap-mb-24 flex-centerY justify-between">
          <span>Min. Amount Received</span>
          <input
            className="text-right outline-none bg-transparent"
            type="number"
            value={35.64}
            disabled={true}
            name="min_received"
            id="min_received"
          />
        </div>

        {logged ? (
          <button
            type="submit"
            className="btn btn-primary w-full"
            aria-label="swap"
          >
            Swap Now
          </button>
        ) : (
          <button
            type="button"
            onClick={handleModal}
            className="btn btn-primary w-full"
          >
            Log In
          </button>
        )}
      </form>
      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default ExchangeCard;
