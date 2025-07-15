import React, { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type PropsType = HTMLAttributes<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

export const Heading = (props: PropsType) => {
  const { level = "h1", size = "xl", className, ...restProps } = props;
  const classesCompose = cn(styles.heading, className, styles[size]);

  return React.createElement(level, {
    className: classesCompose,
    ...restProps,
  });
};
