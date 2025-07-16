"use client";

import { Dropdown } from "@ui/dropdown";
import { useCurrentLang } from "@hooks/use-current-lang";
import { LocaleAnnotation, localesMeta } from "../localesMeta";
import { E_LOCALES } from "@config/i18n/locales";

export const LanguageSwitcher = () => {
  const { changeLanguage, currentLang } = useCurrentLang();

  return (
    <Dropdown>
      <Dropdown.Trigger icon={localesMeta[currentLang].flag} />
      <Dropdown.Content align={"center"}>
        {Object.entries(localesMeta).map(
          ([lang, meta]: [E_LOCALES, LocaleAnnotation]) => (
            <Dropdown.Item
              key={lang}
              active={lang === currentLang}
              onClick={() => changeLanguage(lang)}
            >
              {meta.annotation}
            </Dropdown.Item>
          ),
        )}
      </Dropdown.Content>
    </Dropdown>
  );
};
