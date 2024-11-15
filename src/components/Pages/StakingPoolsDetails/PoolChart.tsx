"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { rewardsDates } from "@/../../public/data/rewardsDates";
// Import ApexCharts dynamically to prevent server-side rendering issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const PoolChart = () => {
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
          colors: "#FFFFFF",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "16px",
          colors: "#FFFFFF",
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
    <div className="bg-BG lg:p-6 md:p-5 sm:p-4 p-3.5 my-rounded-20 gap-mb-40">
      <ReactApexChart
        width={"100%"}
        height={400}
        options={options}
        series={series}
        section="one_year"
        type="area"
      />
    </div>
  );
};
export default PoolChart;
