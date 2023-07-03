"use client";

import React, { useRef } from "react";
import FooterLogo from "../elements/Footer/FooterLogo";
import { italia } from "@/app/layout";
import Line from "../elements/Footer/Line";
import JumpingMan from "../elements/Footer/JumpingMan";
import Outline from "../elements/Misc/Outline";
import MovingArrow from "../elements/Misc/MovingArrow";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface FooterContent {
  text: string;
  href: string;
}

const Footer = ({ style }: { style?: object }) => {
  const footerOne: FooterContent[] = [
    {
      text: "Cources",
      href: "#",
    },
    {
      text: "About",
      href: "#",
    },
    {
      text: "Register",
      href: "#",
    },
    {
      text: "Contact",
      href: "#",
    },
  ];
  const footerTwo: FooterContent[] = [
    {
      text: "Facebook",
      href: "#",
    },
    {
      text: "Twitter",
      href: "#",
    },
    {
      text: "Instagram",
      href: "#",
    },
    {
      text: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <footer
      style={style}
      className="sticky bottom-0 flex max-h-screen min-h-screen w-full flex-col items-end 
    bg-[#16161D]"
    >
      <section
        className="container mt-auto flex flex-col items-center justify-between 
     gap-12 px-6 text-[#EEEAEA] md:px-0 lg:flex-row lg:gap-0 lg:px-10 xl:justify-around xl:px-0"
      >
        <JumpingMan className="h-auto w-[275px] sm:w-[315px]" />

        <h2 className={`${italia.className} footer-heading hidden lg:block`}>
          Let us take you <br /> further than you’ve <br /> ever been{" "}
          <span className="group inline-flex">
            <Link
              className="flex -translate-y-2 flex-row gap-1"
              href="http://uitshivpuri.rgpv.ac.in/"
            >
              <Outline ifBlackBack={true}>Visit our page</Outline>
              <MovingArrow type="eight" background={false} />
            </Link>
          </span>
        </h2>

        <h2 className={`${italia.className} footer-heading block lg:hidden`}>
          Let us take you futhur than you've ever been
          <span className="group ml-4 inline-flex -translate-y-1 pt-0 md:ml-0 md:block md:translate-y-0 md:pb-0">
            <Link
              className="mt-3 flex flex-row gap-1"
              href="http://uitshivpuri.rgpv.ac.in/"
            >
              <Outline ifBlackBack={true}>Visit our page</Outline>
              <MovingArrow type="eight" background={false} />
            </Link>
          </span>
        </h2>
      </section>

      <section className="container flex flex-row items-center justify-center text-[#EEEAEA] md:mt-16 lg:mt-auto">
        <div
          className="mt-12 flex w-full flex-col items-center justify-evenly gap-5 border-b-0
           border-[#EEEAEA] pb-[30px] md:mt-0 md:gap-7 lg:flex-row lg:gap-0 lg:border-b-[1px] xl:mx-16"
        >
          <nav className="flex w-full flex-row items-center justify-evenly">
            {footerOne.map(({ text, href }) => (
              <li>
                <Link className={`${italia.className} footer-text`} href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </nav>

          <nav className="flex flex-row items-center gap-10">
            <Line />
            <p className={`${italia.className} footer-text uppercase`}>
              COE/2023
            </p>
            <Link className={`${italia.className} footer-text`} href="#">
              Developer
            </Link>
            <Line />
          </nav>

          <nav className="flex w-full flex-row items-center justify-evenly">
            {footerTwo.map(({ text, href }) => (
              <li key={text}>
                <Link className={`${italia.className} footer-text`} href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </section>

      <section
        className="flex w-full flex-row overflow-x-hidden border-t-[1px] border-[#EEEAEA]
       py-6 lg:border-t-0 lg:py-[30px]"
      >
        <div className="marquee-section flex min-w-full justify-around">
          <FooterLogo
            className="h-[42px] w-auto fill-[#EEEAEA] sm:h-[47px] 
          md:h-[50px] lg:h-[113px] xl:h-[130px] 2xl:h-[108px]"
          />
          <FooterLogo
            className="h-[42px] w-auto fill-[#EEEAEA] sm:h-[47px] 
          md:h-[50px] lg:h-[113px] xl:h-[130px] 2xl:h-[108px]"
          />
          <FooterLogo
            className="hidden h-[42px] w-auto fill-[#EEEAEA] sm:block 
          sm:h-[47px] md:h-[50px] lg:hidden 2xl:block 2xl:h-[108px]"
          />
        </div>
        <div className="marquee-section flex min-w-full justify-around">
          <FooterLogo
            className="h-[42px] w-auto fill-[#EEEAEA] sm:h-[47px] 
          md:h-[50px] lg:h-[113px] xl:h-[130px] 2xl:h-[108px]"
          />
          <FooterLogo
            className="h-[42px] w-auto fill-[#EEEAEA] sm:h-[47px] 
          md:h-[50px] lg:h-[113px] xl:h-[130px] 2xl:h-[108px]"
          />
          <FooterLogo
            className="hidden h-[42px] w-auto fill-[#EEEAEA] 
          sm:block sm:h-[47px] md:h-[50px] lg:hidden 2xl:block 2xl:h-[108px]"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
