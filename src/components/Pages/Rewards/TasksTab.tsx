import Image from "next/image";
import { rewards } from "@/../../public/data/rewards";
import OngoingTasks from "./OngoingTasks";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const TasksTab = () => {
  const upcomingRewards = rewards?.filter(
    (task) => task?.status === "upcoming"
  );
  const previousRewards = rewards?.filter((task) => task?.status === "ended");

  return (
    <div>
      <OngoingTasks />
      <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 p-32px gap-mb-60">
        <h3 className="my-text-32 gap-mb-32">Upcoming Tasks</h3>
        <div className="grid my-grid-gap">
          {upcomingRewards
            ?.filter((task) => task?.status === "upcoming")
            ?.map((item, idx) => (
              <div
                key={idx}
                className="flex xl:flex-row flex-col justify-between my-grid-gap w-full"
              >
                <div className="grid grid-cols-10 my-grid-gap w-full">
                  <div className="lg:col-span-4 col-span-10 relative overflow-hidden my-rounded-20">
                    <Image
                      width={416}
                      height={240}
                      src={item?.image}
                      className="my-rounded-20 my-transition w-full lg:h-[240px] h-auto hover:scale-110"
                      alt="image"
                    />
                  </div>

                  <div className="lg:col-span-6 col-span-10 xl:mt-10 sm:mt-4 mt-1">
                    <FadeUp>
                      <h4 className="my-text-32 gap-mb-24">{item?.title}</h4>
                    </FadeUp>
                    <FadeDown>
                      <ul className="grid gap-y-[2px] list-decimal list-inside">
                        {item?.features?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="my-text-16 text-foundation-blue-30"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </FadeDown>
                  </div>
                </div>
                <div className="xl:mt-8 sm:mt-4 mt-1">
                  <button
                    disabled={true}
                    className="hover:cursor-not-allowed btn btn-primary md:w-auto w-full opacity-40 capitalize"
                  >
                    {item?.status}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-BG-FFF-8 border border-stroct-1 my-rounded-20 p-32px gap-mb-60">
        <h3 className="my-text-32 gap-mb-32">Previous Tasks</h3>
        <div className="grid my-grid-gap">
          {previousRewards
            ?.filter((task) => task?.status === "ended")
            ?.map((item, idx) => (
              <div
                key={idx}
                className="flex xl:flex-row flex-col justify-between my-grid-gap w-full"
              >
                <div className="grid grid-cols-10 my-grid-gap w-full">
                  <div className="lg:col-span-4 col-span-10 relative overflow-hidden my-rounded-20">
                    <Image
                      width={416}
                      height={240}
                      src={item?.image}
                      className="my-rounded-20 my-transition w-full lg:h-[240px] h-auto hover:scale-110"
                      alt="image"
                    />
                  </div>

                  <div className="lg:col-span-6 col-span-10 xl:mt-10 sm:mt-4 mt-1">
                    <FadeUp>
                      <h4 className="my-text-32 gap-mb-24">{item?.title}</h4>
                    </FadeUp>
                    <FadeDown>
                      <ul className="grid gap-y-[2px] list-decimal list-inside">
                        {item?.features?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="my-text-16 text-foundation-blue-30"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </FadeDown>
                  </div>
                </div>
                <div className="xl:mt-8 sm:mt-4 mt-1">
                  <button
                    disabled={true}
                    className="hover:cursor-not-allowed btn btn-primary md:w-auto w-full opacity-40 capitalize"
                  >
                    {item?.status}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TasksTab;
