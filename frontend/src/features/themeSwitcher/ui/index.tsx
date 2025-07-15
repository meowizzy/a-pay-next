"use client";

import { useTheme } from "next-themes";
import { useIsMounted } from "@shared/lib/hooks/use-is-mounted";
import { Dropdown } from "@ui/dropdown";
import { appThemes } from "@shared/const/themes";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>{theme && appThemes[theme]}</Dropdown.Trigger>
      <Dropdown.Content align={"center"}>
        {Object.entries(appThemes).map(([key, value]) => (
          <Dropdown.Item
            active={key === theme}
            key={key}
            onClick={() => setTheme(key)}
          >
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
};
