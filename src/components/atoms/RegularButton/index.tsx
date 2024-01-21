import React, { FC, PropsWithChildren } from "react";
import { SRegularButton } from "./styled";

type RegularButtonMyProps = React.ComponentPropsWithoutRef<"button">;

const RegularButton: FC<RegularButtonMyProps & PropsWithChildren> = ({
  children,
  ...other
}) => {
  return <SRegularButton {...other}>{children}</SRegularButton>;
};

export default RegularButton;
