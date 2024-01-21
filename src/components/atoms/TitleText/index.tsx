import React, { FC, PropsWithChildren } from "react";
import { STitleText } from "./style";

type TitleTextMyProps = React.ComponentPropsWithoutRef<"h1">;

type TitleTextTags = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const TitleText: FC<TitleTextMyProps & TitleTextTags & PropsWithChildren> = ({
  tag,
  children,
  ...other
}) => {
  return (
    <STitleText as={tag} {...other}>
      {children}
    </STitleText>
  );
};

export default TitleText;
