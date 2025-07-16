import { DropdownMenu } from "radix-ui";
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import cn from "classnames";
import styles from "../styles.module.scss";
import { Button } from "@ui/button";
import ArrowDownIcon from "@svg/arrowDown.svg";
import { ReactNode } from "react";

type PropsType = DropdownMenuTriggerProps & {
  icon?: ReactNode;
};

export const DropdownTrigger = (props: PropsType) => {
  const { className, icon, children, ...restProps } = props;
  const classesCompose = cn(styles.trigger, className);

  return (
    <DropdownMenu.Trigger asChild className={classesCompose} {...restProps}>
      <Button
        theme={"clear"}
        prefixIcon={icon}
        suffixIcon={<ArrowDownIcon />}
        gap={"sm"}
      >
        {children}
      </Button>
    </DropdownMenu.Trigger>
  );
};
