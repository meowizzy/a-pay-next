import common from "@config/i18n/locales/ru/common.json";
import home from "@config/i18n/locales/ru/home.json";
import routing from "@config/i18n/routing";

type Locales = {
  common: typeof common;
  home: typeof home;
};

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Locales;
  }
}
