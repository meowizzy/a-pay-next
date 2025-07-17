import { ReactNode } from "react";
import { Gilroy } from "@config/localFonts/Gilroy";
import { ThemeProvider } from "next-themes";
import cn from "classnames";
import "@styles/index.scss";
import { Header } from "@widgets/header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import routing from "@config/i18n/routing";
import { redirect } from "next/navigation";
import { E_THEMES } from "@shared/types/themes";
import NextTopLoader from "nextjs-toploader";

type PropsType = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async (props: PropsType) => {
  const { children, params } = props;
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    redirect("/");
  }

  return (
    <html
      lang={locale}
      className={cn(Gilroy.variable)}
      suppressHydrationWarning
    >
      <body>
        <NextTopLoader height={3} color="var(--color-primary)" />
        <NextIntlClientProvider>
          <ThemeProvider
            attribute={"data-theme"}
            enableColorScheme={false}
            themes={[E_THEMES.SYSTEM, E_THEMES.LIGHT, E_THEMES.DARK]}
            enableSystem
          >
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
