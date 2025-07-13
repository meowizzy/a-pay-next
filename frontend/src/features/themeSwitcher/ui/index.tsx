"use client";

import { Button, DropdownMenu } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const enum E_THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export const appThemes: Record<E_THEMES, string> = {
  [E_THEMES.LIGHT]: "Светлая",
  [E_THEMES.DARK]: "Темная",
};

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>{theme}</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {Object.entries(appThemes).map(([key, value]) => (
          <DropdownMenu.Item key={key} onClick={() => setTheme(key)}>
            {value}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
