import { italia, sarif } from "@/app/layout";
import Image from "next/image";
import React from "react";
import InvertedArrow from "./InvertedArrow";
import Quote from "./Quote";
import Link from "next/link";
import { motion } from "framer-motion";
interface Inverted {
  linkText: string;
  link: string;
  title: string;
  subTitle: string;
  paraOne: string;
  paraTwo: string;
  image: string;
  style?: object;
  target: string;
}

const Inverted = ({
  image,
  linkText,
  link,
  title,
  subTitle,
  paraOne,
  paraTwo,
  style,
  target,
}: Inverted) => {
  return (
    <motion.div style={style} className="w-full">
      <section className="primary-grid primary-container">
        <div
          id="img"
          className="col-span-6 flex h-fit w-full flex-col 
        items-center justify-center overflow-hidden"
        >
          <Link
            href={link}
            aria-label={linkText}
            target={target}
            className="group relative grid place-items-center rounded-[20px] bg-head"
          >
            <Image
              src={image}
              alt={title}
              className="block h-auto 
            w-full rounded-[20px] object-cover brightness-90 filter transition-all 
            duration-1000 ease-in-out group-hover:opacity-60"
              height="920"
              width="800"
              priority
            />

            <section className="absolute flex w-full flex-row  overflow-hidden">
              <div className="min-w-full translate-y-28 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="marquee-inverted flex flex-row items-center space-x-4 sm:space-x-6">
                  <h1
                    className={`${italia.className} text-[60px] font-light text-primary sm:text-[102px] md:text-[115px] lg:text-[80px] xl:text-[105px] 2xl:text-[115px]`}
                  >
                    {linkText}
                  </h1>
                  <InvertedArrow />
                </div>
              </div>
              <div className="min-w-full translate-y-28 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="marquee-inverted flex flex-row items-center space-x-4 sm:space-x-6">
                  <h1
                    className={`${italia.className} text-[60px] font-light text-primary sm:text-[102px] md:text-[115px] lg:text-[80px] xl:text-[105px] 2xl:text-[115px]`}
                  >
                    {linkText}
                  </h1>
                  <InvertedArrow />
                </div>
              </div>
              <div className="min-w-full translate-y-28 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="marquee-inverted flex flex-row items-center space-x-4 sm:space-x-6">
                  <h1
                    className={`${italia.className} text-[60px] font-light text-primary sm:text-[102px] md:text-[115px] lg:text-[80px] xl:text-[105px] 2xl:text-[115px]`}
                  >
                    {linkText}
                  </h1>
                  <InvertedArrow />
                </div>
              </div>
            </section>
          </Link>
          <div
            className={`${italia.className} mt-5 flex w-full items-center justify-between px-1 text-head`}
          >
            <h5>{title}</h5>
            <p
              className={`${italia.className} text-[14px] font-semibold uppercase leading-[16px] tracking-[0.04em]`}
            >
              {subTitle}
            </p>
          </div>
        </div>

        <div
          className="group relative col-span-6 mt-[50px] grid h-auto max-h-[430px]
      w-full place-items-center rounded-[20px] bg-head px-8 pb-12 pt-2 text-primary sm:max-h-full sm:px-10 sm:py-14
     md:px-20 md:py-28 lg:mt-[124px] lg:max-h-[33.25em] lg:px-12 lg:pb-[60px] lg:pt-5 xl:mt-[154px] xl:max-h-[42em] xl:px-20 xl:py-24 2xl:max-h-full"
        >
          <Quote position="top" />
          <div className="relative h-full w-full overflow-y-scroll">
            <section className="shadow-top sticky top-0 block h-10 w-full sm:hidden lg:block xl:hidden"></section>
            <div>
              <p className={`${sarif.className}`}>{paraOne}</p>
              <br />
              <p className={`${sarif.className}`}>{paraTwo}</p>
            </div>
          </div>
          <Quote position="bottom" />
        </div>
      </section>
    </motion.div>
  );
};

export default Inverted;
