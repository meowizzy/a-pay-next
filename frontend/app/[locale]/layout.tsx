import cn from "classnames";
import { Gilroy } from "@config/localFonts/Gilroy";
import { ReactNode } from "react";
import { BaseLayout } from "@layouts/base";
import "@styles/index.scss";
import { allSettled, fork, serialize } from "effector";
import { EffectorNext } from "@effector/next";
import { createQuery } from "@farfetched/core";
import {
  firstQuery,
  globalDataStarted,
  globalStartedFx,
} from "@shared/api/global";

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
        <EffectorNext>
          <BaseLayout>{children}</BaseLayout>
        </EffectorNext>
      </body>
    </html>
  );
};

export default RootLayout;
