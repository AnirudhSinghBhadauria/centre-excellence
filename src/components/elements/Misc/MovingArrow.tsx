import React from "react";

interface Elemnet {
  background: boolean;
  type: string;
  className?: string;
}

const MovingArrow = ({ background, type, className }: Elemnet) => {
  let size = type === "fourteen" ? 14 : 8;
  let stroke = type === "fourteen" ? 0.01 : 0.5;
  let movement =
    type === "fourteen"
      ? `group-hover:translate-x-[2.95rem] group-hover:-translate-y-[2.95rem]`
      : `group-hover:translate-x-[3rem] group-hover:-translate-y-[3rem]`;

  return (
    <div
      className={`${className} relative grid w-fit place-items-center
      overflow-hidden rounded-full transition-all
    duration-500 ease-in-out ${
      background
        ? `outline outline-[2px] outline-head group-hover:bg-neon group-hover:outline-neon`
        : "bg-neon"
    } ${type === "fourteen" ? `px-4 py-4` : `px-3 py-3`} `}
    >
      <svg
        className={`absolute transition-all duration-300 ease-in-out ${movement}`}
        width={size}
        height={size}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.57072 0.0861157L2.52097 0.0810699L2.50943 1.11517L6.80878 1.11738L0.321655 7.6045L1.05233 8.33518L7.5397 1.84781L7.54413 6.15052L8.57577 6.13512L8.57072 0.0861157Z"
          fill="#16161D"
          strokeWidth={stroke}
          stroke="#16161D"
        ></path>
      </svg>

      <svg
        className={`absolute right-14 top-14 transition-all duration-300 ease-in-out ${movement}`}
        width={size}
        height={size}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.57072 0.0861157L2.52097 0.0810699L2.50943 1.11517L6.80878 1.11738L0.321655 7.6045L1.05233 8.33518L7.5397 1.84781L7.54413 6.15052L8.57577 6.13512L8.57072 0.0861157Z"
          fill="#16161D"
          strokeWidth={stroke}
          stroke="#16161D"
        ></path>
      </svg>
    </div>
  );
};

export default MovingArrow;
