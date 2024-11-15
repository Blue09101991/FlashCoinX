import { blogDataType } from "@/config/types";
import { IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const BlogAuthor = ({ blogData }: { blogData: blogDataType }) => {
  const { author, authorImg, bio, social } = blogData;

  return (
    <div className="bg-gradient-to-l from-[rgba(250,205,149,0.60)] to-[rgba(199,248,1,0.60)] section-pt-half section-pb-half xl:px-20 lg:px-16 md:px-14 sm:px-12 px-10 flex-centerY  md:flex-row flex-col xl:gap-10 lg:gap-8 md:gap-6 sm:gap-y-6 gap-y-4 my-rounded-20 ">
      <Image
        className="xl:w-[207px] lg:w-[190px] md:w-[160px] w-[140px] xl:h-[200px] lg:h-[190px] h-[140px] rounded-full bg-white"
        src={authorImg || ""}
        width={207}
        height={207}
        alt="profile"
      />
      <div className="xl:py-10 lg:py-8 md:py-6 ">
        <div className="flex-centerY">
          <div className="w-full flex-centerY justify-between sm:flex-row flex-col gap-mb-24">
            <h2 className="section-title sm:mb-0 gap-mb-24 sm:text-left text-center">
              {author}
            </h2>
            <div className="flex-centerY gap-x-2">
              <Link
                href={social?.facebook}
                className="btn-outline-round bg-primary-32 border-none hover:bg-primary-4 text-white"
              >
                <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </Link>
              <Link
                href={social?.instra}
                className="btn-outline-round bg-primary-32 border-none hover:bg-primary-4 text-white"
              >
                <IconBrandInstagram className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </Link>
              <Link
                href={social?.twitter}
                className="btn-outline-round bg-primary-32 border-none hover:bg-primary-4 text-white"
              >
                <IconBrandTwitter className="xxl:w-6 xxl:h-6 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <p className="my-text-16 sm:text-left text-center">{bio}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
