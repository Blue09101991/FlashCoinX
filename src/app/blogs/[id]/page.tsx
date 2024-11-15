import { blogDataType, headerProps } from "@/config/types";
import { Banner } from "@/components/Global";
import { BlogDetailsSection, RecentNewsSection } from "@/components/Pages";
import { blogs } from "@/../../public/data/blogs";

const BlogsDetails = ({ params }: { params: { id: string | number } }) => {
  // const blogData: blogDataType | undefined = blogs?.find(
  //   (blog) => blog?.id == params?.id
  // );

  const headerData: headerProps = {
    title: "Blog  Details",
    description:
      "Explore our blog and resources for valuable insights, expert opinions, and up-to-date information on the latest trends in the industry.",
  };

  return (
    <main>
      <Banner headerData={headerData} />
      {/* {blogData ? (
        <BlogDetailsSection blogData={blogData} />
      ) : (
        <section className="section-py bg-primary-5">
          <div className=" container flex-center">
            <h2 className="section-title">Sorry Data is not Found</h2>
          </div>
        </section>
      )} */}
      <RecentNewsSection />
    </main>
  );
};

export default BlogsDetails;
