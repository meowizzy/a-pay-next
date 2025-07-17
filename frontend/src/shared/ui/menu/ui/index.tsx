import { menuItems } from "@shared/config/menu";
import cn from "classnames";
import { Link } from "@config/i18n/navigation";
import { MenuTreeType } from "@shared/config/menu/types";
import styles from "./styles.module.scss";
import ArrowDownIcon from "@svg/arrowDown.svg";
import { ReactNode } from "react";

type PropsType = {
  items?: Array<MenuTreeType>;
  className?: string;
  rootListClassName?: string;
  itemClassName?: string;
  labelClassName?: string;
  flagClassName?: string;
  type?: "main" | "default";
  hasArrow?: boolean;
  renderLabel?: (label: string) => ReactNode;
  renderFlag?: (flag: string) => ReactNode;
};

export const Menu = (props: PropsType) => {
  const {
    items = menuItems,
    className,
    rootListClassName = "",
    itemClassName = "",
    labelClassName = "",
    flagClassName = "",
    type = "default",
    hasArrow = true,
    renderLabel,
    renderFlag,
  } = props;

  const listClassesCompose = cn(styles.list);
  const itemClassesCompose = cn(styles.item, itemClassName);
  const labelClassesCompose = cn(styles.label, labelClassName);
  const flagClassesCompose = cn(styles.flag, flagClassName);

  const getMenu = (menu = items, level = 1) => {
    const isChild = level > 1;
    const isRoot = level === 1;
    const isTypeMain = type === "main";
    const isTypeMainDropdown = isTypeMain && isChild;
    const isTypeMainRoot = isTypeMain && isRoot;

    return (
      <ul
        className={cn(listClassesCompose, `menu-level-${level}`, {
          [styles.menuTypeMain]: isTypeMain && isRoot,
          [styles.menuTypeDefault]: !isTypeMain && isRoot,
          [`menu-root ${rootListClassName}`]: isRoot,
          ["menu-sub"]: isChild,
          ["flex-center-y flex-wrap"]: isTypeMainRoot,
          ["menu-dropdown"]: isTypeMainDropdown,
        })}
      >
        {menu.map((item, idx) => {
          const hasChild = !!item.children;

          return (
            <li
              key={idx}
              className={cn(itemClassesCompose, {
                ["flex-center-y"]: isTypeMain,
                ["has-children"]: !!item.children,
                [`menu-sub-item`]: isChild,
                ["menu-dropdown-item"]: isTypeMainDropdown,
              })}
            >
              <Link href={item.path}>
                <span className={labelClassesCompose}>
                  {renderLabel ? renderLabel(item.label) : item.label}
                </span>
                {item.flag && (
                  <span className={flagClassesCompose}>
                    {renderFlag ? renderFlag(item.flag) : item.flag}
                  </span>
                )}
              </Link>
              {hasArrow && hasChild && (
                <ArrowDownIcon className={styles.itemArrow} />
              )}
              {hasChild && getMenu(item.children, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={cn(className, styles.navigation, styles[type])}>
      {getMenu()}
    </nav>
  );
};
