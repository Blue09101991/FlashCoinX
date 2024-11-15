import { IdoDetailsSection } from "@/components/Pages";
import { completedProjects } from "../../../../public/data/completedProjects";
import { projectDataType } from "@/config/types";
import { FaqSection } from "@/components/Global";

const IdoDetails = ({ params }: { params: { id: string } }) => {
    const projectData: projectDataType | any = completedProjects?.find(
        (project) => project?.id == Number(params?.id)
  );
 
 
  return (
    <main className="lg:pt-[11.2rem] md:pt-[5.5rem] sm:pt-[84px] pt-[4.30rem] bg-BG">
      <IdoDetailsSection projectData={projectData} />
      <FaqSection />
    </main>
  );
};

export default IdoDetails;
