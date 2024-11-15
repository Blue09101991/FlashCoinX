"use client";
import Image from "next/image";
import { IconCaretUpFilled } from "@tabler/icons-react";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { currencyNetworkCategorys } from "@/../../public/data/currencyNetworkCategorys";
import TiltWraper from "@/lib/TiltWraper";
import { tiltStyles } from "@/utility/tiltStyles";
// Import ApexCharts dynamically to prevent server-side rendering issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CategoryCurrencyCards = () => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: ["smooth", "stepline", "stepline"],
      width: 2,
      colors: ["#BCE70C"],
    },
    xaxis: {
      axisBorder: {
        show: false, // Set to false to hide the X-axis label lines
      },
      axisTicks: { show: false }, // hide the X axisTicks
      labels: { show: false },
    },
    yaxis: {
      min: 0,
      max: 80,
      show: false, // Set to false to hide the Y-axis label lines
    },
    grid: {
      show: false,
      padding: {
        bottom: -20,
        top: -20,
      },
    },
    colors: ["#BCE70C"],
  };

  return (
    <section className="gap-mb-60">
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 my-grid-gap">
        {currencyNetworkCategorys?.slice(3, 7)?.map((item, idx) => (
          <TiltWraper key={idx} tiltStyles={tiltStyles}>
            <div className="bg-BG-FFF-8 hover:bg-BG border border-stroct-1 hover:border-BG my-rounded-20 lg:p-6 md:p-5 sm:p-4 p-3 my-transition">
              <div className="flex-centerY gap-3">
                <Image width={40} height={40} src={item?.image} alt="" />
                <h5 className="my-text-24 capitalize leading-[150%] font-normal">
                  {item?.title}{" "}
                  <span className="my-text-18 uppercase font-normal text-foundation-blue-50">
                    {item?.sortTitle}/USD
                  </span>
                </h5>
              </div>
              <div>
                <ReactApexChart
                  width={240}
                  height={100}
                  options={options}
                  series={[
                    { name: `Series ${idx + 1}`, data: item?.averageGrowth },
                  ]}
                  type="line"
                />
              </div>
              <div className="flex-centerY justify-between">
                <h5 className="my-text-24 leading-[150%] font-normal">
                  USD{" "}
                  <span className="font-normal text-primary-1">
                    {item?.usdRate}/USD
                  </span>
                </h5>
                <div className="flex-centerY justify-between my-text-18 font-normal text-primary-1">
                  <h6>{item?.marketPercentage}</h6>
                  <IconCaretUpFilled className="sm:w-5 sm:h-5 w-4 h-4 inline-block" />
                </div>
              </div>
            </div>
          </TiltWraper>
        ))}
      </div>
    </section>
  );
};

export default CategoryCurrencyCards;
