"use client";

import { useCopy } from "@/hooks";
import { IconCheck, IconCopy } from "@tabler/icons-react";

const SmartContracts = () => {
  const { copiedText, handleCopy } = useCopy();

  return (
    <div className="w-full bg-gradient-to-r from-highlight-1 to-primary-1 p-[1px]  my-rounded-20">
      <div className="w-full bg-BG-3 lg:p-6 md:p-5 sm:p-4 p-3.5 my-rounded-20">
        <h4 className="my-text-24 text-highlight-1 gap-mb-32 ">
          Smart <span className="gradient-text-primary">Contracts</span>
        </h4>
        <div className="lg:p-6 md:p-5 sm:p-4 p-3.5 relative scrollbar scrollbar-sm overflow-x-auto bg-gradient-to-l from-[rgba(199,248,1,0.16)] to-[rgba(250,205,149,0.16)]  md:rounded-xl sm:rounded-lg rounded-md">
          <table className="w-full text-left rtl:text-left whitespace-nowrap">
            <thead className="uppercase my-text-16  lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 border-b border-stroct-1">
              <tr>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                >
                  Pool
                </th>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                >
                  Token
                </th>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                >
                  Gauge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="my-text-16">
                <td>
                  <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                    <p className="font-lexend my-text-18 text-white-2 flex-centerY sm:gap-2 gap-1.5 text-foundation-blue-30">
                      0x31e2...843a{" "}
                      <button
                        className="icon-24 cursor-pointer"
                        onClick={() => handleCopy("0x31e2...843a")}
                        aria-label="copy"
                      >
                        {copiedText === "0x31e2...843a" ? (
                          <IconCheck className="icon-24 opacity-60" />
                        ) : (
                          <IconCopy className="icon-24 opacity-60" />
                        )}
                      </button>
                    </p>
                  </div>
                </td>
                <td>
                  <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                    <p className="font-lexend my-text-18 text-white-2 flex-centerY sm:gap-2 gap-1.5 text-foundation-blue-30">
                      0x79f2...74aa{" "}
                      <button
                        className="icon-24 cursor-pointer"
                        onClick={() => handleCopy("0x79f2...74aa")}
                        aria-label="copy"
                      >
                        {copiedText === "0x79f2...74aa" ? (
                          <IconCheck className="icon-24 opacity-60" />
                        ) : (
                          <IconCopy className="icon-24 opacity-60" />
                        )}
                      </button>
                    </p>
                  </div>
                </td>
                <td>
                  <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                    <p className="font-lexend my-text-18 text-white-2 flex-centerY sm:gap-2 gap-1.5 text-foundation-blue-30">
                      0x21e2...843a{" "}
                      <button
                        className="icon-24 cursor-pointer"
                        onClick={() => handleCopy("0x21e2...843a")}
                        aria-label="copy"
                      >
                        {copiedText === "0x21e2...843a" ? (
                          <IconCheck className="icon-24 opacity-60" />
                        ) : (
                          <IconCopy className="icon-24 opacity-60" />
                        )}
                      </button>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SmartContracts;
