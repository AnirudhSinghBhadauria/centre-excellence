import React, { Fragment } from "react";
import { italia, sans } from "../layout";
import Link from "next/link";
import Outline from "@/components/elements/Misc/Outline";
import MovingArrow from "@/components/elements/Misc/MovingArrow";
import Earth from "@/components/elements/Hero/Earth";
import Smile from "@/components/elements/Hero/Smile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centre of Excellence | About",
  description:
    "Discover the expertise of our Centre of Excellence in Power Engineering and AI/ML. Learn about electrical systems and intelligent solutions.",
};

const About = () => {
  return (
    <Fragment>
      <section className="primary-transition relative bg-main pb-[212px] pt-[104px] lg:pb-[490px] lg:pt-[160px]">
        <div className="primary-container">
          <div className="primary-grid mb-[39px] lg:mb-[165px]">
            <section className="col-span-12">
              <div className="overflow-hidden">
                <h1
                  className={`${italia.className} hero-text-one text-[40px] 
                leading-[48px] text-[#eeeaea80] lg:text-[108px] lg:leading-[100px]`}
                >
                  Creating future,{" "}
                  <span className="text-main text-opacity-100">
                    technocrats,
                  </span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  className={`${italia.className} hero-text-two text-[40px]
                leading-[48px] text-[#eeeaea80] lg:text-[108px] lg:leading-[100px]`}
                >
                  UIT{" "}
                  <span className="text-main text-opacity-100">Shivpuri</span>{" "}
                  where we're at ,
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  className={`${italia.className} hero-text-three text-[40px]
                leading-[48px] text-[#eeeaea80] lg:text-[108px] lg:leading-[100px]`}
                >
                  nurturing skills and{" "}
                  <span className="text-main text-opacity-100">
                    aristocrats
                  </span>
                </h1>
              </div>
            </section>
          </div>

          <div className="primary-grid">
            <div className="col-span-4 lg:col-span-6 lg:col-start-5">
              <p
                className={`${sans.className} pr-4 text-[16px] font-light leading-[22px] tracking-[0.01em] 
                text-main sm:pr-32 md:pr-48 lg:p-0 lg:text-[24px] lg:leading-[38px]`}
              >
                Our main thrust areas are to enhance opportunities for research
                in areas of high relevance to nations science and technology
                capabilities. Transforming the institute into a knowledge
                enterprise through its focus efficient and effective mechanisms
                for managing skills, innovations, and human resource.
              </p>
            </div>
          </div>
        </div>
        <div className="block">
          <Earth
            fill="#686BCB"
            className="earth absolute bottom-[1%] right-[20%] h-24 w-24 
            sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-56 lg:w-56 xl:h-60 xl:w-60 
            2xl:h-64 2xl:w-64"
          />
          {/* NEON */}
          <Smile
            fill="#f4fd6b"
            className="neon-smile absolute bottom-[1%] right-[50%] h-24 w-24 rotate-[45deg] 
            sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-56 lg:w-56 xl:h-60 xl:w-60 2xl:h-64 2xl:w-64"
          />
          {/* PURPLE */}
          <Smile
            fill="#686BCB"
            className="purple-smile absolute bottom-[1%] right-[70%] h-24 w-24 rotate-[240deg] 
            sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-56 lg:w-56 xl:h-60 xl:w-60 2xl:h-64 2xl:w-64"
          />
        </div>
      </section>

      <div className="w-full bg-[#EEEAEA] pb-[60px] pt-[80px] lg:pb-[100px] lg:pt-[180px]">
        <section className="primary-container mb-[40px] lg:mb-[60px]">
          <div className="primary-grid">
            <section
              className={`${italia.className} col-span-4 text-center lg:col-span-10 lg:col-start-2`}
            >
              <div className="overflow-hidden">
                <h3 className="hero-text-one about-para">
                  We ardently <span className="text-purple">cultivates</span>{" "}
                  talent,
                </h3>
              </div>
              <div className="overflow-hidden">
                <h3 className="hero-text-two about-para">
                  <span className="text-purple">fostering</span> a knowledge
                  enterprise,
                </h3>
              </div>
              <div className="overflow-hidden">
                <h3 className="hero-text-three about-para">
                  propelling erudition's{" "}
                  <span className="text-purple">transformation</span>
                </h3>
              </div>
            </section>
          </div>
        </section>

        <section className="flex flex-row items-center justify-center">
          <Link
            className="group flex flex-row gap-2"
            href="http://uitshivpuri.rgpv.ac.in/AboutUs.html"
            aria-label="Centre of Excellence - About Us"
            target="_blank"
          >
            <Outline ifBlackBack={true} className="primary-outline text-black">
              know more about us
            </Outline>
            <MovingArrow
              type="eight"
              background={true}
              className="primary-outline"
            />
          </Link>
        </section>
      </div>
    </Fragment>
  );
};

export default About;
