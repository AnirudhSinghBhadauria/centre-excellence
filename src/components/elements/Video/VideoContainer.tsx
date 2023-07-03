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
          <motion.div style={style} className="hidden lg:block lg:absolute top-0 right-0">
            <video
              loop
              // autoPlay
              muted
              src="https://cdn.api.video/vod/vi6mfqIGTtfgkGPdeK7Eehob/mp4/source.mp4"
              poster="https://cdn.sanity.io/images/aftdl3p2/production/f2090634edd75b0df4e0af4b2d0565427f9d4706-1280x720.png"
              playsInline
              className="h-auto w-full rounded-[20px]"
            />
          </motion.div>
          {/* hidden before lg */}
          <div className="block lg:hidden">
            <video
              loop
              // autoPlay
              muted
              src="https://cdn.api.video/vod/vi6mfqIGTtfgkGPdeK7Eehob/mp4/source.mp4"
              poster="https://cdn.sanity.io/images/s695h8ei/production/ed4c4e7707fdab29e15fa04a61e097c1be141d25-1280x720.png"
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

// https://cdn.sanity.io/images/s695h8ei/production/ed4c4e7707fdab29e15fa04a61e097c1be141d25-1280x720.png
// scale-[1.5] translate-y-80 -translate-x-60
// https://firebasestorage.googleapis.com/v0/b/centre-of-excellence-296df.appspot.com/o/VideoPoster.png?alt=media&token=f3816fef-7f8f-4e29-bb9b-1ba6465188e0
// top-60 left-12 scale-[1.075]
// 15rem 3rem
