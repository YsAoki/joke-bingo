import React, { FC, PropsWithChildren } from "react";
import { TagProps } from "../../../types/types";
import { SRegularText } from "./style";

type RegularTextMyProps = React.ComponentPropsWithoutRef<"p">;

const RegularText: FC<RegularTextMyProps & TagProps & PropsWithChildren> = ({
  children,
  tag,
  ...other
}) => {
  return (
    <SRegularText as={tag} {...other}>
      {children}
    </SRegularText>
  );
};

export default RegularText;
