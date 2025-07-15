import { DropdownMenu } from "radix-ui";
import { DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import cn from "classnames";
import styles from "../styles.module.scss";

type PropsType = {
  active?: boolean;
} & DropdownMenuItemProps;

export const DropdownItem = (props: PropsType) => {
  const { className, active, ...restProps } = props;
  const classesCompose = cn(styles.item, className, {
    [styles.itemActive]: !!active,
  });

  return <DropdownMenu.Item className={classesCompose} {...restProps} />;
};
