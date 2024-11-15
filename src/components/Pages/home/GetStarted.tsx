"use client";

import Link from "next/link";
import FadeLeft from "@/motion/FadeLeft";
import FadeUp from "@/motion/FadeUp";
import { IconBuildingBank, IconUserPlus } from "@tabler/icons-react";
import { IconShieldLock } from "@tabler/icons-react";
import { useState } from "react";
import { AuthCard, Modal } from "@/components/Global";

const GetStarted = () => {
  const [cardHover, setCardHover] = useState(0);

  // Auth Modal
  const [open, setOpen] = useState(false);

  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  const userManuals = [
    {
      id: 1,
      image: <IconUserPlus className="icon-24" />,
      title: "Create account",
      details: "Sign in to Bitco to register a new profile.",
      buttonTitle: "Register now",
      link: "/swap",
    },
    {
      id: 2,
      image: <IconShieldLock className="icon-24" />,
      title: "Verify your identity",
      details:
        "Spend less than five minutes completing the verification process.",
      buttonTitle: "Verify",
      link: "/contact",
    },
    {
      id: 3,
      image: <IconBuildingBank className="icon-24" />,
      title: "Deposit and Buy",
      details:
        "Spend less than five minutes completing the verification process.",
      buttonTitle: "Deposit",
      link: "/crypto-buy",
    },
    {
      id: 4,
      image: <IconUserPlus className="icon-24" />,
      title: "Start your journey",
      details:
        "Spend less than five minutes completing the verification process",
      buttonTitle: "Get Started",
      link: "/pricing-plan",
    },
  ];

  return (
    <section className="bg-BG section-py relative">
      <div className="relative">
        <div className="bg-[#F5D871] filter blur-[307px] rounded-full xxl:w-[358px] xl:w-[300px] lg:w-[240px] md:w-[156px] w-[300px] xxl:h-[358px] xl:h-[300px] lg:h-[240px] md:h-[156px] h-[300px] absolute left-0 top-0"></div>
        <div className="container relative">
          <div className="flex-centerY justify-between xl:flex-row flex-col gap-mb-60 xl:text-right text-center">
            <FadeLeft>
              <h2 className="section-title xl:mb-0 gap-mb-32">
                How to get started
              </h2>
            </FadeLeft>
            <FadeUp>
              <p className="my-text-16 w-full sm:max-w-[526px]">
                Our comprehensive cybersecurity platform, driven by artificial
                intelligence, not only safeguards your organization but also
                educates your workforce.
              </p>
            </FadeUp>
          </div>
          <div className="grid my-grid-gap xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:bg-BG-FFF-8 lg:rounded-xl md:rounded-lg rounded-md">
            {userManuals?.map((item, idx) => (
              <div
                onMouseEnter={() => setCardHover(idx)}
                key={idx}
                className="group my-transition h-full"
              >
                <div
                  className={`${
                    cardHover === idx
                      ? "xl:bg-gradient-to-r hover:bg-gradient-to-r xl:scale-110  bg-BG-FFF-8"
                      : " xl:bg-transparent xxl:px-0 hover:bg-transparent hover:px-0 bg-BG-FFF-8"
                  } h-full my-transition xxl:py-10 xl:py-9 lg:py-8 md:py-7 py-5 xxl:px-6 px-5 from-[#FACD95] to-primary-1 md:rounded-2xl sm:rounded-lg rounded-md flex items-center justify-center flex-col text-center`}
                >
                  <span
                    className={`${
                      cardHover === idx
                        ? "xl:bg-primary-4 xl:bg-opacity-[0.12] "
                        : " bg-BG-FFF-8"
                    } group-hover:bg-primary-4 group-hover:bg-opacity-[0.12] bg-BG-FFF-8 my-transition text-white md:p-[18px] sm:p-4 p-3.5 rounded-full gap-mb-24 block `}
                  >
                    {item?.image}
                  </span>
                  <h3
                    className={`${
                      cardHover === idx
                        ? "xl:text-primary-4 group-hover:text-primary-4 text-primary-1"
                        : " text-primary-1"
                    } my-transition my-text-24`}
                  >
                    {item?.title}
                  </h3>
                  <div
                    className={`${
                      cardHover === idx
                        ? "xl:opacity-100 group-hover:opacity-100 opacity-0"
                        : "opacity-0"
                    } sm:w-6 w-5 h-[3px] bg-primary-4 rounded-full  gap-mb-24`}
                  ></div>
                  <p
                    className={`${
                      cardHover === idx
                        ? " xl:text-primary-4 group-hover:text-primary-4"
                        : "text-white"
                    } my-text-16 my-transition gap-mb-40`}
                  >
                    {item?.details}
                  </p>
                  {item?.title === "Create account" ? (
                    <button
                      onClick={handleModal}
                      className={`${
                        cardHover === idx
                          ? "xl:bg-primary-4 xl:text-white text-primary-1 xl:border-primary-4 group-hover:bg-primary-4  group-hover:border-primary-4"
                          : "border-primary-1 bg-transparent text-primary-1"
                      } btn btn-outline my-transition`}
                    >
                      {item?.buttonTitle}
                    </button>
                  ) : (
                    <Link
                      className={`${
                        cardHover === idx
                          ? "xl:bg-primary-4 group-hover:text-white text-primary-1 xl:border-primary-4 group-hover:bg-primary-4  group-hover:border-primary-4"
                          : "border-primary-1 bg-transparent text-primary-1"
                      } btn btn-outline my-transition`}
                      href={item?.link}
                    >
                      {item?.buttonTitle}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal onClick={handleModal} open={open}>
          <AuthCard />
        </Modal>
      </div>
    </section>
  );
};

export default GetStarted;