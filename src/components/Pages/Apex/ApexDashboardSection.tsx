import {
  ApexDashboard,
  ApexHeader,
  ApexLoginArea,
  ApexPositionList,
  OrderBook,
} from "../";

const ApexDashboardSection = () => {
  return (
    <section className="bg-primary-7">
      <ApexHeader />
      <div className="grid grid-cols-12 my-grid-gap relative md:px-6 sm:px-5 px-4 lg:pb-6 md:pb-5 sm:pb-4 pb-3.5">
        <div className="xxl:col-span-9 col-span-12">
          <div className="grid xxl:grid-cols-9 grid-cols-12 my-grid-gap gap-mb-24">
            <div className="4xl:col-span-6 xxl:col-span-5 xl:col-span-7 min-[1300px]:col-span-8 col-span-12 w-full">
              <ApexDashboard />
            </div>
            <div className="4xl:col-span-3 xxl:col-span-4 xl:col-span-5 min-[1300px]:col-span-4  col-span-12 w-full">
              <OrderBook />
            </div>
          </div>
          <ApexPositionList />
        </div>
        <div className="xxl:col-span-3 lg:col-span-4 xxl:block hidden w-full">
          <ApexLoginArea />
        </div>
      </div>
    </section>
  );
};

export default ApexDashboardSection;
