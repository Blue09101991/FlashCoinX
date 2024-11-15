"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { companies } from "@/../public/data/supportCompanies";
import Image from "next/image";

// My modules

const SupportCompanies = () => {
  return (
    <section className="relative  w-full z-10 bg-BG supportslider">
      <div className="w-full">
        <div className="hidden sm:block rotate-[1.368deg]  bg-primary-0  w-full sm:h-[120px] h-[80px]"></div>
        <div className="xxl:-mt-[8%] lg:-mt-[9.5%] md:-mt-[14%] sm:-mt-[17%] xl:py-[34px] lg:py-7 md:py-6 sm:py-5 py-4 bg-primary-1 sm:rotate-[-3.639deg] md:w-[120%] w-full">
          <Swiper
            slidesPerView={6}
            spaceBetween={24}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
              1600: {
                slidesPerView: 7,
              },
            }}
            navigation={{
              nextEl: ".btn-next-round",
              prevEl: ".btn-prev-round",
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper"
          >
            {companies?.map((company) => (
              <SwiperSlide key={company?.id}>
                <Image width={165} src={company?.image} alt="company" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SupportCompanies;
