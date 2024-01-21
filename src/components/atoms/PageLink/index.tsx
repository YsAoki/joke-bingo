import React, { FC, PropsWithChildren } from "react";
import { SPageLink } from "./style";
import { LinkProps } from "react-router-dom";

const PageLink: FC<LinkProps & PropsWithChildren> = ({
  to,
  children,
  ...other
}) => {
  return (
    <SPageLink to={to} {...other}>
      {children}
    </SPageLink>
  );
};

export default PageLink;
