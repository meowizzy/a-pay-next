import { E_ROUTE_PATHS, MenuTreeType } from "@shared/config/menu/types";

export const menuItems: Array<MenuTreeType> = [
  {
    label: "menu.about",
    path: "#",
    children: [
      {
        label: "menu.news",
        path: E_ROUTE_PATHS.NEWS,
      },
      {
        label: "menu.documents",
        path: E_ROUTE_PATHS.DOCUMENTS,
      },
    ],
  },
  {
    label: "menu.individuals",
    path: "#",
    children: [
      {
        label: "menu.myCity",
        flag: "titles.soon",
        path: "#",
      },
      {
        label: "menu.airlineTickets",
        flag: "titles.soon",
        path: "#",
      },
      {
        label: "menu.insurancePolicy",
        flag: "titles.soon",
        path: "#",
      },
    ],
  },
  {
    label: "menu.forBusiness",
    path: "#",
    children: [
      {
        label: "menu.aPayBusiness",
        path: E_ROUTE_PATHS.BUSINESS,
      },
      {
        label: "menu.aPayAcquiring",
        path: E_ROUTE_PATHS.ACQUIRING,
      },
    ],
  },
  {
    label: "menu.download",
    path: "#",
    children: [
      {
        label: "menu.aPayForIos",
        path: "#",
      },
      {
        label: "menu.aPayForAndroid",
        path: "#",
      },
    ],
  },
];
