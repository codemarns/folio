import React from "react";
import cn from "classnames";
import { sectionStyles } from "@/styles";

type Props = {
  id: string;
  className?: string;
  children?: React.ReactNode;
};

export const Section: React.FC<Props> = (props) => {
  const { id = "section", className, children } = props;
  const { root } = sectionStyles;
  return (
    <section id={id} className={cn("SECTION", root.base, className)}>
      {children}
    </section>
  );
};
