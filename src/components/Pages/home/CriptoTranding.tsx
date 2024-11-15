import Image from "next/image";
import Link from "next/link";
import { cryptoTradings } from "@/../../public/data/criptoTranding";
import { IconChevronRight } from "@tabler/icons-react";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";

const CriptoTranding = () => {
  return (
    <section className="bg-primary-6 section-py">
      <div className="container relative flex-center flex-col">
        <div className="bg-gradient-to-l from-[rgba(199,248,1,0.65)]  filter blur-[1162.5px]  rounded-full w-full h-full absolute "></div>
        <div className="relative">
          <FadeRight>
            <div className="flex items-end lg:justify-between justify-center xl:flex-row flex-col gap-mb-60 xl:text-right text-center">
              <h2 className="section-title lg:text-left text-center xl:mb-0 gap-mb-32 sm:max-w-[636px] w-full">
                Your one-step shop for crypto trading
              </h2>
              <Link
                className="btn btn-primary lg:inline-flex hidden"
                href="/pricing-plan"
              >
                VIEW MORE
                <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </Link>
            </div>
          </FadeRight>
          <FadeLeft>
            <div className="grid my-grid-gap lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
              {cryptoTradings?.map((item, idx) => (
                <div key={idx} className="group">
                  <div
                    className="px-32-py-40px
                      md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1  group-hover:border-primary-1 my-transition text-center flex flex-col justify-center items-center"
                  >
                    <Image
                      className="gap-mb-16 xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] w-[80px] h-[80px]"
                      src={item?.image}
                      width={140}
                      height={140}
                      alt="img"
                    />

                    <h4 className="my-text-24 gap-mb-20 gap-mt-20">
                      {item?.title}
                    </h4>
                    <p className="my-text-16 gap-mb-32">{item?.details}</p>
                    <div className="flex-centerY gap-1">
                      <h5 className="my-text-24">{item?.number}</h5>
                      <p className="my-text-16">{item?.subDetails}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeLeft>
        </div>
        <Link
          className="btn btn-primary inline-flex md:hidden gap-mt-40"
          href="/staking-pools"
        >
          VIEW MORE
          <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CriptoTranding;
