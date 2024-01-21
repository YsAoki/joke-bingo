import React, { FC, PropsWithChildren } from "react";
import { SFlexBox } from "./style";
import { TagProps } from "../../../types/types";

type FlexBoxMyProps = React.ComponentPropsWithoutRef<"div">;

const FlexBox: FC<FlexBoxMyProps & PropsWithChildren & TagProps> = ({
  tag,
  children,
  ...other
}) => {
  return (
    <SFlexBox as={tag} {...other}>
      {children}
    </SFlexBox>
  );
};

export default FlexBox;
