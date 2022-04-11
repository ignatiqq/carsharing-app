import React from 'react';

import styles from "./OrderPrice.module.css";
import { useTranslation } from 'react-i18next';

const OrderPrice = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.priceWrapper}>
            <span className={styles.price}>{t("Price")}</span> от 8000 до 12000 &#8381;
        </div>
    )
}

export default OrderPrice;