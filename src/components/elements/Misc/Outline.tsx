import { italia } from "@/app/layout";
import React, { ReactNode } from "react";

const Outline = ({
  children,
  className,
  ifBlackBack,
}: {
  children: ReactNode;
  className?: string;
  ifBlackBack?: boolean;
}) => {
  return (
    <div
      className={`${italia.className} grid place-items-center rounded-3xl 
        px-2 py-[0.075rem] pt-1 text-[14px] font-bold uppercase
        leading-none tracking-wider outline outline-[2px]  ${
          ifBlackBack
            ? "outline-[#EEEAEA] text-[#EEEAEA]"
            : "text-head outline-head"
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default Outline;
