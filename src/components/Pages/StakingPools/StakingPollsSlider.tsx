"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { web3s } from "@/../../public/data/discoverWeb3";
import Image from "next/image";
import Link from "next/link";
// My modules

const StakingPolls = () => {
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
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      navigation={{
        nextEl: ".btn-next-slider",
        prevEl: ".btn-prev-slider",
      }}
      modules={[FreeMode, Autoplay, Navigation]}
      className="mySwiper"
    >
      {web3s?.slice(8, 13)?.map((item, idx) => (
        <SwiperSlide
          className="3xl:px-[12px] xxl:px-[8px] xl:px-4 lg:px-[5px] px-4"
          key={idx}
        >
          <div className="group">
            <div
              className="xl:py-10 lg:py-9 md:p-8 sm:p-7 p-5 xl:px-8 lg:px-6 md:px-5 px-4
              md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 bg-BG-FFF-8 hover:bg-BG my-transition text-center sm:block flex flex-col justify-center items-center w-full h-full"
            >
              <div className="flex-centerY  flex-col">
                <Image
                  className="gap-mb-16"
                  width={60}
                  height={60}
                  src={item?.image}
                  alt="icon"
                />
                <div>
                  <h3 className="my-text-24 mb-1">{item?.title}</h3>
                  <h6 className="my-text-20 gap-mb-24">{item?.subTitel}</h6>
                </div>
                <h2 className="my-text-48 text-primary-1 text-center mb-1">
                  {item?.percentage} %
                </h2>
                <h4 className="my-text-20 gap-mb-32 ">APY</h4>
              </div>

              {/* <Link
                className="btn btn-outline group-hover:border-primary-4 group-hover:bg-primary-1 group-hover:text-primary-4 hover:text-primary-4 w-full flex-center"
                href={`/staking-pools/${item?.id}`}
              >
                Stock
              </Link> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StakingPolls;
