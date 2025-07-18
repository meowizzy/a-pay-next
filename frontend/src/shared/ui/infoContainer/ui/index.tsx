import styles from "./styles.module.scss";
import { ReactNode } from "react";
import cn from "classnames";

type PropsType = {
  label: ReactNode;
  children?: ReactNode;
  className?: string;
};

export const InfoContainer = (props: PropsType) => {
  const { className, children, label } = props;
  const classesCompose = cn(styles.infoContainer, className);

  return (
    <div className={classesCompose}>
      <div className={styles.label}>{label}</div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};
