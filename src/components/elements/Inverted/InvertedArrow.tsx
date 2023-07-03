import React from "react";

const InvertedArrow = () => {
  return (
    <svg
      className="h-[24px] w-[24px] origin-center -scale-0 transition-all delay-700 duration-1000 ease-in-out group-hover:scale-100 mt-[-5px] md:h-[32px] md:w-[32px]"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15.5" fill="#EEEAEA" stroke="#EEEAEA"></circle>
      <path
        d="M13.2859 10.9953L13.1869 10.9952L13.1858 11.0942L13.175 12.0603L13.1739 12.1614L13.2749 12.1614L20.0123 12.1649L9.99334 22.1838L9.92263 22.2545L9.99334 22.3253L10.6758 23.0077L10.7465 23.0784L10.8172 23.0077L20.8362 12.9886L20.8432 19.7297L20.8433 19.8311L20.9447 19.8296L21.9072 19.8152L22.0058 19.8138L22.0057 19.7152L21.9986 11.1024L21.9985 11.0025L21.8986 11.0025L13.2859 10.9953Z"
        fill="#16161D"
        stroke="#16161D"
        strokeWidth="0.2"
      ></path>
    </svg>
  );
};

export default InvertedArrow;
