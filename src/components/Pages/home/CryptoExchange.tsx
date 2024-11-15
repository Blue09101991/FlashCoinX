import Image from "next/image";
import Link from "next/link";
import cryptoExchangeGallery1 from "@/../../public/images/cryptoExchangeGallery0.png";
import cryptoExchangeGallery2 from "@/../../public/images/cryptoExchangeGallery2.png";
import cryptoExchangeGallery3 from "@/../../public/images/cryptoExchangeGallery3.png";
import cryptoExchangeGallery4 from "@/../../public/images/cryptoExchangeGallery4.png";
import { IconArrowUpRight } from "@tabler/icons-react";
import FadeRight from "@/motion/FadeRight";
import FadeLeft from "@/motion/FadeLeft";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const CryptoExchange = () => {
  return (
    <section className="bg-BG bg-[url('/images/trust-security-web3.png')] bg-cover bg-no-repeat section-py">
      <div className="container ">
        <div className="relative">
          <FadeUp>
            <div className="flex items-end lg:justify-between justify-center xl:flex-row flex-col gap-mb-60 xl:text-right text-center">
              <h2 className="section-title xl:text-left text-center xl:mb-0 gap-mb-32 w-full">
                Trust and Security in Blockchain <br />
                <span className="gradient-primary-2 block">
                  Crypto Transfer
                </span>
              </h2>
              <p className="my-text-16 xl:text-left text-center">
                Our comprehensive cybersecurity platform, driven by artificial
                intelligence, not only safeguards your organization.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-12 my-grid-gap">
            <div className="lg:col-span-8 col-span-12 grid my-grid-gap">
              <FadeLeft>
                <div className="my-rounded-20 overflow-hidden bg-gradient-to-b bg-[rgba(90,190,54,0.04)] from-[rgba(188,255,164,0.40)] to-[rgba(90,190,54,0.04)] border border-stroct-1  my-transition  flex justify-between flex-col relative">
                  <Image
                    className="object-fill w-full h-full"
                    width={416}
                    height={500}
                    src={cryptoExchangeGallery1}
                    alt=""
                  />
                  <div className="absolute bottom-0 grid sm:grid-cols-2 grid-cols-1 gap-mb-40 xl:px-9 lg:px-8 md:px-7 sm:px-6 px-5">
                    <h3 className="my-text-32">24/7 Support</h3>
                    <p className="my-text-16">
                      Count on us for round-the-clock support, ensuring help
                      whenever you need it.
                    </p>
                  </div>
                </div>
              </FadeLeft>
              <FadeRight>
                <div className="grid md:grid-cols-2 grid-cols-1 my-grid-gap">
                  <div className="my-rounded-20 bg-gradient-to-b bg-[rgba(90,190,54,0.04)] from-[rgba(188,255,164,0.40)] to-[rgba(90,190,54,0.04)] px-32-py-40px pb-0  border border-stroct-1  my-transition flex justify-between flex-col ">
                    <h3 className="my-text-32 gap-mb-40">Transfer Algorithm</h3>
                    <div className="object-fill flex justify-center w-full">
                      <Image
                        width={370}
                        height={316}
                        src={cryptoExchangeGallery3}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="my-rounded-20 bg-gradient-to-b bg-[rgba(90,190,54,0.04)] from-[rgba(188,255,164,0.40)] to-[rgba(90,190,54,0.04)] px-32-py-40px pb-0 border border-stroct-1  my-transition  flex justify-between flex-col">
                    <h3 className="my-text-32 gap-mb-40">Trusted & Secure</h3>
                    <div className="object-fill flex justify-center w-full">
                      <Image
                        width={364}
                        height={440}
                        src={cryptoExchangeGallery4}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </FadeRight>
            </div>
            <div className="h-full lg:col-span-4 col-span-12 grid my-grid-gap">
              <FadeUp className="h-full">
                <div className="h-full my-rounded-20 bg-gradient-to-b bg-[rgba(90,190,54,0.04)] from-[rgba(188,255,164,0.40)] to-[rgba(90,190,54,0.04)] border border-stroct-1  my-transition  fle justify-between flex-col">
                  <h3 className="my-text-32 px-32-py-40px">
                    Crypto-to-Crypto purchases
                  </h3>

                  <div className="object-fill flex justify-center w-full">
                    <Image
                      width={416}
                      height={500}
                      src={cryptoExchangeGallery2}
                      alt=""
                    />
                  </div>
                </div>
              </FadeUp>
              <FadeDown className="h-full">
                <div className="h-full my-rounded-20 bg-gradient-to-b bg-[rgba(90,190,54,0.04)] from-[rgba(188,255,164,0.40)] to-[rgba(90,190,54,0.04)] px-32-py-40px border border-stroct-1  my-transition">
                  <div className="flex-centerY justify-end mb-2.5 object-fill w-full">
                    {/* <Link
                      className="rounded-full my-transition md:p-[14px] sm:p-2.5 p-2 border-primary-1 border hover:border-BG bg-primary-1 inline-flex text-primary-4 hover:rotate-45"
                      href="/apex"
                    >
                      <IconArrowUpRight className="xl:w-8 xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-5 h-5" />
                    </Link> */}
                  </div>
                  <h3 className="my-text-32 gap-mb-40">Automatically</h3>
                </div>
              </FadeDown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoExchange;
