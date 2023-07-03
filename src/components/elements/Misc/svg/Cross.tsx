import React from "react";

const Cross = ({className}:{className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 9 9"
      fill="none"
      className={className}
    >
      <path
        d="M4.67 4.00273L1.66727 1L1 1.66727L4.00273 4.67L1 7.67273L1.66727 8.34L4.67 5.33727L7.67273 8.34L8.34 7.67273L5.33727 4.67L8.34 1.66727L7.67273 1L4.67 4.00273Z"
        strokeWidth="0.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Cross;
