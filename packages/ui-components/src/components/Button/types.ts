import { ComponentProps, ComponentType } from "react";
import { GeneralButton } from "./general-styles";
import { PrimaryButton } from "./variants-styles";

export type Variant = "primary" | "secondary" | "tertiary" | "destructive" | "link" | "link:gray";

export type Size = "sm" | "md" | "lg" | "xl" | "2xl";

type IconProps =
  | {
      iconOnly?: false;
      icon?: never;
      iconProps?: never;
      leftIcon?: ComponentType<any>;
      rightIcon?: ComponentType<any>;
    }
  | {
      iconOnly?: true;
      icon?: ComponentType<any>;
      iconProps?: any;
      leftIcon?: never;
      rightIcon?: never;
    };

type ButtonComponentProps = Omit<ComponentProps<typeof GeneralButton>, "size" | "iconOnly">;

export type ButtonProps = ButtonComponentProps & IconProps & { size?: Size; variant?: Variant };

export type IconSize = Record<Size, number>;

export type Component = Record<Variant, typeof PrimaryButton>;
