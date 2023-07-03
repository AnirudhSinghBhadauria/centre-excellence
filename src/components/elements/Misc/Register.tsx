import React from "react";
import { sans } from "@/app/layout";
import Outline from "./Outline";
import MovingArrow from "./MovingArrow";

const Register = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <p
        className={`${sans.className} text-base leading-[22px] mb-6 max-w-[260px]`}
      >
        People creating websites, developing brands and building eCommerce
        stores for people.
      </p>

      <a href="#" className="flex flex-row group">
        <Outline className="mr-[7px]" ifBlackBack={false}>Register</Outline>
        <MovingArrow type="eight" background={true} />
      </a>
    </div>
  );
};

export default Register;
