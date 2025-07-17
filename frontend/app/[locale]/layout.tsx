import cn from "classnames";
import { Gilroy } from "@config/localFonts/Gilroy";
import { ReactNode } from "react";
import { BaseLayout } from "@layouts/base";
import "@styles/index.scss";

type PropsType = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async (props: PropsType) => {
  const { children, params } = props;
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={cn(Gilroy.variable)}
      suppressHydrationWarning
    >
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
};

export default RootLayout;
