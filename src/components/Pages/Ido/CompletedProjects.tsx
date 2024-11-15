import Image from "next/image";
import { completedProjects } from "@/../../public/data/completedProjects";
import Link from "next/link";
import FadeDown from "@/motion/FadeDown";

const CompletedProjects = () => {
  return (
    <section className="bg-primary-9 relative section-py flex items-center justify-center flex-col w-full">
      <div className="container w-full">
        <h2 className="section-title sm:text-left text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FACD95] to-[#C7F801] gap-mb-60">
          Completed Projects
        </h2>
        <div className="grid xxl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-grid-gap relative gap-mb-40">
          {completedProjects?.map((item, idx) => (
            <Link
              href={``}
              key={idx}
              className="xl:py-10 lg:py-9 md:p-8 sm:p-7 p-5 xl:px-8 lg:px-6 md:px-5 px-4
              md:rounded-xl sm:rounded-lg rounded-md border hover:border-primary-1 border-stroct-1 bg-BG-FFF-8 my-transition cursor-pointer"
            >
              <div className="flex-centerY  sm:gap-3 gap-2.5 gap-mb-40">
                <Image
                  width={60}
                  height={60}
                  className="lg:w-[60px] lg:h-[60px] md:w-[54px] md:h-[54px] sm:w-12 sm:h-12 w-10 h-10"
                  src={item?.image}
                  alt=""
                />
                <div>
                  <h4 className="my-text-32 mb-1">{item?.title}</h4>
                  <h6 className="my-text-16 ">{item?.subTitle}</h6>
                </div>
              </div>
              <div className="flex-centerY justify-between gap-mb-24">
                <div>
                  <h6 className=" my-text-20 font-normal leading-[150%] mb-1">
                    Peak ROI
                  </h6>
                  <h5 className="my-text-32 text-primary-2">
                    {item?.peakROI}%
                  </h5>
                </div>
                <div className="text-right">
                  <h6 className="my-text-20 font-normal leading-[150%] mb-1">
                    Total Participants
                  </h6>
                  <h5 className="my-text-32">${item?.participants}</h5>
                </div>
              </div>
              <p className="my-text-16  gap-mb-40">{item?.details}</p>
              <div className="sm:rounded-lg rounded-md md:p-3.5 sm:p-3 p-2.5 border border-stroct-1 bg-BG-FFF-8 grid sm:gap-3 gap-2.5">
                <div className="flex sm:items-center lg:flex-nowrap flex-wrap justify-between sm:gap-2 gap-x-2 gap-y-1">
                  <h6 className="my-text-16">Total Raised</h6>
                  <h6 className="my-text-16 whitespace-nowrap">
                    {item?.totalRaised}
                  </h6>
                </div>
                <div className="flex sm:items-center lg:flex-nowrap flex-wrap justify-between sm:gap-2 gap-x-2 gap-y-1">
                  <h6 className="my-text-16">Total Issued</h6>
                  <h6 className="my-text-16">{item?.totalIssued}</h6>
                </div>
                <div className="flex sm:items-center lg:flex-nowrap flex-wrap justify-between sm:gap-2 gap-x-2 gap-y-1">
                  <h6 className="my-text-16 ">Completed At</h6>
                  <h6 className="my-text-16">{item?.completedAt}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex-center w-full">
          <FadeDown>
            <Link href={`/`} className="btn btn-primary">
              View More
            </Link>
          </FadeDown>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
