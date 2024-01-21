import React, { FC } from "react";
import { SInputWrapper, SInput, SIconWrapper } from "./style";

type RegularInputMyProps = React.ComponentPropsWithoutRef<"input">;

type Props = {
  icon?: React.ReactNode;
};

const RegularInput: FC<RegularInputMyProps & Props> = ({ icon, ...other }) => {
  return (
    <SInputWrapper>
      {icon && <SIconWrapper>{icon}</SIconWrapper>}
      <SInput hasIcon={!!icon} {...other} />
    </SInputWrapper>
  );
};

// コンポーネントのエクスポート
export default RegularInput;
