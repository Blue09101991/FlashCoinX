"use client";

import {
  default as brandLogo,
  default as brandLogoLg,
} from "@/../public/images/Coinx.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { navMenu } from "@/../public/data/navMenu";
import {
  IconX,
  IconChevronDown,
  IconMenu2,
  IconPhoneCall,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMapPin,
} from "@tabler/icons-react";
import { IconMailOpened } from "@tabler/icons-react";
import { ConnectWallet, Modal, NavSearchBar } from "./";

const NavBar = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState<number | null>(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [height, setHeight] = useState<string | number>(0);

  const toggleHandle = (idx: number) => {
    if (toggle === idx) {
      setToggle(null);
    } else {
      setToggle(idx);
    }
  };

  const handleHover = (idx: number) => {
    toggleHandle(idx);
  };

  const [scrolled, setScrolled] = useState(false);

  // scroll to top on reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  // scroll to add navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Add the event listener
    document.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface MenuItem {
    id: number;
    name: string;
    isSubMenu: boolean;
    link?: string; // Link is optional for parent menu items
    subMenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
  }

  interface SubMenuItem {
    id: number;
    name: string;
    link: string;
  }
  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubMenu && menu.subMenu) {
      return menu.subMenu.some((submenu: SubMenuItem) => path === submenu.link);
    }
    return path === menu.link;
  };

  // Wallet Modal
  const [open, setOpen] = useState(false);
  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <header
      id="header"
      className={`${scrolled ? "header-animation bg-BG" : "absolute"} ${
        path === "/" && "bg-BG z-20"
      } w-full border-b border-[rgba(255,255,255,0.16)]
`}
    >
      <div
        className={`bg-primary-1 py-4 ${
          scrolled ? "hidden" : "lg:block"
        }  hidden`}
      >
        <div className="container grid grid-cols-2">
          <div className="flex-centerY">
            <div className="flex-centerY sm:gap-3 gap-2">
              <div className="border-BG border rounded-full xxl:p-3 p-2">
                <IconMapPin className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </div>
              <span className="my-text-16 text-black">
                102/B New Market, Sandigo-USA
              </span>
            </div>
            <div className="bg-black w-[1px] h-10 mx-6"></div>
            <div className="flex-centerY sm:gap-3 gap-2">
              <div className="border-BG border rounded-full xxl:p-3 p-2">
                <IconMailOpened className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </div>
              <Link
                href="mailto:example@gmail.com"
                className="my-text-16 text-black"
              >
                bluewonder0929@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex-centerY justify-end">
            <div className="flex-centerY sm:gap-3 gap-2.5">
              <div className="border-BG border rounded-full xxl:p-3 p-2">
                <IconPhoneCall className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </div>
              <div>
                <h6 className="sm:text-base text-sm font-bold leading-[130px] font-lexend text-BG">
                  Contact Us:
                </h6>
                <Link href="tel:+9800009999" className="my-text-1 text-BG mb-1">
                  +1(540)443-6640
                </Link>
              </div>
            </div>
            <div className="bg-black w-[1px] h-10 mx-6"></div>
            <div className="flex-centerY sm:gap-3 gap-2.5">
              <h6 className="sm:text-base text-sm font-bold leading-[130px] font-lexend text-BG">
                Follow:
              </h6>
              <div className="flex-centerY gap-2">
                <Link href="#" className="btn-outline-round hover:bg-white">
                  <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
                <Link href="#" className="btn-outline-round hover:bg-white">
                  <IconBrandInstagram className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
                <Link href="#" className="btn-outline-round hover:bg-white">
                  <IconBrandTwitter className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
                <Link href="#" className="btn-outline-round hover:bg-white">
                  <IconBrandLinkedin className="xxl:w-6 xxl:h-6 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full container relative">
        <div
          className={` flex items-center justify-between gap-x-2 mx-auto lg:py-6 md:py-5 sm:py-5 py-3.5`}
        >
          {/* Desktop Menu */}
          <nav className="w-full xl:flex justify-between items-center text-black hidden text-semibold">
            <Link href="/">
              <Image width={170} height={38} src={brandLogo} alt="coinx" />
            </Link>
            <div>
              <ul className="flex justify-center items-center gap-3 lg:gap-5">
                {navMenu?.map((menu, idx) => (
                  <li
                    key={menu?.id}
                    onMouseEnter={() => handleHover(idx)}
                    onMouseLeave={() => handleHover(idx)}
                    className={`${
                      isMenuActive(menu) ? "text-primary-1" : "text-white"
                    } hover:cursor-pointer  my-text-16 font-bold font-lexend leading-[130%] hover:text-primary-1 flex justify-center items-center group relative`}
                  >
                    {menu?.isSubMenu ? (
                      <>
                        <span className=" btn-linebar-effect">
                          {menu?.name}
                        </span>

                        <IconChevronDown
                          className={`sm:w-6 sm:h-6 w-5 h-5 sm:ml-2 ml-1.5 hover:rotate-180 duration-700 ease-in-out text-2xl ${
                            toggle === idx ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </>
                    ) : (
                      <Link href={menu?.link!} className="btn-linebar-effect">
                        {menu?.name}
                      </Link>
                    )}
                    {menu?.isSubMenu && (
                      <ul
                        className={`shadow-[0px_1px_12px_0px_#000000b5] w-44 z-[300] bg-BG opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-7 left-0 my-transition ease-out duration-300 ${
                          toggle === idx ? "translate-y-0" : "translate-y-8"
                        } p-4 flex flex-col justify-start items-start gap-4 rounded-lg group`}
                      >
                        {/* {menu?.subMenu?.map(({ id, name, link }) => (
                          <li
                            key={id}
                            className={` ${
                              path === link ? "text-primary-1" : "text-white"
                            } my-text-16 font-bold font-lexend leading-[130%] hover:text-primary-1 w-full hover:translate-x-1 duration-700`}
                          >
                            <Link href={link}>{name}</Link>
                          </li>
                        ))} */}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center flex-wrap gap-5 font-inter text-lg font-medium md:leading-[30px] leading-6 relative">
              <NavSearchBar />
              <button onClick={handleModal} className="btn btn-primary">
                Get Started
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          <nav className="w-full flex justify-between items-center text-black xl:hidden">
            <div className="relative">
              <Link href="/" aria-label="logo_main">
                <div className="flex gap-2 items-center">
                  <Image width={150} height={100} src={brandLogo} alt="coinx" />
                </div>
              </Link>
              <div
                className={`fixed overflow-y-scroll scrollbar scrollbar-sm top-0 left-0 bg-BG h-screen w-full  shadow-lg z-20 transform transition-transform ease-in-out duration-500 p-8 ${
                  hamburgerToggle
                    ? "translate-x-0 duration-500"
                    : "-translate-x-full duration-500"
                } duration-500 flex justify-start items-start gap-8 flex-col`}
              >
                <div className="relative flex justify-between items-center w-full">
                  <Link
                    href="/"
                    onClick={() => setHamburgerToggle((prev) => !prev)}
                  >
                    <Image
                      width={48}
                      height={48}
                      src={brandLogoLg}
                      alt="coinx"
                    />
                  </Link>
                  <IconX
                    className="text-2xl cursor-pointer hover:duration-200 text-white hover:text-primary-1"
                    onClick={() => setHamburgerToggle((prev) => !prev)}
                  />
                </div>
                <div className="w-full">
                  <ul className="flex flex-col justify-center items-start gap-5">
                    {navMenu?.map((menu, idx) => (
                      <li
                        className={`  ${
                          (menu.name === "Services" || "Blogs") &&
                          isMenuActive(menu)
                            ? "text-primary-1"
                            : "text-white"
                        }  hover:text-primary-1 hover:duration-700 my-text-16 font-bold font-lexend leading-[130%] cursor-pointer duration-500 group relative active:bg-transparent focus:bg-transparent`}
                        key={menu.id}
                        onClick={() => handleHover(idx)}
                      >
                        {menu?.isSubMenu ? (
                          <div
                            className="flex justify-start items-start"
                            onClick={() => setHeight(height === 0 ? "auto" : 0)}
                          >
                            {menu?.name}
                            {menu?.isSubMenu && (
                              <IconChevronDown
                                className={`sm:w-6 sm:h-6 w-5 h-5 sm:ml-2 ml-1.5 hover:rotate-180 duration-300 
                                 ${toggle === idx ? "rotate-180" : "rotate-0"}`}
                              />
                            )}
                          </div>
                        ) : (
                          <Link
                            href={menu.link!}
                            className={`${
                              path === menu.link
                                ? "text-primary-1"
                                : "text-white"
                            } hover:text-primary-1 hover:duration-700 my-text-16 font-bold font-lexend leading-[130%]`}
                            onClick={() => setHamburgerToggle((prev) => !prev)}
                          >
                            {menu.name}
                          </Link>
                        )}
                        <AnimateHeight
                          duration={500}
                          height={toggle === idx ? "auto" : 0}
                        >
                          <ul className={`pt-2`}>
                            {/* {menu?.subMenu?.map((subItem, j) => (
                              <li
                                key={j}
                                className="hover:text-primary-1  text-white hover:duration-700 my-text-16 font-bold font-lexend leading-[130%] pb-3"
                                onClick={() =>
                                  setHamburgerToggle((prev) => !prev)
                                }
                              >
                                <Link
                                  href={subItem?.link}
                                  aria-label="item"
                                  className={`${
                                    path === subItem?.link
                                      ? "text-primary-1"
                                      : "text-white"
                                  } my-text-16 font-bold font-lexend leading-[130%]`}
                                >
                                  <span className={`px-2`}>-</span>{" "}
                                  {subItem?.name}
                                </Link>
                              </li>
                            ))} */}
                          </ul>
                        </AnimateHeight>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between gap-4 md:gap-5">
              <NavSearchBar />
              <button onClick={handleModal} className="btn btn-primary  ">
                Connect Wallet
              </button>
              {!hamburgerToggle && (
                <IconMenu2
                  onClick={() => setHamburgerToggle((prev) => !prev)}
                  className="text-3xl cursor-pointer hover:duration-200 text-white hover:text-primary-1"
                />
              )}
            </div>
          </nav>
          <Modal onClick={handleModal} open={open}>
            <ConnectWallet />
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
