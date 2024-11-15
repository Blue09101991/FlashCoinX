import { projectDataType } from "@/config/types";
import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import idoLaunchPrice from "@/../../public/images/idoLaunchPrice.png";
import FadeUp from "@/motion/FadeUp";

const IdoDetails = ({ projectData }: { projectData: projectDataType }) => {
  const {
    image,
    description,
    participants,
    redemptionAmount,
    totalAmount,
    totalIssued,
    totalTickets,
  } = projectData;

  return (
    <div className="gap-mt-60">
      <h2 className="my-text-32 text-transparent bg-clip-text bg-gradient-to-r from-[#FACD95] to-[#C7F801] gap-mb-24">
        IDO Details
      </h2>
      <FadeUp>
        <p className="my-text-16 gap-mb-40">{description}</p>
      </FadeUp>
      <FadeUp>
        <div className=" grid grid-cols-12 my-grid-gap relative">
          <div className="xl:col-span-9 md:col-span-8 col-span-12 w-full md:order-1 order-2">
            <div className=" bg-BG-FFF-8 border border-stroct-1 p-32px my-rounded-20">
              <div className="flex-centerY justify-between my-grid-gap gap-mb-24">
                <div>
                  <h6 className=" my-text-18 md:mb-3 sm:mb-2.5 mb-2">
                    Total Amount
                  </h6>
                  <h5 className="my-text-24 text-primary-1">
                    {totalAmount} <span className="my-text-18">USDT</span>
                  </h5>
                </div>
                <div className="text-right">
                  <h6 className="my-text-18 md:mb-3 sm:mb-2.5 mb-2">
                    Total Issued
                  </h6>
                  <h5 className="my-text-24 text-primary-1">
                    ${totalIssued?.toLocaleString()}{" "}
                    <span className="my-text-18">CAT</span>
                  </h5>
                </div>
              </div>
              <div className="sm:rounded-lg rounded-md p-24px border border-stroct-1 bg-BG-FFF-8 grid my-grid-gap">
                <div className="flex-centerY justify-between">
                  <h6 className="my-text-16">Total Winning Tickets</h6>
                  <h6 className="my-text-16 whitespace-nowrap">
                    {totalTickets} Tickets
                  </h6>
                </div>
                <div className="flex-centerY justify-between">
                  <h6 className="my-text-16">Redemption Amount</h6>
                  <h6 className="my-text-16">{redemptionAmount} Per Ticket</h6>
                </div>
                <div className="flex-centerY justify-between">
                  <h6 className="my-text-16 ">Total Participants</h6>
                  <h6 className="my-text-16">{participants}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 md:col-span-4 col-span-12 w-full md:order-2 order-1">
            <div className="h-full flex-center justify-between flex-col bg-BG-FFF-8 border border-stroct-1 my-rounded-20  lg:py-8 md:py-7 py-6 lg:px-6 md:px-5 px-4">
              <div className="flex-center md:gap-4 sm:gap-3 gap-2.5">
                <Image
                  className=""
                  width={32}
                  height={32}
                  src={idoLaunchPrice}
                  alt="coin"
                />
                <h4 className="my-text-20">USDT</h4>
              </div>
              <div className="md:my-0 my-6 w-full h-[1px] bg-stroct-1  flex-center">
                <div className="rounded-full w-6 h-6 flex-center bg-[#39431D] border border-stroct-1">
                  <IconArrowDown className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-center">
                <p className="my-text-16 gap-mb-16">Launch Price</p>
                <h4 className="my-text-24 text-primary-1 ">0.0144 USDT</h4>
              </div>
              <div className="md:my-0 my-6 w-full h-[1px] bg-stroct-1  flex-center">
                <div className="rounded-full w-6 h-6 flex-center bg-[#39431D] border border-stroct-1">
                  <IconArrowDown className=" w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-center md:gap-4 sm:gap-3 gap-2.5">
                <Image
                  className="rounded-full "
                  width={32}
                  height={32}
                  src={image}
                  alt="coin"
                />
                <h4 className="my-text-20">USDT</h4>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default IdoDetails;
