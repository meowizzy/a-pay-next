import styles from "../styles.module.scss";
import { menuItems } from "@shared/config/menu";
import { Link } from "@config/i18n/navigation";
import cn from "classnames";

export const HeaderNavigation = () => {
  const getMenu = (items = menuItems, level = 1) => {
    return (
      <ul
        className={cn(
          styles.navigationList,
          `navigation-level-${level} flex-center-y flex-wrap`,
          {
            ["navigation-root"]: level === 0,
          },
        )}
      >
        {items.map((item, idx) => {
          return (
            <li
              key={idx}
              className={cn(styles.navigationItem, {
                [styles.hasChildren]: !!item.children,
              })}
            >
              <Link href={item.path}>
                <span className={styles.navigationLabel}>{item.label}</span>
                {item.flag && (
                  <span className={styles.navigationFlag}>{item.flag}</span>
                )}
              </Link>
              {!!item.children && getMenu(item.children, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return <nav className={styles.navigation}>{getMenu()}</nav>;
};
