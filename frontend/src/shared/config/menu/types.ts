export const enum E_ROUTE_PATHS {
  HOME = "/",
  BUSINESS = "/business",
  ACQUIRING = "/acquiring",
  NEWS = "/news",
  DOCUMENTS = "/documents",
}

export type MenuTreeType = {
  label: string;
  path: string;
  flag?: string;
  children?: Array<MenuTreeType>;
};
