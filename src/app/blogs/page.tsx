import { Banner } from "@/components/Global";
import { BlogsSection } from "@/components/Pages";
import { headerProps } from "@/config/types";

const Contact = () => {
  const headerData: headerProps = {
    title: "Blogs & Resources",
    description:
      "Explore our blog and resources for valuable insights, expert opinions, and up-to-date information on the latest trends in the industry.",
  };

  return (
    <main>
      <Banner headerData={headerData} />
      <BlogsSection />
    </main>
  );
};

export default Contact;
