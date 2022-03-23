import React from 'react';

import { Button } from "components";
import Footer from "./Footer/Footer";

import marker from "assets/images/marker.svg";
import styles from "./InfoSide.module.css";
import { useTranslation } from 'react-i18next';


const InfoSide: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerText}>Need For Drive</div>
          <div className={styles.cityBlockWrapper}>
            <img src={marker} alt="marker" />
            <span className={styles.cityBlockText}>Ульяновск</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.infoTextWrapper}>
            <div className={styles.infoTitleWrapper}>
              <h1 className={styles.infoTitleText}>{t("Carsharing")}</h1>
              <h2 className={styles.infoTitleCompany}>
                Need for drive
              </h2>
            </div>
            <p className={styles.infoParagraph}>
              {t("Per-minute car rental in your city")}
            </p>
          </div>
        </div>
        <Button
          className={styles.bookButton}
          apperance="primary"
          >
          {t("Reserve")}
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default InfoSide;