import { Heading } from "@ui/heading";
import styles from "./styles.module.scss";
import { TextField } from "@ui/textField";
import { ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
};

export const Banner = (props: PropsType) => {
  const { children } = props;

  return (
    <section className={styles.banner}>
      <div className="container">
        <Heading level="h1" size={"xxl"} className={styles.bannerTitle}>
          Ваше личное финансовое пространство
        </Heading>
        <TextField className={styles.bannerSubtitle}>
          A-Pay — это современный мобильный кошелек, созданный для удобных,
          быстрых и безопасных платежей. Он объединяет все финансовые операции в
          одном приложении, позволяя вам легко управлять своими деньгами.
        </TextField>
        {children && <div className={styles.bannerBottom}>{children}</div>}
      </div>
    </section>
  );
};
