import { defineRouting } from "next-intl/routing";
import { appLocales, E_LOCALES } from "@config/i18n/locales";

const routing = defineRouting({
  locales: appLocales,
  defaultLocale: E_LOCALES.RU,
  localePrefix: "as-needed",
});

export default routing;
