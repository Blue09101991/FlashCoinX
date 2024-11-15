"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
// My modules
import { marketSwap } from "@/../../public/data/discoverWeb3";

const MarketSwapTab = () => {
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
          slidesPerView: 1.5,
          spaceBetween: 6,
          centeredSlides: true,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
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
      {marketSwap?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="border border-stroct-1 hover:bg-BG bg-BG-FFF-8 my-transition sm:rounded-lg rounded-md lg:px-6 md:px-5 sm:px-4 xl:py-10 lg:py-9 md:py-6 sm:py-5 p-4 group">
            <div className="w-full flex-center flex-col text-center">
              <div className="relative">
                <div className="w-20 lg:h-8 md:h-7 h-6 rounded-full bg-stroct-1 absolute left-1/2 -translate-x-1/2 md:top-3 top-2 -z-[1] group-hover:z-[1] transition-none"></div>
                <div className="flex-centerY sm:gap-2 gap-1.5">
                  <Image
                    className="sm:mb-3 mb-2.5 z-[1] w-auto md:h-[52px] sm:h-11 h-10 max-w-min"
                    width={52}
                    height={52}
                    src={item?.image1}
                    alt="icon"
                  />
                  <Image
                    className="sm:mb-3 mb-2.5 z-[1] w-auto md:h-[52px] sm:h-11 h-10 max-w-min"
                    width={52}
                    height={52}
                    src={item?.image2}
                    alt="icon"
                  />
                </div>
              </div>
              <h3 className="my-text-32 mb-1">{item?.title}</h3>
              <h6 className="my-text-20 font-normal leading-[150%] capitalize gap-mb-40">
                {item?.category ? item?.category : "Ethereum"}
              </h6>
            </div>
            <Link
              href="/swap"
              className="btn btn-outline hover:border-primary-1 group-hover:bg-primary-1 text-primary-1 group-hover:text-primary-4 hover:text-primary-4 flex-center"
            >
              Swap
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarketSwapTab;
