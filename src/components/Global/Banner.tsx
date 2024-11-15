import { headerProps } from "@/config/types";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const Banner = ({ headerData }: { headerData: headerProps }) => {
  return (
    <section className="w-full max-h-[541px] bg-BG">
      <div className="section-pb bg-[url('/images/commonBannerBG2.png')] bg-no-repeat bg-cover bg-center">
        <div className="container flex flex-col justify-center items-center xl:pt-80 lg:pt-72 md:pt-44 sm:pt-40 pt-32">
          <FadeUp>
            <h2 className="banner-title text-center gradient-text-primary lg:pb-6 md:pb-5 sm:pb-4 pb-3.5">
              {headerData?.title}
            </h2>
          </FadeUp>
          <FadeDown>
            <p className="my-text-16 text-center text-foundation-blue-20 max-w-[636px]">
              {headerData?.description}
            </p>
          </FadeDown>
        </div>
      </div>
    </section>
  );
};

export default Banner;
