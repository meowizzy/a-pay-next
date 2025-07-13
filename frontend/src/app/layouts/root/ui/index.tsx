import { ReactNode } from "react";
import { Gilroy } from "@config/localFonts/Gilroy";
import { ThemeProvider } from "next-themes";
import cn from "classnames";
import { Theme } from "@radix-ui/themes";
import "@styles/index.scss";
import { appThemes, E_THEMES } from "@features/themeSwitcher/ui";
import { Header } from "@widgets/header";

const RootLayout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <html
      lang="ru"
      className={cn(Gilroy.className, Gilroy.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          defaultTheme={E_THEMES.LIGHT}
          attribute={"data-theme"}
          themes={Object.keys(appThemes)}
        >
          <Theme>
            <Header />
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
