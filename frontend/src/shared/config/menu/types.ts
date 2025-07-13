export const enum E_MENU_PATHS {
  HOME = "/",
  BUSINESS = "/business",
  ACQUIRING = "/acquiring",
  NEWS = "/news",
  DOCUMENTS = "/documents",
}

export type MenuItemType = {
  label: string;
  path: E_MENU_PATHS;
};
