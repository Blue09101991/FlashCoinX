import Image from "next/image";
import cryptocurrency8 from "@/../../public/images/cryptocurrency8.png";
import cryptocurrency9 from "@/../../public/images/cryptocurrency9.png";
import cryptocurrency10 from "@/../../public/images/cryptocurrency10.png";
import cryptocurrency11 from "@/../../public/images/cryptocurrency11.png";
import Link from "next/link";

const Savings = () => {
  const currencySavings = [
    {
      id: 1,
      title: "Tether USDT",
      image: cryptocurrency8,
      currency: "USDC",
      details: "Annual reward",
      reward: 3,
    },
    {
      id: 2,
      title: "Tether USDT",
      image: cryptocurrency9,
      currency: "USDC",
      details: "Annual reward",
      reward: 3,
    },
    {
      id: 3,
      title: "Tether USDT",
      image: cryptocurrency10,
      currency: "USDC",
      details: "Annual reward",
      reward: 3,
    },
    {
      id: 4,
      title: "Tether USDT",
      image: cryptocurrency11,
      currency: "USDC",
      details: "Annual reward",
      reward: 3,
    },
  ];

  return (
    <div className="lg:p-8 md:p-7 sm:p-5 p-4 bg-BG border border-stroct-1 md:rounded-xl sm:rounded-lg rounded-md h-full">
      <div className="gap-mb-40">
        <h2 className="section-title sm:mb-3 mb-2.5">Savings</h2>
        <p className="my-text-16">Earn daily rewards</p>
      </div>
      <div className="grid my-grid-gap sm:grid-cols-2 grid-cols-1 xl:mb-[52px] lg:mb-12 md:mb-11 sm:mb-10 mb-8">
        {currencySavings?.map((item, idx) => (
          <div
            key={idx}
            className="lg:p-6 md:p-5 sm:p-4 p-3.5 bg-BG-FFF-8 border border-stroct-1 lg:rounded-xl md:rounded-lg rounded-md "
          >
            <div className="flex-centerY flex-wrap sm:gap-3 gap-2.5 gap-mb-16">
              <Image src={item?.image} alt="saving" />
              <div>
                <h5 className="my-text-20 mb-1">{item?.title}</h5>
                <p className="my-text-16 text-foundation-blue-40">
                  {item?.currency}
                </p>
              </div>
            </div>
            <p className="my-text-16">
              {item?.details} {item?.reward} %
            </p>
          </div>
        ))}
      </div>
      <Link href="/pricing-plan" className="btn btn-primary flex-center">
        Start saving
      </Link>
    </div>
  );
};

export default Savings;
