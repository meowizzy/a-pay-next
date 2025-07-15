import { ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";

type PropsType = ComponentProps<"button"> & {
  theme?: "primary" | "clear" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
  gap?: "sm" | "md" | "lg";
  danger?: boolean;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  href?: string;
  loading?: boolean;
};

export const Button = memo((props: PropsType) => {
  const {
    theme = "primary",
    size = "md",
    gap = "md",
    href,
    danger,
    className,
    suffixIcon,
    prefixIcon,
    children,
    loading,
    disabled,
    ...restProps
  } = props;

  const onlyIcon = (!!suffixIcon || !!prefixIcon) && !children;

  const classesCompose = cn(
    { [styles.isLoading]: loading },
    { [styles.onlyIcon]: onlyIcon },
    { [styles[size]]: theme !== "clear" },
    { [styles.danger]: danger },
    { [styles.disabled]: !!href && (disabled || loading) },
    styles[`gap-${gap}`],
    styles.button,
    styles[theme],
    className,
  );

  const getChildren = () => {
    return (
      <>
        {!!prefixIcon && !loading && prefixIcon}
        {!!children && <span>{children}</span>}
        {!!suffixIcon && !loading && suffixIcon}
      </>
    );
  };

  if (href) {
    return (
      <Link className={classesCompose} href={href}>
        {getChildren()}
      </Link>
    );
  }

  return (
    <button
      className={classesCompose}
      disabled={disabled || loading}
      {...restProps}
    >
      {getChildren()}
    </button>
  );
});
