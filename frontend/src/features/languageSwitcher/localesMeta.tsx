import { E_LOCALES } from "@config/i18n/locales";
import { ReactElement } from "react";
import RuFlagIcon from "@svg/ruFlag.svg";
import UzFlagIcon from "@svg/uzFlag.svg";
import EnFlagIcon from "@svg/enFlag.svg";

export type LocaleAnnotation = {
  annotation: string;
  flag: ReactElement;
};

export const localesMeta: Record<E_LOCALES, LocaleAnnotation> = {
  [E_LOCALES.RU]: {
    annotation: "Русский",
    flag: <RuFlagIcon />,
  },
  [E_LOCALES.UZ]: {
    annotation: "O'zbek",
    flag: <UzFlagIcon />,
  },
  [E_LOCALES.EN]: {
    annotation: "English",
    flag: <EnFlagIcon />,
  },
};
