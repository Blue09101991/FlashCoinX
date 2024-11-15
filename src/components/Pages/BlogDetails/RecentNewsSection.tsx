import Link from "next/link";
import React from "react";
import { blogs } from "@/../../public/data/blogs";
import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const RecentNewsSection = () => {
  return (
    <section className="bg-primary-6">
      <div className="container section-pb section-pt-half">
        <div className="flex sm:justify-between justify-center items-center gap-mb-60 w-full">
          <h2 className="section-title sm:text-left text-center">
            Our recent news
          </h2>
          <Link className="btn btn-primary sm:inline-flex hidden" href="/blogs">
            View More
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 my-grid-gap gap-mb-24">
          {blogs?.slice(1, 3)?.map((item, idx) => (
            <div key={idx} className="group">
              <div className="h-full border border-stroct-1 hover:border-transparent gredient-bg-effect gredient-bg-X bg-BG-FFF-8 my-transition lg:rounded-2xl md:rounded-xl rounded-lg p-32px">
                <div className="bg-BG-FFF-8 border border-stroct-1 group-hover:bg-primary-4 flex justify-center gap-mb-32 my-transition lg:rounded-2xl md:rounded-xl rounded-lg p-32px overflow-hidden">
                  <Image
                    className="w-auto xl:h-[320px] lg:h-[280px] md:h-[240px] sm:h-[280px] h-[200px] hover:scale-110 my-transition"
                    width={572}
                    height={340}
                    src={item?.blogImage}
                    alt="icon"
                  />
                </div>
                <div className="flex-centerY my-text-16 font-semibold leading-[150%] group-hover:text-primary-4 sm:gap-2 gap-1.5 gap-mb-32 my-transition">
                  <span>{item?.publish}</span>
                  <div className="rounded-full bg-primary-1 group-hover:bg-primary-4 sm:w-4 sm:h-4 w-3 h-3 my-transition"></div>
                  <span>{item?.category}</span>
                </div>
                <FadeUp>
                  <h4 className="my-text-24 group-hover:text-primary-4 gap-mb-24 my-transition">
                    {item?.title}
                  </h4>
                </FadeUp>
                <FadeDown>
                  <p className="my-text-16 group-hover:text-primary-4 gap-mb-32 my-transition">
                    {item?.details}
                  </p>
                </FadeDown>
                <Link
                  href={`/blogs/${item?.id}`}
                  className="btn btn-primary group-hover:border-transparent group-hover:bg-BG group-hover:text-white inline-flex md:gap-[10px] sm:gap-2 gap-1.5  "
                >
                  Read More
                  <IconChevronRight className="icon-24" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex-center">
          <Link className="btn btn-primary inline-flex sm:hidden" href="/blogs">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentNewsSection;
