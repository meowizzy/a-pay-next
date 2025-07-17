import { DropdownMenu } from "radix-ui";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import cn from "classnames";
import styles from "../styles.module.scss";

export const DropdownContent = (props: DropdownMenuContentProps) => {
  const { className, ...restProps } = props;
  const classesCompose = cn(styles.content, className, "menu-dropdown");

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className={classesCompose} {...restProps} />
    </DropdownMenu.Portal>
  );
};
