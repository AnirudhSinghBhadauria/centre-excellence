import React from "react";

const X = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      className={className}
    >
      <rect
        x="3.49023"
        y="1.30396"
        width="23.1358"
        height="5.33999"
        rx="2.67"
        transform="rotate(40.8151 3.49023 1.30396)"
        fill="black"
      />
      <rect
        x="18.3542"
        y="2.6839"
        width="24.1196"
        height="5.33966"
        rx="2.66983"
        transform="rotate(120.174 18.3542 2.6839)"
        fill="black"
      />
    </svg>
  );
};

export default X;
