import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import processArrowRight from "@/../../public/images/processArrowRight.png";
import processArrowRightDown from "@/../../public/images/processArrowRightDown.png";
import { stakingProcess } from "@/../../public/data/stakingProcess";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const StakingProcess = () => {
  return (
    <section className="bg-primary-6 section-py relative">
      <div>
        <div className="container relative flex-center flex-col">
          <div className="flex-center gap-mb-60">
            <div className="sm:max-w-[746px] w-full text-center">
              <FadeUp>
                <h2 className="section-title gap-mb-24">Staking Process</h2>
                <FadeDown>
                  <p className="my-text-16">
                    Earn rewards by participating in our straightforward and
                    rewarding staking process.
                  </p>
                </FadeDown>
              </FadeUp>
            </div>
          </div>

          <div className="grid my-grid-gap lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {stakingProcess?.map((item, idx) => (
              <div key={idx} className="group">
                <div className="px-6 text-center flex-center flex-col relative">
                  <Image
                    className="relative xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] w-[80px] h-[80px]"
                    src={item?.image}
                    width={140}
                    height={140}
                    alt="img"
                  />
                  {stakingProcess?.length !== idx + 1 &&
                    (idx % 2 === 0 ? (
                      <Image
                        className={` lg:block hidden absolute -right-[20%] top-0`}
                        src={processArrowRight}
                        width={80}
                        height={80}
                        alt="img"
                      />
                    ) : (
                      <Image
                        className={` lg:block hidden absolute -right-[20%] top-[15%] `}
                        src={processArrowRightDown}
                        width={80}
                        height={80}
                        alt="img"
                      />
                    ))}
                  <h4 className="my-text-24 gap-mb-20 gap-mt-32 gap-mb-16">
                    {item?.title}
                  </h4>
                  <p className="my-text-16">{item?.details}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            className="btn btn-primary inline-flex md:hidden gap-mt-40"
            href="#"
          >
            VIEW MORE
            <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StakingProcess;
