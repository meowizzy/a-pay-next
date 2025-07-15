"use client";

import { Dropdown } from "@ui/dropdown";
import { appThemes } from "@shared/const/themes";

export const LanguageSwitcher = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>Русский</Dropdown.Trigger>
      <Dropdown.Content align={"center"}>
        {Object.entries(appThemes).map(([key, value]) => (
          <Dropdown.Item
            key={key}
            // active={key === theme}
            // onClick={() => setTheme(key)}
          >
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
};
