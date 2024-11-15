"use client";
import { IconX } from "@tabler/icons-react";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  style?: string;
  open: boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
};

const Modal = ({ children, style, open, onClick }: Props) => {
  useEffect(() => {
    const body = document.body;

    const navBar = document.getElementById("header");

    if (open) {
      body.style.overflow = "hidden";
      navBar?.classList?.remove("header-animation");
    } else {
      body.style.overflow = "visible";
      navBar?.classList?.add("header-animation");
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [open]);

  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 z-[500] min-h-screen w-screen backdrop-blur-lg bg-opacity-[0.7] ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 duration-500 ${
          open
            ? "visible opacity-100 scale-100"
            : "invisible scale-75 opacity-0"
        }
        justify-center items-center flex overflow-x-hidden fixed  z-[300] outline-none focus:outline-none
      `}
      >
        <div
          className="relative w-[310px] max-w-3xl sm:min-w-[400px] md:min-w-[500px] h-auto z-[9999] overflow-y-auto
            my-rounded-20 bg-BG border border-stroct-1"
        >
          <button
            onClick={onClick}
            className="absolute rounded-full my-transition hover:bg-primary-1 border border-primary-1 lg:top-4 md:top-3.5 sm:top-3 top-2.5 lg:right-4 md:right-3.5 sm:right-3 right-2.5 md:p-2 sm:p-1.5 p-1 text-white hover:text-primary-4 z-[1000]"
            aria-label="close-modal"
          >
            <IconX className={`${style} md:text-base sm:text-sm text-[8px]`} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative p-24px"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
