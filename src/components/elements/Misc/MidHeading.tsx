import { italia } from "@/app/layout";
import React from "react";
import Outline from "./Outline";
import MovingArrow from "./MovingArrow";
import Link from "next/link";

interface MidHeading {
  type: string;
  button: boolean;
  lineOne: string;
  lineTwo: string;
  hyperlink: string;
  linkText: null | string;
  target: string;
  className?: string;
}

const MidHeading = ({
  button,
  hyperlink,
  lineOne,
  lineTwo,
  linkText,
  target,
  type,
  className
}: MidHeading) => {
  return (
    <div
      className={`w-full bg-primary ${className} py-[100px] lg:pt-[110px] ${
        type === "one" ? "pb-[100px]  lg:pb-[120px]" : "pb-[48px] lg:pb-[96px]"
      }`}
    >
      <section className="sm:primary-grid primary-container flex flex-row justify-center">
        <div className="col-span-3 col-start-2 flex flex-col sm:min-w-max lg:col-start-5 xl:col-start-6">
          <div className="overflow-hidden">
            <h2 className={`${italia.className} hero-text-one`}>{lineOne}</h2>
          </div>
          <div className="overflow-hidden">
            <h2 className={`${italia.className} hero-text-two`}>
              {lineTwo}
              {button && (
                <span className="mr-[2px] inline-flex translate-y-2 pl-3 lg:translate-y-0 lg:pl-4">
                  <Link
                    href={hyperlink}
                    target={target}
                    aria-label='Heading-Text'
                    className="group flex -translate-y-4 flex-row gap-1"
                  >
                    <Outline className="mr-[4px]" ifBlackBack={false}>
                      {linkText}
                    </Outline>
                    <MovingArrow type="eight" background={true} />
                  </Link>
                </span>
              )}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidHeading;
