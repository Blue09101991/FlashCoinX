"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
// Import ApexCharts dynamically to prevent server-side rendering issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SummaryChart = () => {
  const series = [44, 55, 41, 17, 15];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    labels: ["Swipe", "Uniswap", "Balancer", "Swapcash", "SushiSwap"],
    responsive: [
      {
        breakpoint: 1400,
        options: {
          chart: {
            width: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            width: 320,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 320,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    stroke: {
      curve: ["smooth", "stepline", "stepline"],
      width: 0,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      horizontalAlign: "center",
      floating: false,
      fontSize: "16px",
      fontFamily: "roboto, Arial",
      fontWeight: 400,
      inverseOrder: false,
      customLegendItems: [],
      offsetX: 8,
      itemMargin: {
        vertical: 6,
      },
      labels: {
        colors: "#FFF",
        useSeriesColors: false,
      },
    },
  };

  return (
    <div className="xxl:block flex-center bg-BG-FFF-8 border border-stroct-1 my-rounded-20 lg:p-6 md:p-5 sm:p-4 p-3 gap-mt-24 overflow-x-hidden">
      <ReactApexChart
        width={"100%"}
        height={"auto"}
        options={options}
        series={series}
        type="donut"
      />
    </div>
  );
};

export default SummaryChart;
