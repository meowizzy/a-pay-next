import styles from "./styles.module.scss";
import { Logo } from "@ui/logo";
import { ThemeSwitcher } from "@features/themeSwitcher";
import { SettingsGroup } from "@ui/settingsGroup";
import { LanguageSwitcher } from "@features/languageSwitcher";
import cn from "classnames";
import { Menu } from "@ui/menu/ui";
import { useAppTranslations } from "@hooks/use-translation";

export const Header = () => {
  const t = useAppTranslations();

  return (
    <header className={styles.header}>
      <div className={"container flex-center-y"}>
        <Logo />
        <div className={cn(styles.headerRight, "flex-center-y")}>
          <Menu
            type={"main"}
            className={styles.navigation}
            renderLabel={(label) => t(label as any)}
            renderFlag={(flag) => t(flag as any)}
          />
          <SettingsGroup>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </SettingsGroup>
        </div>
      </div>
    </header>
  );
};
