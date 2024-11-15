"use client";

import { IconCheck, IconEyeFilled, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import loginIcon1 from "@/../public/images/google.png";
import loginIcon2 from "@/../public/images/apple.png";

import Link from "next/link";

const SignUpCard = () => {
  // Sign Up Modal

  const [loginMethod, setLoginMethod] = useState("email");
  const [passType, setPassType] = useState("password");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <div className="flex-centerY my-grid-gap my-text-16 font-semibold leading-[150%] gap-mb-24">
        <button
          className={`${
            loginMethod === "email" ? "before:w-full" : "before:w-0"
          } btn-linebar-effect`}
          onClick={() => setLoginMethod("email")}
        >
          Email
        </button>
        <button
          className={`${
            loginMethod === "number" ? "before:w-full" : "before:w-0"
          } btn-linebar-effect`}
          onClick={() => setLoginMethod("number")}
        >
          Mobile
        </button>
      </div>
      <input
        id="login_method"
        className=" w-full outline-none bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 md:rounded-xl sm:rounded-lg rounded-md md:p-4 sm:p-3 p-2.5 text-white gap-mb-16"
        type={loginMethod}
        name="login_method"
        placeholder={`${loginMethod === "email" ? "Email" : "Phone Number"}`}
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
            <IconEyeOff className="hover:cursor-pointer" />
          )}
          {passType === "text" && (
            <IconEyeFilled className="hover:cursor-pointer" />
          )}
        </div>
      </div>

      <label
        htmlFor="referal_code"
        className="my-text-16 sm:mb-2 mb-1.5 inline-block"
      >
        Referral Code (Optional)
      </label>
      <input
        id="referal_code"
        className=" w-full outline-none bg-BG-FFF-8 border border-stroct-1 my-rounded-20 my-text-16 text-white-2 md:rounded-xl sm:rounded-lg rounded-md md:p-4 sm:p-3 p-2.5 text-white gap-mb-16"
        type={loginMethod}
        name="referal_code"
        placeholder="Code"
      />

      <div className="flex items-center relative gap-mb-24">
        <input
          type="checkbox"
          id="ch"
          name="A3-confirmation"
          value="ch"
          className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
        />
        <div className="bg-transparent border border-primary-1 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-primary-5">
          <IconCheck className="hidden icon-24 text-primary-1 pointer-events-none" />
        </div>
        <label
          htmlFor="ch"
          className="select-none flex gap-2 cursor-pointer items-center common-text"
        >
          <Link className="my-text-16" href="#">
            Agree to Terms of Service and Privacy Policy
          </Link>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full gap-mb-24">
        Create Account
      </button>
      <div className="flex-centerY justify-between gap-4 gap-mb-16">
        <div className="bg-BG-FFF-8 w-full h-[1px]"></div>
        <span className="my-text-16 font-roboto whitespace-nowrap">
          or log in with
        </span>
        <div className="bg-BG-FFF-8 w-full h-[1px]"></div>
      </div>
      <div className="flex-centerY justify-between my-grid-gap">
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
    </form>
  );
};

export default SignUpCard;
