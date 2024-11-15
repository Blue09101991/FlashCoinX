import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { currencyNetworkCategorys } from "@/../../public/data/currencyNetworkCategorys";
import { tiltStyles } from "@/utility/tiltStyles";
import TiltWraper from "@/lib/TiltWraper";

const SwapUSDC = () => {
  return (
    <div className="gap-mt-60 relative">
      <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-[#FACD95] to-[#C7F801] gap-mb-40">
        Swap for USDC
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-grid-gap">
        {currencyNetworkCategorys?.slice(0, 3)?.map((item, idx) => (
          <TiltWraper key={idx} tiltStyles={tiltStyles}>
            <div
              className="px-32-py-40px
              md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 bg-BG-FFF-8 gredient-bg-effect gredient-bg-X my-transition text-center flex flex-col justify-center items-center group"
            >
              <Image
                className="lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[90px] sm:w-[80px] sm:h-[80px] w-[70px] h-[70px] gap-mb-32"
                src={item?.image}
                width={100}
                height={100}
                alt="img"
              />
              <h4 className="my-text-24 group-hover:text-primary-4 my-transition gap-mb-24">
                {item?.title}
              </h4>
              <p className="my-text-16 group-hover:text-primary-4 my-transition gap-mb-32 foundation-blue-30">
                {item?.details}
              </p>
              <Link
                className="btn btn-primary flex-center md:gap-[10px] sm:gap-2 gap-1 w-full"
                href={`/swap`}
              >
                Swap
                <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </Link>
            </div>
          </TiltWraper>
        ))}
      </div>
    </div>
  );
};

export default SwapUSDC;
