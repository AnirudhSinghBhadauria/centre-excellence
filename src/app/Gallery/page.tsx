import React from "react";
import { italia, sarif } from "../layout";
import Token from "@/components/elements/Hero/Token";
import PhotoGrid from "@/components/elements/Gallery/PhotoGrid";
import SharkLaptop from "@/components/elements/Gallery/SharkLaptop";
import Logo from "@/components/elements/Misc/Logo";
import Outline from "@/components/elements/Misc/Outline";
import MovingArrow from "@/components/elements/Misc/MovingArrow";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centre of Excellence | Gallery",
  description:
    "Experience the excellence of Power Engineering and AI/ML programs through our captivating Gallery. Explore electrical systems and intelligent solutions visually.",
};

const Gallery = () => {
  return (
    <section className="primary-transition overflow-hidden bg-primary pt-[92px] lg:pt-[150px]">
      <div className="primary-container">
        <div className="primary-grid">
          <section className="col-span-4 lg:col-span-7 lg:col-start-5">
            <div className="mb-[26px] flex flex-row items-center justify-start gap-4 lg:mb-[42px]">
              <p
                className={`${italia.className} text-[12px] font-semibold uppercase leading-[14px] text-head`}
              >
                centre of excellence
              </p>
              <Token className="-translate-y-[2px] rotate-[270deg] scale-[0.9]" />
            </div>
            <div className="overflow-hidden">
              <h1 className={`${italia.className} hero-text-one`}>
                Future unveiled,
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className={`${italia.className} hero-text-one`}>
                alluring gallery
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className={`${italia.className} hero-text-one`}>
                of brilliance
              </h1>
            </div>
          </section>
        </div>

        <PhotoGrid />

        <div className="flex flex-col items-start lg:flex-row mt-[5px] sm:mt-[8px]">
          <section className="flex flex-row items-center space-x-6">
            <p
              className={`${italia.className} text-[14px] font-semibold uppercase leading-[16px] text-head`}
            >
              gallery
            </p>
            <Token className="-translate-y-[1px] rotate-[270deg] scale-[0.94]" />
          </section>

          <section className="mx-auto my-0">
            <p
              className={`${sarif.className} mb-[50px] text-[18px] tracking-[-0.01em] lg:mb-[80px] lg:max-w-[552px] lg:text-[22px] lg:leading-[28px]`}
            >
              The Gallery of Centre of Excellence is a vibrant exhibition space
              showcasing groundbreaking innovations and achievements in various
              fields, inspiring visitors with its immersive displays.
            </p>
          </section>
        </div>
      </div>

      <section className="w-full bg-head py-[80px] lg:py-[180px]">
        <div className="primary-container flex flex-col items-center justify-between space-x-0 space-y-12 lg:flex-row lg:space-x-20 lg:space-y-0">
          <SharkLaptop />
          <section className="flex flex-col items-center space-x-0 space-y-12 lg:flex-row lg:space-x-20 lg:space-y-0">
            <div className="flex flex-col text-primary">
              <div className="mb-[20px] lg:mb-[40px]">
                <Logo className="scale-[1.1] fill-primary" />
              </div>
              <ul>
                <li className={`${italia.className} feature`}>
                  Established in 2023
                </li>
                <li className={`${italia.className} feature`}>
                  Consists of two cources
                </li>
                <li className={`${italia.className} feature`}>
                  Offers cources in AI/ML & Power engineering
                </li>
              </ul>
            </div>

            <div className="flex flex-col text-primary">
              <div className="mb-[20px] lg:mb-[40px]">
                <p
                  className={`${italia.className} text-[22px] font-light uppercase tracking-[0.15em]`}
                >
                  uit rgpv shivpuri
                </p>
              </div>
              <ul className="-translate-y-[8px]">
                <li className={`${italia.className} feature`}>
                  Established in 2020
                </li>
                <li className={`${italia.className} feature`}>
                  Engineering institute in shivpuri
                </li>
                <li className={`${italia.className} feature`}>
                  Offers cources in four core technical branches
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>

      <section className="w-full bg-primary py-[80px] lg:py-[180px]">
        <div className="primary-container flex flex-row items-center justify-center">
          <div className="flex flex-col justify-start gap-6">
            <div className="w-fit">
              <p
                className={`${italia.className} text-[18px] font-medium text-head sm:max-w-lg md:max-w-xl lg:max-w-3xl lg:text-[22px]`}
              >
                Nestled within the verdant landscapes of Shivpuri, the esteemed
                University Institute of Technology stands as an illustrious
                constituent of Rajiv Gandhi Proudyogiki Vishwavidyalaya,
                adorning the educational realm with its resplendent presence.
                With unwavering dedication to research, innovative prowess, UIT
                RGPV Shivpuri emerges as a paragon of knowledge, nurturing
                globally competent and socially responsible technical minds.
              </p>
            </div>
            <Link
              href="http://uitshivpuri.rgpv.ac.in/index.html"
              className="group flex max-w-fit flex-row gap-2"
              aria-label="UIT RGPV Shivpuri"
              target="_blank"
            >
              <Outline>Visit our page</Outline>
              <MovingArrow background={true} type="eight" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gallery;
