"use client";

import { useState } from "react";
import Modal from "@/components/Global/Modal";
import AuthCard from "@/components/Global/AuthCard";
import Image from "next/image";
import { rewards } from "@/../../public/data/rewards";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const OngoingAirdrops = () => {
  const ongoingRewards = rewards?.filter((task) => task?.status === "airdrops");
  // Auth Modal
  const [open, setOpen] = useState(false);
  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="bg-primary-6 my-rounded-20 p-32px gap-mb-60">
      <h3 className="my-text-32 gap-mb-32">Ongoing Airdrops</h3>
      <div>
        {ongoingRewards?.map((item, idx) => (
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
            <div>
              <button
                onClick={handleModal}
                className="btn btn-primary md:w-auto w-full"
              >
                Login
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default OngoingAirdrops;
