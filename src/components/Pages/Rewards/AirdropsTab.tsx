import { TermsAndConditionsSection } from "../";
import OngoingAirdrops from "./OngoingAirdrops";

const AirdropsTab = () => {
  return (
    <div>
      <OngoingAirdrops />
      <h2 className="section-title gap-mb-60">Terms and Conditions</h2>
      <TermsAndConditionsSection />
    </div>
  );
};

export default AirdropsTab;
