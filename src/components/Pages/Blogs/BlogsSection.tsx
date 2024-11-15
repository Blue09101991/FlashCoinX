"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { blogs } from "@/../../public/data/blogs";
import { IconChevronRight } from "@tabler/icons-react";
import { FeatureBlog } from "../";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const BlogsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ["All", "Finance", "Marketing", "Technology"];
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <section className="bg-primary-6 section-py overflow-x-hidden">
      <div className="container">
        <FeatureBlog />
        <Tab.Group
          defaultIndex={0}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <div className="flex-centerY flex-wrap sm:justify-between justify-center gap-6 gap-mb-60">
            <div className="sm:text-left text-center">
              <h2 className="section-title gap-mb-16">Our recent news</h2>
              <p className="my-text-16 sm:max-w-[526px] w-full">
                Explainability features and deep model. Specialized consectetur
                adipiscing sed do eiusmod.
              </p>
            </div>
            <div>
              <Tab.List className="flex flex-wrap sm:justify-between justify-center md:gap-3 sm:gap-2.5 gap-2">
                {tabs?.map((tab, index) => (
                  <Tab
                    key={index}
                    onClick={() => setSelectedTab(tab === "All" ? "" : tab)}
                    className={`${
                      index === selectedIndex
                        ? "btn-primary"
                        : "text-primary-1 bg-transparent"
                    } outline-none hover:btn-primary border-primary-1 font-roboto border  
                      btn md:rounded-lg sm:rounded-md`}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>
          <div>
            <Tab.Panels>
              {tabs?.map((tab, index) => (
                <Tab.Panel key={index}>
                  <div className="grid md:grid-cols-2 grid-cols-1 my-grid-gap">
                    {blogs
                      ?.slice(1)
                      ?.filter(
                        (blog, idx) =>
                          !selectedTab || blog?.category === selectedTab
                      )
                      ?.map((item, idx) => (
                        <div key={idx} className="group">
                          <div className="h-full border border-stroct-1 hover:border-transparent gredient-bg-effect gredient-bg-Y my-transition lg:rounded-2xl md:rounded-xl rounded-lg p-32px">
                            <div className="bg-BG-FFF-8 border border-stroct-1 group-hover:bg-primary-4 flex justify-center gap-mb-32 my-transition lg:rounded-2xl md:rounded-xl rounded-lg p-32px overflow-hidden">
                              <Image
                                className="w-auto lg:h-[280px] md:h-[200px] sm:h-[280px] h-[200px] hover:scale-110 my-transition"
                                width={572}
                                height={280}
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
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};

export default BlogsSection;
