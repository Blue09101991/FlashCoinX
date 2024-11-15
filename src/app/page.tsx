import { FaqSection, SupportCompanies } from "@/components/Global";
import {
  CriptoTranding,
  CryptoExchange,
  DigitalWorld,
  DiscoverWeb3,
  EarnAndSavings,
  Exchange,
  GetStarted,
  HomeBanner,
  Markets,
  Web3Products,
} from "@/components/Pages";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HomeBanner />
      <SupportCompanies />
      <Web3Products />
      <Markets />
      <GetStarted />
      <DiscoverWeb3 />
      {/* <EarnAndSavings /> */}
      <CryptoExchange />
      {/* <CriptoTranding /> */}
      <DigitalWorld />
      <Exchange />
      <FaqSection />
    </main>
  );
}
