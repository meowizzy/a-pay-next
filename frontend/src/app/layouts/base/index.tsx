import { Header } from "@widgets/header";
import { ReactNode } from "react";
import { Providers } from "../../providers";
import { Footer } from "@widgets/footer";

type PropsType = {
  children: ReactNode;
};

export const BaseLayout = (props: PropsType) => {
  const { children } = props;

  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
};
