import styles from "./styles.module.scss";
import { Logo } from "@ui/logo";
import { ThemeSwitcher } from "@features/themeSwitcher";
import { SettingsGroup } from "@ui/settingsGroup";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container flex-center-y"}>
        <Logo />
        <div className={styles.headerRight}>
          <SettingsGroup>
            <ThemeSwitcher />
          </SettingsGroup>
        </div>
      </div>
    </header>
  );
};
