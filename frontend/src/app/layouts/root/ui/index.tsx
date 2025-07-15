import { ReactNode } from "react";
import { Gilroy } from "@config/localFonts/Gilroy";
import { ThemeProvider } from "next-themes";
import cn from "classnames";
import "@styles/index.scss";
import { Header } from "@widgets/header";

const RootLayout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <html lang="ru" className={cn(Gilroy.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"data-theme"}
          enableColorScheme={false}
          enableSystem
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
