import FadeLeft from "@/motion/FadeLeft";
import Savings from "./Savings";
import Staking from "./Staking";
import FadeRight from "@/motion/FadeRight";
import FadeUp from "@/motion/FadeUp";

const EarnAndSavings = () => {
  return (
    <section className="section-py bg-[url('/images/earnAndSavingsBG.png')] bg-no-repeat bg-cover bg-center bg-primary-4">
      <div className="container">
        <FadeUp>
          <h2 className="text-center section-title gap-mb-60">
            Earn crypto flexibly with{" "}
            <span className="text-primary-1">Bitco</span>
          </h2>
        </FadeUp>
        <div className="grid xl:grid-cols-2 grid-cols-1 my-grid-gap">
          <FadeLeft>
            <Staking />
          </FadeLeft>
          <FadeRight>
            <Savings />
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default EarnAndSavings;
