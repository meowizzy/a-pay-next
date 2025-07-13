import styles from "./styles.module.scss";
import { ThemeSwitcher } from "@features/themeSwitcher";
import LogoIcon from "@svg/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <LogoIcon />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
