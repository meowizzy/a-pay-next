import { ReactNode } from "react";

export const enum E_ROUTE_PATHS {
  HOME = "/",
  BUSINESS = "/business",
  ACQUIRING = "/acquiring",
  NEWS = "/news",
  DOCUMENTS = "/documents",
}

export type MenuTreeType = {
  label: ReactNode;
  path: string;
  flag?: string;
  children?: Array<MenuTreeType>;
};
