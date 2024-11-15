"use client";
import warlet from "@/../../public/images/warlet.png";
import Image from "next/image";
import React, { useState } from "react";
import AuthCard from "@/components/Global/AuthCard";
import Modal from "@/components/Global/Modal";

const ApexLoginArea = () => {
  // Auth Modal
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="lg:sticky top-28 bg-BG-FFF-8 border border-stroct-1 my-rounded-20 w-full min-h-screen flex justify-center p-24px">
      <div className="flex-centerY flex-col max-w-[342px] section-pt">
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
      <Modal onClick={handleModal} open={open}>
        <AuthCard />
      </Modal>
    </div>
  );
};

export default ApexLoginArea;
