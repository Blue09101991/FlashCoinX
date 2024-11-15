import Image from "next/image";
import paymentMethode1 from "@/../public/images/paymentMethode1.png";
import paymentMethode2 from "@/../public/images/paymentMethode2.png";
import paymentMethode3 from "@/../public/images/paymentMethode3.png";
import paymentMethode4 from "@/../public/images/paymentMethode4.png";
import paymentMethode5 from "@/../public/images/paymentMethode5.png";
import paymentMethode6 from "@/../public/images/paymentMethode6.png";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";

const TopUpMethod = () => {
  return (
    <section className="bg-primary-5 section-py">
      <div className="container">
        <div className="grid lg: grid-cols-12 gap-mb-60 items-end">
          <FadeUp className="xl:col-start-1 xl:col-end-6 lg:col-start-1 lg:col-end-7 col-span-12">
            <h2 className="section-title  lg:mb-0 gap-mb-32 lg:text-left text-center">
              Pick Your Preferred Top-Up Method
            </h2>
          </FadeUp>
          <FadeDown className="xl:col-start-8 xl:col-end-13 lg:col-start-7 lg:col-end-13  col-span-12 ">
            <p className="my-text-16 lg:text-right text-center">
              Our comprehensive cybersecurity platform, driven by artificial
              intelligence, not only safeguards your organization but
            </p>
          </FadeDown>
        </div>
        <div className="grid my-grid-gap ">
          <div className="grid my-grid-gap lg:grid-cols-2 grid-cols-1">
            <div className="group">
              <div className="h-full my-rounded-20 group-hover:border-transparent border border-stroct-1 bg-BG-FFF-8  gredient-bg-effect gredient-bg-X text-primary-4 my-transition">
                <FadeUp>
                  <div className="p-40px pb-0">
                    <h6 className="my-text-20 group-hover:text-primary-4 gap-mb-16 my-transition">
                      Instant
                    </h6>
                    <h3 className="my-text-32 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Visa & Mastercard
                    </h3>
                    <p className="my-text-16 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Our comprehensive cybersecurity platform, driven by
                      artificial intelligence, not only safeguards
                    </p>
                  </div>
                </FadeUp>
                <FadeDown>
                  <Image
                    className="w-full"
                    width={636}
                    height={264}
                    src={paymentMethode1}
                    alt="mastercard"
                  />
                </FadeDown>
              </div>
            </div>
            <div className="group">
              <div className="h-full  my-rounded-20 group-hover:border-transparent border border-stroct-1 bg-BG-FFF-8  gredient-bg-effect gredient-bg-X text-primary-4 my-transition">
                <FadeUp>
                  <div className="p-40px pb-0">
                    <h6 className="my-text-20 group-hover:text-primary-4 gap-mb-16 my-transition">
                      Instant
                    </h6>
                    <h3 className="my-text-32 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Apple Pay & Google Pay
                    </h3>
                    <p className="my-text-16 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Our comprehensive cybersecurity platform, driven by
                      artificial intelligence, not only safeguards
                    </p>
                  </div>
                </FadeUp>
                <FadeDown>
                  <Image
                    className="w-full"
                    width={636}
                    height={264}
                    src={paymentMethode2}
                    alt="mastercard"
                  />
                </FadeDown>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="h-full my-rounded-20 group-hover:border-transparent border border-stroct-1 bg-BG-FFF-8  gredient-bg-effect gredient-bg-X text-primary-4 my-transition grid grid-cols-12 my-grid-gap p-40px">
              <div className="lg:col-span-5 col-span-12">
                <FadeLeft>
                  <h6 className="my-text-20 group-hover:text-primary-4 gap-mb-16 my-transition">
                    Instant
                  </h6>
                  <h3 className="my-text-32 group-hover:text-primary-4 gap-mb-24 my-transition">
                    Personal EUR Bank Account
                  </h3>
                  <p className="my-text-16 group-hover:text-primary-4 gap-mb-24 my-transition">
                    Send and receive EUR with SEPA Instant and get immediate
                    access to your funds. Having a personal IBAN on Nexo means
                    you can transfer EUR between your own bank accounts,
                    eliminating any potential for delayed transfers.
                  </p>
                </FadeLeft>
              </div>
              <Image
                className="w-full lg:col-span-7 col-span-12"
                width={636}
                height={264}
                src={paymentMethode3}
                alt="mastercard"
              />
            </div>
          </div>
          <div className="grid my-grid-gap lg:grid-cols-2 grid-cols-1">
            <div className="group">
              <div className="h-full my-rounded-20 group-hover:border-transparent border border-stroct-1 bg-BG-FFF-8  gredient-bg-effect gredient-bg-X text-primary-4 my-transition">
                <div className="p-40px pb-0">
                  <FadeUp>
                    <h6 className="my-text-20 group-hover:text-primary-4 gap-mb-16 my-transition">
                      Instant
                    </h6>
                    <h3 className="my-text-32 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Instant GBP Transfers
                    </h3>
                    <p className="my-text-16 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Benefit from Faster Payment Service (FPS) to top up and
                      withdraw GBP instantly.
                    </p>
                  </FadeUp>
                </div>
                <FadeDown>
                  <Image
                    className="w-full"
                    width={636}
                    height={264}
                    src={paymentMethode4}
                    alt="mastercard"
                  />
                </FadeDown>
              </div>
            </div>
            <div className="group">
              <div className="h-full  my-rounded-20 group-hover:border-transparent border border-stroct-1 bg-BG-FFF-8  gredient-bg-effect gredient-bg-X text-primary-4 my-transition">
                <div className="p-40px pb-0">
                  <FadeUp>
                    <h6 className="my-text-20 group-hover:text-primary-4 gap-mb-16 my-transition">
                      Instant
                    </h6>
                    <h3 className="my-text-32 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Apple Pay & Google Pay
                    </h3>
                    <p className="my-text-16 group-hover:text-primary-4 gap-mb-24 my-transition">
                      Our comprehensive cybersecurity platform, driven by
                      artificial intelligence, not only safeguards.
                    </p>
                  </FadeUp>
                </div>
                <FadeDown>
                  <Image
                    className="w-full"
                    width={636}
                    height={264}
                    src={paymentMethode5}
                    alt="mastercard"
                  />
                </FadeDown>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="h-full my-rounded-20 group-hover:border-transparent border border-stroct-1 bg-BG-FFF-8  gredient-bg-effect gredient-bg-X text-primary-4 my-transition grid grid-cols-12 items-center my-grid-gap p-40px">
              <div className="lg:col-span-5 col-span-12">
                <FadeLeft>
                  <h3 className="my-text-32 group-hover:text-primary-4 gap-mb-24 my-transition">
                    On-Chain Crypto Transfers
                  </h3>
                  <p className="my-text-16 group-hover:text-primary-4 gap-mb-24 my-transition">
                    Deposit or send crypto on the most popular networks and
                    bridge your assets across multiple chains without paying gas
                    fees.
                  </p>
                </FadeLeft>
              </div>
              <Image
                className="w-full lg:col-span-7 col-span-12"
                width={636}
                height={264}
                src={paymentMethode6}
                alt="mastercard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUpMethod;
