import { FaqSection } from "@/components/Global";
import {
  BuyCryptoSection,
  CryptoOffersAndDeal,
  Exchange,
  TopUpMethod,
} from "@/components/Pages";

const CryptoBuy = () => {
  return (
    <main className="lg:pt-[11.2rem] md:pt-[5.5rem] sm:pt-[84px] pt-[4.30rem] bg-BG">
      <BuyCryptoSection />
      <TopUpMethod />
      <CryptoOffersAndDeal />
      <Exchange />
      <FaqSection />
    </main>
  );
};

export default CryptoBuy;
