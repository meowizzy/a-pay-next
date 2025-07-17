"use client";

import { useIsMounted } from "@shared/lib/hooks/use-is-mounted";
import { Dropdown } from "@ui/dropdown";
import { useAppTranslations } from "@shared/lib/hooks/use-translation";

import { E_THEMES } from "@shared/types/themes";
import { useAppTheme } from "@hooks/use-app-theme";

const themesAnnotations: Record<E_THEMES, string> = {
  [E_THEMES.SYSTEM]: "themes.system",
  [E_THEMES.LIGHT]: "themes.light",
  [E_THEMES.DARK]: "themes.dark",
};

export const ThemeSwitcher = () => {
  const { setAppTheme, appTheme } = useAppTheme();
  const t = useAppTranslations();

  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>
        {appTheme && t(themesAnnotations[appTheme] as any)}
      </Dropdown.Trigger>
      <Dropdown.Content align={"center"}>
        {Object.entries(themesAnnotations).map(
          ([theme, value]: [theme: E_THEMES, value: string]) => (
            <Dropdown.Item
              active={theme === appTheme}
              key={theme}
              onClick={() => setAppTheme(theme)}
            >
              {t(value as any)}
            </Dropdown.Item>
          ),
        )}
      </Dropdown.Content>
    </Dropdown>
  );
};
