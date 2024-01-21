import React, { FC } from "react";
import { SOverLay } from "./style";

type Props = {
  open: boolean;
};

type OverLayMyProps = React.ComponentPropsWithoutRef<"div">;

const OverLay: FC<Props & OverLayMyProps> = ({ open, ...other }) => {
  return <SOverLay $open={open} {...other} />;
};

export default OverLay;
