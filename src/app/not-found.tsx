import Image from "next/image";
import notFoundBG from "@/../public/images/notFoundBG.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="lg:pt-[11.2rem] md:pt-[5.5rem] sm:pt-[84px] pt-[4.30rem] bg-BG">
      <section className="bg-primary-5 section-py">
        <div className="container flex-center flex-col">
          <Image
            width={549}
            height={556}
            src={notFoundBG}
            className="object-fit gap-mb-60"
            alt="not-found"
          />
          <h2 className="my-text-24 text-center">
            Oops, You Still Haven’t Found what you looking for
          </h2>
          <p className="my-text-16 font-normal text-center gap-mb-32">
            Please note that all tasks and associated rewards are subject to
            availability and are limited in quantity.{" "}
          </p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
