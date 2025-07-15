import Link from "next/link";
import LogoIcon from "@svg/logo.svg";
import styles from "./styles.module.scss";
import cn from "classnames";

type PropsType = {
  className?: string;
};

export const Logo = (props: PropsType) => {
  const { className } = props;

  return (
    <Link href="/" className={cn(styles.logo, className)}>
      <LogoIcon />
    </Link>
  );
};
