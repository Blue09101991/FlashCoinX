import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { StakingPollsSlider } from "../";
import FadeRight from "@/motion/FadeRight";
import FadeLeft from "@/motion/FadeLeft";
const StakingPolls = () => {
  return (
    <section className="bg-primary-6 relative section-py flex items-center justify-center flex-col w-full">
      <div className="container">
        <div className="flex-centerY md:justify-between justify-center gap-mb-40 overflow-x-hidden">
          <FadeRight>
            <h2 className="section-title md:text-left text-center">
              What&apos;s Trending
            </h2>
          </FadeRight>
          <FadeLeft>
            <div className="hidden md:flex-centerY md:gap-3 gap-2.5">
              <button
                className="btn-outline-round btn-prev-slider border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4"
                aria-label="left"
              >
                <IconChevronLeft className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </button>
              <button
                className="btn-outline-round btn-next-slider border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4"
                aria-label="right"
              >
                <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </button>
            </div>
          </FadeLeft>
        </div>
        <div className=" relative z-[2]">
          <StakingPollsSlider />
          <div className="md:hidden flex-center sm:gap-3 gap-2.5 md:mt-0 gap-mt-60">
            <button
              className="btn-outline-round btn-prev-slider border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4"
              aria-label="left"
            >
              <IconChevronLeft className="xxl:w-6 xxl:h-6 w-5 h-5" />
            </button>
            <button
              className="btn-outline-round btn-next-slider border-primary-1 hover:bg-primary-1 hover:border-primary-1 text-primary-1 hover:text-primary-4"
              aria-label="right"
            >
              <IconChevronRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingPolls;
