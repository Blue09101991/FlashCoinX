import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import { Subscribe } from "./";

const Footer = () => {
  // Get the current year using JavaScript's Date object
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-primary-8 bg-[url('/images/footerBG.png')] bg-no-repeat bg-cover bg-center">
        <div className="container section-py ">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-start-1 lg:col-end-6 col-span-12">
              <FadeUp>
                <h2 className="section-title gap-mb-24">
                  <Link href="#" className="text-white">
                    FlashCoin
                  </Link>
                </h2>
              </FadeUp>
              <FadeDown>
                <p className="my-text-16 lg: gap-mb-40">
                  Welcome to FlashCoin, your gateway to the world of Web3 trading!
                  Our user-friendly platform empowers you to explore a wide
                  range of popular cryptocurrencies
                </p>
              </FadeDown>
              <div className="hidden lg:flex justify-center items-center bg-BG-FFF-8 border border-stroct-1 rounded-[4px] lg:pl-6 pl-2 py-2 pr-2 gap-mb-48">
                <Subscribe />
              </div>
              <div className="flex-centerY gap-2">
                <Link
                  href="#"
                  className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
                  aria-label="socal-facebook"
                >
                  <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
                  aria-label="socal-instagram"
                >
                  <IconBrandInstagram className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
                  aria-label="socal-twitter"
                >
                  <IconBrandTwitter className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="btn-outline-round hover:bg-primary-1 border-primary-1 hover:border-transparent text-primary-1 hover:text-primary-4"
                  aria-label="socal-linkedin"
                >
                  <IconBrandLinkedin className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="lg:col-start-7 lg:col-end-9 sm:col-span-4 col-span-4">
              <FadeDown>
                <h4 className="my-text-24 gap-mb-40">Company</h4>
              </FadeDown>
              <FadeUp>
                <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="/terms-conditions"
                    >
                      About
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="/crypto-buy"
                    >
                      Join Us
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      Academy
                    </Link>
                  </li>
                </ul>
              </FadeUp>
            </div>
            <div className="lg:col-start-9 lg:col-end-11  sm:col-span-4 col-span-4">
              <FadeDown>
                <h4 className="my-text-24 gap-mb-40">Security</h4>
              </FadeDown>
              <FadeUp>
                <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      Contact Validator
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      Protection fund
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </FadeUp>
            </div>
            <div className="lg:col-start-11 lg:col-end-13  sm:col-span-4 col-span-4">
              <FadeDown>
                <h4 className="my-text-24 gap-mb-40">Assets</h4>
              </FadeDown>
              <FadeUp>
                <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      BNB Chain
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      Ethereum
                    </Link>
                  </li>
                  <li className="hover:translate-x-2 my-transition">
                    <Link
                      className="my-text-16 hover:text-primary-1 my-transition"
                      href="#"
                    >
                      ERC20
                    </Link>
                  </li>
                </ul>
              </FadeUp>
            </div>
          </div>
          <div className="gap-mt-40 lg:hidden flex justify-center items-center bg-BG-FFF-8 border border-stroct-1 rounded-[4px] md:pl-5 pl-2 py-2 pr-2">
            <Subscribe />
          </div>
        </div>
      </div>
      <div className="bg-primary-1 lg:py-6 md:py-5 sm:py-4 py-3">
        <div className="container text-center flex md:flex-row flex-col-reverse md:justify-between justify-center items-center gap-x-6 gap-y-1">
          <h6 className="text-primary-4 my-text-16">
            Copyright ©{currentYear} - All Rights Reserved | Developed By{" "}
            <Link href="#">Hector</Link>
          </h6>
          <div className="flex items-center">
            <Link
              href="/terms-conditions"
              className="block text-primary-4 my-text-16"
            >
              Privacy Policy
            </Link>
            <h6 className="block mx-2 text-primary-4 my-text-16">|</h6>
            <Link
              href="/terms-conditions"
              className="block text-primary-4 my-text-16"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
