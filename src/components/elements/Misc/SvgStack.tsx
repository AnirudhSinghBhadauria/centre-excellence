import React from "react";
import Token from "../Hero/Token";
import Earth from "../Hero/Earth";
import Smile from "../Hero/Smile";

const SvgStack = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-1">
      <Token />
      <Earth />
      <Smile className="origin-center transition-all duration-500 ease-in-out group-hover:-rotate-90" />
    </section>
  );
};

export default SvgStack;
