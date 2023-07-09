"use client";

import React, { useEffect } from "react";
import { sans, italia } from "@/app/layout";
import Logo from "../elements/Misc/Logo";
import Outline from "../elements/Misc/Outline";
import MovingArrow from "../elements/Misc/MovingArrow";
import FooterLogo from "../elements/Footer/FooterLogo";
import { useAppContext } from "@/store/AppContextProvider";
import Arrow from "../elements/Misc/svg/Arrow";
import Cross from "../elements/Misc/svg/Cross";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderContent {
  href: string;
  text: string;
  target: string;
}

const Header = () => {
  const content: HeaderContent[] = [
    { href: "/About", text: "About", target: "_self" },
    {
      href: "http://uitshivpuri.rgpv.ac.in/Faculty.html",
      text: "Faculty",
      target: "_blank",
    },
    { href: "/Gallery", text: "Gallery", target: "_self" },
    { href: "/Register", text: "Register", target: "_self" },
  ];

  const { sideBarHandeler, sidebarState } = useAppContext();

  const sideBarToggler = () => {
    sideBarHandeler(!sidebarState);
  };
  const closeSideBar = () => sideBarHandeler(false);

  return (
    <header className="primary-transition absolute right-0 top-0 z-50 w-full pt-[20px] lg:pt-[30px]">
      <section className="primary-container">
        <div className="lg:primary-grid flex justify-between">
          <Link
            href="/"
            aria-label="Home"
            title="Centre of Excellence - Home"
            className="col-span-4 flex flex-row items-center w-fit"
          >
            <div className="hidden sm:block">
              <Logo className="fill-head" />
            </div>
            <div className="block sm:hidden">
              <FooterLogo
                onClick={closeSideBar}
                className="h-[16px] w-fit fill-head stroke-head"
              />
            </div>
          </Link>

          <div className="col-span-6">
            <ul className="hidden flex-row pl-0 md:flex md:gap-[20px] lg:gap-[30px] lg:pl-12 xl:pl-0">
              {content.map(({ href, text, target }) => (
                <li key={text}>
                  <Link
                    key={text}
                    aria-label={text}
                    href={href}
                    target={target}
                  >
                    <p
                      className={`${sans.className} text-sm font-light leading-6 text-main`}
                    >
                      {text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 justify-self-end">
            <Link
              className="group hidden flex-row items-center justify-end gap-1 md:inline-flex"
              href="/Contact"
              aria-label="Contact-Us"
            >
              <Outline>contact</Outline>
              <MovingArrow type="eight" background={false} />
            </Link>

            {/* MOBILE : SIDEBAR TOGGLER */}
            <button
              onClick={sideBarToggler}
              className="flex flex-row items-center gap-1 md:hidden"
            >
              <p
                className={`${italia.className} grid h-6 w-16 place-items-center rounded-3xl 
                border-2 border-head pt-1 text-xs font-bold uppercase leading-none 
                tracking-wider text-head`}
              >
                {sidebarState ? "close" : "more"}
              </p>
              <div className="rounded-full px-[6.5px] py-[6.5px] outline outline-[2px] outline-head">
                {sidebarState ? (
                  <Cross className="fill-head stroke-head" />
                ) : (
                  <Arrow className="fill-head stroke-head" />
                )}
              </div>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
