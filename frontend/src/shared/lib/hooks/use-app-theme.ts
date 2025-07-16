import { useTheme } from "next-themes";
import { E_THEMES } from "@shared/types/themes";

type UseAppThemeReturnType = {
  appTheme: E_THEMES;
  setAppTheme: (theme: E_THEMES) => void;
};

export const useAppTheme = (): UseAppThemeReturnType => {
  const { setTheme, theme } = useTheme();

  const setAppTheme = (theme: E_THEMES) => {
    setTheme(theme);
  };

  return {
    appTheme: theme as E_THEMES,
    setAppTheme,
  };
};
