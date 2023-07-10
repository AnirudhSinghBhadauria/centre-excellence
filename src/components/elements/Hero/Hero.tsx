import { italia, sans } from "@/app/layout";
import React from "react";
import SvgStack from "../Misc/SvgStack";
import Register from "../Misc/Register";
import { Metadata } from "next";

const Hero = () => {
  return (
    <section className="w-full origin-bottom bg-main pt-[104px]  primary-transition lg:pt-[160px]">
      <div className="lg:primary-grid primary-container md:flex md:flex-col lg:grid">
        {/* HIDDEN BEFORE lg */}
        <div className="group col-span-4 hidden h-fit w-fit flex-row items-start gap-5 lg:flex">
          <SvgStack />
          <section className="flex flex-col justify-center">
            <div className="overflow-hidden">
              <h5
                className={`${italia.className} fading-future translate-y-10 leading-9 opacity-0 
                transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100`}
              >
                Building Future
              </h5>
            </div>
            <div className="overflow-hidden">
              <p
                className={`${sans.className} translate-y-10 text-sm opacity-0 transition-all  
              delay-150 duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100`}
              >
                with eminence
              </p>
            </div>
          </section>
        </div>

        <div
          className={`${italia.className} col-span-8 flex flex-col md:col-start-1 lg:col-start-5`}
        >
          <section className="overflow-hidden">
            <h1 className="hero-text-one">Welcome ,</h1>
          </section>
          <section className="overflow-hidden">
            <h1 className="hero-text-two">Centre of excellence</h1>
          </section>
          <section className="overflow-hidden">
            <h1 className="hero-text-three">UIT RGPV Shivpuri</h1>
          </section>
        </div>

        {/* HIDDEN AFTER lg */}
        <div className="mt-[40px] flex flex-row items-start gap-24 sm:gap-40 md:items-center md:gap-60 lg:hidden">
          <SvgStack />
          <Register className="jusitfy-start flex flex-col items-start" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
