"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { web3Products } from "@/../../public/data/web3Products";
import FadeLeft from "@/motion/FadeLeft";
// My modules

const Web3Products = () => {
  return (
    <section className="bg-primary-6 relative section-pb  3xl:pt-[200px] xxl:pt-[180px] xl:pt-[160px] lg:pt-[140px] md:pt-[120px] sm:pt-[100px] pt-[60px]  flex items-center justify-center flex-col w-full">
      <div className="container">
        <FadeLeft>
          <h1 className="section-title  text-center w-full gap-mb-60">
            Explore Coinx Web3 Products
          </h1>
        </FadeLeft>
        <div className=" relative z-[2]">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            dir="rtl"
            speed={500}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
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
            {web3Products?.map((item, idx) => (
              <SwiperSlide className="h-full" key={idx}>
                <div className="group h-full">
                  <div
                    className="h-full px-32-py-40px
              md:rounded-xl sm:rounded-lg rounded-md border border-stroct-1 gredient-bg-effect !bg-transparent gredient-bg-X my-transition sm:text-left text-center  flex flex-col justify-center sm:items-end items-center"
                  >
                    <div className="gap-mb-16 xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] group-hover:bg-[rgba(40,61,31,0.52)] rounded-full my-transition">
                      <Image
                        className="xl:w-[140px] xl:h-[140px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[90px] sm:h-[90px] w-[80px] h-[80px]"
                        src={item?.image}
                        width={140}
                        height={140}
                        alt="img"
                      />
                    </div>
                    <h4 className="my-text-24 gap-mb-20 group-hover:text-primary-4 my-transition">
                      {item?.title}
                    </h4>
                    <p className="my-text-16 gap-mb-32 group-hover:text-primary-4 my-transition">
                      {item?.details}
                    </p>
                    <Link
                      className="btn-outline-round border-primary-1 border group-hover:border-primary-4 group-hover:bg-primary-4 inline-flex text-primary-1 group-hover:text-white hover:rotate-45 my-transition"
                      href={item?.productsLink}
                    >
                      <IconArrowUpRight className="xxl:w-6 xxl:h-6 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Web3Products;
