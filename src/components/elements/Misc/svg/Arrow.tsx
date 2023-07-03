import React from "react";

const Arrow = ({className}:{className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className={className}
    >
      <path
        d="M7.61842 0.0765677L2.24086 0.0720825L2.2306 0.991283L6.05225 0.993247L0.285915 6.75958L0.935404 7.40907L6.70196 1.64252L6.70589 5.46715L7.62291 5.45346L7.61842 0.0765677Z"
        strokeWidth="0.177778"
      />
    </svg>
  );
};

export default Arrow;
