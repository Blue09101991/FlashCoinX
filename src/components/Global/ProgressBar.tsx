"use client";

import { useEffect, useRef, useState } from "react";

type progressTypes = {
  title: string;
  bg: string;
  percent: string;
  width: string;
  color: string;
};

const ProgressBar = ({ progressData }: { progressData: progressTypes[] }) => {
  const [isInView, setIsInview] = useState(false);
  const progress = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    const progressBars = Array.from(
      document.getElementsByClassName("bar") as HTMLCollectionOf<HTMLElement>
    );
    const observer = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          setIsInview(true);
        }
      });
    });
    for (const progressBar of progressBars) {
      observer.observe(progressBar);
    }
    // Clean up the observer when the component unmounts
    return () => {
      for (const progressBar of progressBars) {
        observer.unobserve(progressBar);
      }
    };
  }, []);
  return (
    <ul ref={progress} className="flex flex-col gap-5 lg:gap-[30px]">
      {progressData?.map(({ width, title }) => (
        <li key={title}>
          <div className="bar w-full rounded-full h-[6px] bg-stroct-1">
            <div
              style={{ width: width }}
              className={`${
                isInView && "progress-grow"
              } bg-primary-1 h-[6px] rounded-full flex justify-end items-center`}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ProgressBar;
