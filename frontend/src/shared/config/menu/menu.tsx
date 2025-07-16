import { E_ROUTE_PATHS, MenuTreeType } from "@shared/config/menu/types";

export const menuItems: Array<MenuTreeType> = [
  {
    label: "О компании",
    path: "#",
    children: [
      {
        label: "Новости",
        path: E_ROUTE_PATHS.NEWS,
      },
      {
        label: "Документы",
        path: E_ROUTE_PATHS.DOCUMENTS,
      },
    ],
  },
  {
    label: "Частным лицам",
    path: "#",
    children: [
      {
        label: "Мой город",
        flag: "Скоро",
        path: "#",
      },
      {
        label: "Авиабилеты",
        flag: "Скоро",
        path: "#",
      },
      {
        label: "Страховой полис",
        flag: "Скоро",
        path: "#",
      },
    ],
  },
  {
    label: "Для бизнеса",
    path: "#",
    children: [
      {
        label: "A-Pay для IOS",
        path: "#",
      },
      {
        label: "A-Pay для Android",
        path: "#",
      },
    ],
  },
  {
    label: "Скачать",
    path: "#",
  },
];
