import Link from "next/link";
import React from "react";
import { apexPositionsList } from "@/../../public/data/apexPositionsList";
import { IconArrowBearRight2, IconPlus } from "@tabler/icons-react";

const ApexPositionList = () => {
  return (
    <div className="relative overflow-x-auto scrollbar scrollbar-sm  bg-BG-FFF-8 border-stroct-1 my-rounded-20">
      <div>
        <table className="w-full text-left rtl:text-right whitespace-nowrap">
          <thead className="bg-primary-10 capitalize my-text-16 font-lexend  xl:pb-8 lg:py-7 md:py-6 sm:py-5 py-4 ">
            <tr>
              <th
                scope="col"
                className="text-primary-1 xl:py-8 lg:py-7 md:py-6 px-6 text-left"
              >
                Position
              </th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              >
                Closed P&L
              </th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              >
                Active
              </th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              >
                Conditional
              </th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              >
                Fillod
              </th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              >
                Order
              </th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              ></th>
              <th
                scope="col"
                className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4"
              >
                <div className="flex-centerY gap-2">
                  <span className="bg-primary-1 p-1 rounded-sm text-primary-4">
                    <IconArrowBearRight2 className="sm:w-4 sm:h-4 w-3 h-3" />{" "}
                  </span>
                  <span> Show All Position</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stroct-1">
            <tr className="capitalize border-b border-stroct-1 my-text-16 font-lexend  xl:pb-8 lg:py-7 md:py-6 sm:py-5 py-4 ">
              <td className=" xl:py-8 lg:py-7 md:py-6 px-6 text-left">
                Market
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                Qty
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                Value
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                Entry Price
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                Oracle Price
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                Liq. Price
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                TP/SL
              </td>
              <td className="xl:py-8 lg:py-7 md:py-6 px-6 text-left sm:py-5 py-4">
                Close By
              </td>
            </tr>
            {apexPositionsList?.map((item, idx) => (
              <tr
                key={idx}
                className={` my-text-16  border-stroct-1 hover:bg-BG-FFF-8 group`}
              >
                <td>
                  <span className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 group-hover:text-primary-1 my-transition">
                    {item?.market?.toLocaleString()}%
                  </span>
                </td>
                <td>
                  <span className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 group-hover:text-primary-1 my-transition">
                    {item?.qty?.toLocaleString()}
                  </span>
                </td>
                <td>
                  <span className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 group-hover:text-primary-1 my-transition">
                    {item?.value?.toLocaleString()}
                  </span>
                </td>
                <td>
                  <span className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 group-hover:text-primary-1 my-transition">
                    {" "}
                    {item?.entryPrice?.toLocaleString()}
                  </span>
                </td>
                <td>
                  <span className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 group-hover:text-primary-1 my-transition">
                    {" "}
                    {item?.oraclePrice?.toLocaleString()}
                  </span>
                </td>
                <td>
                  <span className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 group-hover:text-primary-1 my-transition">
                    {item?.liqPrice?.toLocaleString()}
                  </span>
                </td>
                <td>
                  <div className="capitalize  flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 hover:text-primary-1 my-transition">
                    <Link
                      href="/swap"
                      className="sm:px-5 px-4 py-[2px] bg-BG-FFF-8 rounded-[5px] flex-centerY gap-[2px]"
                    >
                      <IconPlus className="sm:w-4 sm:h-4 w-3 h-3" />
                      Add
                    </Link>
                  </div>
                </td>
                <td>
                  <div className=" flex-centerY md:gap-x-3 sm:gap-x-2.5 gap-x-2 md:py-4 sm:py-3 py-2.5 sm:px-6 px-5 my-transition">
                    <span className="sm:px-5 px-4 py-[2px] bg-BG-FFF-8 rounded-[5px]">
                      Limit
                    </span>
                    <Link
                      href={`/staking-pools/${item?.id}`}
                      className="capitalize sm:px-5 px-4 py-[2px] bg-primary-1 hover:bg-primary-4 my-transition rounded-[5px] text-primary-4 hover:text-primary-1 cursor-pointer"
                    >
                      {item?.closeBy?.toLocaleString()}
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApexPositionList;
