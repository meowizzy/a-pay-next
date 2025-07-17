import React, { ComponentProps } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type PropsType = ComponentProps<"div"> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

export const TextField = (props: PropsType) => {
  const { className, size = "md", ...restProps } = props;
  const classesCompose = cn(styles.textField, className, styles[size]);

  return <div className={classesCompose} {...restProps} />;
};
