import React from "react";
import Register from "../Misc/Register";
import { motion } from "framer-motion";

const VideoContainer = ({ style }: { style?: object }) => {
  return (
    <section
      className=" w-full origin-bottom
    bg-main pt-[90px] transition-all duration-700 ease-in-out lg:pt-[100px]"
    >
      <div className="primary-grid primary-container pb-0 lg:pb-[50rem] xl:pb-[62rem] 2xl:pb-[59rem]">
        <div className="col-span-4">
          {/* HIDDEN BEFORE lg */}
          <Register className="jusitfy-start hidden flex-col items-start lg:flex" />
        </div>

        <section className="relative z-10 col-span-8 h-auto w-full rounded-[20px]">
          <motion.div
            style={style}
            className="hidden lg:block lg:absolute top-0 right-0"
          >
            <video
              loop
              autoPlay
              muted
              src="https://cdn.sanity.io/files/aftdl3p2/production/af54f6e9d167d5afb2edd057d02cfbadfd82e076.webm"
              poster="https://cdn.sanity.io/images/aftdl3p2/production/284c0704871f3a5b5cb11478c7d30647c529a592-1280x720.webp"
              // poster="https://cdn.sanity.io/images/aftdl3p2/production/d10ad2f5eb81465858f0741fbdad5f2971d86e36-1280x720.webp"
              playsInline
              className="h-auto w-full rounded-[20px]"
            />
          </motion.div>
          {/* hidden before lg */}
          <div className="block lg:hidden">
            <video
              loop
              autoPlay
              muted
              src="https://cdn.sanity.io/files/aftdl3p2/production/af54f6e9d167d5afb2edd057d02cfbadfd82e076.webm"
              poster="https://cdn.sanity.io/images/aftdl3p2/production/284c0704871f3a5b5cb11478c7d30647c529a592-1280x720.webp"
              playsInline
              className="h-auto w-full rounded-[20px]"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default VideoContainer;
