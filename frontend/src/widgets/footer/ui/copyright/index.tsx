import { useAppTranslations } from "@hooks/use-translation";
import styles from "../styles.module.scss";

export const Copyright = () => {
  const t = useAppTranslations();

  return (
    <div className={styles.copyright}>
      <span>{t("copyright.license")}</span>
      <span>
        {t("copyright.year", {
          fromYear: "2021",
          toYear: new Date().getFullYear(),
        })}
      </span>
    </div>
  );
};
