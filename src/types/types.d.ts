export type IconColor = "blue" | "white" | "black";

export type IconProps = {
  color: IconColor;
};

export type useButtonColor = {
  color: "blue" | "white";
};

export type TagProps = {
  tag?: keyof JSX.IntrinsicElements;
}

type ListItem = {
  id: string;
  label: string;
};

