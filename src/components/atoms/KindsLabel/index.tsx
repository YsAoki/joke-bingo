import React, { FC, PropsWithChildren } from "react";
import { SKindsLabel } from "./style";

const KindsLabel: FC<PropsWithChildren> = ({ children, ...other }) => {
  return <SKindsLabel {...other}>{children}</SKindsLabel>;
};

export default KindsLabel;
