"use client";

import { CounterElement } from "@/components/Global";
import { projectDataType } from "@/config/types";
import { useCopy } from "@/hooks";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCheck,
  IconChevronRight,
  IconCopy,
  IconWallpaper,
  IconWorldSearch,
} from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconShare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const IdoBanner = ({ projectData }: { projectData: projectDataType }) => {
  const {
    title,
    status,
    image,
    description,
    participants,
    peakROI,
    totalRaised,
  } = projectData;

  const { copiedText, handleCopy } = useCopy();

  const address = `
  Street: 123 Main St
  City: Cityville
  State: Stateville
  Zip Code: 12345
  Country: Countryland
`;

  return (
    <div>
      <FadeUp>
        <div className="gap-mb-40">
          <div className="flex md:items-center items-start md:justify-between justify-center md:flex-nowrap flex-wrap gap-y-6 gap-x-5">
            <div className="flex sm:justify-between justify-center my-grid-gap flex-wrap">
              <div className="flex-centerY my-grid-gap">
                <Image
                  className="lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 w-12 h-12"
                  width={80}
                  height={80}
                  src={image}
                  alt="icon"
                />
                <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-[#FACD95] to-[#C7F801]">
                  {title}
                </h2>
              </div>
              <div className="flex-centerY">
                <IconShare className="icon-24 md:mr-4 sm:mr-3.5 mr-3 sm:ml-3 ml-2.5 text-white" />
                <span className="bg-BG-FFF-8 rounded-md lg:px-5 md:px-4 px-3 py-1.5 my-text-24 font-normal leading-[150%] ">
                  {status}
                </span>
              </div>
            </div>
            <Link
              href="/ido"
              className="btn btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5  "
            >
              VIEW MORE
              <IconChevronRight className="icon-24" />
            </Link>
          </div>
        </div>
        <div className="flex-center md:justify-start sm:justify-center flex-wrap sm:my-grid-gap gap-2 gap-mb-40">
          <Link
            href="#"
            className=" sm:rounded-lg rounded-md my-transition sm:px-4 px-3 py-2 text-primary-1 hover:btn-primary bg-BG-FFF-8 border border-stroct-1 inline-flex md:gap-[10px] sm:gap-2 gap-1.5  "
          >
            <IconWorldSearch className="icon-24" />
            Official Website
          </Link>
          <Link
            href="#"
            className=" sm:rounded-lg rounded-md my-transition sm:px-4 px-3 py-2 text-primary-1 bg-BG-FFF-8 border border-stroct-1 hover:btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5  "
          >
            <IconWallpaper className="icon-24" />
            Whitepaper
          </Link>
          <button
            onClick={() => handleCopy(address)}
            className=" sm:rounded-lg rounded-md my-transition sm:px-4 px-3 text-primary-1 py-2 bg-BG-FFF-8 border border-stroct-1 hover:btn-primary inline-flex md:gap-[10px] sm:gap-2 gap-1.5"
            aria-label="copy"
          >
            {copiedText === address ? (
              <IconCheck className="icon-24 opacity-60" />
            ) : (
              <IconCopy className="icon-24 opacity-60" />
            )}
            Contact Address
          </button>
        </div>
      </FadeUp>
      <FadeDown>
        <p className="my-text-16 gap-mb-32 md:text-left text-center">
          {description}
        </p>
        <div className="md:block flex justify-center items-center">
          <div className="flex-centerY gap-2 gap-mb-40">
            <Link
              href="#"
              className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
            >
              <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
            >
              <IconBrandInstagram className="xxl:w-6 xxl:h-6 w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
            >
              <IconBrandTwitter className="xxl:w-6 xxl:h-6 w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
            >
              <IconBrandLinkedin className="xxl:w-6 xxl:h-6 w-5 h-5" />
            </Link>
          </div>
        </div>
      </FadeDown>
      <div className="grid my-grid-gap lg:grid-cols-3 grid-cols-1 text-center  bg-BG-FFF-8 border border-stroct-1 p-32px my-rounded-20">
        <div className="lg:border-r border-stroct-1 group">
          <CounterElement
            counter={{
              counterNumber: peakROI,
              style:
                "my-text-32 xl:max-w-[1074px] w-full gap-mb-24 group-hover:text-primary-1 my-transition",
              sizeText: "%",
            }}
          />
          <h2 className="my-text-18 ">Peak ROI</h2>
        </div>
        <div className="group">
          <h2 className="my-text-32 xl:max-w-[1074px] w-full gap-mb-24 group-hover:text-primary-1 my-transition">
            {totalRaised}
          </h2>
          <h2 className="my-text-18 ">Total Raised</h2>
        </div>
        <div className="lg:border-l border-stroct-1 group">
          <CounterElement
            counter={{
              counterNumber: participants,
              style:
                "my-text-32 xl:max-w-[1074px] w-full gap-mb-24 group-hover:text-primary-1 my-transition",
            }}
          />
          <h2 className="my-text-18 ">Total Participants</h2>
        </div>
      </div>
    </div>
  );
};

export default IdoBanner;
