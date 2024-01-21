import React, { FC } from "react";
import { IconProps } from "../types/types";
import { convertColorCode } from "../utils/iconStyle";

const Hierarchy: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M8.94097 6.39798L4.38604 10.9529C4.16636 11.1726 3.8102 11.1726 3.59054 10.9529L3.05929 10.4216C2.83998 10.2023 2.83956 9.8469 3.05835 9.62708L6.66822 6.00022L3.05835 2.37338C2.83956 2.15356 2.83998 1.79813 3.05929 1.57883L3.59054 1.04757C3.81022 0.827893 4.16638 0.827893 4.38604 1.04757L8.94095 5.60249C9.16063 5.82214 9.16063 6.1783 8.94097 6.39798Z"
        fill={convertColorCode(color)}
      />
    </svg>
  );
};

export default Hierarchy;
