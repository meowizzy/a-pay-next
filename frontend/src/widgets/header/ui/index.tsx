import styles from "./styles.module.scss";
import { Logo } from "@ui/logo";
import { ThemeSwitcher } from "@features/themeSwitcher";
import { SettingsGroup } from "@ui/settingsGroup";
import { LanguageSwitcher } from "@features/languageSwitcher";
import { HeaderNavigation } from "@widgets/header/ui/navigation";
import cn from "classnames";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container flex-center-y"}>
        <Logo />
        <div className={cn(styles.headerRight, "flex-center-y")}>
          <HeaderNavigation />
          <SettingsGroup>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </SettingsGroup>
        </div>
      </div>
    </header>
  );
};
