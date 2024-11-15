"use client";

import { useDropdown } from "@/hooks";
import { IconSearch, IconX } from "@tabler/icons-react";
import { FormEvent, useState } from "react";
const NavSearchBar = () => {
  const { open, handleOption, ref } = useDropdown();
  const [searchData, setSearchData] = useState("");

  // Handle form submit
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div ref={ref}>
      <button
        onClick={() => {
          handleOption();
          setSearchData("");
        }}
        aria-label="handleOption"
      >
        <IconSearch className="icon-24 text-white" />
      </button>
      <div
        className={`absolute xl:-left-[50%] xl:top-16 lg:top-4 md:top-3 sm:top-2.5 top-0 left-0 md:w-auto w-full z-10 opacity-100 transition-all duration-700 ${
          open ? "translate-y-0 " : " -translate-y-64 opacity-0"
        }`}
      >
        <div className="bg-primary-1 shadow-[0px_1px_12px_0px_#000000b5] sm:rounded-xl rounded-b-xl  flex min-w-full items-center justify-between gap-6 p-3 max-sm:flex-col-reverse">
          <div className="items-center gap-2 max-sm:flex">
            <form
              onSubmit={handleFormSubmit}
              className="bg-BG flex w-full items-center justify-between rounded-full py-2 px-3"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                className=" w-full placeholder:text-foundation-blue-60 text-white focus:outline-none bg-transparent pr-2"
              />
              <button
                type="submit"
                onClick={() => {
                  setSearchData("");
                  handleOption();
                }}
                aria-label="handleOption"
              >
                <IconSearch className="icon-24 text-foundation-blue-60" />
              </button>
            </form>
          </div>
          <button
            className=" rounded-full p-1 bg-primary-4  text-primary-1 "
            onClick={() => {
              setSearchData("");
              handleOption();
            }}
            aria-label="close"
          >
            <IconX size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavSearchBar;
