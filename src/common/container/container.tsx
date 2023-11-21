import React from "react";
import cn from "classnames";
import { containerStyles } from "@/styles";

type Props = {
  id: string;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

export const Container: React.FC<Props> = (props) => {
  const { id = "container", className, children, size = "xl" } = props;
  const { root } = containerStyles;

  const baseClasses = cn("CONTAINER", root.base, root.size[size], className);

  return (
    <div id={id} className={baseClasses}>
      {children}
    </div>
  );
};
