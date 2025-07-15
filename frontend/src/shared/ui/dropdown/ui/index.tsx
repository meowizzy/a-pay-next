import { DropdownMenu } from "radix-ui";
import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { DropdownTrigger } from "@ui/dropdown/ui/trigger";
import { DropdownContent } from "@ui/dropdown/ui/content";
import { DropdownItem } from "@ui/dropdown/ui/Item";

const DropdownBase = (props: DropdownMenuProps) => {
  return <DropdownMenu.Root {...props} />;
};

export const Dropdown = Object.assign(DropdownBase, {
  Item: DropdownItem,
  Content: DropdownContent,
  Trigger: DropdownTrigger,
});
