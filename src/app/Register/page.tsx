import MovingArrow from "@/components/elements/Misc/MovingArrow";
import Outline from "@/components/elements/Misc/Outline";
import React from "react";
import Link from "next/link";
import { italia, sarif } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centre of Excellence | Register",
  description:
    "Enroll in specialized programs at Centre of Excellence in Power Engineering and AI/ML. Register now to gain expertise in electrical systems and intelligent solutions.",
};

const Register = () => {
  return (
    <section className="overflow-x-hidden bg-primary pt-[106px]  lg:pt-[166px]">
      <div className="mb-[50px] flex min-w-full overflow-x-hidden overflow-y-hidden border-black lg:mb-[90px]">
        <section className="marquee-section flex min-w-full flex-row justify-around overflow-hidden">
          <span className="hero-text-one my-0 lg:my-4 xl:my-9">
            <h1
              className={`${italia.className} text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[200px]`}
            >
              Register
            </h1>
          </span>
          <span className="hero-text-one my-0 lg:my-4 xl:my-9">
            <h1
              className={`${italia.className} text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[200px]`}
            >
              Register
            </h1>
          </span>
        </section>
        <section className="marquee-section flex min-w-full flex-row justify-around">
          <span className="hero-text-one my-0 lg:my-4 xl:my-9">
            <h1
              className={`${italia.className} text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[200px]`}
            >
              Register
            </h1>
          </span>
          <span className="hero-text-one my-0 lg:my-4 xl:my-9">
            <h1
              className={`${italia.className} text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[200px]`}
            >
              Register
            </h1>
          </span>
        </section>
        <section className="marquee-section flex min-w-full flex-row justify-around">
          <span className="hero-text-one my-0 lg:my-4 xl:my-9">
            <h1
              className={`${italia.className} text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[200px]`}
            >
              Register
            </h1>
          </span>
          <span className="hero-text-one my-0 lg:my-4 xl:my-9">
            <h1
              className={`${italia.className} text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] xl:text-[180px] 2xl:text-[200px]`}
            >
              Register
            </h1>
          </span>
        </section>
      </div>

      <div className="primary-container">
        <section className="flex flex-col items-start justify-between space-y-14 md:flex-row md:space-x-10 md:space-y-0 lg:space-x-14">
          <div className="flex flex-col">
            <div className="mb-[18px] flex flex-row items-center">
              <h5 className={`${italia.className} mr-[6px] sm:mr-[16px]`}>
                Overview
              </h5>
              <Link
                href="/About"
                aria-label="Know more about us"
                className="group flex flex-row -space-x-[2px] sm:space-x-2"
              >
                <Outline className="scale-[0.9] sm:scale-100">
                  more about us
                </Outline>
                <MovingArrow
                  className="scale-[0.9] sm:scale-100"
                  type="eight"
                  background={true}
                />
              </Link>
            </div>
            <div className="md:max-w-[566px]">
              <p
                className={`${sarif.className} mb-[33px] text-[18px] leading-[26px] tracking-[-0.01em] text-head lg:text-[22px]`}
              >
                Centre of Excellence bring together diverse researchers to solve
                critical challenges for multi-domain operations. COEs are
                specialized fascility providing best practices, research,
                support, and training, maintaining the highest standards in the
                industry.
              </p>
            </div>
            <div
              className={`${sarif.className} flex flex-row items-start space-x-14 text-[14px] leading-[22px] tracking-[-0.01em] text-black sm:space-x-28 lg:text-[16px]`}
            >
              <ul>
                <li>Specialized Expertise</li>
                <li>Knowledge Sharing</li>
                <li>Research & Innovation</li>
              </ul>
              <ul>
                <li>Leadership & Guidance</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:w-[566px]">
            <section className="border-t-[1px] border-head pb-[60px] pt-[14px] lg:pb-[72px]">
              <p
                className={`${italia.className} mb-[28px] text-[14px] font-semibold uppercase leading-[16px] tracking-[0.04em]`}
              >
                Terms & conditions
              </p>
              <p
                className={`${sarif.className} text-[16px] leading-[22px] text-head`}
              >
                It is mandatory for students to complete every field of the
                form. By filling out each field, students contribute to
                effective communication, streamlined record-keeping, and
                efficient processing of their requests. It allows the
                institution or organization to have a complete understanding of
                the student's profile, enabling them to provide the necessary
                support and services accordingly.
              </p>
            </section>
            <section className="border-t-[1px] border-head pb-[60px] pt-[14px] lg:pb-[72px]">
              <p
                className={`${italia.className} mb-[28px] text-[14px] font-semibold uppercase leading-[16px] tracking-[0.04em]`}
              >
                good to know
              </p>
              <p
                className={`${sarif.className} text-[16px] leading-[22px] text-head`}
              >
                It is imperative for students to responsibly complete the form,
                ensuring that all data submitted is authentic and accurate. This
                requirement emphasizes the importance of maintaining integrity
                and credibility in the information provided. By adhering to
                these guidelines, students contribute to maintaining the trust
                and transparency of the institution's records and processes.
              </p>
            </section>
          </div>
        </section>
      </div>

      <div className="w-full pb-20 pt-4 md:pb-36 md:pt-14">
        <p className={`${sarif.className} text-center text-base lg:text-lg`}>
          Oops! Looks like registration process has ended. <br />
          Stay tuned.
        </p>
      </div>
    </section>
  );
};

export default Register;
