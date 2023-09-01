"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/elements/Hero/Hero";
import VideoContainer from "@/components/elements/Video/VideoContainer";
import MidHeading from "@/components/elements/Misc/MidHeading";
import Inverted from "@/components/elements/Inverted/Inverted";
import { descriptions } from "@/assets/data/appData";
import Courses from "@/components/elements/Courses/Courses";
import CourseDetails from "@/components/elements/Course_Details/CourseDetails";
import Skater from "@/components/elements/Misc/svg/Skater";

const Home = () => {
  const {
    c_title,
    c_subTitle,
    c_link,
    c_linkText,
    c_paraOne,
    c_paraTwo,
    c_image,
    c_target,
  } = descriptions.college;

  const {
    ce_title,
    ce_subTitle,
    ce_link,
    ce_linkText,
    ce_paraOne,
    ce_paraTwo,
    ce_image,
    ce_target,
  } = descriptions.coe;
  const {
    d_title,
    d_subTitle,
    d_link,
    d_linkText,
    d_paraOne,
    d_paraTwo,
    d_image,
    d_target,
  } = descriptions.director;

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const scaleAndTranslate = useTransform(
    scrollYProgress,
    [0.05, 0.1015],
    [
      "scale(1) translateX(0%) translateY(0%)",
      "scale(1.5) translateX(-17.38%) translateY(55.25%)",
      // "scale(1.42) translateX(-18.4%) translateY(55.75%)",
    ]
  );

  const bgColor = useTransform(
    scrollYProgress,
    [0.43, 0.48],
    ["#EEEAEA", "#FFFFFF"]
  );

  const moveSkater = useTransform(
    scrollYProgress,
    [0.4, 0.65],
    ["translateX(-90%)", "translateX(170%)"]
  );

  const moveSkaterMobile = useTransform(
    scrollYProgress,
    [0.24, 0.53],
    // ["translateX(-110%)", "translateX(120%)"]
    ["translateX(-100%)", "translateX(200%)"]
  );

  return (
    <motion.div ref={targetRef}>
      <Hero />
      <VideoContainer style={{ transform: scaleAndTranslate }} />
      <MidHeading
        type="one"
        button={true}
        target="_blank"
        hyperlink="http://uitshivpuri.rgpv.ac.in/"
        lineOne="UIT RGPV Shivpuri ,"
        lineTwo="excellence"
        linkText="Visit our page"
      />

      <Inverted
        style={{ backgroundColor: bgColor }}
        link={c_link}
        title={c_title}
        subTitle={c_subTitle}
        paraOne={c_paraOne}
        paraTwo={c_paraTwo}
        linkText={c_linkText}
        image={c_image}
        target={c_target}
      />

      <MidHeading
        type="one"
        button={true}
        target="_self"
        hyperlink="/Contact"
        lineOne="It 's Centre of"
        lineTwo="Excellence"
        linkText="Contact"
      />
      <Inverted
        style={{ backgroundColor: bgColor }}
        link={ce_link}
        title={ce_title}
        subTitle={ce_subTitle}
        paraOne={ce_paraOne}
        paraTwo={ce_paraTwo}
        linkText={ce_linkText}
        image={ce_image}
        target={ce_target}
      />

      {/* SKATER---------------- */}

      <motion.section
        style={{ backgroundColor: bgColor }}
        className="hidden w-full flex-row items-center justify-center overflow-x-hidden pb-[80px] pt-[197px] lg:flex"
      >
        <motion.div style={{ transform: moveSkater }}>
          <Skater />
        </motion.div>
      </motion.section>

      <motion.section className="skater-back block w-full flex-row items-center justify-center overflow-x-hidden pt-[100px] pb-[0px] sm:pb-[40px] sm:pt-[145px] md:pb-[80px] md:pt-[197px] lg:hidden">
        <motion.div
          style={{ transform: moveSkaterMobile }}
          className="w-fit transition-all duration-100 ease-linear"
        >
          <Skater />
        </motion.div>
      </motion.section>

      <MidHeading
        className="bg-white"
        type="two"
        button={true}
        target="_self"
        hyperlink="/Gallery"
        lineOne="Courses Offered ,"
        lineTwo="Eminence"
        linkText="Gallery"
      />
      <Courses />
      <CourseDetails />

      <MidHeading
        className="bg-white"
        type="one"
        button={true}
        target="_blank"
        hyperlink="https://www.linkedin.com/in/singhai/"
        lineOne="From Director's"
        lineTwo="Pen"
        linkText="Linkedin"
      />
      <Inverted
        style={{ backgroundColor: bgColor }}
        link={d_link}
        title={d_title}
        subTitle={d_subTitle}
        paraOne={d_paraOne}
        paraTwo={d_paraTwo}
        linkText={d_linkText}
        image={d_image}
        target={d_target}
      />
      <div className="h-[120px] w-full bg-white"></div>
    </motion.div>
  );
};

export default Home;
