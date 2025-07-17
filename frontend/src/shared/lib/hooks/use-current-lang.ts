import { usePathname, useRouter } from "@config/i18n/navigation";
import { useLocale } from "use-intl";
import { E_LOCALES } from "@config/i18n/locales";

export const useCurrentLang = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (lang: E_LOCALES) => {
    const isDefaultLang = lang === E_LOCALES.RU;
    let queryParams = {};

    if (isDefaultLang) {
      queryParams["lang"] = "ru";
    }

    router.replace(
      {
        pathname: pathname,
        query: queryParams,
      },
      {
        locale: lang,
      },
    );
    router.refresh();
  };

  return {
    changeLanguage,
    pathname,
    currentLang: locale,
  };
};
