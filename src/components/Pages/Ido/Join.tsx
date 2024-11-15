import join1 from "@/../public/images/join1.png";
import join2 from "@/../public/images/join2.png";
import join3 from "@/../public/images/join3.png";
import join4 from "@/../public/images/join4.png";
import TiltWraper from "@/lib/TiltWraper";
import FadeUp from "@/motion/FadeUp";
import { tiltStyles } from "@/utility/tiltStyles";
import Image from "next/image";

const Join = () => {
  const joinUsData = [
    {
      id: 1,
      title: "Subscription",
      image: join1,
      details:
        "Please ensure your wallet balance meets the requirements for participation.",
    },
    {
      id: 2,
      title: "Snapshot",
      image: join2,
      details:
        "Commit the required tokens for a chance to win the project's token allocation.",
    },
    {
      id: 3,
      title: "Lottery",
      image: join3,
      details:
        "Participate in our exciting lottery games for a chance to win big prizes!",
    },
    {
      id: 4,
      title: "Redemption",
      image: join4,
      details:
        "Complete the process for redemption to access exclusive benefits and rewards effortlessly.",
    },
  ];

  return (
    <section className="bg-primary-6 section-py">
      <div className="container">
        <FadeUp>
          <h2 className="section-title sm:text-left text-center text-transparent text-white gap-mb-60">
            How to Join
          </h2>
        </FadeUp>
        <div className="grid my-grid-gap xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {joinUsData?.map((item, idx) => (
            <TiltWraper key={idx} tiltStyles={tiltStyles}>
              <div className="group my-transition h-full w-full  p-[1px] md:rounded-xl sm:rounded-lg rounded-md">
                <div className="h-full w-full border border-primary-1 gredient-bg-effect !bg-transparent gredient-bg-X px-32-py-40px flex items-center justify-center flex-col text-center md:rounded-xl sm:rounded-lg rounded-md">
                  <div className="flex-center rounded-full sm:p-6 p-5 bg-BG-FFF-8 group-hover:bg-primary-5 my-transition">
                    <Image
                      className="lg:w-[92px] lg:h-[92px] md:w-20 md:h-20 sm:w-16 sm:h-16 w-[60px] h-[60px]"
                      width={92}
                      height={92}
                      src={item?.image}
                      alt="icon"
                    />
                  </div>
                  <h3 className="my-transition my-text-24 group-hover:text-primary-4 lg:py-5 md:py-4 sm:py-3.5 py-3">
                    {item?.title}
                  </h3>
                  <p className="my-text-16 my-transition group-hover:text-primary-4">
                    {item?.details}
                  </p>
                </div>
              </div>
            </TiltWraper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Join;
