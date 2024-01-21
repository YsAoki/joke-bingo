import React, { FC, PropsWithChildren } from "react";
import { SSelectItemCard } from "./style";

type Props = {
  selected: string;
};

// 地域名称と都道府県を選択する際のスクロール用カード
const SelectItemCard: FC<Props & PropsWithChildren> = ({
  selected,
  children,
  ...other
}) => {
  return <SSelectItemCard {...other}>{children}</SSelectItemCard>;
};

export default SelectItemCard;
