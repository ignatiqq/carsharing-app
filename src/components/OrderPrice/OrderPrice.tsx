import React from 'react';

import styles from "./OrderPrice.module.scss";
import { useTranslation } from 'react-i18next';

const OrderPrice = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.priceWrapper}>
            <span className={styles.price}>{t("Price")}</span> {t("From")} 8000 {t("To")} 12000 &#8381;
        </div>
    )
}

export default OrderPrice;