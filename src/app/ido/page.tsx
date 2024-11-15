import { Banner, CommonCounterSection } from "@/components/Global";
import { CompletedProjects, Join } from "@/components/Pages";
import { headerProps } from "@/config/types";

const IDO = () => {
  const headerData: headerProps = {
    title: "IDO",
    description: "Earn passive income easily with just one click!",
  };

  return (
    <main>
      <Banner headerData={headerData} />
      <CommonCounterSection />
      <CompletedProjects />
      <Join />
    </main>
  );
};

export default IDO;
