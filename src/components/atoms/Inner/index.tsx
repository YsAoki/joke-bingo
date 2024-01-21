import React, { FC, PropsWithChildren } from "react";
import { SInner } from "./style";

const Inner: FC<PropsWithChildren> = ({ children, ...other }) => {
  return <SInner {...other}>{children}</SInner>;
};

export default Inner;
