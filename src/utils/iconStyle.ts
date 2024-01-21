import { IconColor } from "../types/types";

// iconの色を管理する
export const convertColorCode = (propsColor: IconColor) => {
  switch (propsColor) {
    case "white":
      return "#fff";
    case "blue":
      return "#1D7DDD";
    case "black":
      return "#404040";
  }
};