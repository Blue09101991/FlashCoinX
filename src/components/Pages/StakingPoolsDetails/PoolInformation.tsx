import Image from "next/image";
import { web3s } from "@/../../public/data/discoverWeb3";
import blockchainIcon from "@/../public/images/blockchainIcon.png";

const PoolInformation = () => {
  return (
    <section className="w-full bg-gradient-to-r from-highlight-1 to-primary-1 p-[1px]  my-rounded-20 gap-mb-24">
      <div className="w-full bg-BG-3 lg:p-6 md:p-5 sm:p-4 p-3.5 my-rounded-20">
        <h4 className="my-text-24 text-highlight-1 gap-mb-32 ">
          Pool <span className="gradient-text-primary">Information</span>
        </h4>
        <div className="lg:p-6 md:p-5 sm:p-4 p-3.5 relative scrollbar scrollbar-sm overflow-x-auto  bg-gradient-to-l from-[rgba(199,248,1,0.16)] to-[rgba(250,205,149,0.16)]  md:rounded-xl sm:rounded-lg rounded-md">
          <table className="w-full text-left rtl:text-left whitespace-nowrap">
            <thead className="uppercase my-text-16  lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 border-b border-stroct-1">
              <tr>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                >
                  TVL
                </th>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                >
                  Pool Composition
                </th>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                ></th>
                <th
                  scope="col"
                  className="text-primary-1 my-text-16 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
                >
                  Network
                </th>
              </tr>
            </thead>
            <tbody>
              {web3s?.slice(0, 2)?.map((item, idx) => (
                <tr className="my-text-16 md:pt-4 sm:pt-3 pt-2.5" key={idx}>
                  <td>
                    <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                      <p className=" my-text-16 text-white-2">
                        $ {item?.tvl} M
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="flex-centerY sm:gap-2 gap-1.5 md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                      <Image
                        width={24}
                        height={24}
                        src={item?.image}
                        alt="blockchain"
                      />
                      <p className=" my-text-16 text-white-2 uppercase">
                        {item?.title}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                      <p className=" my-text-16 text-white-2 uppercase">
                        {item?.price} K
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="flex-centerY sm:gap-2 gap-1.5 md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                      <Image
                        width={24}
                        height={24}
                        src={blockchainIcon}
                        alt="blockchain"
                      />
                      <p className=" my-text-16 text-white-2">
                        {item?.blockchain}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PoolInformation;
