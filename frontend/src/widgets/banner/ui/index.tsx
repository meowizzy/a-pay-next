import { Heading } from "@ui/heading";
import styles from "./styles.module.scss";
import { TextField } from "@ui/textField";
import { ReactNode } from "react";

type PropsType = {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export const Banner = (props: PropsType) => {
  const { children, title, subtitle } = props;

  return (
    <section className={styles.banner}>
      <div className="container">
        {!!title && (
          <Heading level="h1" size={"xxl"} className={styles.bannerTitle}>
            {title}
          </Heading>
        )}
        {!!subtitle && (
          <TextField className={styles.bannerSubtitle}>{subtitle}</TextField>
        )}
        {children && <div className={styles.bannerBottom}>{children}</div>}
      </div>
    </section>
  );
};
