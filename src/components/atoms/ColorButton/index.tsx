import React, { FC, PropsWithChildren } from "react";
import { useButtonColor } from "../../../types/types";
import { SColorButton } from "./style";
import { buttonStyles } from "../../../config/buttonStyle";

type Props = {
  icon?: React.ReactNode;
};

type RegularButtonMyProps = React.ComponentPropsWithoutRef<"button">;

const ColorButton: FC<
  Props & useButtonColor & RegularButtonMyProps & PropsWithChildren
> = ({ color, icon, children, ...other }) => {
  const colorMode = buttonStyles[color] || buttonStyles.blue;
  return (
    <SColorButton {...colorMode} {...other}>
      {icon && <span>{icon}</span>}
      {children}
    </SColorButton>
  );
};
export default ColorButton;
