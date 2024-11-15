import Image from "next/image";
import { blogs } from "@/../../public/data/blogs";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";

const FeatureBlog = () => {
  const { id, title, blogImage, category, details, publish } = blogs[0];
  return (
    <div className="section-pb">
      <div className="flex xl:flex-row flex-col justify-between my-grid-gap bg-gradient-to-b from-primary-1 to-highlight-1 p-32px my-rounded-20">
        <div className="grid grid-cols-12 my-grid-gap">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 bg-primary-4 flex justify-center lg:rounded-2xl md:rounded-xl rounded-lg p-24px overflow-hidden">
            <Image
              className="hover:scale-110 my-transition"
              width={356}
              height={264}
              src={blogImage}
              alt="icon"
            />
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <div className="flex-centerY my-text-16 font-semibold leading-[150%] text-primary-4 sm:gap-2 gap-1.5 gap-mb-24">
              <span>{publish}</span>
              <div className="rounded-full  bg-primary-4 sm:w-4 sm:h-4 w-3 h-3 "></div>
              <span>{category}</span>
            </div>
            <FadeLeft>
              <h4 className="section-title gap-mb-24 text-primary-4 font-bold leading-[120%]">
                {title}
              </h4>
            </FadeLeft>
            <FadeRight>
              <p className="my-text-16 text-primary-4 gap-mb-24">{details}</p>
            </FadeRight>
            <Link
              href={`/blogs/${id}`}
              className="btn btn-primary border-transparent bg-BG hover:bg-primary-4 text-white inline-flex justify-between md:gap-[10px] sm:gap-2 gap-1.5 "
            >
              Read More
              <IconChevronRight className="icon-24" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlog;
