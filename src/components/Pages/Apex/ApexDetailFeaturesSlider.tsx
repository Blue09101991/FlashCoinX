"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
// My modules

const ApexDetailFeaturesSlider = () => {
  const apexDetailFeatures = [
    {
      id: "1",
      title: "Index Price",
      subTitle: 40108.8,
    },
    {
      id: "2",
      title: "Oracle Price",
      subTitle: 35563.1,
    },
    {
      id: "3",
      title: "24H Change",
      subTitle: 2.71,
    },
    {
      id: "4",
      title: "24H High",
      subTitle: 36796.0,
    },
    {
      id: "5",
      title: "24H Low",
      subTitle: 2.71,
    },
    {
      id: "6",
      title: "Funding Rate",
      subTitle: 34823.5,
    },
    {
      id: "7",
      title: "Market Cap",
      subTitle: 1.32,
    },
    {
      id: "8",
      title: "HR Volume",
      subTitle: 40108.8,
    },
    {
      id: "9",
      title: "TVL",
      subTitle: 40108.8,
    },
  ];

  return (
    <Swiper
      slidesPerView={6}
      loop={true}
      speed={500}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 12,
        },

        1700: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      }}
      navigation={{
        nextEl: ".btn-next-slider",
        prevEl: ".btn-prev-slider",
      }}
      modules={[FreeMode, Autoplay, Navigation]}
      className="mySwiper"
    >
      {apexDetailFeatures?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="group">
            <h6 className="my-text-14 text-foundation-blue-50">
              {item?.title}
            </h6>
            <h5 className="my-text-18 text-foundation-blue-50 hover:text-primary-1">
              {item?.subTitle}
            </h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ApexDetailFeaturesSlider;
