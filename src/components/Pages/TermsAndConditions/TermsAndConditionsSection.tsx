import FadeDown from "@/motion/FadeDown";

const TermsAndConditionsSection = () => {
  const TermsData = [
    {
      id: 1,
      title:
        "All tasks and rewards are limited and will be issued based on a first-come, first-served basis.",
      details:
        "Please note that all tasks and associated rewards are subject to availability and are limited in quantity. Rewards will be distributed on a 'first-come, first-served' basis. Due to the finite nature of the rewards, completion of tasks does not guarantee issuance if the quota has been reached.",
      features: [
        "Tasks and rewards limited; issued first-come, first-served.",
        "Limited tasks, rewards; given on first-come, first-served basis.",
        "Availability limited; rewards issued in order of receipt.",
        "Tasks limited, rewards given on first-come basis.",
      ],
    },
    {
      id: 2,
      title:
        "Users have to create and participate with a FlashCoin Wallet in order to receive any rewards.",
      details:
        "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.",
      features: [
        "Reward eligibility requires FlashCoin Wallet creation and active participation.",
        "Participation and rewards necessitate a FlashCoin Wallet account's creation.",
        "To receive rewards, users must engage through a FlashCoin Wallet.",
        "FlashCoin Wallet creation is mandatory for users to claim rewards.",
      ],
    },
    {
      id: 3,
      title:
        "FlashCoin reserves the right of final interpretation of all terms and conditions.",
      details:
        "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.",
      features: [
        "The final interpretation of terms and conditions rests with FlashCoin.",
        "All terms and conditions interpretation is at the discretion of FlashCoin.",
        "The definitive interpretation of terms belongs to FlashCoin's authority.",
        "FlashCoin has the final say in interpreting terms and conditions.",
      ],
    },
  ];
  return (
    <div className="bg-BG-FFF-8 xl:p-[60px] lg:p-12 md:p-10 sm:p-8 p-5 my-rounded-20 border border-stroct-1">
      <div>
        {TermsData?.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx !== 0 &&
              "border-t border-BG-FFF-8 xl:pt-[52px] lg:pt-12 md:pt-10 sm:pt-9 pt-8"
            } ${TermsData?.length - 1 !== idx && "gap-mb-40"}`}
          >
            <FadeDown>
              <h3 className="my-text-32 gap-mb-40 sm:max-w-[856px] w-full">
                {item?.title}
              </h3>
              <p className="my-text-16 text-foundation-blue-30 gap-mb-24">
                {item?.details}
              </p>
              <ul className="list-inside list-decimal grid gap-y-[2px] my-text-16 text-foundation-blue-30">
                {item?.features?.map((feature, idx) => (
                  <li key={idx} className="">
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeDown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsSection;
