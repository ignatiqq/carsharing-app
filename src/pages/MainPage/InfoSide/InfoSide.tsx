import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header } from "components";
import Footer from "./Footer/Footer";

import styles from "./InfoSide.module.scss";
import { useTranslation } from 'react-i18next';


const InfoSide: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
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
        <Link to="/order/location">
          <Button
            className={styles.bookButton}
            apperance="primary"
            >
            {t("Reserve")}
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default InfoSide;