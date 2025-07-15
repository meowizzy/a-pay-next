import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

type PropsType = {
  children: ReactNode;
  className?: string;
};

export const SettingsGroup = (props: PropsType) => {
  const { className, ...restProps } = props;
  const classesCompose = cn(styles.settingsGroup, className);

  return <div className={classesCompose} {...restProps} />;
};
