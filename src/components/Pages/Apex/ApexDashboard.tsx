"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { coinApexChartData1 } from "../../../../public/data/coinsApexChartsData";
// Import ApexCharts dynamically to prevent server-side rendering issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const ApexDashboard = () => {
  const series = [
    {
      data: coinApexChartData1,
    },
  ];
  const options: ApexOptions = {
    stroke: {
      curve: ["smooth", "stepline", "stepline"],
      colors: ["#BCE70C"],
      width: 2,
    },
    chart: {
      id: "candlestick",
      type: "candlestick",
      height: "100%",
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 320,
        options: {
          chart: {
            height: "100%",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: "200%",
          },
        },
      },
    ],
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "12px",
          colors: "#D2D9E4",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          fontSize: "12px",
          colors: "#D2D9E4",
          cssClass: "chart-label-x",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#BCE70C",
          downward: "#EF403C",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(255,255,255,0.08)",
      xaxis: {
        lines: {
          show: true, //or just here to disable only x axis grids
        },
      },
    },
  };
  return (
    <div className="max-h-[727px] bg-primary-7 border border-stroct-1 my-rounded-20">
      <div className="my-rounded-20 rounded-b-none p-24px my-text-16 flex-centerY bg-primary-10 my-grid-gap whitespace-nowrap scrollbar scrollbar-0 overflow-x-auto relative">
        <span className="text-primary-1 font-semibold">Price</span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          Depth
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          Funding Rate
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          Details
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          Risk Limit
        </span>
      </div>
      <div className="p-24px my-text-16 flex-centerY my-grid-gap whitespace-nowrap scrollbar scrollbar-0 overflow-x-auto relative">
        <span className="text-primary-1 font-semibold my-transition">1m</span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          5m
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          15m
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          1h
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          4h
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          D
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          W
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          M
        </span>
        <span className="hover:text-primary-1 hover:font-semibold my-transition">
          Y
        </span>
      </div>
      <div className="p-24px py-0">
        <p className="my-text-16 text-[#C4C4C4]">
          036989.5 H37120.5 L36973,5 C37082.0 +92.5 (+0.25%){" "}
          <span className="text-primary-1 font-semibold">$223K</span>
        </p>
      </div>
      <ReactApexChart
        width={"100%"}
        height={444}
        options={options}
        series={series}
        type="candlestick"
        section="one_year"
      />
    </div>
  );
};
export default ApexDashboard;
