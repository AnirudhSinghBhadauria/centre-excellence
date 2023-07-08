import React from "react";
import { sans } from "@/app/layout";
import Outline from "./Outline";
import MovingArrow from "./MovingArrow";
import Link from "next/link";

const Register = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <p
        className={`${sans.className} text-base leading-[22px] mb-6 max-w-[260px]`}
      >
        Take the first step towards success, register now for our
        enriching courses.
      </p>

      <Link
        href="/Register"
        aria-label="Register"
        className="flex flex-row group"
      >
        <Outline className="mr-[7px]" ifBlackBack={false}>
          Register
        </Outline>
        <MovingArrow type="eight" background={true} />
      </Link>
    </div>
  );
};

export default Register;
