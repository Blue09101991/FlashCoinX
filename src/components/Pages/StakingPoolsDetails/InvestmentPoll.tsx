const InvestmentPoll = () => {
  return (
    <div className="bg-gradient-to-r from-[#FACD95] to-[#C7F801] lg:p-6 md:p-5 sm:p-4 p-3.5 my-rounded-20 gap-mb-40">
      <h4 className="my-text-24 gap-mb-32 text-primary-4">
        Current Investment in Pool
      </h4>
      <div className="lg:p-6 md:p-5 sm:p-4 p-3.5 relative overflow-x-auto scrollbar scrollbar-sm bg-BG-FFF-40 md:rounded-xl sm:rounded-lg rounded-md">
        <table className="w-full text-left rtl:text-left whitespace-nowrap">
          <thead className="uppercase my-text-16  lg:pb-6 md:pb-5 sm:pb-4 pb-3.5 border-b border-[rgba(40,61,31,0.24)]">
            <tr>
              <th
                scope="col"
                className="text-primary-4 my-text-16 lg:py-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
              >
                Investment
              </th>
              <th
                scope="col"
                className="text-primary-4 my-text-16 lg:py-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
              >
                Portfolio PnL
              </th>
              <th
                scope="col"
                className="text-primary-4 my-text-16 lg:py-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
              >
                LP Quantity
              </th>
              <th
                scope="col"
                className="text-primary-4 my-text-16 lg:py-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
              >
                Portfolio Value
              </th>
              <th
                scope="col"
                className="text-primary-4 my-text-16 lg:py-6 md:pb-5 sm:pb-4 pb-3.5 px-3.5 capitalize font-semibold text-left"
              >
                Accumulated Unclaimed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="
                my-text-16"
            >
              <td>
                <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                  <p className="font-lexend my-text-18 text-[rgba(11,11,18,0.60)]">
                    65.00
                  </p>
                </div>
              </td>
              <td>
                <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                  <p className="font-lexend my-text-18 text-[rgba(11,11,18,0.60)]">
                    75.00
                  </p>
                </div>
              </td>
              <td>
                <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                  <p className="font-lexend my-text-18 text-[rgba(11,11,18,0.60)]">
                    99.00
                  </p>
                </div>
              </td>
              <td>
                <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                  <p className="font-lexend my-text-18 text-[rgba(11,11,18,0.60)]">
                    8.9
                  </p>
                </div>
              </td>
              <td>
                <div className=" md:pt-4 sm:pt-3 pt-2.5 px-3.5">
                  <p className="font-lexend my-text-18 text-[rgba(11,11,18,0.60)]">
                    10.00
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentPoll;
