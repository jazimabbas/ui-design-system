import { forwardRef } from "react";
import { ButtonProps, Component, IconSize } from "./types";
import {
  DestructiveButton,
  LinkButton,
  LinkGrayButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./variants-styles";

const iconSizes: IconSize = {
  sm: 14,
  md: 18,
  lg: 18,
  xl: 18,
  "2xl": 20,
};

const components: Component = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  link: LinkButton,
  "link:gray": LinkGrayButton,
  destructive: DestructiveButton,
};

export const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    icon: Icon,
    iconProps = {},
    iconOnly = false,
    children,
    ...delegated
  }: ButtonProps,
  ref: any,
) {
  const Component = components[variant];

  const render = () => {
    const iconSize = iconSizes[size];

    if (iconOnly && Icon) {
      return <Icon size={iconSize} {...iconProps} />;
    }

    return (
      <>
        {LeftIcon && <LeftIcon size={iconSize} />}
        {children && <span>{children}</span>}
        {RightIcon && <RightIcon size={iconSize} />}
      </>
    );
  };

  return (
    <Component ref={ref} {...delegated} size={size} iconOnly={iconOnly}>
      {render()}
    </Component>
  );
});
