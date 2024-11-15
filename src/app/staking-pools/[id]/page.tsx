import { StakingPoolDetailsSection } from "@/components/Pages";
import { web3s } from "@/../../public/data/discoverWeb3";

const StakingPoolDetails = ({
  params,
}: {
  params: { id: string | number };
}) => {
  const currency = web3s?.find((currency) => currency?.id == params?.id);

  return (
    <main className="lg:pt-[11.2rem] md:pt-[5.5rem] sm:pt-[84px] pt-[4.30rem] bg-BG-3">
      {currency ? (
        <StakingPoolDetailsSection currency={currency} />
      ) : (
        <section className="section-py">
          <h2 className="my-text-32 text-white">Data not NotFound</h2>
        </section>
      )}
    </main>
  );
};

export default StakingPoolDetails;
