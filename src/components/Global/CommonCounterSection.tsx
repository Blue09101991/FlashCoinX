import { CounterElement } from "./";
import { counters } from "@/../../public/data/counters";
import FadeLeft from "@/motion/FadeLeft";

const CommonCounterSection = () => {
  const commonCounters = counters?.slice(3, 7);
  return (
    <section className="bg-primary-8 relative section-py flex items-center justify-center flex-col w-full">
      <div className="container w-full">
        <FadeLeft>
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-0 lg:gap-12 md:gap-10 gap-8 justify-center  relative xl:divide-x-2 divide-stroct-1">
            {commonCounters?.map((item, idx) => (
              <div className="relative" key={idx}>
                <CounterElement
                  counter={{
                    counterNumber: item?.countNumber,
                    style:
                      "my-text-48 font-medium leading-[120%] text-center xl:max-w-[1074px] w-full gap-mb-24 gradient-text-primary",
                    sizeText: item?.sizeText,
                  }}
                />
                <h2 className="my-text-24 text-center">{item?.title}</h2>
              </div>
            ))}
          </div>
        </FadeLeft>
      </div>
    </section>
  );
};

export default CommonCounterSection;
