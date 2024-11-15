import TiltWraper from "@/lib/TiltWraper";
import { tiltStyles } from "@/utility/tiltStyles";
import {
  IconAddressBook,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconSocial,
} from "@tabler/icons-react";
import Link from "next/link";
import FadeDown from "@/motion/FadeDown";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Address",
      icon: (
        <IconAddressBook className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" />
      ),
      details: "Clarkson Ave, Brooklyn, NewYark 11203",
    },
    {
      id: 2,
      title: "Email",
      icon: <IconMail className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" />,
      email1: "bluewonder0929@gmail.com",
    },
    {
      id: 1,
      title: "Phone",
      icon: <IconPhone className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" />,
      phone1: "+15404436640",
    },
    {
      id: 1,
      title: "SOCIAL MEDIA",
      icon: <IconSocial className="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" />,
      social: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];
  return (
    <div>
      <div className="grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 my-grid-gap">
        {contactInfo?.map((item, idx) => (
          <TiltWraper key={idx} tiltStyles={tiltStyles}>
            <div key={idx} className="group h-full">
              <FadeDown className="h-full">
                <div className="group-hover:bg-primary-4 h-full my-rounded-20 px-32-py-40px flex-center flex-col my-transition border border-stroct-1">
                  <div className="rounded-full lg:p-5 md:p-4 sm:p-3 p-2.5 bg-primary-1 text-primary-4 my-transition gap-mb-24 flex-center">
                    {item.icon}
                  </div>
                  <h4 className="my-text-24 text-white my-transition gap-mb-16">
                    {item?.title}
                  </h4>

                  {item?.email1 && item?.email2 && (
                    <div className="my-text-16 text-white my-transition text-center max-w-[182px] gap-mb-24">
                      <Link href={`mailto:${item?.email1}`} className="block">
                        {item?.email1}
                      </Link>
                      <Link href={`mailto:${item?.email2}`} className="block">
                        {item?.email2}
                      </Link>
                    </div>
                  )}

                  {item?.phone1 && item?.phone2 && (
                    <div className="my-text-16 text-white my-transition text-center max-w-[182px] gap-mb-24">
                      <Link href={`tel:${item?.phone1}`} className="block">
                        {item?.phone1}
                      </Link>
                      <Link href={`tel:${item?.phone2}`} className="block">
                        {item?.phone2}
                      </Link>
                    </div>
                  )}

                  {item?.details && (
                    <p className="my-text-16 text-white my-transition text-center max-w-[182px] gap-mb-24">
                      {item?.details}
                    </p>
                  )}

                  {item?.social && (
                    <div className="flex-centerY gap-2">
                      <Link
                        href={item?.social.facebook}
                        className="btn-outline-round group-hover:bg-primary-4 border-primary-1 hover:border-transparent text-primary-1 hover:text-white"
                      >
                        <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5" />
                      </Link>
                      <Link
                        href={item?.social?.instagram}
                        className="btn-outline-round group-hover:bg-primary-4 border-primary-1 hover:border-transparent text-primary-1 hover:text-white"
                      >
                        <IconBrandInstagram className="xxl:w-6 xxl:h-6 w-5 h-5" />
                      </Link>
                      <Link
                        href={item?.social?.twitter}
                        className="btn-outline-round group-hover:bg-primary-4 border-primary-1 hover:border-transparent text-primary-1 hover:text-white"
                      >
                        <IconBrandTwitter className="xxl:w-6 xxl:h-6 w-5 h-5" />
                      </Link>
                      <Link
                        href={item?.social?.linkedin}
                        className="btn-outline-round group-hover:bg-primary-4 border-primary-1 hover:border-transparent text-primary-1 hover:text-white"
                      >
                        <IconBrandLinkedin className="xxl:w-6 xxl:h-6 w-5 h-5" />
                      </Link>
                    </div>
                  )}
                </div>
              </FadeDown>
            </div>
          </TiltWraper>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
