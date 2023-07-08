import React from "react";
import { italia, sans, sarif } from "./layout";
import Link from "next/link";
import Circle from "@/components/elements/Misc/svg/Circle";
import X from "@/components/elements/Misc/svg/X";
import Wire from "@/components/elements/Misc/svg/Wire";

export const metadata = {
  title: 'Centre of Excellence | Page Not Found',
  description: 'A 404 page not found is an error message displayed when a webpage or resource cannot be located on a server. It indicates that the requested page or content is unavailable. Apologies, but the page you are looking for could not be found.'
}

const PageNotFound = () => {
  return (
    <section className="overflow-hidden relative w-full origin-bottom bg-main h-screen flex flex-row justify-center items-center primary-transition">
     <Wire className="absolute lg:left-[-15%] xl:left-[-5%] 2xl:left-[0%] rotate-[10deg] scale-[0.42] hidden lg:flex" />
      <div className="relative primary-container flex flex-col justify-center items-center w-full">
        <h1 className={`${sarif.className} font-bold mb-6 tracking-normal`}>404</h1>
        <h2 className={`${italia.className}  mb-6`}>Page Not Found</h2>
        <p
          className={`${sans.className} text-center font-semibold leading-5  mb-6`}
        >
          we're sorry. the page you requested could not be found <br /> Please
          go back to the home page
        </p>
        <Link
          href="/"
          aria-label="Home Page"
          className={`${italia.className} flex flex-row justify-center items-center text-[0.875rem] px-5 pb-1 pt-[0.4em] font-medium bg-head rounded-lg text-primary hover:bg-[#000000d6]`}
        >
          GO HOME
        </Link>

        

        <Circle className="absolute -top-28 right-[27%] scale-[0.9]" />
        <Circle className="absolute -bottom-28 left-[27%] scale-[0.65]" />
        <Circle className="hidden lg:block absolute -top-0 right-[36%] scale-[0.35]" />

        <X className="absolute -bottom-[4em] right-[33%] scale-[1.5] lg:scale-[2]"/>
        <X className="absolute -top-10 left-[40%] scale-[0.75] lg:scale-[1.5]"/>
        <X className="hidden lg:block absolute top-20 left-[30%] scale-[0.75]"/>
      </div>
    </section>
  );
};

export default PageNotFound;
