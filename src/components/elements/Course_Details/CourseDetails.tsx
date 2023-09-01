import React from "react";
import ThreeImage from "./ThreeImage";
import { italia } from "@/app/layout";
import { details } from "@/assets/data/appData";
import Link from "next/link";
import Outline from "../Misc/Outline";
import MovingArrow from "../Misc/MovingArrow";

const CourseDetails = () => {
  return (
    <section className="w-full bg-head pb-[55px] pt-[80px] text-primary">
      <div className="primary-container">
        <section className="flex flex-row">
          <div className="max-w-3xl">
            <p className={`${italia.className} quote`}>
              Enjoyed our courses? Let's dive deeper into the specifics...
            </p>

            <ul className="my-10 flex flex-col gap-2 md:gap-3">
              {details.map(({ courses, duration, fees, staring }) => (
                <li
                  key={courses}
                  className="primary-grid group max-w-3xl cursor-pointer gap-2"
                >
                  <div
                    className={`${italia.className} details col-span-1 lg:col-span-5`}
                  >
                    {courses}
                  </div>
                  <div
                    className={`${italia.className} details col-span-1 lg:col-span-2`}
                  >
                    {duration}
                  </div>
                  <div
                    className={`${italia.className} details col-span-1 lg:col-span-3`}
                  >
                    {fees}
                  </div>
                  <div
                    className={`${italia.className} details col-span-1 lg:col-span-2`}
                  >
                    {staring}
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-20 flex flex-row justify-end">
              <Link
                className="group flex flex-row gap-2"
                href="/Register"
                aria-label="Register - Centre of Excellence"
              >
                <Outline ifBlackBack={true}>Register for courses</Outline>
                <MovingArrow type="eight" background={false} />
              </Link>
            </div>

            <p className={`${italia.className} quote`}>
              Got it? Let's determine your eligibility...
            </p>

            <div
              className={`${italia.className} pt-10 sm:my-10 flex items-center sm:items-stretch flex-col gap-4`}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="detail-box">
                  <p>
                    Eligibility - Undergrads (B.Tech/BSc/Diploma - 3 Years)
                    student in engineering, science and relevant industrial
                    persons.
                  </p>
                </div>
                <div className="detail-box">
                  <p>
                    Certificates will be provided after the completion of the
                    courses.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="detail-box">
                  <p>
                    The accomodation facility available in the instutute
                    permises on payment basis @Rs.400 per day (Inclusive food)
                  </p>
                </div>
                <div className="detail-box">
                  <p>Seats are limited. Please consider registering.</p>
                </div>
              </div>
            </div>
            <div className="my-20 flex flex-row justify-end">
              <Link
                className="group flex flex-row gap-2"
                target="_blank"
                href="https://cdn.sanity.io/files/aftdl3p2/production/43415d893978940e0a29f6b089ee95ccf5aa3ab0.pdf"
                aria-label="Poster- Centre of Excellence"
              >
                <Outline ifBlackBack={true}>get official poster</Outline>
                <MovingArrow type="eight" background={false} />
              </Link>
            </div>

            <p className={`${italia.className} quote`}>
              Stay Tuned for More from Us...
            </p>

            <div
              className={`${italia.className} pt-10 sm:my-10 flex items-center sm:items-stretch flex-col gap-4`}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://cdn.sanity.io/files/aftdl3p2/production/cc771d8cd27f4bbc69b3fc86278a82b48ee55559.pdf"
                  aria-label="Invitation for Practical Sessions at the Center of Excellence"
                  target="_blank"
                  className="detail-box"
                >
                  <p>
                    Invitation for Practical Sessions at the Center of
                    Excellence, University Institute of Technology, RGPV,
                    Shivpuri
                  </p>
                </Link>
                <Link            href="https://cdn.sanity.io/files/aftdl3p2/production/ed91932545257ade66b22ad4bcb38de8e6fa73ba.pdf"
                  aria-label="Official Directive Regarding Practical Training at the Center of Excellence"
                  target="_blank"
                  className="detail-box"
                >
                  <p>
                    Official Directive Regarding Practical Training at the
                    Center of Excellence,University Institute of Technology,
                    RGPV, Shivpuri
                  </p>
                </Link>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://cdn.sanity.io/files/aftdl3p2/production/61435544f13f1b92b0ca1749157fc05744b46283.pdf"
                  aria-label="Proposed Laboratories for Core Courses within COE"
                  target="_blank"
                  className="detail-box"
                >
                  <p>
                    Proposed Laboratories for Core Courses within the Center of
                    Excellence for B.Tech/M.Tech Programs.
                  </p>
                </Link>
                <Link
                  href="https://cdn.sanity.io/files/aftdl3p2/production/ee8b734ff08919b7a78b42fc0e75ee15577b6949.pdf"
                  aria-label="Proposed Laboratory Facilities for Elective Courses"
                  target="_blank"
                  className="detail-box"
                >
                  <p>
                    Proposed Laboratory Facilities for Elective Courses within
                    the Center of Excellence for B.Tech/M.Tech Programs.
                  </p>
                </Link>
              </div>
            </div>
            <div className="my-20 flex flex-row justify-end">
              <Link
                className="group flex flex-row gap-2"
                download
                href="https://cdn.sanity.io/files/aftdl3p2/production/efa373d3436d14c2ee8b1a999dbb8738c036d8f2.pptx"
                aria-label="Poster- Centre of Excellence"
              >
                <Outline ifBlackBack={true}>get COE Presentation</Outline>
                <MovingArrow type="eight" background={false} />
              </Link>
            </div>
          </div>
        </section>
        <div className="mt-10 sm:mt-16 flex w-full flex-row justify-center md:justify-end lg:mt-14 xl:mt-12 2xl:mt-9">
          <ThreeImage className="h-auto w-[280px] sm:w-[325px] md:w-[375px] lg:w-[406px]" />
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
