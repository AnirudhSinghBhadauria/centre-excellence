import React from "react";

const Earth = ({className, fill} : {className?: string, fill?: string}) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.01325 0.400184C12.4242 0.400184 16 3.97597 16 8.38694C16 12.7979 12.4242 16.3737 8.01325 16.3737C3.60229 16.3737 0.0264972 12.7979 0.0264972 8.38694C0.0264972 3.97597 3.60229 0.400184 8.01325 0.400184ZM14.5335 8.38694C14.5335 4.7859 11.6143 1.86669 8.01325 1.86669C4.41222 1.86669 1.493 4.7859 1.493 8.38694C1.493 11.988 4.41222 14.9072 8.01325 14.9072C11.6143 14.9072 14.5335 11.988 14.5335 8.38694Z"
        fill={fill}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8899 7.19551C11.6772 6.75099 9.95319 6.46155 8.01325 6.46155C6.07331 6.46155 4.34928 6.75099 3.13661 7.19551C2.52734 7.41884 2.08572 7.66735 1.80999 7.90631C1.5323 8.14697 1.493 8.31155 1.493 8.38694C1.493 8.46232 1.5323 8.6273 1.80999 8.86795C2.08572 9.10692 2.52734 9.35542 3.13661 9.57876C4.34928 10.0233 6.07331 10.3127 8.01325 10.3127C9.95319 10.3127 11.6772 10.0233 12.8899 9.57876C13.4992 9.35542 13.9408 9.10692 14.2165 8.86795C14.4942 8.6273 14.5335 8.46232 14.5335 8.38694C14.5335 8.31155 14.4942 8.14697 14.2165 7.90631C13.9408 7.66735 13.4992 7.41884 12.8899 7.19551ZM15.177 6.79808C15.6334 7.19361 16 7.72811 16 8.38694C16 9.04576 15.6334 9.58065 15.177 9.97619C14.7186 10.3734 14.098 10.6979 13.3946 10.9557C11.982 11.4735 10.0793 11.7792 8.01325 11.7792C5.94719 11.7792 4.04447 11.4735 2.63189 10.9557C1.92853 10.6979 1.3079 10.3734 0.849542 9.97619C0.393139 9.58065 0.0264972 9.04576 0.0264972 8.38694C0.0264972 7.72811 0.393139 7.19361 0.849542 6.79808C1.3079 6.40084 1.92853 6.07641 2.63189 5.81859C4.04447 5.3008 5.94719 4.99504 8.01325 4.99504C10.0793 4.99504 11.982 5.3008 13.3946 5.81859C14.098 6.07641 14.7186 6.40084 15.177 6.79808Z"
        fill={fill}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36211 15.6405V1.1334H8.82861V15.6405H7.36211Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default Earth;
