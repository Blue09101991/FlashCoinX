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
import { completedProjects } from "@/../../public/data/completedProjects";
// My modules

const MarketIDOTab = () => {
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
          slidesPerView: 1,
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
      }}
      navigation={{
        nextEl: ".btn-next-slider",
        prevEl: ".btn-prev-slider",
      }}
      modules={[FreeMode, Autoplay, Navigation]}
      className="mySwiper"
    >
      {completedProjects?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Link
            key={idx}
            href={`/`}
            className="px-24-py-40px
              md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 hover:bg-BG bg-BG-FFF-8 my-transition cursor-pointer group block"
          >
            <div className="w-full flex-center flex-col text-center">
              <Image
                width={52}
                height={52}
                className="rounded-full sm:mb-3 mb-2.5 w-auto md:h-[52px] sm:h-11 h-10 max-w-min"
                src={item?.image}
                alt="ido"
              />
              <h3 className="my-text-32 mb-1">{item?.title}</h3>
              <h6 className="my-text-20 capitalize gap-mb-40">
                {item?.subTitle}
              </h6>
              <h2 className="my-text-48 text-primary-1 mb-1">
                {item?.peakROI}
              </h2>
              <h6 className="my-text-20">Peak ROI</h6>
            </div>
            <div className=" grid sm:gap-3 gap-2.5 gap-mb-40 gap-mt-48">
              <div className="flex sm:items-center sm:flex-nowrap flex-wrap justify-between sm:gap-2 gap-x-2 gap-y-1">
                <h6 className="my-text-16">Total Raised</h6>
                <h6 className="my-text-16 whitespace-nowrap">
                  {item?.totalRaised}
                </h6>
              </div>
              <div className="flex sm:items-center sm:flex-nowrap flex-wrap justify-between sm:gap-2 gap-x-2 gap-y-1">
                <h6 className="my-text-16">Total Issued</h6>
                <h6 className="my-text-16">{item?.totalIssued}</h6>
              </div>
              <div className="flex sm:items-center sm:flex-nowrap flex-wrap justify-between sm:gap-2 gap-x-2 gap-y-1">
                <h6 className="my-text-16 ">Completed At</h6>
                <h6 className="my-text-16">{item?.completedAt}</h6>
              </div>
            </div>
            {/* <Link
              href="/apex"
              className="btn btn-outline hover:border-primary-1 group-hover:bg-primary-1 text-primary-1 group-hover:text-primary-4 hover:text-primary-4 flex-center"
            >
              Trade Now
            </Link> */}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarketIDOTab;
