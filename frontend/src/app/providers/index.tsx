import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { E_THEMES } from "@shared/types/themes";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const Providers = (props: PropsType) => {
  const { children } = props;

  return (
    <>
      <NextTopLoader height={3} color="var(--color-primary)" />
      <NextIntlClientProvider>
        <ThemeProvider
          attribute={"data-theme"}
          enableColorScheme={false}
          themes={[E_THEMES.SYSTEM, E_THEMES.LIGHT, E_THEMES.DARK]}
          enableSystem
        >
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
};
