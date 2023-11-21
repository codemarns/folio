"use client";

import React from "react";
import cn from "classnames";
import { buttonStyles } from "@/styles";
import { DefaultColorEnum, SizeEnum } from "@/utils";
import { Icon } from "../icon/icon";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  layout?: "auto" | "block";
  type?: "button" | "reset" | "submit";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
  size?: keyof typeof SizeEnum;
  color?: keyof typeof DefaultColorEnum;
};

export const Button: React.FC<TButtonProps> = (props) => {
  const {
    className,
    icon,
    label,
    children,
    id = "button",
    size = "md",
    layout = "auto",
    type = "button",
    color = "primary",
    variant = "solid",
    corner = "soft-edge",
    disabled = false,
    loading = false,
    ...restProps
  } = props;

  const { root } = buttonStyles;

  const baseClasses = cn(
    "BUTTON",
    root.base,
    root.sizes[size],
    root.corners[corner],
    root.variants[variant].colors[color].base,
    disabled || loading
      ? [root.cursors.disable, root.variants[variant].colors[color].disable]
      : [root.cursors.default, root.variants[variant].colors[color].default],
    {
      [root.block.base]: layout === "block",
      [root.widthSizes[size]]: !(label || children),
    },
    className
  );

  return (
    <button
      {...restProps}
      id={id}
      type={type}
      className={baseClasses}
      aria-disabled={disabled || loading}
      aria-label={label}
    >
      {icon && (
        <Icon
          name={loading ? "spinner" : icon}
          color={variant === "solid" ? "white" : color}
          className={cn({ [root.icon.base]: loading })}
        />
      )}
      {loading ? "Loading..." : label || children}
    </button>
  );
};
