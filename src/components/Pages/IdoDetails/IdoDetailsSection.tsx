import { projectDataType } from "@/config/types";
import { IdoBanner, IdoDetails, IdoTimeline } from "../";

const IdoDetailsSection = ({
  projectData,
}: {
  projectData: projectDataType;
}) => {
  return (
    <section className="bg-primary-5 section-py">
      <div className="container">
        <IdoBanner projectData={projectData} />
        <IdoDetails projectData={projectData} />
        <IdoTimeline projectData={projectData} />
      </div>
    </section>
  );
};

export default IdoDetailsSection;
