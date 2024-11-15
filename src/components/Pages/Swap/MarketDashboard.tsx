import {
  CategoryCurrencyCards,
  ExchangeCard,
  MarketCurrencyChart,
  SummaryChart,
} from "../";

const MarketDashboard = () => {
  return (
    <section className="bg-primary-8 relative section-py flex items-center justify-center flex-col w-full">
      <div className="container">
        <h1 className="section-title lg:text-left text-center w-full gap-mb-60">
          Markets
        </h1>
        <div className="grid grid-cols-12 my-grid-gap ">
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 w-full lg:order-1 order-2">
            <CategoryCurrencyCards />
            <MarketCurrencyChart />
          </div>
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 w-full lg:order-2 order-1 relative">
            <div className="lg:sticky top-28">
              <ExchangeCard />
              <SummaryChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;
