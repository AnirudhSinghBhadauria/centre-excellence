"use client";

import { italia } from "@/app/layout";
import MovingArrow from "@/components/elements/Misc/MovingArrow";
import Link from "next/link";
import React, { ReactPortal, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { sidebar } from "@/assets/data/appData";
import { useAppContext } from "@/store/AppContextProvider";

interface Links {
  href: string;
  text: string;
  target: string;
}

const Modal = () => {
  let aside = document.getElementById("side-bar") as HTMLElement;
  const { sidebarState, sideBarHandeler } = useAppContext();

  // SIDEBAR CONDITIONAL ASTHETICS LOGIC ----------------
  // sibebarState : true is open, false is close.

  if (sidebarState) {
    document.body.classList.add("overflow-hidden");
    aside.style.transform = "translate(-100%,0%)";
  } else {
    document.body.classList.remove("overflow-hidden");
    aside.style.transform = "translate(100%,0%)";
  }

  const sideBarToggler = () => sideBarHandeler(false);

  const Links: Links[] = [
    {
      text: "Facebook",
      href: "https://www.facebook.com/uitrgpvshivpuri/",
      target: '_blank'
    },
    {
      text: "Twitter",
      href: "https://twitter.com/uitrgpvshivpuri",
      target: '_blank'
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/uitrgpvshivpuri/",
      target: '_blank'
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/uitrgpvshivpuri/",
      target: '_blank'
    },
  ];

  return (
    <div className="primary-container primary-transition h-screen w-full bg-primary pt-[100px] text-head">
      <div
        className={`${italia.className} flex h-full w-full flex-col items-center justify-between`}
      >
        <section className="flex w-full flex-col">
          {sidebar.map(({ href, number, text, delay }) => (
            <Link
              onClick={sideBarToggler}
              key={number}
              href={href}
              aria-label={text}
              style={{ transitionDelay: delay }}
              className={`flex flex-row justify-between border-b border-head py-[20px]  transition-all 
              duration-1000 ease-in-out ${
                sidebarState ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="flex text-[26px] font-semibold leading-[30px] tracking-[-0.04em]">
                <p className="mr-[6px] opacity-30">{number}</p>
                <p>{text}</p>
              </span>
              <span>
                <MovingArrow type="eight" background={true} />
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-auto w-full pb-[24px]">
          <nav className="mb-[24px] text-[12px] uppercase text-head">
            <ul
              className={`flex flex-row items-center justify-between transition-opacity 
            delay-500 duration-500 ${
              sidebarState ? "opacity-100" : "opacity-0"
            }`}
            >
              {Links.map(({ text, href, target }) => (
                <li key={text}>
                  <Link onClick={sideBarToggler} target={target} href={href} aria-label={text}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
          href='http://uitshivpuri.rgpv.ac.in/index.html'
          target="_blank"
          aria-label="UIT RGPV Shivpuri"
            onClick={sideBarToggler}
            className={`flex w-full flex-row items-center justify-center transition-opacity 
          delay-[600ms] duration-500 ${
            sidebarState ? "opacity-100" : "opacity-0"
          }`}
          >
            <div className="mr-[4px] flex h-[35px] w-full items-center justify-center rounded-[30px] border-2 border-head text-[12px] font-semibold uppercase leading-none">
              university institute of technology shivpuri
            </div>
            <MovingArrow type="fourteen" background={true} />
          </Link>
        </section>
      </div>
    </div>
  );
};

const SideBar: () => ReactPortal | null = () => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const unsub = setModal(true);

    return unsub;
  }, []);

  if (!modal) {
    return null;
  }

  return createPortal(
    <Modal />,
    document.querySelector("#side-bar") as HTMLElement
  );
};

export default SideBar;
