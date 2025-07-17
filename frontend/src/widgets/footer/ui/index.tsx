import styles from "./styles.module.scss";
import { Menu } from "@ui/menu";
import { useAppTranslations } from "@hooks/use-translation";
import { Logo } from "@ui/logo";
import { Copyright } from "@widgets/footer/ui/copyright";

export const Footer = () => {
  const t = useAppTranslations();

  return (
    <footer className={styles.footer}>
      <div className={"container"}>
        <div className={styles.footerTop}>
          <Logo />
        </div>
        <div className={styles.footerMiddle}>
          <Menu
            renderFlag={(flag) => `(${t(flag as any)})`}
            renderLabel={(label) => t(label as any)}
            rootListClassName={styles.menu}
            hasArrow={false}
          />
        </div>
        <div className={styles.footerBot}>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
