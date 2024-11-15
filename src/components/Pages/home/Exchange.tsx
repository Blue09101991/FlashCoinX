import Image from "next/image";
import Link from "next/link";
import app1 from "@/../../public/images/Social.png";
import app2 from "@/../../public/images/Social-1.png";
import app3 from "@/../../public/images/Social-2.png";
import app4 from "@/../../public/images/Social-3.png";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";

const Exchange = () => {
  return (
    <section className="section-py bg-[url('/images/exchange.png')] bg-no-repeat bg-cover bg-center bg-[#36492D]">
      <div className="container flex-center flex-col text-center w-full">
        <FadeLeft>
          <h2 className="section-title gap-mb-24">Ready to Transfer?</h2>
          <p className="my-text-16 gap-mb-40 sm:max-w-[636px] w-full">
            Unlock your FlashCoin account now to trade crypto seamlessly, without
            any fees for buying, selling, or exchanging. Get started today!
          </p>
        </FadeLeft>
        <FadeRight>
          <div className="flex-centerY sm:flex-row flex-col-reverse xxl:gap-10 lg:gap-9 md:gap-8 sm:gap-7 gap-6">
            <Link className="btn btn-primary" href="/crypto-buy">
              Transfer Now
            </Link>
            <div className="flex-centerY sm:gap-4 gap-3">
              <Link href="#">
                <Image width={24} height={24} src={app1} alt="app1" />
              </Link>
              <Link href="#">
                <Image width={24} height={24} src={app2} alt="app2" />
              </Link>
              <Link href="#">
                <Image width={24} height={24} src={app3} alt="app3" />
              </Link>
              <Link href="#">
                <Image width={24} height={24} src={app4} alt="app4" />
              </Link>
            </div>
          </div>
        </FadeRight>
      </div>
    </section>
  );
};

export default Exchange;
