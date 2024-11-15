"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed
            ${
              scrolled ? "bottom-10" : "-bottom-40"
            } text-primary-4 text-2xl bg-primary-1 rounded-full shadow-xl border border-primary-4 md:right-10 sm:right-8 right-5 py-3 px-2  z-40`}
      onClick={backtoTop}
      aria-label="bottom to top button"
    >
      <span className="block text-xl  duration-700 animate-bounce ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-big-up-line-filled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v5a1 1 0 0 0 1 1h6l.117 -.007a1 1 0 0 0 .883 -.993l-.001 -5h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
          <path
            d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTop;
