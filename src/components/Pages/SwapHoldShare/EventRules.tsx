"use client";
import Link from "next/link";
import { useState } from "react";
import AuthCard from "@/components/Global/AuthCard";
import Modal from "@/components/Global/Modal";

const EventRules = () => {
  // Auth Modal
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="gap-mt-60">
      <div
        className=" px-32-py-40px
              md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 bg-BG-FFF-8"
      >
        <h4 className="my-text-24 gap-mb-40 gradient-text-primary">
          Event Rules
        </h4>
        <div className="grid my-grid-gap">
          <p className="my-text-16 text-foundation-blue-30">
            Event Period: 2024-11-02 10:00:00 - 2024-11-15 10:00:00 UTC
          </p>
          <p className="my-text-16 text-foundation-blue-30">
            How to participate: Register or log in to CoinX{" "}
            <button onClick={handleModal} className="text-primary-1">
              link to sign-up
            </button>
            , and create your CoinX Wallet{" "}
            <Link href="/pricing-plan" className="text-primary-1">
              link to CoinX Wallet
            </Link>{" "}
            if you don’t have one.
          </p>
          <div className="flex flex-col lg:flex-row my-grid-gap text-foundation-blue-30">
            <h4 className="my-text-20 whitespace-nowrap">Task 1:</h4>
            <p className="my-text-16 text-foundation-blue-30">
              Swap at least 200 USDC on supported chains (Ethereum, BNB Chain,
              Arbitrum One) during the Swap Period to be eligible for a 2X gas
              fee refund.Only $10,000 in gas fee refunds will be distributed on
              a first-come, first-served basis. Each address can receive a
              maximum 2X gas fee refund of up to $20. Get started now!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start my-grid-gap">
            <h4 className="my-text-20 whitespace-nowrap">Task 2:</h4>

            <p className="my-text-16 text-foundation-blue-30">
              Hold your Swapped USDC for 7 days in a row to share 20,000 USDC
              tokens.Hourly snapshots will capture participants&apos; USDC
              assets in their Bybit Wallet. Falling below the originally swapped
              assets due to trading or transfers disqualifies users from getting
              the rewards.
            </p>
          </div>
          <p className="my-text-16 text-foundation-blue-30">
            Note: For Task 1 and 2, you need to Swap for a minimum of 200 USDC
            to be eligible for rewards.
          </p>
        </div>
      </div>
      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default EventRules;
