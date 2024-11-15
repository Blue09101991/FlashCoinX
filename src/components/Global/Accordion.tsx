"use client";

import { faqType } from "@/config/types";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const Accordion = ({ faqItems }: { faqItems: faqType[] }) => {
  const [toggle, setToggle] = useState<number | null>(0);

  return (
    <div className="w-full">
      {faqItems?.map((item) => (
        <div
          key={item?.id}
          onClick={() =>
            toggle !== item?.id ? setToggle(item?.id) : setToggle(null)
          }
          className={`${
            item?.id === toggle ? "bg-primary-1" : "bg-BG-FFF-8"
          }  flex justify-between items-center md:gap-x-6 md:gap-y-[30px] gap-y-6 gap-x-5 border border-stroct-1 rounded-[5px] lg:p-6 md:p-5 sm:p-4 p-3.5 gap-mb-24 duration-700 ease-in-out transition-all`}
        >
          <div className="w-full">
            <button
              className={`${
                item?.id === toggle && "text-primary-4"
              } my-text-20 font-bold cursor-pointer text-left my-transition w-full`}
            >
              {item?.question}
            </button>
            <AnimateHeight
              height={toggle == item.id ? "auto" : 0}
              duration={500}
            >
              <p
                className={`my-text-16 text-primary-4 gap-mt-16 text-left cursor-pointer transition-[max-height] duration-700 overflow-hidden`}
              >
                {item?.answer}
              </p>
            </AnimateHeight>
          </div>
          <button
            className={`${
              toggle === item?.id
                ? "rotate-180 bg-primary-4 text-primary-1"
                : "text-primary-4 bg-primary-1"
            } duration-700 rounded-full  sm:p-2 p-1.5 flex-center w-6 sm:w-8 h-6 sm:h-8 `}
            aria-label="accordion"
          >
            {toggle === item?.id ? (
              <IconMinus className="sm:w-4 sm:h-4 w-3.5 h-3.5" />
            ) : (
              <IconPlus className="sm:w-4 sm:h-4 w-3.5 h-3.5" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
