import { italia, sans } from "@/app/layout";
import Image from "next/image";
import React from "react";
import MovingArrow from "../Misc/MovingArrow";
import Outline from "../Misc/Outline";
import Link from "next/link";

interface Card {
  position: string;
  heading: string;
  link: string;
  description: string;
  buttonText: string;
  image: string;
  title: string;
  target: string;
}

const Card = ({
  position,
  heading,
  link,
  description,
  buttonText,
  image,
  title,
  target,
}: Card) => {
  return (
    <div
      className={`${position === "left" && "pb-[40px] lg:pb-0 lg:pr-[20px]"} ${
        position === "middle" &&
        "border-y-[1px] border-gray-300 py-[40px] lg:border-x-[1px] lg:border-y-0 lg:px-[20px] lg:py-0"
      } ${
        position === "right" && "pt-[40px] lg:pl-[20px] lg:pt-0"
      } group flex basis-1/3 flex-col justify-between lg:pb-5`}
    >
      <section className="w-full">
        <div className="overflow-hidden rounded-[20px]">
          <Link
            href={link}
            target={target}
            title={title}
            aria-label="Picture-Label"
          >
            <Image
              src={image}
              alt={heading}
              className="h-[340px] w-full rounded-[20px] object-cover object-center transition-transform 
            duration-1000 ease-in-out group-hover:scale-110 lg:h-[427px]"
              width="1200"
              height="1200"
            />
          </Link>
        </div>
        <Link href={link} target={target} aria-label="Heading-Label">
          <h5
            className={`${italia.className} card-heading relative mb-[32px] mt-[21px] 
           max-w-[90%] text-black sm:max-w-[75%] lg:mb-[40px]`}
          >
            {heading}
            <span className="absolute -bottom-[1px] ml-3">
              <MovingArrow type="fourteen" background={true} />
            </span>
          </h5>
        </Link>
      </section>

      <section className="flex flex-col-reverse items-end justify-between gap-6 px-5 sm:flex-row sm:gap-0 lg:flex-col-reverse lg:gap-6 xl:flex-row">
        <Link
          className="flex flex-row gap-2"
          href={link}
          target={target}
          aria-label="Button-Text"
        >
          <Outline>{buttonText}</Outline>
        </Link>

        <p
          className={`${sans.className} max-w-full text-sm font-light leading-[22px] sm:max-w-[50%] lg:max-w-full xl:max-w-[196px]`}
        >
          {description}
        </p>
      </section>
    </div>
  );
};

export default Card;
