"use client";

import { IconArrowRight, IconEyeFilled, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import loginIcon1 from "@/../public/images/google.png";
import loginIcon2 from "@/../public/images/apple.png";
import QRCode from "@/../public/images/QRCode.png";

import Link from "next/link";

const LoginCard = () => {
  // Login Modal

  const [loginMethod, setLoginMethod] = useState("email");
  const [passType, setPassType] = useState("password");

  // handle form submit
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <div className="flex-centerY my-grid-gap my-text-16 font-semibold leading-[150%] gap-mb-24">
        <button
          className={`${
            loginMethod === "email"
              ? " btn-linebar-effect before:w-full"
              : "before:w-0"
          } `}
          onClick={() => setLoginMethod("email")}
        >
          Email
        </button>
        <button
          className={`${
            loginMethod === "mobile"
              ? "btn-linebar-effect before:w-full"
              : "before:w-0"
          } `}
          onClick={() => setLoginMethod("mobile")}
        >
          Mobile
        </button>
        <button
          className={`${
            loginMethod === "qr-code" ? "btn-linebar-effect before:w-full" : ""
          } `}
          onClick={() => setLoginMethod("qr-code")}
        >
          QR Code
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        {loginMethod === "email" && (
          <div>
            <input
              id="email"
              className=" w-full outline-none bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 md:rounded-xl sm:rounded-lg rounded-md md:p-4 sm:p-3 p-2.5 text-white gap-mb-16"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="flex-centerY justify-between bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 md:rounded-xl sm:rounded-lg rounded-md  text-white lg:pr-4 md:pr-3 sm:pr-2.5 pr-2 gap-mb-16">
              <input
                type={passType}
                id="password"
                className="w-full bg-transparent md:rounded-xl sm:rounded-lg rounded-md outline-none border-none md:p-4 sm:p-3 p-2.5"
                name="password"
                placeholder="Password"
                required
              />
              <div
                onClick={() =>
                  setPassType((prevType) =>
                    prevType === "password" ? "text" : "password"
                  )
                }
              >
                {passType === "password" && (
                  <IconEyeOff className="hover:cursor-pointer text-stroct-1" />
                )}
                {passType === "text" && (
                  <IconEyeFilled className="hover:cursor-pointer text-stroct-1" />
                )}
              </div>
            </div>
          </div>
        )}
        {loginMethod === "mobile" && (
          <div>
            <input
              id="mobile"
              className=" w-full outline-none bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 md:rounded-xl sm:rounded-lg rounded-md md:p-4 sm:p-3 p-2.5 text-white gap-mb-16"
              type="number"
              name="mobile"
              placeholder="Mobile"
              required
            />
            <div className="flex-centerY justify-between bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 md:rounded-xl sm:rounded-lg rounded-md  text-white lg:pr-4 md:pr-3 sm:pr-2.5 pr-2 gap-mb-16">
              <input
                type={passType}
                id="password"
                className="w-full bg-transparent md:rounded-xl sm:rounded-lg rounded-md outline-none border-none md:p-4 sm:p-3 p-2.5"
                name="password"
                placeholder="Password"
                required
              />
              <div
                onClick={() =>
                  setPassType((prevType) =>
                    prevType === "password" ? "text" : "password"
                  )
                }
              >
                {passType === "password" && (
                  <IconEyeOff className="hover:cursor-pointer text-stroct-1" />
                )}
                {passType === "text" && (
                  <IconEyeFilled className="hover:cursor-pointer text-stroct-1" />
                )}
              </div>
            </div>
          </div>
        )}

        {loginMethod === "qr-code" && (
          <div className="w-full h-full flex-center flex-col p-10">
            <div className="p-2 border border-primary-4 rounded-lg">
              <Image
                width={244}
                height={244}
                src={QRCode}
                draggable={false}
                alt="QR_Code"
              />
            </div>
          </div>
        )}

        <div className={`${loginMethod === "qr-code" ? "hidden" : "block"}`}>
          <h6 className=" my-text-16 text-right text-primary-1 gap-mb-24">
            Forgot password
          </h6>
          <button type="submit" className="btn btn-primary w-full gap-mb-24">
            Login
          </button>
          <div className="flex-centerY justify-between gap-4 gap-mb-16">
            <div className="bg-BG-FFF-8 w-full h-[1px]"></div>
            <span className="my-text-16 font-roboto whitespace-nowrap">
              or log in with
            </span>
            <div className="bg-BG-FFF-8 w-full h-[1px]"></div>
          </div>
          <div className="flex-centerY justify-between my-grid-gap gap-mb-16">
            <button
              type="button"
              className="flex-center gap-2 w-full bg-BG-FFF-8 border border-stroct-1 hover:border-primary-1 hover:text-primary-1 my-transition btn my-text-16 font-semibold "
            >
              <Image
                className="w-4"
                width={16}
                height={16}
                src={loginIcon1}
                alt="loginIcon1"
              />
              Google
            </button>
            <button
              type="button"
              className="flex-center gap-2 w-full bg-BG-FFF-8 border border-stroct-1 hover:border-primary-1 hover:text-primary-1 my-transition btn my-text-16 font-semibold "
            >
              <Image
                className="w-4"
                width={16}
                height={16}
                src={loginIcon2}
                alt="loginIcon2"
              />
              Apple
            </button>
          </div>
          <div className="w-full h-[1px] bg-BG-FFF-8 gap-mb-16"></div>
          <div className="flex-center">
            <Link
              href="#"
              className="my-text-16 text-center text-primary-1 inline-flex sm:gap-3 gap-2.5"
            >
              Log in with Subaccount <IconArrowRight className="icon-24" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
