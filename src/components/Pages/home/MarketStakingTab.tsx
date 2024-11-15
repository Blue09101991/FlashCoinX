"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { stakings } from "@/../../public/data/markets";
import Image from "next/image";
import Link from "next/link";
import { web3s } from "../../../../public/data/discoverWeb3";
// My modules

const MarketStakingTab = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      loop={true}
      speed={500}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 14,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      navigation={{
        nextEl: ".btn-next-slider",
        prevEl: ".btn-prev-slider",
      }}
      modules={[FreeMode, Autoplay, Navigation]}
      className="mySwiper"
    >
      {web3s?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="border border-stroct-1 hover:border-transparent hover:bg-stroct-1 bg-BG-FFF-8 my-transition sm:rounded-lg rounded-md lg:px-6 md:px-5 sm:px-4 xl:py-10 lg:py-9 md:py-6 sm:py-5 p-4 group">
            <div className="flex-centerY flex-col">
              <div className="flex-centerY sm:gap-3 gap-2.5">
                <Image
                  className="w-auto md:h-[52px] sm:h-11 h-10 max-w-min"
                  width={52}
                  height={52}
                  src={item?.image}
                  alt="icon"
                />
                <div>
                  <h3 className="text-white leading-[20%] md:text-[32px] sm:text-3xl text-2xl sm:mb-1 mb-4">
                    {item?.title}
                  </h3>
                  <h6 className="my-text-20">{item?.subTitel}</h6>
                </div>
              </div>
              <h2 className="my-text-48 text-primary-1 text-center gap-mt-40 mb-1">
                {item?.percentage} %
              </h2>
              <h4 className="my-text-20 gap-mb-40 ">APY</h4>
            </div>
            <div className="gap-mb-48">
              <h6 className="flex-centerY justify-between my-text-16 lg:mb-3 md:mb-2.5 mb-2">
                TVL <span>${item?.price} M</span>
              </h6>
              <h6 className="flex-centerY justify-between my-text-16">
                Network <span>{item?.blockchain}</span>
              </h6>
            </div>
            {/* <Link
              className="btn btn-outline hover:border-primary-1 font-semibold group-hover:bg-primary-1 text-primary-1 group-hover:text-primary-4 hover:text-primary-4 flex-center"
              href={`/staking-pools/${item?.id}`}
            >
              Stock
            </Link> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarketStakingTab;
