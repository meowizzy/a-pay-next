"use client";

import { Banner } from "@widgets/banner";
import { InfoContainer } from "@ui/infoContainer";
import { Button } from "@ui/button";
import ArrowLinkIcon from "@svg/arrowLink.svg?jsx";
import { useAppTranslations } from "@hooks/use-translation";

export const BannerSection = () => {
  const t = useAppTranslations();

  return (
    <Banner
      title={"Комплексное решение для приема платежей"}
      subtitle={
        "Подключите A-Pay Business и принимайте онлайн-платежи быстро, удобно и безопасно. Мы предлагаем зачисление средств на ваш кошелек в тот же день с условием моментального вывода средств, а также гибкие тарифы, адаптированные под потребности вашего бизнеса."
      }
    >
      <InfoContainer
        label={
          <>
            Мы свяжемся с вами в течение дня и предложим <br /> оптимальные
            решения для вашего бизнеса
          </>
        }
      >
        <Button theme={"secondary"} size={"lg"} suffixIcon={<ArrowLinkIcon />}>
          {t("buttons.leaveRequest")}
        </Button>
      </InfoContainer>
    </Banner>
  );
};
