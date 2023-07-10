import React from "react";
import { italia, sans } from "../layout";
import Link from "next/link";
import MovingArrow from "@/components/elements/Misc/MovingArrow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Centre of Excellence | Contact',
  description :'Get in touch with Centre of Excellence for Power Engineering and AI/ML programs. Reach out for inquiries and connect with our knowledgeable team.'
}

const Contact = () => {
  return (
    <section className="h-screen w-full bg-primary primary-transition pt-[104px] sm:pt-[150px] lg:h-auto lg:pb-[80px] lg:pt-[160px]">
      <div className="primary-container">
        <div
          className={`${italia.className} mb-[14px] flex w-full flex-row justify-center text-center text-[12px] font-normal uppercase tracking-[0.04em] lg:mb-[48px] lg:text-[14px]`}
        >
          <p className="w-[200px] text-head">get in touch</p>
        </div>

        <div>
          <div className="primary-grid mb-[50px] lg:mb-[80px]">
            <div
              className={`${italia.className} col-span-4 lg:col-span-10 lg:col-start-2`}
            >
              <section className="overflow-hidden">
                <h1 className="hero-text-one text-center">
                  Here to craft excellence,
                </h1>
              </section>
              <section className="overflow-hidden">
                <h1 className="hero-text-two text-center">with eminence</h1>
              </section>
            </div>
          </div>

          <div className="mb-[70px] flex w-full flex-col items-center justify-center gap-[20px] lg:mb-[100px] lg:flex-row lg:gap-0">
            <section className="jusitfy-center flex flex-col items-center lg:mr-[150px]">
              <p
                className={`${sans.className} mb-[20px] text-[18px] leading-[26px]`}
              >
                Ways to reach us
              </p>
              <div className={`${italia.className} pt-[7px]`}>
                <Link
                  href="tel:6267353800"
                  aria-label="Call Us"
                  title="Call Us at UIT RGPV Shivpuri - 6267353800"
                  className="contact-button mr-[12px]"
                >
                  call us
                </Link>
                <Link
                  href="https://goo.gl/maps/GYgk9dMWjXU5WGKb8"
                  aria-label="Location - UIT RGPV Shivpuri"
                  className="contact-button"
                  target="_blank"
                >
                  location
                </Link>
              </div>
            </section>
            <section className="jusitfy-center flex flex-col items-center">
              <p
                className={`${sans.className} mb-[20px] text-[18px] leading-[26px]`}
              >
                Email us
              </p>
              <Link
                href="https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=coe.uitshivpuri@rgpv.ac.in"
                aria-label="Mail Us"
                target="_blank"
                className={`${italia.className} contact-button`}
              >
                coe.uitshivpuri@rgpv.ac.in
              </Link>
            </section>
          </div>

          <div className="flex w-full flex-row justify-center">
            <Link
              className="group flex w-fit flex-row items-center justify-center"
              href="/About"
              aria-label="About Us"
            >
              <p
                className={`${sans.className} mr-[8px] text-[18px] leading-[26px]`}
              >
                Know more about us
              </p>
              <MovingArrow background={true} type="eight" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
