import { Header } from "@widgets/header";
import { ReactNode } from "react";
import { Providers } from "../../providers";
import { Footer } from "@widgets/footer";
import { allSettled, fork, serialize } from "effector";
import { firstQuery } from "@shared/api/global";
import { EffectorNext } from "@effector/next";

type PropsType = {
  children: ReactNode;
};

export const BaseLayout = async (props: PropsType) => {
  const { children } = props;

  const scope = fork();

  // await allSettled(firstQuery.start, {
  //   scope,
  //   params: { locale: "ru" },
  // });

  // const values = serialize(scope);

  console.log(scope, "VALUES");

  return (
    <Providers>
      <EffectorNext>
        <Header />
        {children}
        <Footer />
      </EffectorNext>
    </Providers>
  );
};
