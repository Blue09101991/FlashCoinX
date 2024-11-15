import { ProgressBar } from "@/components/Global";
import { IconGift } from "@tabler/icons-react";

const Participate = () => {
  const progressData = [
    {
      id: 1,
      title: "Smart Automation",
      bg: "bg-primary-orange",
      width: "25%",
      percent: "25%",
      color: "text-primary-1",
    },
  ];

  return (
    <div className="relative">
      <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-[#FACD95] to-[#C7F801] gap-mb-40">
        To Participate
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 my-grid-gap">
        <div className="p-32px md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 hover:border-primary-1 my-transition bg-BG-FFF-8">
          <div className="flex-centerY md:gap-3 sm:gap-2.5 gap-2 my-text-20 gap-mb-24">
            <h6 className="my-text-20">Task 1</h6>
            <div className="flex-centerY gap-1 my-text-16 text-primary-4 bg-primary-1 py-1 px-2 sm:rounded-lg rounded-md">
              <IconGift className="sm:w-5 sm:h-5 w-4 h-4" />
              <h6>Connect Wallet</h6>
            </div>
          </div>
          <h4 className="my-text-24 gap-mb-32">
            Swap at least 200 USDC for a 2X gas refund
          </h4>
          <div className="flex-centerY justify-between gap-mb-60 gap-3">
            <div className="text-left my-text-16 text-foundation-blue-30">
              <p className="gap-mb-24">Max. USDC amount per swap</p>
              <h5>$342.55</h5>
            </div>
            <div className="text-right my-text-16 text-foundation-blue-30">
              <p className=" gap-mb-24">Max. USDC amount per swap</p>
              <h5>$342.55</h5>
            </div>
          </div>
          <p className="my-text-16 text-foundation-blue-30">
            Total assigned Gas Fee amount
          </p>
          <div className=" md:py-3 sm:py-2.5 py-2">
            <ProgressBar progressData={progressData} />
          </div>
          <div className="flex-centerY justify-between">
            <p className="my-text-16 text-foundation-blue-30">976.12 USDC</p>
            <p className="my-text-16 text-foundation-blue-30">10,000 USDC</p>
          </div>
        </div>
        <div className="xl:p-10 lg:p-9 md:p-8 sm:p-7 p-5 md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 hover:border-primary-1 my-transition bg-BG-FFF-8">
          <div className="flex-centerY md:gap-3 sm:gap-2.5 gap-2 my-text-20 gap-mb-24">
            <h6 className="my-text-20">Task 2</h6>
            <div className="flex-centerY gap-1 my-text-16 text-primary-4 bg-primary-1 py-1 px-2 sm:rounded-lg rounded-md">
              <IconGift className="sm:w-5 sm:h-5 w-4 h-4" />
              <h6>$22,000</h6>
            </div>
          </div>
          <h4 className="my-text-24 gap-mb-32">
            Swap at least 200 USDC for a 2X gas refund
          </h4>
          <div className="flex-centerY justify-between gap-mb-60 gap-3">
            <div className="text-left my-text-16 text-foundation-blue-30">
              <p className="gap-mb-24">Max. USDC amount per swap</p>
              <h5>$342.55</h5>
            </div>
            <div className="text-right my-text-16 text-foundation-blue-30">
              <p className=" gap-mb-24">Max. USDC amount per swap</p>
              <h5>$342.55</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
