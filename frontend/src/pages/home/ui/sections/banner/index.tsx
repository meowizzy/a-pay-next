import { Banner } from "@widgets/banner";
import { InfoContainer } from "@ui/infoContainer";
import { Button } from "@ui/button";
import AppStoreIcon from "@svg/appStore.svg?jsx";
import PlayMarketIcon from "@svg/playMarket.svg?jsx";
import styles from "./styles.module.scss";

export const BannerSection = () => {
  return (
    <Banner
      title={"Ваше личное финансовое пространство"}
      subtitle={
        "A-Pay — это современный мобильный кошелек, созданный для удобных, быстрых и безопасных платежей. Он объединяет все финансовые операции в одном приложении, позволяя вам легко управлять своими деньгами."
      }
    >
      <InfoContainer
        label={
          <>
            Скачайте приложение с <br /> указанных платформ
          </>
        }
      >
        <div className={styles.buttonsGroup}>
          <Button theme={"secondary"} size={"lg"} prefixIcon={<AppStoreIcon />}>
            App Store
          </Button>
          <Button
            theme={"secondary"}
            size={"lg"}
            prefixIcon={<PlayMarketIcon />}
          >
            Play Market
          </Button>
        </div>
      </InfoContainer>
    </Banner>
  );
};
