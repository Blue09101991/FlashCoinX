"use client";
import warlet from "@/../../public/images/warlet.png";
import Image from "next/image";
import React, { useState } from "react";
import AuthCard from "@/components/Global/AuthCard";
import Modal from "@/components/Global/Modal";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import { rewards } from "@/../../public/data/rewards";

const MyRewardsTab = () => {
  // User Logged
  const userLogged = false;
  // My rewards
  const myRewards = rewards?.filter((task) => task?.author === "rakibul islam");
  // Auth Modal
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <h2 className="section-title gap-mb-60">All Rewards</h2>
      {userLogged ? (
        <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 p-32px gap-mb-60">
          <div className="grid my-grid-gap">
            {myRewards?.map((item, idx) => (
              <div
                key={idx}
                className="flex xl:flex-row flex-col justify-between my-grid-gap w-full"
              >
                <div className="grid grid-cols-10 my-grid-gap w-full">
                  <div className="lg:col-span-4 col-span-10 relative overflow-hidden my-rounded-20">
                    <Image
                      width={416}
                      height={240}
                      src={item?.image}
                      className="my-rounded-20 my-transition w-full lg:h-[240px] h-auto hover:scale-110"
                      alt="image"
                    />
                  </div>

                  <div className="lg:col-span-6 col-span-10 xl:mt-10 sm:mt-4 mt-1">
                    <FadeUp>
                      <h4 className="my-text-32 gap-mb-24">{item?.title}</h4>
                    </FadeUp>
                    <FadeDown>
                      <ul className="grid gap-y-[2px] list-decimal list-inside">
                        {item?.features?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="my-text-16 text-foundation-blue-30"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </FadeDown>
                  </div>
                </div>
                <div className="xl:mt-8 sm:mt-4 mt-1">
                  <button
                    disabled={
                      item?.status === "ended" || item?.status === "upcoming"
                        ? true
                        : false
                    }
                    className="hover:cursor-not-allowed btn btn-primary md:w-auto w-full opacity-40 capitalize"
                  >
                    {item?.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" bg-BG-FFF-8 border border-stroct-1 my-rounded-20 w-full flex justify-center">
          <div className="flex-centerY flex-col max-w-[342px] gap-mt-60 gap-mb-60">
            <Image
              width={80}
              height={80}
              className="lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 w-12 h-12 gap-mb-20"
              src={warlet}
              alt=""
            />
            <p className="my-text-16 gap-mb-20 text-center">
              Connect your CoinX Web3 Wallet and enter the gateways to Web3
              derivatives trading.
            </p>
            <button onClick={handleModal} className="btn btn-primary">
              CoinX Login
            </button>
          </div>
        </div>
      )}

      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default MyRewardsTab;
