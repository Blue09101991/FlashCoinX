"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { rewardsDates } from "@/../public//data/rewardsDates";
import Image from "next/image";
import cryptocurrency14 from "@/../public/images/cryptocurrency14.png";
// Import ApexCharts dynamically to prevent server-side rendering issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const MarketCurrencyChart = () => {
  const series = [
    {
      data: rewardsDates,
    },
  ];

  const options: ApexOptions = {
    stroke: {
      curve: ["smooth", "stepline", "stepline"],
      colors: ["#BCE70C"],
      width: 2,
    },
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "16px",
          colors: "#FFFEFC",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "16px",
          colors: "#FFFEFC",
          cssClass: "chart-label-x",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },

    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      colors: [
        "rgba(188, 255, 164, 0.20)",
        "rgba(152, 216, 129, 0.12)",
        "rgba(90, 190, 54, 0.02)",
      ],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.6,
        shade: "dark",
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(255, 255, 255, 0.20)",
    },
    colors: ["#BCE70C"],
  };

  return (
    <section className="bg-BG-FFF-8 lg:p-6 md:p-5 sm:p-4 py-3.5 px-0 my-rounded-20 gap-mb-40 border border-stroct-1">
      <div className="flex-centerY sm:flex-row flex-col sm:justify-between my-grid-gap gap-mb-40">
        <div className="flex-centerY md:gap-4 sm:gap-3.5 gap-3">
          <Image width={52} height={52} src={cryptocurrency14} alt="coin" />
          <div className="flex-centerY gap-2.5">
            <h5 className="my-text-24 mb-[2px]">Tether USD</h5>
            <span className="my-text-14 font-lexend uppercase px-2 py-[2px] bg-BG-FFF-8 rounded text-primary-1">
              USDT
            </span>
          </div>
        </div>
        <h2 className="my-text-24 font-normal">
          $1.0010{" "}
          <span className="my-text-16 font-normal text-primary-1">0.01%</span>
        </h2>
      </div>
      <ReactApexChart
        width={"100%"}
        height={400}
        options={options}
        series={series}
        section="one_year"
        type="area"
      />
    </section>
  );
};
export default MarketCurrencyChart;
