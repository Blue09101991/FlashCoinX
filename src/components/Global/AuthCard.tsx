"use client";

import { IconArrowsExchange } from "@tabler/icons-react";
import { useState } from "react";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";
import AnimateHeight, { Height } from "react-animate-height";

const AuthCard = () => {
  const [height, setHeight] = useState<Height>("100%");

  const [auth, setAuth] = useState<string | boolean>("login");

  return (
    <AnimateHeight duration={500} height={height}>
      <div className="auto">
        <h4 className="my-text-24 gap-mb-24">
          {auth ? "Welcome to CoinX" : "Create Account"}
        </h4>
        <div className="w-full h-[1px] bg-BG-FFF-8 gap-mb-24"></div>
        <div className="flex-centerY sm:gap-3 gap-2 my-text-16 gap-mb-16">
          <span className="text-foundation-blue-50">
            {auth ? "New to Bybit?" : "Already have an account ?"}
          </span>
          <IconArrowsExchange className="text-primary-1" />
          <button
            onClick={() => {
              setAuth(!auth);
              setHeight("auto");
            }}
            className="icon-24 text-primary-1 whitespace-nowrap"
          >
            {auth ? "Sign Up" : "Login"}
          </button>
        </div>
        <div className="flex-center flex-col "></div>
        {auth ? <LoginCard /> : <SignUpCard />}
      </div>
    </AnimateHeight>
  );
};

export default AuthCard;
