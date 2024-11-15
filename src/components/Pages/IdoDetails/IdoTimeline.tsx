"use client";

import { projectDataType } from "@/config/types";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const IdoTimeline = ({ projectData }: { projectData: projectDataType }) => {
  const [hover, setHover] = useState<string | null>(null);
  const {
    idoTimeline,
    completedAt,
    lotteryPeriod,
    redemptionPeriod,
    releaseDiscount,
    snapshotPeriod,
    subscriptionPeriod,
  } = projectData;

  // Calculate total Release Percentage and Amount (CAT)
  const totalReleasePercentage = releaseDiscount.reduce(
    (accumulator, item) => accumulator + Number(item?.releasePercentage || 0),
    0
  );

  const totalAmountCAT = releaseDiscount.reduce(
    (accumulator, item) => accumulator + Number(item?.amount || 0),
    0
  );

  return (
    <div className="gap-mt-60">
      <h2 className="my-text-32 gradient-text-primary gap-mb-24">
        IDO Timeline
      </h2>
      <p className="my-text-16 gap-mb-40">{idoTimeline}</p>
      <div className="group">
        <div
          onMouseEnter={() => setHover("Subscription Period")}
          onMouseLeave={() => setHover(null)}
          className="my-transition group-hover:bg-BG-FFF-8  border group-hover:border-transparent border-stroct-1 p-32px my-rounded-20 gap-mb-24"
        >
          <div className="flex-centerY justify-between flex-wrap gap-y-2.5 md:gap-x-6 sm:gap-x-5 gap-mb-24">
            <h4 className="my-text-24 gradient-text-primary my-transition">
              Subscription Period
            </h4>
            <p className="my-text-16 group-hover:text-primary-1 my-transition">
              {completedAt}
            </p>
          </div>
          <p className="my-text-16 gap-mb-32">{subscriptionPeriod}</p>
          <AnimateHeight
            height={hover === "Subscription Period" ? "auto" : 0}
            duration={500}
          >
            <Link
              href="#"
              className="btn btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5"
            >
              VIEW MORE
              <IconChevronRight className="icon-24" />
            </Link>
          </AnimateHeight>
        </div>
      </div>
      <div className="group">
        <div
          onMouseEnter={() => setHover("Snapshot Period")}
          onMouseLeave={() => setHover(null)}
          className="my-transition group-hover:bg-BG-FFF-8  border group-hover:border-transparent border-stroct-1 p-32px my-rounded-20 gap-mb-24"
        >
          <div className="flex-centerY justify-between flex-wrap gap-y-2.5 md:gap-x-6 sm:gap-x-5 gap-x-4 gap-mb-24">
            <h4 className="my-text-24 gradient-text-primary my-transition">
              Snapshot Period
            </h4>
            <p className="my-text-16 group-hover:text-primary-1 my-transition">
              {completedAt}
            </p>
          </div>
          <p className="my-text-16 gap-mb-32">{snapshotPeriod}</p>
          <AnimateHeight
            height={hover === "Snapshot Period" ? "auto" : 0}
            duration={500}
          >
            <Link
              href="#"
              className="btn btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5"
            >
              VIEW MORE
              <IconChevronRight className="icon-24" />
            </Link>
          </AnimateHeight>
        </div>
      </div>
      <div className="group">
        <div
          onMouseEnter={() => setHover("Lottery Period")}
          onMouseLeave={() => setHover(null)}
          className="my-transition group-hover:bg-BG-FFF-8  border group-hover:border-transparent border-stroct-1 p-32px my-rounded-20 gap-mb-24"
        >
          <div className="flex-centerY justify-between flex-wrap gap-y-2.5 md:gap-x-6 sm:gap-x-5 gap-mb-24">
            <h4 className="my-text-24 gradient-text-primary my-transition">
              Lottery Period
            </h4>
            <p className="my-text-16 group-hover:text-primary-1 my-transition">
              {completedAt}
            </p>
          </div>
          <p className="my-text-16 gap-mb-32">{lotteryPeriod}</p>
          <AnimateHeight
            height={hover === "Lottery Period" ? "auto" : 0}
            duration={500}
          >
            <Link
              href="#"
              className="btn btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5"
            >
              VIEW MORE
              <IconChevronRight className="icon-24" />
            </Link>
          </AnimateHeight>
        </div>
      </div>
      <div className="group">
        <div
          onMouseEnter={() => setHover("Redemption Period")}
          onMouseLeave={() => setHover(null)}
          className="my-transition group-hover:bg-BG-FFF-8  border group-hover:border-transparent border-stroct-1 p-32px my-rounded-20 gap-mb-24"
        >
          <div className="flex-centerY justify-between flex-wrap gap-y-2.5 md:gap-x-6 sm:gap-x-5 gap-mb-24">
            <h4 className="my-text-24 gradient-text-primary my-transition">
              Redemption Period
            </h4>
            <p className="my-text-16 group-hover:text-primary-1 my-transition">
              {completedAt}
            </p>
          </div>
          <p className="my-text-16 gap-mb-32">{redemptionPeriod}</p>
          <AnimateHeight
            height={hover === "Redemption Period" ? "auto" : 0}
            duration={500}
          >
            <Link
              href="#"
              className="btn btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5"
            >
              VIEW MORE
              <IconChevronRight className="icon-24" />
            </Link>
          </AnimateHeight>
        </div>
      </div>
      <p className="my-text-16 gap-mb-60">{idoTimeline}</p>

      <div className="my-rounded-20 relative overflow-x-auto scrollbar scrollbar-sm lg:rounded-t-[20px] md:rounded-t-2xl sm:rounded-t-xl rounded-t-lg border border-stroct-1">
        <div>
          <table className=" w-full text-center rtl:text-right whitespace-nowrap ">
            <thead className="lg:rounded-t-[20px] md:rounded-t-2xl sm:rounded-t-xl rounded-t-lg font-normal my-text-20  md:pb-4 sm:pb-3 pb-2.5 bg-primary-1 ">
              <tr>
                <th
                  scope="col"
                  className="text-primary-4 md:py-4 sm:py-3 py-2.5 px-6"
                >
                  <span className="py-1 block"> Vesting Time (UTC)</span>
                </th>
                <th
                  scope="col"
                  className="text-primary-4 md:py-4 sm:py-3 py-2.5 px-6 "
                >
                  <span className="py-1 block">Release Percentage</span>
                </th>
                <th
                  scope="col"
                  className="text-primary-4 md:py-4 sm:py-3 py-2.5 px-6"
                >
                  <span className="py-1 block"> Amount (CAT)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stroct-1">
              {releaseDiscount?.map((item, idx) => (
                <tr
                  key={idx}
                  className="text-center my-text-16 hover:bg-stroct-1"
                >
                  <td>
                    <span className="block md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                      <span className="my-text-16 font-semibold py-1">
                        {item?.vestingTime}
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="block md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                      <span className="my-text-16 font-semibold py-1">
                        {item?.releasePercentage}
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="block md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                      <span className="my-text-16 font-semibold py-1">
                        {item?.amount}
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="text-center hover:bg-stroct-1">
                <td>
                  <span className="block md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                    <span className="my-text-24 font-normal text-primary-1">
                      Total
                    </span>
                  </span>
                </td>
                <td>
                  <span className="block md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                    <span className="my-text-24 font-normal text-primary-1">
                      {totalReleasePercentage}%
                    </span>
                  </span>
                </td>
                <td>
                  <span className="block md:py-4 sm:py-3 py-2.5 sm:px-6 px-5">
                    <span className="my-text-24 font-normal text-primary-1">
                      {totalAmountCAT}
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IdoTimeline;