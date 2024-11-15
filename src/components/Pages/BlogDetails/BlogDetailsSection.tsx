import { blogDataType } from "@/config/types";
import Image from "next/image";
import { BlogAuthor } from "../";
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";

const BlogDetailsSection = ({ blogData }: { blogData: blogDataType }) => {
  const {
    id,
    blogDetailsPoint,
    blogImage,
    category,
    publish,
    title,
    subTitle,
  } = blogData;

  // Get the current year using JavaScript's Date object
  const currentYear = new Date().getFullYear();

  return (
    <section className="section-pt bg-primary-6">
      <div className="container">
        <div className="grid grid-cols-12 md:justify-between justify-center my-grid-gap gap-mb-60">
          <h2 className="xl:col-span-7 lg:col-span-8 col-span-12 section-title text-transparent bg-clip-text bg-gradient-to-r from-[#FACD95] to-[#C7F801] ">
            {title}
          </h2>
          <div className="xl:col-span-5 lg:col-span-4 col-span-12 flex-centerY lg:justify-end justify-start font-roboto">
            <span className="uppercase text-primary-1 bg-BG-FFF-8 border border-stroct-1 rounded-sm py-1.5 sm:px-3 px-2 lg:mr-6 md:mr-5 sm:mr-4 mr-3">
              {category}
            </span>
            <span className="my-text-16">{publish}</span>
          </div>
        </div>
        <div className="my-rounded-20  border border-stroct-1 p-40px bg-transparent gap-mb-60">
          <div className="flex-centerY sm:justify-between justify-center flex-wrap my-grid-gap gap-mb-40">
            <h2 className="section-title">{subTitle}</h2>
            <div className="flex-centerY my-grid-gap my-text-16 font-semibold leading-[150%]">
              <div className="flex-centerY sm:gap-2 gap-1.5">
                <div className="bg-primary-1 rounded-full sm:w-4 w-3 sm:h-4 h-3"></div>
                <span>Income</span>
              </div>
              <div className="flex-centerY sm:gap-2 gap-1.5">
                <div className="bg-primary-1 rounded-full sm:w-4 w-3 sm:h-4 h-3"></div>
                <span>Outcome</span>
              </div>
              <span className="bg-primary-1 rounded-sm py-1.5 sm:px-3 px-2 text-primary-4 font-roboto">
                {currentYear}
              </span>
            </div>
          </div>
          <div className="md:rounded-2xl sm:rounded-xl rounded-lg border border-foundation-blue-50 bg-stroct-1 shadow-[0px_0px_15px_0px_rgba(255,255,255,0.10)] flex-center p-40px w-full">
            <Image
              className="w-auto xl:h-[532px] lg:h-[430px] md:h-[309px] sm:h-[230px] h-[190px]"
              width={960}
              height={532}
              src={blogImage || ""}
              alt="blogImage"
            />
          </div>
        </div>
        <div className="grid xl:gap-y-[60px] lg:gap-y-14 md:gap-y-12 sm:gap-y-10 gap-y-9">
          {blogDetailsPoint?.map((item, idx) => (
            <div key={idx} className="sm:border-b border-BG-FFF-8">
              <FadeDown>
                <h2 className="my-text-32">{item?.title}</h2>
                <p
                  className={`my-text-16 ${
                    item?.features ? "gap-mb-24" : "sm:gap-mb-24"
                  } gap-mt-24`}
                >
                  {item?.description}
                </p>
                {item?.features && (
                  <ul className="list-inside list-decimal grid gap-y-[2px] my-text-16 text-foundation-blue-30 sm:gap-mb-24">
                    {item?.features?.map((feature, idx) => (
                      <li key={idx} className="">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </FadeDown>
            </div>
          ))}

          <div className=" bg-BG-FFF-8 border border-stroct-1 my-rounded-20 flex-center section-pt-half section-pb-half sm:px-3 px-2">
            <FadeLeft>
              <p className="text-center my-text-24 max-w-[1056px]">
                &quot;Blockchain protocols propel us towards a borderless, inclusive
                digital world, where users have control over their data and
                assets.&quot;
              </p>
            </FadeLeft>
          </div>
          <BlogAuthor blogData={blogData} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
