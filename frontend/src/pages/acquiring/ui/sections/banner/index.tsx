import { Banner } from "@widgets/banner";
import { InfoContainer } from "@ui/infoContainer";
import { Button } from "@ui/button";
import ArrowLinkIcon from "@svg/arrowLink.svg";

export const BannerSection = () => {
  return (
    <Banner
      title={
        "Интернет-эквайринг по индивидуальным комиссиям и с зачислением в тот же день"
      }
      subtitle={
        "Подключите Интернет-эквайринг и принимайте онлайн-платежи из любой точки мира 24/7. "
      }
    >
      <InfoContainer
        label={
          <>
            Мы свяжемся с вами в течение дня и <br />
            предложим оптимальные решения
          </>
        }
      >
        <Button theme={"secondary"} size={"lg"} prefixIcon={<ArrowLinkIcon />}>
          Подключить эквайринг
        </Button>
      </InfoContainer>
    </Banner>
  );
};
