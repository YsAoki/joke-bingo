import React, { Children, FC, PropsWithChildren } from "react";
import { SPaperWrapper } from "./style";
import { TagProps } from "../../../types/types";

type PaperWrapperMyProps = React.ComponentPropsWithoutRef<"div">;

const PaperWrapper: FC<PaperWrapperMyProps & PropsWithChildren & TagProps> = ({
  tag,
  children,
  ...other
}) => {
  return (
    <SPaperWrapper as={tag} {...other}>
      {children}
    </SPaperWrapper>
  );
};

export default PaperWrapper;
