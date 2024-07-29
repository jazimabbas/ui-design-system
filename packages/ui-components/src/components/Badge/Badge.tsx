import { forwardRef } from "react";
import { Badge as BadgeStyle } from "./styles";
import { BadgeColor, BadgeSize } from "./types";

type Props = {
  children: React.ReactNode;
  size?: BadgeSize;
  color?: BadgeColor;
};

const Badge = forwardRef(function Badge(
  { children, size = "md", color = "neutral" }: Props,
  ref: any,
) {
  return <BadgeStyle ref={ref} $size={size} $color={color} children={children} />;
});

export { Badge };
